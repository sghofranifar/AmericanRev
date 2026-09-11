/* ============================================================
   The American Revolution — Grade 8 GSIS
   Render engine + interactivity. Reads everything from UNIT
   (content.js) and builds the page; handles navigation, the
   unlock modal, teacher mode, hints, quizzes, the German-support
   toggle, autosave, export and completion badges.
   ============================================================ */

(function () {
  'use strict';

  var LS_PREFIX = 'arev:';
  var html = document.documentElement;

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function lsGet(key, fallback) {
    try { var v = localStorage.getItem(LS_PREFIX + key); return v === null ? fallback : v; }
    catch (e) { return fallback; }
  }
  function lsSet(key, value) {
    try { localStorage.setItem(LS_PREFIX + key, value); } catch (e) { /* storage unavailable — degrade silently */ }
  }
  function lsGetJSON(key, fallback) {
    var raw = lsGet(key, null);
    if (raw === null) return fallback;
    try { return JSON.parse(raw); } catch (e) { return fallback; }
  }
  function lsSetJSON(key, value) { lsSet(key, JSON.stringify(value)); }

  function moduleByNum(n) {
    for (var i = 0; i < UNIT.modules.length; i++) if (UNIT.modules[i].num === n) return UNIT.modules[i];
    return null;
  }

  // ── Small inline SVG diagrams (kept out of content.js to keep content data plain) ──
  var SVG = {
    heroMap: function () {
      return '<svg viewBox="0 0 240 300" fill="none" role="img" aria-label="Simplified outline map of the thirteen colonies">' +
        '<path d="M60 20 L150 15 L165 55 L190 60 L185 110 L205 130 L195 175 L170 190 L165 230 L120 260 L90 245 L70 270 L45 250 L55 210 L35 190 L45 150 L30 120 L50 90 L45 55 Z" stroke="var(--verdigris)" stroke-width="1.6" fill="var(--verdigris-soft)"/>' +
        '<g stroke="var(--oxide)" stroke-width="1" opacity="0.85">' +
        '<line x1="70" y1="60" x2="70" y2="235"/><line x1="95" y1="55" x2="95" y2="248"/>' +
        '<line x1="120" y1="50" x2="120" y2="255"/><line x1="145" y1="48" x2="145" y2="245"/>' +
        '<line x1="168" y1="55" x2="168" y2="200"/></g>' +
        '<circle cx="107" cy="150" r="3.2" fill="var(--oxide)"/>' +
        '<text x="115" y="153" font-family="IBM Plex Mono" font-size="9" fill="var(--ink-mute)">Philadelphia</text>' +
        '</svg>';
    },
    warMap: function () {
      var pts = [
        { x: 118, y: 46, label: '1775 · Lexington & Concord' },
        { x: 128, y: 58, label: '1775 · Bunker Hill' },
        { x: 96, y: 92, label: '1777 · Saratoga' },
        { x: 108, y: 140, label: '1777–78 · Valley Forge' },
        { x: 150, y: 235, label: '1781 · Yorktown' }
      ];
      var markers = pts.map(function (p, i) {
        return '<g><circle cx="' + p.x + '" cy="' + p.y + '" r="5" fill="var(--oxide)" stroke="var(--paper-raised)" stroke-width="1.5"/>' +
          '<text x="' + (p.x + 10) + '" y="' + (p.y + 4) + '" font-family="IBM Plex Mono" font-size="10" fill="var(--ink-soft)">' + (i + 1) + '. ' + esc(p.label) + '</text></g>';
      }).join('');
      return '<svg viewBox="0 0 340 280" fill="none" role="img" aria-label="Map of five key locations of the Revolutionary War" style="max-width:520px;">' +
        '<path d="M70 15 L150 10 L165 45 L195 50 L190 100 L215 125 L205 175 L175 195 L170 235 L120 265 L90 250 L65 275 L40 250 L50 210 L30 190 L40 145 L20 115 L45 80 L40 40 Z" stroke="var(--hairline-strong)" stroke-width="1.4" fill="var(--paper-sunken)"/>' +
        markers + '</svg>';
    },
    branchesDiagram: function () {
      return '<svg viewBox="0 0 620 300" fill="none" role="img" aria-label="Diagram of the three branches of United States government and how they check each other" style="max-width:600px;">' +
        '<defs><marker id="arrHead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink-mute)"/></marker></defs>' +
        '<rect x="30" y="30" width="170" height="70" rx="4" fill="var(--paper-raised)" stroke="var(--verdigris)" stroke-width="1.5"/>' +
        '<text x="115" y="58" text-anchor="middle" font-family="IBM Plex Sans" font-size="14" font-weight="600" fill="var(--ink)">Congress</text>' +
        '<text x="115" y="76" text-anchor="middle" font-family="IBM Plex Mono" font-size="10" fill="var(--ink-mute)">legislative · makes laws</text>' +

        '<rect x="225" y="30" width="170" height="70" rx="4" fill="var(--paper-raised)" stroke="var(--oxide)" stroke-width="1.5"/>' +
        '<text x="310" y="58" text-anchor="middle" font-family="IBM Plex Sans" font-size="14" font-weight="600" fill="var(--ink)">President</text>' +
        '<text x="310" y="76" text-anchor="middle" font-family="IBM Plex Mono" font-size="10" fill="var(--ink-mute)">executive · enforces laws</text>' +

        '<rect x="420" y="30" width="170" height="70" rx="4" fill="var(--paper-raised)" stroke="var(--brass)" stroke-width="1.5"/>' +
        '<text x="505" y="58" text-anchor="middle" font-family="IBM Plex Sans" font-size="14" font-weight="600" fill="var(--ink)">Supreme Court</text>' +
        '<text x="505" y="76" text-anchor="middle" font-family="IBM Plex Mono" font-size="10" fill="var(--ink-mute)">judicial · interprets laws</text>' +

        '<line x1="200" y1="65" x2="222" y2="65" stroke="var(--ink-mute)" stroke-width="1.3" marker-end="url(#arrHead)"/>' +
        '<text x="211" y="55" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="var(--ink-mute)">veto</text>' +
        '<line x1="225" y1="90" x2="203" y2="90" stroke="var(--ink-mute)" stroke-width="1.3" marker-end="url(#arrHead)"/>' +
        '<text x="214" y="105" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="var(--ink-mute)">override</text>' +

        '<line x1="395" y1="65" x2="417" y2="65" stroke="var(--ink-mute)" stroke-width="1.3" marker-end="url(#arrHead)"/>' +
        '<text x="406" y="55" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="var(--ink-mute)">appoints</text>' +
        '<line x1="420" y1="90" x2="398" y2="90" stroke="var(--ink-mute)" stroke-width="1.3" marker-end="url(#arrHead)"/>' +
        '<text x="409" y="105" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="var(--ink-mute)">review</text>' +

        '<path d="M505 30 C505 -10 115 -10 115 30" stroke="var(--ink-mute)" stroke-width="1.2" fill="none" marker-end="url(#arrHead)" stroke-dasharray="3,3"/>' +
        '<text x="310" y="12" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="var(--ink-mute)">judicial review of laws</text>' +

        '<rect x="220" y="180" width="180" height="60" rx="4" fill="var(--paper-sunken)" stroke="var(--hairline-strong)" stroke-width="1" stroke-dasharray="3,3"/>' +
        '<text x="310" y="205" text-anchor="middle" font-family="IBM Plex Sans" font-size="13" font-weight="600" fill="var(--ink-soft)">We the People</text>' +
        '<text x="310" y="222" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="var(--ink-mute)">elect Congress &amp; President</text>' +
        '<line x1="115" y1="180" x2="220" y2="150" stroke="var(--verdigris)" stroke-width="1.2" marker-end="url(#arrHead)"/>' +
        '<line x1="310" y1="180" x2="310" y2="100" stroke="var(--oxide)" stroke-width="1.2" marker-end="url(#arrHead)"/>' +
        '</svg>';
    }
  };

  // ── State ────────────────────────────────────────────────
  var state = {
    unlocked: lsGetJSON('unlocked', {}),
    teacherMode: false,
    showDe: lsGet('showDe', '0') === '1',
    modalMode: null,
    pendingModule: null
  };

  // ============================================================
  // RENDER: HOME PAGE
  // ============================================================
  function isDone(num) { return lsGet('m' + num + ':reflectionDone', '0') === '1'; }

  function progressCount() {
    var done = 0;
    UNIT.modules.forEach(function (m) { if (isDone(m.num)) done++; });
    return done;
  }

  function renderHome() {
    var grid = $('modulesGrid');
    grid.innerHTML = UNIT.modules.map(function (m) {
      var unlocked = !!state.unlocked[m.num] || state.teacherMode;
      var done = isDone(m.num);
      var mark = done ? '<span class="state-mark done" title="Completed">✓</span>' :
        (unlocked ? '<span class="state-mark unlocked" title="Unlocked">●</span>' : '<span class="state-mark locked" title="Locked">⚿</span>');
      var numStr = m.num < 10 ? '0' + m.num : String(m.num);
      return '<button type="button" class="module-card' + (unlocked ? '' : ' is-locked') + '" data-module="' + m.num + '">' +
        '<div class="module-top"><span class="module-num">' + numStr + '</span>' + mark + '</div>' +
        '<div class="module-title">' + esc(m.title) + '</div>' +
        '<p class="module-tease">' + esc(m.tease_en) + '</p>' +
        '<div class="module-foot"><span>Unit ' + m.num + ' / ' + UNIT.modules.length + '</span><span>' +
        (done ? 'Completed' : (unlocked ? 'Open' : 'Code needed')) + '</span></div>' +
        '</button>';
    }).join('');

    var done = progressCount();
    var pct = Math.round((done / UNIT.modules.length) * 100);
    $('progressBarFill').style.width = pct + '%';
    $('progressCount').textContent = done + ' / ' + UNIT.modules.length + ' units completed';
    $('badgeRow').innerHTML = UNIT.modules.map(function (m) {
      return '<span class="badge-seal' + (isDone(m.num) ? ' earned' : '') + '" title="Unit ' + m.num + (isDone(m.num) ? ' — completed' : ' — not yet completed') + '">' + m.num + '</span>';
    }).join('');
  }

  // ============================================================
  // RENDER: MODULE PAGE
  // ============================================================
  function renderSourceMedia(src) {
    if (src.svgKey && SVG[src.svgKey]) {
      return '<div class="source-media">' + SVG[src.svgKey]() + '</div>';
    }
    if (src.image) {
      var imgId = src.id + '-img';
      var phId = src.id + '-ph';
      return '<div class="source-media">' +
        '<img id="' + imgId + '" src="' + esc(src.image.url) + '" alt="' + esc(src.image.alt) + '" loading="lazy" ' +
        'onerror="document.getElementById(\'' + imgId + '\').hidden=true;document.getElementById(\'' + phId + '\').hidden=false;">' +
        '<div class="cite">' + esc(src.citation) + '</div>' +
        '<div class="image-placeholder" id="' + phId + '" hidden><span class="icon">☙</span><span class="cite">Image unavailable — see citation above</span></div>' +
        '</div>';
    }
    return '';
  }

  function renderTable(table) {
    var head = '<tr>' + table.head.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') + '</tr>';
    var rows = table.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('');
    return '<div class="table-scroll"><table class="stat-table">' + head + rows + '</table></div>';
  }

  function typeClass(t) { return t === 'image' ? 'type-image' : (t === 'data' ? 'type-data' : (t === 'voice' ? 'type-voice' : '')); }

  function renderVideo(video) {
    if (!video) return '';
    var wl = '';
    if (video.whileListening && video.whileListening.length) {
      wl = '<div class="while-listening"><div class="method-box-label">While you watch</div><ol>' +
        video.whileListening.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') +
        '</ol></div>';
    }
    return '<div class="video-embed-wrap">' +
      '<div class="quelle-meta">▶ Watch · ' + esc(video.citation || 'Video') + '</div>' +
      '<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(video.videoId) +
      '" title="' + esc(video.title) + '" loading="lazy" ' +
      'allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>' +
      '<div class="quelle-source">' + esc(video.title) + '</div>' +
      wl +
      '</div>';
  }

  function renderMethodBox(method) {
    if (!method) return '';
    return '<div class="method-box">' +
      '<div class="method-box-label">Method</div>' +
      '<h4>' + esc(method.title) + '</h4>' +
      '<ol>' + method.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>' +
      (method.de ? '<div class="de-note"><strong>Deutsche Hilfe</strong>' + esc(method.de) + '</div>' : '') +
      '</div>';
  }

  function renderSource(src) {
    var media = renderSourceMedia(src);
    var body = '';
    if (src.text_en) body += src.text_en.map(function (p) { return '<p>' + p + '</p>'; }).join('');
    if (src.table) body += renderTable(src.table);
    return '<div class="quelle ' + typeClass(src.type) + '">' +
      '<div class="quelle-meta">' + esc(src.label) + '</div>' +
      '<div class="quelle-title">' + esc(src.title) + '</div>' +
      '<div class="quelle-source">' + esc(src.citation) + '</div>' +
      media +
      '<div class="quelle-text">' + body + '</div>' +
      '</div>' + renderVideo(src.video) + renderMethodBox(src.method);
  }

  var NIVEAU_LABEL = { 1: '★ Basic', 2: '★★ Standard', 3: '★★★ Challenge' };

  function renderTasks(m) {
    return m.tasks.map(function (t, i) {
      var hid = 'hint-m' + m.num + '-' + (i + 1);
      return '<div class="aufgabe">' +
        '<div class="aufgabe-head"><span class="aufgabe-num">Task ' + (i + 1) + '</span><span class="niveau niveau-' + t.level + '">' + NIVEAU_LABEL[t.level] + '</span></div>' +
        '<div class="aufgabe-text">' + t.prompt_en + '</div>' +
        '<div class="aufgabe-btns"><button type="button" class="ghost-btn hint" data-hint="' + hid + '">Hint</button></div>' +
        '<div class="hint-panel" id="' + hid + '"><strong>Tip</strong>' + t.hint_en + '</div>' +
        '<div class="solution"><strong>Model answer (teacher mode)</strong>' + t.solution_en + '</div>' +
        '</div>';
    }).join('');
  }

  function renderQuiz(m) {
    var qid = 'quiz-m' + m.num;
    var qs = m.quiz.map(function (q, i) {
      var name = qid + '-q' + i;
      var opts = q.options.map(function (o, j) {
        return '<label><input type="radio" name="' + name + '" value="' + j + '"><span>' + esc(o) + '</span></label>';
      }).join('');
      return '<div class="quiz-q" data-correct="' + q.correct + '"><p>' + (i + 1) + '. ' + esc(q.q_en) + '</p><div class="quiz-opts">' + opts + '</div></div>';
    }).join('');
    return '<div class="quiz" id="' + qid + '">' +
      '<div class="quiz-label">Self-check</div>' +
      '<h3>Did you follow this unit?</h3>' + qs +
      '<button type="button" class="primary-btn" data-quiz="' + qid + '" data-quiz-module="' + m.num + '">Check answers</button>' +
      '<div class="quiz-result" id="' + qid + '-result"></div>' +
      '</div>';
  }

  function renderReflectionOrEssay(m) {
    if (m.finalEssay) {
      var fid = 'essay-m' + m.num;
      return '<div class="essay-box" id="essayBox">' +
        '<div class="reflexion-label">Final synthesis</div>' +
        '<h3>' + m.finalEssay.prompt_en + '</h3>' +
        '<div class="essay-structure"><strong style="font-family:var(--mono);font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:var(--verdigris-ink);">Structure</strong>' +
        '<ol>' + m.finalEssay.structure.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol></div>' +
        '<div class="de-note"><strong>Deutsche Hilfe</strong>' + esc(m.finalEssay.de) + '</div>' +
        '<textarea id="' + fid + '" placeholder="Write your response here — it saves automatically as you type…"></textarea>' +
        '<div class="save-status"><span><span class="dot"></span><span id="' + fid + '-status">Not started</span></span><span id="' + fid + '-words">0 words</span></div>' +
        '<div class="badge-earn" id="badge-m' + m.num + '"><span class="seal">🏅</span><span>Unit ' + m.num + ' complete — nice work. Use <strong>Export</strong> above to save or print everything you\'ve written.</span></div>' +
        '</div>';
    }
    var rid = 'reflect-m' + m.num;
    return '<div class="reflexion">' +
      '<div class="reflexion-label">Reflection</div>' +
      '<h3>' + m.reflection.prompt_en + '</h3>' +
      '<div class="de-note"><strong>Deutsche Hilfe</strong>' + esc(m.reflection.de) + '</div>' +
      '<textarea id="' + rid + '" placeholder="Write your answer here — it saves automatically as you type…"></textarea>' +
      '<div class="save-status"><span><span class="dot"></span><span id="' + rid + '-status">Not started</span></span><span id="' + rid + '-words">0 words</span></div>' +
      '<div class="badge-earn" id="badge-m' + m.num + '"><span class="seal">🏅</span><span>Unit ' + m.num + ' complete — nice work.</span></div>' +
      '</div>';
  }

  function renderVocab(m) {
    return '<div class="vocab-grid">' + m.vocab.map(function (v) {
      return '<div class="vocab-item"><span class="vocab-en">' + esc(v.en) + '</span> — <span class="vocab-de">' + esc(v.de) + '</span>' +
        '<span class="vocab-def">' + esc(v.def) + '</span></div>';
    }).join('') + '</div>';
  }

  function ensureModulePage(m) {
    var pageId = 'page-' + m.num;
    if ($(pageId)) return;
    var main = document.createElement('main');
    main.className = 'page';
    main.id = pageId;

    var sourcesHtml = m.sources.map(renderSource).join('');
    var prev = moduleByNum(m.num - 1);
    var next = moduleByNum(m.num + 1);

    main.innerHTML =
      '<header class="module-header">' +
      '<div class="module-header-meta"><span>Unit ' + m.num + ' / ' + UNIT.modules.length + '</span><span>Code: ' + esc(m.code) + '</span></div>' +
      '<h1 class="module-page-title">' + esc(m.title) + '</h1>' +
      '</header>' +
      '<div class="teilfrage"><div class="teilfrage-label">Leading question</div><div class="teilfrage-text">' + m.teilfrage_en + '</div>' +
      '<div class="de-note"><strong>Deutsche Hilfe</strong>' + esc(m.teilfrage_de) + '</div></div>' +

      '<section class="module-section"><h2>Introduction</h2>' +
      m.intro_en.map(function (p) { return '<p>' + p + '</p>'; }).join('') +
      '<div class="de-note"><strong>Deutsche Hilfe · Zusammenfassung</strong>' + esc(m.intro_de) + '</div>' +
      renderVocab(m) +
      renderVideo(m.introVideo) +
      '</section>' +

      '<section class="module-section">' + sourcesHtml + '</section>' +

      '<section class="module-section"><div class="section-label">Tasks</div>' + renderTasks(m) + '</section>' +

      '<section class="module-section">' + renderQuiz(m) + '</section>' +

      '<section class="module-section">' + renderReflectionOrEssay(m) + '</section>' +

      '<nav class="module-nav">' +
      (prev ? '<button type="button" class="nav-btn" data-nav="' + prev.num + '">← Unit ' + prev.num + '</button>' : '<button type="button" class="nav-btn" data-nav="home">← Overview</button>') +
      (next ? '<button type="button" class="nav-btn primary" data-nav="' + next.num + '">Unit ' + next.num + ' →</button>' : '<button type="button" class="nav-btn primary" data-nav="home">Overview →</button>') +
      '</nav>';

    $('mainRoot').appendChild(main);
    wireModuleInputs(m);
  }

  // ============================================================
  // AUTOSAVE for reflection / essay textareas
  // ============================================================
  function wireModuleInputs(m) {
    var isEssay = !!m.finalEssay;
    var id = isEssay ? 'essay-m' + m.num : 'reflect-m' + m.num;
    var ta = $(id);
    if (!ta) return;
    var statusEl = $(id + '-status');
    var wordsEl = $(id + '-words');
    var saved = lsGet('m' + m.num + ':' + (isEssay ? 'essay' : 'reflection'), '');
    ta.value = saved;
    updateWordUi();

    var timer = null;
    ta.addEventListener('input', function () {
      statusEl.textContent = 'Typing…';
      clearTimeout(timer);
      timer = setTimeout(function () {
        lsSet('m' + m.num + ':' + (isEssay ? 'essay' : 'reflection'), ta.value);
        statusEl.textContent = 'Saved to this device · ' + new Date().toLocaleTimeString();
        updateWordUi();
        checkModuleComplete(m);
      }, 500);
    });

    function updateWordUi() {
      var words = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      wordsEl.textContent = words + ' word' + (words === 1 ? '' : 's') + (isEssay && m.finalEssay.minWords ? ' (aim for ' + m.finalEssay.minWords + '+)' : '');
      if (saved) statusEl.textContent = 'Saved to this device';
    }
  }

  function checkModuleComplete(m) {
    var isEssay = !!m.finalEssay;
    var text = lsGet('m' + m.num + ':' + (isEssay ? 'essay' : 'reflection'), '');
    var quizChecked = lsGet('m' + m.num + ':quizChecked', '0') === '1';
    var minWords = isEssay ? (m.finalEssay.minWords || 150) : 15;
    var wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    var done = quizChecked && wordCount >= minWords;
    var wasDone = isDone(m.num);
    lsSet('m' + m.num + ':reflectionDone', done ? '1' : '0');
    var badge = $('badge-m' + m.num);
    if (badge) badge.classList.toggle('show', done);
    if (done && !wasDone) renderHome(); // keep home progress in sync if visited later
  }

  // ============================================================
  // NAVIGATION
  // ============================================================
  function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) pages[i].classList.remove('active');
    var target = $(pageId);
    if (target) target.classList.add('active');
    window.scrollTo(0, 0);
    updateScrollProgress();
  }

  function goHome() {
    showPage('page-home');
    $('crumbPath').textContent = UNIT.meta;
    $('homeBtn').hidden = true;
    renderHome();
  }

  function openModule(num) {
    var m = moduleByNum(num);
    if (!m) return;
    if (!state.unlocked[num] && !state.teacherMode) { openModal('module', num); return; }
    ensureModulePage(m);
    showPage('page-' + num);
    $('homeBtn').hidden = false;
    $('crumbPath').textContent = 'Unit ' + num + ' · ' + m.title;
  }

  // ============================================================
  // MODAL (unlock code / teacher mode)
  // ============================================================
  function openModal(mode, moduleNum) {
    state.modalMode = mode; state.pendingModule = moduleNum || null;
    if (mode === 'module') {
      var m = moduleByNum(moduleNum);
      $('modalTitle').textContent = 'Unlock Unit ' + moduleNum;
      $('modalSub').innerHTML = 'Enter the code your teacher gave you.<br><em>Gib den Code ein, den deine Lehrkraft genannt hat.</em>';
    } else {
      $('modalTitle').textContent = 'Teacher mode';
      $('modalSub').innerHTML = 'Enter the master code to unlock every unit and reveal model answers.<br><em>Master-Code eingeben, um alles freizuschalten.</em>';
    }
    $('modalInput').value = '';
    $('modalError').classList.remove('show');
    $('modalOverlay').classList.add('active');
    setTimeout(function () { $('modalInput').focus(); }, 60);
  }
  function closeModal() { $('modalOverlay').classList.remove('active'); state.modalMode = null; state.pendingModule = null; }

  function submitModal() {
    var input = $('modalInput').value.trim().toUpperCase();
    var isMaster = input === UNIT.masterCode.toUpperCase();

    if (state.modalMode === 'teacher') {
      if (isMaster) { enableTeacherMode(); closeModal(); renderHome(); }
      else $('modalError').classList.add('show');
      return;
    }
    if (state.modalMode === 'module' && state.pendingModule !== null) {
      var m = moduleByNum(state.pendingModule);
      if (!m) { closeModal(); return; }
      if (input === m.code.toUpperCase() || isMaster) {
        state.unlocked[m.num] = true;
        lsSetJSON('unlocked', state.unlocked);
        if (isMaster) enableTeacherMode();
        var num = m.num;
        closeModal(); renderHome(); openModule(num);
      } else {
        $('modalError').classList.add('show');
      }
    }
  }

  function enableTeacherMode() {
    state.teacherMode = true;
    html.classList.add('teacher-mode');
    $('teacherBtn').setAttribute('aria-pressed', 'true');
    $('teacherBtn').innerHTML = '✓ Teacher mode';
  }
  function disableTeacherMode() {
    state.teacherMode = false;
    html.classList.remove('teacher-mode');
    $('teacherBtn').setAttribute('aria-pressed', 'false');
    $('teacherBtn').innerHTML = '⚿ Teacher';
    renderHome();
  }
  function toggleTeacher() { state.teacherMode ? disableTeacherMode() : openModal('teacher'); }

  // ============================================================
  // GERMAN SUPPORT TOGGLE
  // ============================================================
  function setDe(on) {
    state.showDe = on;
    html.classList.toggle('show-de', on);
    $('deBtn').setAttribute('aria-pressed', String(on));
    lsSet('showDe', on ? '1' : '0');
  }

  // ============================================================
  // QUIZ CHECKER
  // ============================================================
  function checkQuiz(quizId, moduleNum) {
    var quiz = $(quizId);
    if (!quiz) return;
    var qs = quiz.querySelectorAll('.quiz-q');
    var correctCount = 0;
    qs.forEach(function (q) {
      var correct = parseInt(q.getAttribute('data-correct'), 10);
      var labels = q.querySelectorAll('.quiz-opts label');
      var inputs = q.querySelectorAll('input[type="radio"]');
      labels.forEach(function (l) { l.classList.remove('correct', 'wrong'); });
      var chosen = -1;
      inputs.forEach(function (inp, i) { if (inp.checked) chosen = i; });
      if (chosen === -1) return;
      if (chosen === correct) { labels[chosen].classList.add('correct'); correctCount++; }
      else { labels[chosen].classList.add('wrong'); labels[correct].classList.add('correct'); }
    });
    var resultEl = $(quizId + '-result');
    resultEl.textContent = 'Score: ' + correctCount + ' / ' + qs.length;
    resultEl.classList.add('show');
    lsSet('m' + moduleNum + ':quizChecked', '1');
    lsSet('m' + moduleNum + ':quizScore', correctCount + '/' + qs.length);
    var m = moduleByNum(moduleNum);
    if (m) checkModuleComplete(m);
  }

  // ============================================================
  // EXPORT
  // ============================================================
  function buildExportText() {
    var name = lsGet('studentName', '') || '(name not entered)';
    var lines = [];
    lines.push('THE AMERICAN REVOLUTION — MY NOTES');
    lines.push('Student: ' + name);
    lines.push('Date exported: ' + new Date().toLocaleString());
    lines.push('Leitfrage: ' + UNIT.leitfrage.en);
    lines.push('='.repeat(60));
    UNIT.modules.forEach(function (m) {
      var isEssay = !!m.finalEssay;
      var text = lsGet('m' + m.num + ':' + (isEssay ? 'essay' : 'reflection'), '');
      var score = lsGet('m' + m.num + ':quizScore', '');
      lines.push('');
      lines.push('UNIT ' + m.num + ' — ' + m.title.toUpperCase());
      lines.push('Leading question: ' + m.teilfrage_en);
      if (score) lines.push('Self-check score: ' + score);
      lines.push(isEssay ? 'Final essay:' : 'Reflection:');
      lines.push(text ? text : '(not yet written)');
      lines.push('-'.repeat(60));
    });
    return lines.join('\n');
  }

  function exportNotes() {
    var text = buildExportText();
    var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    var name = (lsGet('studentName', '') || 'my').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    a.href = url;
    a.download = (name || 'my') + '-american-revolution-notes.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function promptNameIfNeeded() {
    var name = lsGet('studentName', '');
    if (name) return name;
    var entered = window.prompt('Your name (for your exported notes):', '');
    if (entered) lsSet('studentName', entered.trim());
    return entered || '';
  }

  // ============================================================
  // EVENT DELEGATION
  // ============================================================
  function handleClick(e) {
    var t = e.target;
    while (t && t !== document.body) {
      if (t.id === 'homeBtn') { goHome(); return; }
      if (t.id === 'teacherBtn') { toggleTeacher(); return; }
      if (t.id === 'deBtn') { setDe(!state.showDe); return; }
      if (t.id === 'exportBtn') { promptNameIfNeeded(); exportNotes(); return; }
      if (t.id === 'printBtn') { window.print(); return; }
      if (t.id === 'modalSubmit') { submitModal(); return; }
      if (t.id === 'modalCancel') { closeModal(); return; }
      if (t.id === 'modalOverlay') { closeModal(); return; }
      if (t.hasAttribute && t.hasAttribute('data-module')) { openModule(parseInt(t.getAttribute('data-module'), 10)); return; }
      if (t.hasAttribute && t.hasAttribute('data-nav')) {
        var nav = t.getAttribute('data-nav');
        if (nav === 'home') goHome(); else openModule(parseInt(nav, 10));
        return;
      }
      if (t.hasAttribute && t.hasAttribute('data-hint')) {
        var panel = $(t.getAttribute('data-hint'));
        if (panel) panel.classList.toggle('show');
        return;
      }
      if (t.hasAttribute && t.hasAttribute('data-quiz')) {
        checkQuiz(t.getAttribute('data-quiz'), parseInt(t.getAttribute('data-quiz-module'), 10));
        return;
      }
      t = t.parentNode;
    }
  }

  // ============================================================
  // SCROLL PROGRESS (within a module page)
  // ============================================================
  function updateScrollProgress() {
    var h = document.documentElement;
    var scrollTop = h.scrollTop || document.body.scrollTop;
    var height = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
    var pct = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0;
    $('scrollProgress').style.width = pct + '%';
  }

  // ============================================================
  // INIT
  // ============================================================
  function renderHeroAndIntro() {
    document.title = UNIT.title + ' — Grade 8 GSIS';
    $('unitSpan').textContent = UNIT.span;
    $('heroSubEn').textContent = UNIT.heroSub.en;
    $('leitfrageText').textContent = UNIT.leitfrage.en;
    $('leitfrageDe').textContent = UNIT.leitfrage.de;
    $('crumbPath').textContent = UNIT.meta;
    $('introWhat').textContent = UNIT.intro.what_en;
    $('introSkills').innerHTML = UNIT.intro.skills_en.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('');
    $('heroMap').innerHTML = SVG.heroMap();
  }

  function init() {
    renderHeroAndIntro();
    renderHome();
    setDe(state.showDe);
    document.body.addEventListener('click', handleClick);
    document.addEventListener('scroll', updateScrollProgress, { passive: true });
    var input = $('modalInput');
    if (input) input.addEventListener('keypress', function (e) { if (e.key === 'Enter') submitModal(); });
    updateScrollProgress();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

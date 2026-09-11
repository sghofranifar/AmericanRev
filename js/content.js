/* ============================================================
   The American Revolution — Grade 8 GSIS
   Content data. Edit this file to change any text, source,
   task, quiz question, image or video on the site — app.js
   renders everything from what's defined here.

   Language model: sources are English-only (the language the
   sources were written in). Explanations, method boxes and
   vocabulary carry a German layer (`de` fields) shown when a
   reader switches on "Deutsche Hilfen" in the top bar.
   ============================================================ */

var UNIT = {
  title: "The American Revolution",
  span: "1765–1791",
  meta: "History · Grade 8 · GSIS",
  masterCode: "GSIS-TEACHER-2026",
  leitfrage: {
    en: "How revolutionary was the American Revolution — and for whom?",
    de: "Wie revolutionär war die Amerikanische Revolution — und für wen?"
  },
  heroSub: {
    en: "A seven-unit inquiry — from tax protest to constitution — built around real sources.",
    de: "Sieben Module — von der Steuerrevolte bis zur Verfassung — mit echten Quellen."
  },
  intro: {
    what_en: "In 1765, Britain's thirteen North American colonies were loyal, taxed subjects of a distant king. By 1791, they were citizens of a republic with a written constitution — a republic that still denied full rights to most of the people living in it. This unit follows that transformation source by source: political cartoons, founding documents, battle maps, and the voices the founding documents left out.",
    skills_en: [
      "Read and analyse primary sources: cartoons, letters, legal texts, statistics",
      "Explain the causes, course and consequences of the American Revolution",
      "Weigh competing perspectives — including voices excluded from power",
      "Form and justify your own position on the unit's leading question",
      "Work confidently with historical English — with German support where you need it"
    ]
  },
  modules: [
    // ================= MODULE 1 =================
    {
      num: 1,
      code: "STAMP-1765",
      title: "Colonies and Crown",
      tease_en: "Why did a tax protest turn into a revolution?",
      teilfrage_en: "Why did a tax protest turn into a revolution?",
      teilfrage_de: "Warum wurde aus Steuerprotest eine Revolution?",
      vocab: [
        { en: "colony", de: "die Kolonie", def: "von einer fremden Macht regiertes Gebiet" },
        { en: "taxation", de: "die Besteuerung", def: "Erhebung von Abgaben durch den Staat" },
        { en: "representation", de: "die Repräsentation", def: "Vertretung im Parlament" },
        { en: "boycott", de: "der Boykott", def: "bewusstes Meiden von Waren als Protest" },
        { en: "patriot", de: "der Patriot", def: "Kolonist, der für die Unabhängigkeit kämpfte" },
        { en: "loyalist", de: "der Loyalist", def: "Kolonist, der der britischen Krone treu blieb" }
      ],
      intro_en: [
        "In 1754, Britain and France went to war over land in North America. Britain won — but the war left it deeply in debt. London's solution: make the thirteen colonies help pay for it, through a series of new taxes on everyday goods.",
        "The colonists were furious — not simply because taxes were unpopular, but because they had no elected representatives in the British Parliament that imposed them. Their rallying cry became simple and dangerous: “No taxation without representation.”",
        "By December 1773, the anger reached Boston Harbor, where colonists dumped 342 chests of British tea into the sea rather than pay the tax on it. Britain answered with punishment, not compromise — and a protest movement began sliding toward revolution."
      ],
      intro_de: "Nach dem teuren Krieg gegen Frankreich (1754–1763) verlangt Großbritannien neue Steuern von den Kolonien — ohne ihnen eine Stimme im Parlament zu geben. Der Protest eskaliert bis zur Boston Tea Party 1773.",
      introVideo: {
        videoId: "uImdEeuLNG8",
        title: "The Stamp Act",
        citation: "NBC News Learn — YouTube",
        whileListening: []
      },
      sources: [
        {
          id: "m1s1", type: "image",
          label: "Source 1 · Political cartoon · 1754",
          title: "Join, or Die",
          citation: "Benjamin Franklin, Pennsylvania Gazette, 9 May 1754 — Wikimedia Commons (public domain)",
          image: {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/Benjamin_Franklin_-_Join_or_Die.jpg",
            alt: "Woodcut of a snake cut into eight labelled pieces above the words JOIN, or DIE"
          },
          text_en: [
            "Benjamin Franklin published this woodcut nearly twenty years before the tax crisis — during the French and Indian War — to urge the colonies to unite against a common enemy. Each segment of the snake stands for a colony or region; the caption plays on an old belief that a cut snake could come back to life if its pieces were rejoined in time.",
            "Colonists reused Franklin's image again and again in the 1760s and 1770s — this time aimed not at France, but at Britain."
          ],
          method: {
            title: "Reading a political cartoon",
            steps: [
              "Describe: what figures, objects or symbols do you see?",
              "Decode the symbols: what does each one stand for?",
              "Viewpoint: whose side is the cartoonist on?",
              "Effect: what is the viewer meant to feel or do?"
            ],
            de: "Merke: Eine Karikatur beschreibt nicht neutral — sie will überzeugen."
          }
        },
        {
          id: "m1s2", type: "image",
          label: "Source 2 · Engraving · 1770",
          title: "The Bloody Massacre",
          citation: "Paul Revere, engraving, Boston, 1770 — Wikimedia Commons (public domain)",
          image: {
            url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boston_Massacre.jpg",
            alt: "Engraving of British soldiers in a firing line shooting into a crowd of colonists in Boston"
          },
          text_en: [
            "On 5 March 1770, a confrontation between Boston civilians and British soldiers ended with five colonists dead. Paul Revere's engraving, printed just weeks later, shows a disciplined line of red-coated soldiers firing on an unarmed crowd on command.",
            "Contemporary witnesses disagreed about what actually happened — some described a chaotic mob throwing snowballs and stones at frightened soldiers. Revere's version left no room for that ambiguity."
          ]
        },
        {
          id: "m1s3", type: "data",
          label: "Source 3 · Overview · 1764–1773",
          title: "Britain's tax acts, 1764–1773",
          citation: "Compiled from British Parliamentary records",
          table: {
            head: ["Year", "Act", "Taxed"],
            rows: [
              ["1764", "Sugar Act", "sugar, molasses"],
              ["1765", "Stamp Act", "all printed paper"],
              ["1767", "Townshend Acts", "tea, glass, paint, paper"],
              ["1773", "Tea Act", "tea (East India Company monopoly)"]
            ]
          }
        }
      ],
      tasks: [
        {
          level: 1,
          prompt_en: "Describe the table in Source 3. Which everyday goods were taxed, and in what order?",
          hint_en: "Sort the acts by year and note the taxed goods in a short list.",
          solution_en: "Sugar Act (1764) taxed sugar and molasses; Stamp Act (1765) taxed all printed paper; Townshend Acts (1767) taxed tea, glass, paint and paper; Tea Act (1773) taxed tea specifically. The taxes moved from raw goods into the print and daily life of ordinary colonists — exactly why they provoked such anger."
        },
        {
          level: 2,
          prompt_en: "Analyse Source 1 using the method box. Who is “Join, or Die” really addressing in the 1760s, and what is it asking them to do?",
          hint_en: "Franklin drew this in 1754 for a different enemy. Why would colonists reuse the same image against Britain twenty years later?",
          solution_en: "By the 1760s, “Join, or Die” no longer targets France — it targets the thirteen colonies' own disunity in the face of British taxation. The snake's severed pieces are a warning: only by acting together can the colonies resist Parliament; acting separately, they will be defeated one by one."
        },
        {
          level: 3,
          prompt_en: "Compare Source 2 to what historians know about the Boston Massacre: eyewitnesses disagreed about who started the violence. Was Revere's engraving a fair record of events, or propaganda? Justify your answer with evidence from the source.",
          hint_en: "Who printed the image, and how soon after the event? What does the engraving leave out?",
          solution_en: "Revere's engraving is propaganda in form, even though based on a real event: it shows an orderly firing line and a passive crowd, omitting the stones and threats witnesses described. Printed and circulated within weeks, it was designed to shape colonial opinion against Britain — a reminder that even “eyewitness” images are authored from a point of view."
        }
      ],
      quiz: [
        { q_en: "What did colonists mean by “no taxation without representation”?", options: ["Taxes should never exist", "Whoever is taxed should have a voice in the government that taxes them", "Only kings may collect taxes"], correct: 1 },
        { q_en: "What happened in Boston Harbor in December 1773?", options: ["Colonists dumped tea into the harbor", "Colonists signed a peace treaty", "British soldiers left Boston for good"], correct: 0 },
        { q_en: "Why did Benjamin Franklin first draw the “Join, or Die” snake in 1754?", options: ["To celebrate independence", "To urge the colonies to unite against France", "To protest the Stamp Act"], correct: 1 }
      ],
      reflection: {
        prompt_en: "Switzerland is famous for direct democracy — citizens vote directly on many tax decisions. Compare that to the colonists' situation in the 1760s. What's different, and is there anything similar?",
        de: "Hilfestellung: Denke an eidgenössische Abstimmungen über Steuern. Wer entscheidet in der Schweiz mit? Wer durfte 1765 in den Kolonien nicht mitentscheiden?"
      }
    },

    // ================= MODULE 2 =================
    {
      num: 2,
      code: "PAINE-1776",
      title: "Enlightenment and Common Sense",
      tease_en: "Which ideas turned subjects into citizens?",
      teilfrage_en: "Which ideas turned subjects into citizens?",
      teilfrage_de: "Welche Ideen machten aus Untertanen Bürger?",
      vocab: [
        { en: "natural rights", de: "die Naturrechte", def: "Rechte, die jedem Menschen von Geburt an zustehen" },
        { en: "social contract", de: "der Gesellschaftsvertrag", def: "gedachte Vereinbarung zwischen Volk und Regierung" },
        { en: "sovereignty", de: "die Souveränität", def: "oberste Entscheidungsgewalt in einem Staat" },
        { en: "independence", de: "die Unabhängigkeit", def: "Freiheit von fremder Herrschaft" },
        { en: "pamphlet", de: "die Flugschrift", def: "kurze, gedruckte Streitschrift" },
        { en: "monarchy", de: "die Monarchie", def: "Herrschaft eines Königs oder einer Königin" }
      ],
      intro_en: [
        "Where did the colonists get the idea that they had the right to resist their king? Partly from English philosopher John Locke, who argued decades earlier that people are born with natural rights — to life, liberty, and property — and that governments exist only to protect them. If a government fails to do that, Locke argued, people may replace it.",
        "In January 1776, an English immigrant named Thomas Paine turned that abstract philosophy into blunt, plain-spoken fury. His pamphlet Common Sense sold an estimated 500,000 copies in a population of only 2.5 million — making the case for full independence in language any farmer or shopkeeper could understand."
      ],
      intro_de: "John Locke lieferte die Theorie: Menschen haben Naturrechte, Regierungen müssen sie schützen. Thomas Paines Flugschrift „Common Sense“ (Januar 1776) machte daraus eine Massenbewegung für die Unabhängigkeit.",
      sources: [
        {
          id: "m2s1", type: "text",
          label: "Source 1 · Philosophy, paraphrased · 1689",
          title: "John Locke on natural rights",
          citation: "Based on John Locke, Two Treatises of Government, 1689 — paraphrased for classroom use, not a direct quotation",
          text_en: [
            "Locke's core argument, put simply: every person is born free and equal, with a natural right to life, liberty, and property. No king rules by divine right — legitimate government exists only because the people agree to it, to protect those rights. If rulers betray that agreement, the people have the right to resist and replace them."
          ]
        },
        {
          id: "m2s2", type: "text",
          label: "Source 2 · Pamphlet · January 1776",
          title: "Common Sense",
          citation: "Thomas Paine, Common Sense, Philadelphia, 1776",
          text_en: [
            "“Small islands not capable of protecting themselves, are the proper objects for kingdoms to take under their care: but there is something very absurd, in supposing a Continent to be perpetually governed by an island.”",
            "Paine's pamphlet did not just argue for independence — it argued that monarchy itself was absurd, at a time when almost every colonist still assumed some form of loyalty to the crown."
          ],
          video: {
            videoId: "mwqr1NQg7PM",
            title: "Common Sense by Thomas Paine",
            citation: "YouTube",
            whileListening: []
          },
          method: {
            title: "Reading a persuasive pamphlet",
            steps: [
              "Claim: what is the author arguing?",
              "Evidence: what reasons or comparisons does he use?",
              "Language: which words are chosen to persuade rather than inform?",
              "Audience: who is this written for, and how can you tell?"
            ],
            de: "Paine schreibt bewusst einfach — er wollte auch von einfachen Handwerkern und Bauern verstanden werden, nicht nur von Gelehrten."
          }
        }
      ],
      tasks: [
        {
          level: 1,
          prompt_en: "Paraphrase Locke's argument (Source 1) in your own words, in two sentences.",
          hint_en: "Focus on: where do rights come from, and what happens if government breaks its side of the deal?",
          solution_en: "Sample: People are born with rights to life, liberty and property that no government granted and none may take away. If a government stops protecting those rights, the people are entitled to replace it."
        },
        {
          level: 2,
          prompt_en: "Analyse Paine's island/continent comparison in Source 2. Why is it effective persuasion rather than simply an insult to Britain?",
          hint_en: "Think about scale — physically, how big is Britain compared to the thirteen colonies?",
          solution_en: "Paine reframes the relationship as literally unnatural: a small island “ruling” a vast continent inverts the expected order of size and importance. It's a simple, visual argument that doesn't require philosophy to understand — exactly Paine's goal."
        },
        {
          level: 3,
          prompt_en: "Locke wrote for an educated elite in 1689; Paine wrote for ordinary colonists in 1776. Assess: which was more important for turning philosophy into revolution — the idea, or how it was communicated?",
          hint_en: "Consider Common Sense's sales figures relative to the colonial population.",
          solution_en: "Both were necessary but insufficient alone: Locke supplied the intellectual justification later echoed almost word-for-word in the Declaration of Independence, but his dense philosophical treatises reached few beyond the educated elite. Paine translated that theory into accessible, emotionally direct prose that reached roughly one in five colonists — turning an elite idea into a mass movement. Communication didn't replace the idea; it activated it."
        }
      ],
      quiz: [
        { q_en: "According to Locke, why does government exist?", options: ["To make the king rich", "To protect people's natural rights", "To collect taxes for wars"], correct: 1 },
        { q_en: "What did Thomas Paine's Common Sense argue?", options: ["The colonies should stay loyal to Britain", "Full independence from the British monarchy", "Only the Stamp Act should be repealed"], correct: 1 },
        { q_en: "Roughly how many copies of Common Sense were sold?", options: ["About 5,000", "About 500,000", "About 5 million"], correct: 1 }
      ],
      reflection: {
        prompt_en: "Common Sense worked partly because Paine wrote in plain language everyone could understand. Where today do you see complex political ideas explained in plain, persuasive language — and is that always a good thing?",
        de: "Denke an Social Media, Reden von Politiker:innen oder Kampagnen-Plakate. Vereinfachung kann informieren — sie kann aber auch manipulieren."
      }
    },

    // ================= MODULE 3 =================
    {
      num: 3,
      code: "JULY-1776",
      title: "Declaration of Independence",
      tease_en: "“All men are created equal” — who did that mean?",
      teilfrage_en: "“All men are created equal” — who did that mean?",
      teilfrage_de: "„All men are created equal“ — wer war gemeint?",
      vocab: [
        { en: "unalienable rights", de: "die unveräußerlichen Rechte", def: "Rechte, die niemand wegnehmen darf" },
        { en: "grievance", de: "die Beschwerde", def: "formell vorgebrachte Klage" },
        { en: "self-evident", de: "selbstverständlich", def: "ohne Beweis einleuchtend" },
        { en: "hypocrisy", de: "die Heuchelei", def: "Widerspruch zwischen Aussage und Handeln" },
        { en: "draft", de: "der Entwurf", def: "erste, noch nicht endgültige Fassung eines Textes" }
      ],
      intro_en: [
        "On 4 July 1776, the Second Continental Congress adopted a document mostly written by 33-year-old Thomas Jefferson. Its opening lines are now among the most quoted sentences in the English language — a bold claim about human equality used to justify tearing a nation away from its king.",
        "But the Congress that approved the Declaration also edited it. One deletion in particular has become one of the most debated “what ifs” in American history: Jefferson's own draft condemning the slave trade — cut before the final vote."
      ],
      intro_de: "Am 4. Juli 1776 verabschiedet der Kontinentalkongress die Unabhängigkeitserklärung. Jefferson (33) schreibt den Hauptentwurf — doch der Kongress streicht eine zentrale Passage gegen die Sklaverei.",
      sources: [
        {
          id: "m3s1", type: "text",
          label: "Source 1 · Founding document · 4 July 1776",
          title: "The Declaration of Independence (preamble)",
          citation: "Continental Congress, Philadelphia, 4 July 1776",
          text_en: [
            "“We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.”"
          ],
          video: {
            videoId: "P2GIoBO-uys",
            title: "The Declaration of Independence | Road to the Revolution",
            citation: "YouTube",
            whileListening: []
          },
          method: {
            title: "Reading a founding document",
            steps: [
              "Context: who wrote it, for whom, and why?",
              "Claim: what rights or principles does it assert?",
              "Scope: who is included in its language — and who might be excluded?",
              "Consequence: what did this document justify or change?"
            ],
            de: "Ein Gründungsdokument spricht oft universell („alle Menschen“) — prüfe, ob die Realität dem entsprach."
          }
        },
        {
          id: "m3s2", type: "voice",
          label: "Source 2 · Deleted draft passage · June 1776",
          title: "Jefferson's draft — the passage Congress removed",
          citation: "Thomas Jefferson, original draft of the Declaration of Independence, June 1776 (cut before adoption)",
          text_en: [
            "“He [King George III] has waged cruel war against human nature itself, violating its most sacred rights of life and liberty in the persons of a distant people who never offended him, captivating and carrying them into slavery in another hemisphere…”",
            "Jefferson — himself an enslaver — blamed the king for the slave trade in his draft. Delegates from South Carolina and Georgia, along with some Northern merchants involved in the trade, objected, and Congress deleted the passage before adopting the final text on 4 July."
          ]
        }
      ],
      tasks: [
        {
          level: 1,
          prompt_en: "Quote the phrase from Source 1 that states what rights all people are supposed to have.",
          hint_en: "Look for the three rights named directly after “unalienable Rights.”",
          solution_en: "“Life, Liberty and the pursuit of Happiness” — described as unalienable rights given by the Creator, which no government may legitimately take away."
        },
        {
          level: 2,
          prompt_en: "Explain in your own words what Source 2 accuses King George III of, and why Congress removed it.",
          hint_en: "Who profited from the slave trade in 1776 — in the colonies and in Britain?",
          solution_en: "Jefferson's draft blamed the king personally for forcing the slave trade onto the colonies. Congress removed it because delegates from slaveholding states in the South, and Northern merchants who profited from the trade, objected — slavery was too central to the colonial economy for Congress to condemn it, even rhetorically."
        },
        {
          level: 3,
          prompt_en: "Judge: is it hypocrisy that a document declaring “all men are created equal” was edited to protect the slave trade — written in part by a man who enslaved people himself? Argue your position with evidence from both sources.",
          hint_en: "Consider both readings: (a) the document's words vs. its authors' actions, and (b) the idea's later use by abolitionists.",
          solution_en: "Strong argument for hypocrisy: the same Congress that declared universal equality struck the one passage naming slavery as a violation of natural rights, and its principal author enslaved over 600 people in his lifetime. Counter-consideration: the deleted clause shows the contradiction was visible and contested even in 1776, and the Declaration's language was later cited directly by abolitionists to argue equality's logic should include everyone. Both things can be true: the document's ideal was more expansive than the society that wrote it — and later generations used its own words against it."
        }
      ],
      quiz: [
        { q_en: "Who wrote most of the Declaration of Independence's draft?", options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin"], correct: 1 },
        { q_en: "What did the deleted passage in Jefferson's draft condemn?", options: ["Taxation without representation", "The transatlantic slave trade", "The Boston Massacre"], correct: 1 },
        { q_en: "On what date was the Declaration adopted?", options: ["4 July 1776", "14 July 1789", "17 September 1787"], correct: 0 }
      ],
      reflection: {
        prompt_en: "The Declaration's most famous line promised equality it did not deliver to everyone in 1776. Can a document's ideals matter even when the people who wrote it did not live up to them? Give your own reasoned view.",
        de: "Es gibt keine „richtige“ Antwort — begründe deine Position mit einem Beispiel aus den Quellen."
      }
    },

    // ================= MODULE 4 =================
    {
      num: 4,
      code: "SARATOGA-1777",
      title: "The War, 1775–1783",
      tease_en: "How did a militia beat the world's strongest army?",
      teilfrage_en: "How did a militia beat the world's strongest army?",
      teilfrage_de: "Wie gewann eine Miliz gegen die stärkste Armee der Welt?",
      vocab: [
        { en: "militia", de: "die Miliz", def: "nicht-professionelle Truppe aus Freiwilligen" },
        { en: "alliance", de: "das Bündnis", def: "Vereinbarung gegenseitiger Unterstützung" },
        { en: "campaign", de: "der Feldzug", def: "längere militärische Unternehmung" },
        { en: "siege", de: "die Belagerung", def: "Einschließung eines Ortes durch feindliche Truppen" },
        { en: "surrender", de: "die Kapitulation", def: "Aufgabe des militärischen Widerstands" }
      ],
      intro_en: [
        "In 1775, the Continental Army was a patchwork of farmers, tradesmen and militia — untrained, underfed, and facing the most powerful military in the world. Most observers in London expected the rebellion to collapse within a year.",
        "It didn't. Over eight years, American forces combined defensive endurance, geographic knowledge, and — decisively, after 1778 — French money, troops and warships, to outlast rather than simply outfight the British."
      ],
      intro_de: "Die Kontinentalarmee war anfangs schlecht ausgerüstet. Entscheidend für den amerikanischen Sieg wurde nicht eine einzelne Schlacht, sondern das französische Bündnis nach 1778.",
      sources: [
        {
          id: "m4s1", type: "image", svgKey: "warMap",
          label: "Source 1 · Campaign map · 1775–1781",
          title: "Five turning points of the war",
          citation: "Simplified campaign map, compiled from standard military histories",
          text_en: [
            "1775 — Lexington & Concord: the first shots of the war, in Massachusetts.",
            "1775 — Bunker Hill: a costly British “victory” — over 1,000 British casualties to take one hill.",
            "1777 — Saratoga, New York: the war's turning point. An entire British army surrenders — convincing France it is worth backing the Americans openly.",
            "1777–78 — Valley Forge, Pennsylvania: a brutal winter encampment, not a battle — over 2,000 of about 12,000 soldiers die of disease and exposure.",
            "1781 — Yorktown, Virginia: trapped by Continental troops on land and the French navy at sea, General Cornwallis surrenders — effectively ending the war."
          ],
          video: {
            videoId: "V9SQ4HxnWnM",
            title: "Battles of the American Revolution | Early US History for Kids",
            citation: "YouTube",
            whileListening: []
          },
          method: {
            title: "Reading a historical map",
            steps: [
              "Identify: what does the map's key tell you?",
              "Sequence: what order did events happen in?",
              "Geography: why might location have mattered here?",
              "Turning point: which single moment changed the war's direction, and why?"
            ],
            de: "Bei einer Kriegskarte: Achte auf Daten UND Distanzen — eine Schlacht weit entfernt von der Versorgung ist riskanter."
          }
        },
        {
          id: "m4s2", type: "data",
          label: "Source 2 · Statistics · Valley Forge, winter 1777–78",
          title: "Valley Forge by the numbers",
          citation: "Compiled from U.S. National Park Service and American Battlefield Trust records",
          table: {
            head: ["Measure", "Figure"],
            rows: [
              ["Soldiers encamped", "≈12,000"],
              ["Deaths over the winter", "≈2,000 (about 1 in 6)"],
              ["Main causes of death", "disease and malnutrition, not combat"],
              ["Deadliest months", "March–May 1778, as disease outran supply"]
            ]
          }
        }
      ],
      tasks: [
        {
          level: 1,
          prompt_en: "List the five locations in Source 1 in chronological order and name what happened at each in one short phrase.",
          hint_en: "They're already given in order in the source — just compress each into a phrase.",
          solution_en: "1775 Lexington & Concord — first shots fired; 1775 Bunker Hill — costly British win; 1777 Saratoga — British army surrenders, France allies; 1777–78 Valley Forge — brutal winter, disease kills thousands; 1781 Yorktown — Cornwallis surrenders, war effectively ends."
        },
        {
          level: 2,
          prompt_en: "Using Source 2, explain why Valley Forge is remembered as a turning point even though no battle was fought there.",
          hint_en: "Read the “main causes of death” row carefully — what changed about the army that survived?",
          solution_en: "No battle occurred, but the army that endured the winter — retrained under Prussian officer Friedrich von Steuben — emerged more disciplined and professional than the force that arrived in December. The “turning point” was organisational and psychological survival, not combat."
        },
        {
          level: 3,
          prompt_en: "Assess: was the French alliance (after Saratoga, 1777) more decisive for American victory than any single battle? Argue with evidence.",
          hint_en: "Consider what France supplied after 1778 — money, troops, and especially its navy — and where it mattered most, at Yorktown.",
          solution_en: "Strong case that the alliance was decisive: no individual battle before Saratoga was militarily conclusive, and Saratoga's real importance was diplomatic — it convinced France the Americans could win, triggering the 1778 Treaty of Alliance. French warships then blockaded the sea at Yorktown in 1781, trapping Cornwallis and forcing the surrender that ended major fighting. Without French intervention, the Continental Army's material weaknesses (shown starkly at Valley Forge) make an eventual British war of attrition plausible."
        }
      ],
      quiz: [
        { q_en: "Which battle convinced France to formally ally with the Americans?", options: ["Bunker Hill", "Saratoga", "Lexington and Concord"], correct: 1 },
        { q_en: "What mainly killed soldiers at Valley Forge?", options: ["Combat wounds", "Disease and malnutrition", "A British ambush"], correct: 1 },
        { q_en: "What effectively ended the war in 1781?", options: ["The Boston Tea Party", "The surrender at Yorktown", "The Stamp Act Congress"], correct: 1 }
      ],
      reflection: {
        prompt_en: "Without France's navy, money and troops, most historians think American victory was unlikely. What does that tell you about how revolutions and wars of independence succeed — then and now?",
        de: "Denke an weitere historische oder aktuelle Beispiele, bei denen ausländische Unterstützung entscheidend war oder ist."
      }
    },

    // ================= MODULE 5 =================
    {
      num: 5,
      code: "WETHEPEOPLE-1787",
      title: "Constitution and Bill of Rights",
      tease_en: "How much power did “the people” really get?",
      teilfrage_en: "How much power did “the people” really get?",
      teilfrage_de: "Wie viel Macht bekam das Volk wirklich?",
      vocab: [
        { en: "constitution", de: "die Verfassung", def: "grundlegendes Gesetz eines Staates" },
        { en: "checks and balances", de: "die Gewaltenteilung", def: "gegenseitige Kontrolle der Staatsgewalten" },
        { en: "ratification", de: "die Ratifizierung", def: "verbindliche Bestätigung eines Vertrags" },
        { en: "amendment", de: "der Verfassungszusatz", def: "nachträgliche Änderung einer Verfassung" },
        { en: "compromise", de: "der Kompromiss", def: "Einigung durch gegenseitige Zugeständnisse" }
      ],
      intro_en: [
        "The Revolution won independence in 1783 — but the new United States' first system of government, the Articles of Confederation, proved too weak to function. In the summer of 1787, delegates met in Philadelphia, officially to revise the Articles. Instead, they wrote an entirely new Constitution.",
        "That Constitution built in deliberate friction between three branches of government, so that no single one could rule alone. But it also contained compromises that entrenched slavery for another eight decades — a contradiction historians still debate."
      ],
      intro_de: "1787 entsteht in Philadelphia die US-Verfassung: drei Gewalten kontrollieren sich gegenseitig. Gleichzeitig sichert sie die Sklaverei politisch ab — ein bewusster Kompromiss.",
      sources: [
        {
          id: "m5s1", type: "text",
          label: "Source 1 · Founding document · 1787",
          title: "The Constitution's Preamble",
          citation: "United States Constitution, Philadelphia, 17 September 1787",
          text_en: [
            "“We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.”"
          ]
        },
        {
          id: "m5s2", type: "image", svgKey: "branchesDiagram",
          label: "Source 2 · Diagram · 1787 system of government",
          title: "Three branches, one system",
          citation: "Diagram based on Articles I–III of the U.S. Constitution",
          text_en: [
            "Congress (legislative) makes laws — but the President (executive) can veto them, and the Supreme Court (judicial) can strike them down as unconstitutional. Each branch can check the others; no branch was meant to act entirely alone."
          ],
          video: {
            videoId: "efi0r5ShSkE",
            title: "Principles of the United States Constitution",
            citation: "YouTube",
            whileListening: []
          },
          method: {
            title: "Reading a constitutional diagram",
            steps: [
              "Identify each branch and its main power.",
              "Trace the arrows: who can block or check whom?",
              "Compare: is any single branch clearly the strongest?",
              "Judge: how well does the system actually distribute power?"
            ],
            de: "Vergleiche mit der Schweizer Gewaltenteilung: Bundesrat, Parlament, Bundesgericht — welche Parallelen siehst du?"
          }
        },
        {
          id: "m5s3", type: "text",
          label: "Source 3 · Constitutional text · Article I, Section 2",
          title: "The Three-Fifths Compromise",
          citation: "United States Constitution, Article I, Section 2, Clause 3, 1787",
          text_en: [
            "“…adding to the whole Number of free Persons… and excluding Indians not taxed, three fifths of all other Persons.”",
            "In plain terms: enslaved people — the “other Persons” — could not vote, but each was counted as three-fifths of a person when calculating how many representatives (and how much political power) a state received in Congress. Southern states gained extra seats in Congress for people they denied all rights to."
          ]
        }
      ],
      tasks: [
        {
          level: 1,
          prompt_en: "In Source 1, name three goals the Preamble lists for the new government.",
          hint_en: "They're listed as a sequence of verbs: “establish… insure… provide… promote… secure…”",
          solution_en: "Any three of: form a more perfect union, establish justice, ensure domestic tranquility, provide for common defence, promote the general welfare, secure liberty."
        },
        {
          level: 2,
          prompt_en: "Using Source 2, explain how the veto and judicial review are both examples of “checks and balances.”",
          hint_en: "What does each power stop another branch from doing unchecked?",
          solution_en: "The presidential veto lets the executive block a law passed by the legislative branch; judicial review lets the judicial branch strike down a law (or an executive action) it finds unconstitutional. Both prevent one branch from having the final, unchecked word."
        },
        {
          level: 3,
          prompt_en: "Judge: was the Three-Fifths Compromise (Source 3) a step toward “a more perfect union” (Source 1), or a betrayal of it? Use evidence from both sources.",
          hint_en: "Consider: who benefited politically from the compromise, and who was denied any rights under it?",
          solution_en: "Strong case for betrayal: the Preamble promises the “Blessings of Liberty” to “the People,” yet the Three-Fifths Compromise treated enslaved people as property for the purpose of denying them rights while still using their existence to inflate Southern political power in Congress — a system that entrenched slavery rather than limiting it. Counter-consideration: without the compromise, Southern states may have refused to join the Union at all, so delegates saw it as a pragmatic trade-off to secure ratification — pragmatism that came at a moral cost historians widely condemn today."
        }
      ],
      quiz: [
        { q_en: "What are the three branches of the U.S. government?", options: ["Legislative, executive, judicial", "Federal, state, local", "Congress, Senate, House"], correct: 0 },
        { q_en: "What could each branch do to another, according to Source 2?", options: ["Nothing — each branch acted alone", "Check or limit its power", "Elect its members"], correct: 1 },
        { q_en: "What did the Three-Fifths Compromise do?", options: ["Gave enslaved people full citizenship", "Counted each enslaved person as three-fifths of a person for representation, while denying them rights", "Ended slavery gradually by 1800"], correct: 1 }
      ],
      reflection: {
        prompt_en: "Switzerland and Germany also divide power between different levels and branches of government. Pick one similarity and one difference to the U.S. system in Source 2.",
        de: "Denke an: Föderalismus (Kantone/Bundesländer), Volksabstimmungen, Verfassungsgericht."
      }
    },

    // ================= MODULE 6 =================
    {
      num: 6,
      code: "WHOSELIBERTY-1776",
      title: "Who Was Excluded?",
      tease_en: "Freedom — for whom?",
      teilfrage_en: "Freedom — for whom?",
      teilfrage_de: "Freiheit für wen?",
      vocab: [
        { en: "enslaved person", de: "die versklavte Person", def: "unfrei gehaltener, als Eigentum behandelter Mensch" },
        { en: "petition", de: "die Petition", def: "schriftliches Gesuch an eine Behörde" },
        { en: "suffrage", de: "das Wahlrecht", def: "Recht, an Wahlen teilzunehmen" },
        { en: "indigenous", de: "indigen", def: "ursprünglich in einem Gebiet ansässig" },
        { en: "exclusion", de: "der Ausschluss", def: "Verweigerung von Teilhabe oder Rechten" }
      ],
      intro_en: [
        "The Declaration promised that “all men are created equal.” In practice, full political rights in the new United States belonged almost exclusively to white, property-owning men. Roughly one in five people in the thirteen colonies was enslaved. Women could not vote. Native American nations were treated as obstacles to expansion, not as parties whose rights mattered.",
        "This module listens to voices the founding documents left out — and asks what their existence means for how “revolutionary” the Revolution really was."
      ],
      intro_de: "Volle politische Rechte hatten fast nur weiße, besitzende Männer. Dieses Modul gibt den ausgeschlossenen Stimmen Raum: Frauen, versklavte Menschen, indigene Völker.",
      sources: [
        {
          id: "m6s1", type: "voice",
          label: "Source 1 · Private letter · 31 March 1776",
          title: "Abigail Adams to John Adams",
          citation: "Abigail Adams, letter to John Adams, 31 March 1776 — Massachusetts Historical Society",
          text_en: [
            "“…I desire you would remember the ladies, and be more generous and favorable to them than your ancestors. Do not put such unlimited power into the hands of the husbands. Remember, all men would be tyrants if they could.”",
            "“If perticuliar care and attention is not paid to the ladies we are determined to foment a rebelion, and will not hold ourselves bound by any laws in which we have no voice, or representation.”"
          ],
          method: {
            title: "Reading an excluded voice",
            steps: [
              "Who is speaking, and to whom?",
              "What right or change are they demanding?",
              "What argument or language do they borrow from elsewhere?",
              "What actually happened as a result — immediately, and later?"
            ],
            de: "Achte darauf, wessen Argumentation hier übernommen wird — und wovon sie sich ableitet."
          }
        },
        {
          id: "m6s2", type: "voice",
          label: "Source 2 · Petitions · 1773–1777, Massachusetts",
          title: "Freedom petitions",
          citation: "Summarised from multiple enslaved petitioners' appeals to the Massachusetts legislature, 1773–1777",
          text_en: [
            "Throughout the 1770s, enslaved men and women in Massachusetts submitted petitions to the colonial and then state legislature, directly using the language of natural rights that white colonists were using against Britain: if “all men” had a natural right to liberty, they argued, that right could not stop at the color line.",
            "These petitions did not immediately end slavery in Massachusetts — but a 1783 state court ruling, Commonwealth v. Jennison, cited the state's new constitutional language on natural rights and effectively ended slavery there, making Massachusetts the first state to do so through the courts."
          ]
        },
        {
          id: "m6s3", type: "data",
          label: "Source 3 · Context · Haudenosaunee (Iroquois) Confederacy",
          title: "A revolution that was also a land war",
          citation: "Summarised from standard histories of the Revolutionary frontier",
          text_en: [
            "Most nations of the Haudenosaunee (Iroquois) Confederacy allied with the British during the war — not out of loyalty to the king, but because British policy had at times limited colonial expansion onto Native land, while American independence promised the opposite.",
            "They were right to worry. After the war, the new United States treated Native nations who had sided with Britain as a defeated enemy, not as a party to negotiate with — leading to major land losses in the decades that followed, regardless of which side a given nation had actually chosen."
          ]
        }
      ],
      tasks: [
        {
          level: 1,
          prompt_en: "Summarise Abigail Adams' main demand in Source 1, in one sentence.",
          hint_en: "What specifically does she ask her husband to “remember”?",
          solution_en: "She asks that the new laws give women legal protection from unlimited power by their husbands, warning that women will not consider themselves bound by laws they had no voice in making."
        },
        {
          level: 2,
          prompt_en: "Compare Source 1 and Source 2: what argument do both Abigail Adams and the enslaved petitioners use to make their case?",
          hint_en: "Both are appealing to an idea from the same founding document — which one?",
          solution_en: "Both invoke the same logic the Declaration used against Britain: no one should be bound by laws or rule they had no voice in and no representation to contest. Adams applies it to married women's legal powerlessness; the petitioners apply it directly to slavery, arguing natural rights cannot logically exclude them."
        },
        {
          level: 3,
          prompt_en: "Judge, using all three sources: does the existence of these excluded voices make the Revolution's ideals more powerful, or expose them as empty promises? Take a position and defend it.",
          hint_en: "Consider both what happened immediately (1776–1780s) and what these arguments made possible later.",
          solution_en: "Defensible either way. For “empty promises”: none of these three groups gained the rights the Declaration's language implied — women's legal subordination continued, most enslaved people remained enslaved for another 89 years, and Native nations lost land regardless of their wartime allegiance. For “ideals made powerful”: all three sources show excluded groups using the Revolution's own language to demand inclusion — Massachusetts becoming the first state to end slavery through exactly that argument in 1783. The strongest answer holds both: the ideals were not fulfilled in 1776, but they gave later generations a vocabulary and precedent to demand what the Revolution itself denied them."
        }
      ],
      quiz: [
        { q_en: "What did Abigail Adams warn would happen if women's legal position wasn't improved?", options: ["Women would leave the colonies", "Women would “foment a rebellion” and not consider themselves bound by laws they had no voice in", "Women would ask the King for help"], correct: 1 },
        { q_en: "What argument did enslaved petitioners in Massachusetts use?", options: ["Economic hardship for enslavers", "The same natural-rights language colonists used against Britain", "A direct order from Congress"], correct: 1 },
        { q_en: "Why did many Haudenosaunee (Iroquois) nations side with Britain?", options: ["They preferred British culture", "British policy had limited colonial expansion onto their land", "Britain paid them large sums of gold"], correct: 1 }
      ],
      reflection: {
        prompt_en: "Which of the three excluded groups in this module do you think had the strongest claim, using the Declaration's own words, to full “liberty”? Justify your choice.",
        de: "Es gibt keine „richtige“ Gruppe — wichtig ist, dass du mit einem Zitat aus den Quellen begründest."
      }
    },

    // ================= MODULE 7 =================
    {
      num: 7,
      code: "LEGACY-TODAY",
      title: "Legacy and Assessment",
      tease_en: "What still shapes us today?",
      teilfrage_en: "What still shapes us today?",
      teilfrage_de: "Was davon prägt uns heute?",
      vocab: [
        { en: "legacy", de: "das Erbe", def: "Nachwirkung vergangener Ereignisse" },
        { en: "precedent", de: "der Präzedenzfall", def: "früheres Beispiel, das spätere Fälle beeinflusst" },
        { en: "abolition", de: "die Abschaffung (der Sklaverei)", def: "rechtliche Beendigung der Sklaverei" }
      ],
      intro_en: [
        "The American Revolution didn't end with the Treaty of Paris in 1783. Its ideas — natural rights, government by consent, written constitutions — travelled. Revolutionaries in France cited it directly in 1789. Enslaved revolutionaries in Haiti took its logic further than the Americans themselves had dared, abolishing slavery outright by 1804.",
        "This final module asks you to weigh everything you've studied — the ideals and the exclusions, the war and the compromises — and answer the question this whole unit has been building toward."
      ],
      intro_de: "Die Ideen der Revolution wirken weiter: 1789 in Frankreich, 1791–1804 in Haiti. Dieses letzte Modul verlangt eine begründete Gesamtbewertung der Leitfrage.",
      sources: [
        {
          id: "m7s1", type: "data",
          label: "Source 1 · Comparison · 1763 vs. 1791",
          title: "Before and after",
          citation: "Compiled overview",
          table: {
            head: ["", "1763", "1791"],
            rows: [
              ["Government", "Colonies ruled from London, no colonial vote in Parliament", "Republic with elected Congress and President"],
              ["Legal foundation", "British common law, royal charters", "Written Constitution + Bill of Rights (1791)"],
              ["Full political rights", "White, property-owning men (as British subjects)", "White, property-owning men (as U.S. citizens) — largely unchanged"],
              ["Enslaved population", "≈500,000 (about 1 in 5 colonists)", "≈700,000 and growing — not abolished nationally"]
            ]
          }
        },
        {
          id: "m7s2", type: "text",
          label: "Source 2 · Global influence · 1789–1804",
          title: "Ideas that travelled",
          citation: "Summarised overview",
          text_en: [
            "In 1789, French revolutionaries wrote their own Declaration of the Rights of Man and of the Citizen, directly inspired by the American example — partly drafted with input from Lafayette, who had fought in the American war.",
            "In the French colony of Saint-Domingue, enslaved people led by Toussaint Louverture took the revolutionary language of liberty further than either America or France had gone — winning full abolition and, by 1804, full independence as Haiti: the first nation founded by a successful uprising of enslaved people."
          ]
        }
      ],
      tasks: [
        {
          level: 1,
          prompt_en: "Using Source 1, name one thing that changed between 1763 and 1791, and one thing that stayed largely the same.",
          hint_en: "Look row by row — which rows show change, which show continuity?",
          solution_en: "Changed: government structure (from royal rule to an elected republic with a written Constitution). Stayed the same: who actually held full political rights — largely white, property-owning men in both periods."
        },
        {
          level: 2,
          prompt_en: "Explain how the Haitian Revolution (Source 2) can be read as a criticism of the American Revolution.",
          hint_en: "What did Haiti abolish that the U.S. Constitution had instead protected?",
          solution_en: "Haiti's revolutionaries applied the language of universal liberty consistently — abolishing slavery outright — while the U.S. Constitution had enshrined slavery's protection (via the Three-Fifths Compromise, among other clauses) even while proclaiming “the Blessings of Liberty.” Haiti exposes the gap between the American Revolution's stated ideals and its practice."
        }
      ],
      quiz: [
        { q_en: "What happened in Haiti by 1804?", options: ["Slavery was abolished and independence won", "The French Revolution began", "Britain re-took control"], correct: 0 },
        { q_en: "Who wrote the 1789 French Declaration of the Rights of Man, partly inspired by the American example?", options: ["Thomas Jefferson", "French revolutionaries, including Lafayette", "King Louis XVI"], correct: 1 },
        { q_en: "According to Source 1, what stayed largely the same between 1763 and 1791?", options: ["The legal system entirely", "Who held full political rights", "The size of the population"], correct: 1 }
      ],
      finalEssay: {
        prompt_en: "Write a reasoned response (roughly 250 words) to this unit's leading question: “How revolutionary was the American Revolution — and for whom?” Use at least three sources from across the unit as evidence.",
        de: "Aufbau: (1) These in 1–2 Sätzen. (2) Argumente für „revolutionär“ mit Quellenbeleg. (3) Argumente für „nicht für alle revolutionär“ mit Quellenbeleg. (4) Bezug zur Gegenwart. (5) Begründetes Fazit.",
        structure: [
          "Thesis (1–2 sentences): your overall answer to the Leitfrage.",
          "Evidence for “revolutionary”: cite at least one source.",
          "Evidence for “not revolutionary for everyone”: cite at least one source.",
          "Present-day connection: what of this still matters today?",
          "Conclusion: your own reasoned position."
        ],
        minWords: 200
      }
    }
  ]
};

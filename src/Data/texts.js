const quotes = [
  {
    id: 1,
    text: "It was a bright cold day in April, and the clocks were striking thirteen.",
    language: "English",
    source: "George Orwell, 1984",
  },
  {
    id: 2,
    text: "The man in black fled across the desert, and the gunslinger followed.",
    language: "English",
    source: "Stephen King, The Gunslinger",
  },
  {
    id: 3,
    text: "Call me Ishmael. Some years ago — never mind how long precisely — having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    language: "English",
    source: "Herman Melville, Moby-Dick",
  },
  {
    id: 4,
    text: "All this happened, more or less.",
    language: "English",
    source: "Kurt Vonnegut, Slaughterhouse-Five",
  },
  {
    id: 5,
    text: "In the beginning, the universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
    language: "English",
    source: "Douglas Adams, The Restaurant at the End of the Universe",
  },
  {
    id: 6,
    text: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    language: "English",
    source: "Charles Dickens, A Tale of Two Cities",
  },
  {
    id: 7,
    text: "I am an invisible man. No, I am not a spook like those who haunted Edgar Allan Poe; nor am I one of your Hollywood-movie ectoplasms. I am a man of substance, of flesh and bone, fiber and liquids — and I might even be said to possess a mind.",
    language: "English",
    source: "Ralph Ellison, Invisible Man",
  },
  {
    id: 8,
    text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    language: "English",
    source: "Jane Austen, Pride and Prejudice",
  },
  {
    id: 9,
    text: "All happy families are alike; each unhappy family is unhappy in its own way.",
    language: "English",
    source: "Leo Tolstoy, Anna Karenina",
  },
  {
    id: 10,
    text: "The sky above the port was the color of television, tuned to a dead channel.",
    language: "English",
    source: "William Gibson, Neuromancer",
  },
  {
    id: 11,
    text: "You have to see it. Believe it. You can do it. That's the closest thing to a secret there is.",
    language: "English",
    source: "Richard Bach, 'Illusions: The Adventures of a Reluctant Messiah'",
  },
  {
    id: 12,
    text: "So we beat on, boats against the current, borne back ceaselessly into the past.",
    language: "English",
    source: "F. Scott Fitzgerald, 'The Great Gatsby'",
  },
  {
    id: 13,
    text: "To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life.",
    language: "English",
    source: "Walter Mitty, 'The Secret Life of Walter Mitty' by James Thurber",
  },
  {
    id: 14,
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    language: "English",
    source: "Abraham Lincoln",
  },
  {
    id: 15,
    text: "It's the possibility of having a dream come true that makes life interesting.",
    language: "English",
    source: "Paulo Coelho, 'The Alchemist'",
  },
];

const croatianQuotes = [
  {
    id: 1,
    text: "Bila je to tiha noć, noć puna zvijezda i tajanstvenih šapatima, noć u kojoj su se snovi ispunjavali i nadanja ostvarivala. Ali ispod površine te tihe noći, skrivena su bila duboka tajna i mračne sile koje su čekale svoj trenutak da se osvete svijetu.",
    language: "Croatian",
    source: "Ivana Brlić-Mažuranić, Priče iz davnine",
  },
  {
    id: 2,
    text: "Kroz gustu maglu, uz brdo obavijeno sumaglicom, kretao se mladi pastir, noseći svoju trubu. Bio je to trenutak mira i spokoja, trenutak u kojem je čovjek bio jedno s prirodom, uronjen u tišinu koja je samo povremeno bila prekinuta zvukom vlastitog koraka.",
    language: "Croatian",
    source: "Petar Zoranić, Planine",
  },
  {
    id: 3,
    text: "Sunce je polako zalazilo iza horizonta, ostavljajući za sobom crvenkastu nijansu koja se prelila nebom. More je šaptalo tiho, kao da pjeva svoju tihi hvalospjev kraju još jednog dana, dok su se ribari vraćali kućama sa svojim ulovom, puni nade i ispunjeni osjećajem zadovoljstva.",
    language: "Croatian",
    source: "Miro Gavran, Judita",
  },
  {
    id: 4,
    text: "Prošao je još jedan dan, dan pun radosti i smijeha, ali i tuge i suza. Bio je to dan kao i svaki drugi, dan u kojem su se sudarale emocije i strasti, ali i nadanja i snovi. I dok su se zvijezde počele pojavljivati na nebu, ljudi su se polako povlačili u svoje domove, ostavljajući iza sebe tragove svojih misli i osjećaja.",
    language: "Croatian",
    source: "Antun Gustav Matoš, Pjesme",
  },
  {
    id: 5,
    text: "Izlazeći iz kuće, osjetio je miris proljeća u zraku. Ptice su cvrkutale u grmlju, a cvijeće je procvjetalo na livadi. Bio je to dan pun nade i obećanja, dan u kojem je sve bilo moguće. I dok je koračao ulicom, osjećao je da mu je srce puno radosti i sreće, jer je znao da će danas biti dan koji će pamtiti zauvijek.",
    language: "Croatian",
    source: "August Šenoa, Zlatarevo zlato",
  },
  {
    id: 6,
    text: "Nebo koje nas je oplakivalo, hladno i svijetlo, kao da se radilo o nekoj izgubljenoj ljubavi ili zabranjenom rajskom voću, izgubilo se i ne zna se gdje. Ovaj grudnjak svijetla, izbušen strelama vjetra, osvjetljavalo je daleko pod sobom, ali svjetlost je bila tamnoplava i nejasna, kao svjetlost iz jedne daleke, zamrljane vitrine.",
    language: "Croatian",
    source: "Miroslav Krleža, Gospoda Glembajevi",
  },
  {
    id: 7,
    text: "Izvana se kroz noć, kao kroz rupu u oči, ukazao luković, tamni, a nad njim taman luk i tamna točka. Sve je to pamtio, sve je znao, i već ga se radovao, kroz maglu, u svojoj mutnoj spoznaji.",
    language: "Croatian",
    source: "Miroslav Krleža, Na rubu pameti",
  },
  {
    id: 8,
    text: "U ovom vremenu ne možeš ništa predosjetiti, niti osjećati, ali željeti nešto - to možeš. Čovjek je tu da želi, ako išta, a željeti znači nešto želeti - i to baš to, to ništa više!",
    language: "Croatian",
    source: "Miroslav Krleža, Balade Petrice Kerempuha",
  },
  {
    id: 9,
    text: "Nemoj se plašiti zla. Zlo ne postoji. Postoji samo nesreća. I nemoj se bojati nesreće. Ona dolazi i odlazi, kao i sreća. I ništa ne traje vječno.",
    language: "Croatian",
    source: "Miroslav Krleža, Balade Petrice Kerempuha",
  },
  {
    id: 10,
    text: "Zora je svitala bistra i crvena. Sunce, tek izašlo, bilo je zaobljeni bakarasti disk iznad grebena. Zemlja je bila mokra i zelena. Jutarnji povjetarac, hladan i svjež, dirao je visoke trave.",
    language: "Croatian",
    source: "Miroslav Krleža, Balade Petrice Kerempuha",
  },
  {
    id: 11,
    text: "Na sredini jednog neba, koje se pretvaralo u duboku provaliju tame, pojavilo se svjetlo, svjetlo i zvuk. I dok su oblaci tonuli u crnilo noći, svjetlost i zvuk postajali su sve jasniji.",
    language: "Croatian",
    source: "Miroslav Krleža, Na rubu pameti",
  },

  {
    id: 12,
    text: "Nema ljubavi bez bola.",
    language: "Croatian",
    source: "Miroslav Krleža",
  },
  {
    id: 13,
    text: "Ko drugom jamu kopa, sam u nju pada.",
    language: "Croatian",
    source: "Ivan Mažuranić",
  },
  {
    id: 14,
    text: "Kad se male ruke slože, sve se može.",
    language: "Croatian",
    source: "Josip Kozarac",
  },
  {
    id: 15,
    text: "Pametniji popušta.",
    language: "Croatian",
    source: "August Šenoa",
  },
  {
    id: 16,
    text: "Ne daj se nikad, ni kad si najslabiji!",
    language: "Croatian",
    source: "Miroslav Krleža",
  },
  {
    id: 17,
    text: "Sve je bilo, sve će proći.",
    language: "Croatian",
    source: "Ivan Slamnig",
  },
  {
    id: 18,
    text: "Živjeti je opasno.",
    language: "Croatian",
    source: "Miroslav Krleža",
  },
  {
    id: 19,
    text: "Čega se pametan stidi, time se lud ponosi.",
    language: "Croatian",
    source: "Unknown",
  },
  {
    id: 20,
    text: "Bolje vrabac u ruci, nego golub na grani.",
    language: "Croatian",
    source: "Unknown",
  },
  {
    id: 21,
    text: "Ništa nije sveto, a sve je dozvoljeno.",
    language: "Croatian",
    source: "Miroslav Krleža",
  },
];
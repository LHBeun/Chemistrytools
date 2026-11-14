// ─────────────────────────────────────────────────────────────
//  De deuren van Wonderland — het individuele avontuur per les
//  Per les: hoofdpad (verplicht), omwegen (bij 2× fout), schatkist
//  (de codevragen uit data.js + eventueel extra) en het gouden slot
//  (de geheime vraag uit data.js).
//  Antwoorden staan als SHA-256-hash ("wl|<les>|a-<id>|<waarde>").
//  Kies-vragen: per optie k = hash("a-<id>-<label>", "ja"|"nee"); er kunnen meer opties goed zijn.
//  Indelen: per rij een hash ("a-<id>-r<i>", categorie).
//  Structuren: { atomen: [[x, y, symbool?, aantalH?]], bindingen: [[i, j, orde]] }
//  Het aantal H wordt uit de covalentie berekend, tenzij aantalH is opgegeven
//  (zo kunnen we bewust foute structuren tekenen).
// ─────────────────────────────────────────────────────────────
(function () {
const P = n => `https://www.gutenberg.org/files/114/114-h/images/alice${String(n).padStart(2, "0")}a.gif`;
// Rechte keten van n C-atomen. orde: {i: orde van binding i–i+1}, h: {i: afwijkend aantal H}
const recht = (n, orde = {}, h = {}) => ({
  atomen: Array.from({ length: n }, (_, i) => [i, 0, "C", h[i]]),
  bindingen: Array.from({ length: n - 1 }, (_, i) => [i, i + 1, orde[i] || 1])
});
// Keten met een knik naar beneden: de eerste k atomen horizontaal, de rest verticaal omlaag
const knik = (n, k, orde = {}, h = {}) => ({
  atomen: Array.from({ length: n }, (_, i) => i < k ? [i, 0, "C", h[i]] : [k - 1, i - k + 1, "C", h[i]]),
  bindingen: Array.from({ length: n - 1 }, (_, i) => [i, i + 1, orde[i] || 1])
});
// Rechte keten met een methylgroep naar beneden aan atoom op
const methyl = (n, op, orde = {}) => {
  const s = recht(n, orde);
  s.atomen.push([op, 1, "C"]); s.bindingen.push([op, n, 1]);
  return s;
};

// Zijtak van n C-atomen aan atoom op, in richting [dx, dy] (bijv. [0, 1] = omlaag)
const tak = (s, op, [dx, dy], n = 1) => {
  let vorige = op; const [x, y] = s.atomen[op];
  for (let k = 1; k <= n; k++) { s.atomen.push([x + dx * k, y + dy * k, "C"]); s.bindingen.push([vorige, s.atomen.length - 1, 1]); vorige = s.atomen.length - 1; }
  return s;
};

window.WL_AVONTUUR = {
  1: {
    titel: "De gang met deuren",
    plaat: P(3),
    intro: [
      "Plof! Alice ligt op een hoop droge bladeren, in een lange, lage gang. Overal deuren — allemaal op slot.",
      "Het Witte Konijn rent voorbij. “O mijn oren en snorharen, wat ben ik laat!” Uit zijn vestzak dwarrelt een briefje…"
    ],
    duur: "Ongeveer 20 minuten. Wat je in de les niet af krijgt, maak je thuis af.",
    personages: {
      A: { naam: "Het Witte Konijn", plaat: P(2) },
      B: { naam: "De Kolderkat", plaat: P(23) },
      C: { naam: "De Hoedenmaker", plaat: P(25) },
      K: { naam: "De Rups", plaat: P(15) }
    },
    hoofdpad: [
      {
        id: "h1", type: "naam",
        verhaal: "Op het briefje staat alleen dit. “Dat is het wachtwoord,” fluistert een stemmetje uit het sleutelgat.",
        formule: "C₄H₁₀",
        vraag: "Geef de naam van deze stof.",
        hash: ["176ab1e673f05643af7a0f44f8f9245715fc2df516cfea5cb1d16fa0225d7851"],
        hint: "Tel de C-atomen. Welke stam hoort daarbij? En welke uitgang hoort bij een stof met alleen enkele bindingen?",
        omweg: "A",
        goed: "Het stemmetje giechelt. “Goed zo. Maar daarmee ben je er nog lang niet.”",
        parallel: {
          verhaal: "Terug in de gang. Onder de deurmat ligt nóg een briefje.",
          formule: "C₈H₁₈",
          vraag: "Geef de naam van deze stof.",
          hash: ["1069643449dc45ddf24034b8966ee1f5b6d6e5b908ee8450684e0a67f8ffcc3f"],
          hint: "Tel de C-atomen en zoek de stam op in het rijtje van het Konijn."
        }
      },
      {
        id: "h2", type: "naam",
        verhaal: "Op het slot van de eerste deur staat een tekening.",
        volledig: recht(5),
        vraag: "Geef de naam van deze stof.",
        hash: ["66b1ec278b254a4325113e0c38fb5ec34c9c97bbb38a55bc5cac0fad2867564a"],
        hint: "Tel de C-atomen in de keten. Zijn alle bindingen tussen de C-atomen enkel?",
        omweg: "A",
        goed: "Klik. De eerste deur zwaait open — en daarachter zit… nog een deur.",
        parallel: {
          verhaal: "Op een kastdeur in de gang staat ook een tekening.",
          volledig: recht(9),
          vraag: "Geef de naam van deze stof.",
          hash: ["27f95d805cbb65048f44937305eea3d6db2dd4c3a52f3ce1ae4fcc523b89ab14"],
          hint: "Tel de C-atomen nog eens rustig, van links naar rechts."
        }
      },
      {
        id: "h3", type: "kies",
        verhaal: "Op een glazen tafeltje liggen zes gouden sleuteltjes. Op het label van de volgende deur staat: hexaan.",
        vraag: "Kies álle sleuteltjes die passen: de structuurformules van hexaan.",
        opties: [
          { label: "A", volledig: knik(6, 4), omweg: "K", k: "1d67d9f5c858a498aabe438cb7ca4e414c483f51e31bcbec37768a9239239426" },
          { label: "B", volledig: recht(5), omweg: "A", k: "ce27d8e9ed73573b963c33463728f226ac53b8159358ca723b2d4776c2f16e90" },
          { label: "C", volledig: recht(6, {}, { 2: 1 }), omweg: "B", k: "c3b63e835774e5b2a1ba9d64e491fae8ab43a6b11b87d0ed3da79423ea4b44b5" },
          { label: "D", volledig: methyl(5, 1), omweg: "K", k: "532ef5331f7a4a2c74c9556c8ba4f9e4e6e28d6a038def4434ed627e8dc43607" },
          { label: "E", volledig: recht(6), omweg: "A", k: "af7faa62e6ea99dc215d170a9529810cec246b19cc1455f605c7ddda3baeb265" },
          { label: "F", volledig: recht(6, {}, { 3: 3 }), omweg: "B", k: "6a5ae99a76713986d4c2a3a73dd581f998f5b05575db67bba218f06b817fd32a" }
        ],
        hint: "Controleer bij elk sleuteltje: zijn er 6 C-atomen in één keten achter elkaar, en heeft elk C-atoom precies 4 bindingen?",
        goed: "Twee sleuteltjes passen — en allebei draaien ze soepel om.",
        parallel: {
          verhaal: "Achter de deur ligt weer een sleutelbos. Op dit label staat: butaan.",
          vraag: "Kies álle sleuteltjes die passen: de structuurformules van butaan.",
          opties: [
            { label: "A", volledig: recht(3), k: "cc3f76be74426fbcf46c3d3296c8746c5236fa1bd345c1fdba5568c154bdb6a5" },
            { label: "B", volledig: knik(4, 2), k: "7a7a50e55d3c6c6ec9518f750904d94f4a89e5b27c23f3a0b557cbf08a1efce8" },
            { label: "C", volledig: recht(4, {}, { 1: 3 }), k: "b05be94a6591cbdf6602f29e24e87acff6119bdcb2e1ee15043441becc5d78e5" },
            { label: "D", volledig: methyl(3, 1), k: "6b19f18524e3dc7bd130674570d62dc0a67bf401cfa16df0909ee0b3784a74b3" },
            { label: "E", volledig: recht(4, {}, { 2: 1 }), k: "cb3d53ac9ec482c9ea83f933c1681f2186cdbe8be4c8e476fc89b26fceadd71b" },
            { label: "F", volledig: recht(4), k: "ff1ae4872cab28222f76f1343fc432776abeb5beff300581384428873a2d4271" }
          ],
          hint: "Volg bij elk sleuteltje de keten van uiteinde tot uiteinde. Zitten er 4 C-atomen achter elkaar, en heeft elk C-atoom 4 bindingen?"
        }
      },
      {
        id: "h4", type: "indeling",
        verhaal: "Op het tafeltje staan vijf flesjes. “Pas op,” waarschuwt het stemmetje. “Ze lijken op elkaar, maar ze zijn het niet.”",
        vraag: "Wat voor soort stof zit er in elk flesje?",
        items: ["C₅H₁₀", "C₇H₁₂", "C₆H₁₄", "C₃H₆", "C₅H₈"],
        keuzes: ["alkaan", "alkeen", "alkyn"],
        rijHash: ["9ac65ed9af47d2a8b3729d179145c780ac1a51547442d9cf9676af5be5d46a9a", "0552670e486828a59c0049185b1fa04c64b9521846d806c70a5041d8e269e0e4", "6d767705610b61b7c82c32bfc7e542c389abc3e81d2f0c13fa35a57c17a5dfb3", "ebbf24a936b7ba1fe3cdc496f3127d544563ec46c4bda6e844d0a7e679297c4e", "92253c72af3a6fb4aa2bd07a6336000f38f1a890b60ab096a6b7c396d065332b"],
        hint: "Reken bij elk flesje uit hoeveel H-atomen een alkaan met dat aantal C-atomen zou hebben, en vergelijk.",
        omweg: "C",
        goed: "Alice zet de flesjes netjes op een rij.",
        parallel: {
          verhaal: "In een la vindt Alice nog vijf flesjes.",
          vraag: "Wat voor soort stof zit er in elk flesje?",
          items: ["C₄H₁₀", "C₄H₆", "C₈H₁₆", "C₆H₁₀", "C₁₀H₂₀"],
          keuzes: ["alkaan", "alkeen", "alkyn"],
          rijHash: ["8fa6b9ea6609740e4660bb95ab8ff397a42a917d7942be6004ea9c649f91f802", "531c12e6372e7a8c41bd5e93854b238760b5b05d3fa91564c3c25b631ce27782", "3248c4bc515e600534ba053098d312c1c493dec4e6977d8936d6b34a8279e113", "2e1986744cccec62cabc73fe45bba825e1e56c59ed41625a66f9de56f2c15643", "f2cf429ed92998cc4e4d42407888801ae3175bbbd6b07e84f64f500f89ef0b89"],
          hint: "Hoeveel H heeft een alkaan met hetzelfde aantal C-atomen? Hoeveel H minder heeft een alkeen, en een alkyn?"
        }
      },
      {
        id: "h5", type: "kies",
        verhaal: "Aan een flesje hangt een kaartje: “Drink me — maar alleen met een alkyn.” Op de grond liggen zes kaartjes met een tekening.",
        vraag: "Kies álle kaartjes met een alkyn.",
        opties: [
          { label: "A", volledig: recht(5, { 0: 2 }), omweg: "C", k: "017df7e45c49cc5317f6148f0504ae06bd7c5a83c26efe3a33da76c7ccf3c737" },
          { label: "B", volledig: recht(5, { 1: 3 }), omweg: "C", k: "661abb77f819101c95df9c376a07c4a7b81e754459cb2487cad17ad864107eae" },
          { label: "C", volledig: recht(5, { 0: 2 }, { 1: 2 }), omweg: "B", k: "279929268934d30bff6aaee1cba84471a0b6860efd78279f01b16cd660b827bf" },
          { label: "D", volledig: knik(4, 3, { 0: 3 }), omweg: "K", k: "d71a9aa17d79fa63e545da816d3d72deb39b09709167e233b9e6e061f613f755" },
          { label: "E", volledig: recht(5), omweg: "C", k: "a36d8ee504ed9a51e84aa5cb35fdfeb9cdba27cf977325ef812595d4c8889fb3" },
          { label: "F", volledig: knik(4, 3, { 1: 2 }), omweg: "C", k: "63e3b7076191a5d89387b77df406e40d920a6e0a74e1f1e10ddc9de42bf470e6" }
        ],
        hint: "Waaraan herken je een alkyn in een structuurformule? Tel daarna bij elk C-atoom de bindingen.",
        goed: "Alice drinkt. Ze krimpt en krimpt… tot ze precies klein genoeg is.",
        parallel: {
          verhaal: "Er staat nog een flesje: “Drink me — maar alleen met een alkeen.”",
          vraag: "Kies álle kaartjes met een alkeen.",
          opties: [
            { label: "A", volledig: recht(4, {}, { 1: 1 }), k: "3800da108699ddf693aa31b90b35422c22927cc536a3c6899c5e2677700266e6" },
            { label: "B", volledig: knik(5, 3, { 0: 2 }), k: "6ec18957262d92b780a163f87d083447546495eba1e531d876724658aaf31ba7" },
            { label: "C", volledig: recht(4, { 0: 3 }), k: "926b85633d6b0983616202a7ce791e90b093126a1bf9cd36a6d6cd5442c19bae" },
            { label: "D", volledig: recht(4), k: "904949bf18ba87dd5eb174eb75bcfbc8924c65e42cf279f24b7b6826be3dd0f1" },
            { label: "E", volledig: recht(4, { 1: 2 }), k: "1933aa2bfa02f08a404d1444a4569367994da20446e4ca8f8a81f1d8c614f2c8" },
            { label: "F", volledig: knik(5, 3), k: "2d75bbaa31cea213f9d8d788c40e21fa6b2be0de129395be3af2b49a70136954" }
          ],
          hint: "Waaraan herken je een alkeen? En klopt het aantal bindingen bij elk C-atoom?"
        }
      },
      {
        id: "h6", type: "getal",
        verhaal: "Achter een gordijn zit een piepklein deurtje. Op het slot is een molecuul getekend — maar zónder H-atomen.",
        keten: { atomen: ["C", "C", "C", "C", "C", "C"], bindingen: [1, 1, 1, 1, 1] },
        vraag: "Hoeveel H-atomen heeft dit molecuul?",
        hash: ["6e272bdf85cb9f91f9e402c4750a15716f8a9abcd857c75ea7dda3e4ccacec50"],
        hint: "Een C-atoom heeft altijd 4 bindingen. Hoeveel daarvan gaan bij elk C-atoom al naar andere C-atomen?",
        omweg: "B",
        goed: "Het slotje springt open. Achter het deurtje ligt de mooiste tuin die Alice ooit zag.",
        parallel: {
          verhaal: "Naast het deurtje hangt nog een slotje, ook zonder H-atomen getekend.",
          keten: { atomen: ["C", "C", "C", "C"], bindingen: [1, 1, 1] },
          vraag: "Hoeveel H-atomen heeft dit molecuul?",
          hash: ["15a543eb28418300aaf1304482d07e0c6746bce2a2c98353817cb93b4dad2d46"],
          hint: "Tel per C-atoom: hoeveel bindingen naar C, en hoeveel H zijn er dan nog nodig om op 4 te komen?"
        }
      }
    ],
    omwegen: {
      A: {
        personage: "A",
        verhaal: "Het Witte Konijn kijkt op zijn horloge. “Geen tijd, geen tijd! Tel gewoon de C-atomen, dan weet je de naam!”",
        voorbeeld: {
          tekst: "Bij een alkaan bepaalt het aantal C-atomen de <b>stam</b> van de naam. Achter de stam komt <b>-aan</b>.",
          stammen: true,
          uitwerking: "Voorbeeld: C₃H₈ heeft <b>3</b> C-atomen → stam <b>prop-</b> → <b>propaan</b>."
        },
        makkelijk: {
          type: "naam",
          verhaal: "“Nu jij, snel!” zegt het Konijn, en tikt op zijn horloge.",
          formule: "C₂H₆",
          vraag: "Geef de naam van deze stof.",
          hash: ["77d204949b223b8e2e423d38a42c2416078fff915951229de838f37a9ed0115d"],
          hint: "Tel de C-atomen en zoek de stam op in het rijtje hierboven."
        }
      },
      B: {
        personage: "B",
        verhaal: "Eerst verschijnt alleen een grijns. Dan de rest van de Kolderkat. “Elk koolstofatoom heeft vier armen,” spint hij. “Niet drie. Niet vijf. Tel maar.”",
        voorbeeld: {
          tekst: "Elk C-atoom heeft precies <b>4 bindingen</b>. Een H-atoom heeft er <b>1</b>.",
          structuren: [{ label: "ethaan", volledig: recht(2) }],
          uitwerking: "In ethaan heeft elk C-atoom 1 binding naar het andere C-atoom en 3 naar H-atomen: samen <b>4</b>."
        },
        makkelijk: {
          type: "kies", enkel: true,
          verhaal: "De Kat tekent met zijn staart een molecuul in het zand.",
          volledig: recht(3, {}, { 1: 1 }),
          vraag: "Klopt deze structuurformule?",
          opties: [{ label: "Ja", tekst: "Ja" }, { label: "Nee", tekst: "Nee" }],
          hash: ["27b027ba34be1a36c48673d5d0d30bed818193a4724dfe1ece42f5de4d126cbf"],
          hint: "Tel de bindingen van het middelste C-atoom."
        }
      },
      C: {
        personage: "C",
        verhaal: "“Geen plaats! Geen plaats!” roept de Hoedenmaker. “Behalve voor waterstof: aan de uiteinden drie, in het midden twee!”",
        voorbeeld: {
          tekst: "In een alkaan heeft een C-atoom aan het <b>uiteinde 3 H</b> en een C-atoom in het <b>midden 2 H</b>. Daarom geldt voor elk alkaan <b>CₙH₂ₙ₊₂</b>. Een dubbele binding kost 2 H, een drievoudige binding 4 H.",
          structuren: [
            { label: "propaan · alkaan · C₃H₈", volledig: recht(3) },
            { label: "propeen · alkeen · C₃H₆", volledig: recht(3, { 0: 2 }) },
            { label: "propyn · alkyn · C₃H₄", volledig: recht(3, { 0: 3 }) }
          ],
          uitwerking: "Propaan: 3 + 2 + 3 = <b>8</b> H-atomen. Dat klopt met 2 × 3 + 2 = 8."
        },
        makkelijk: {
          type: "getal",
          verhaal: "“Een kopje thee als je dit weet,” zegt de Hoedenmaker.",
          formule: "pentaan",
          vraag: "Hoeveel H-atomen heeft één molecuul pentaan?",
          hash: ["641cb1d3a544cd8071245cacb281bd1169693fd9d9610fbe2af7fb4cde2c87f8"],
          hint: "Pentaan heeft 5 C-atomen: twee aan de uiteinden en drie in het midden."
        }
      },
      K: {
        personage: "K",
        verhaal: "De Rups kronkelt over zijn paddenstoel. “Kijk,” zegt hij traag. “Ik buig… ik kronkel… maar ik ben nog steeds één rups.”",
        voorbeeld: {
          tekst: "Een keten mag in een tekening een <b>knik</b> hebben. Dat verandert niets aan de stof: volg de keten van uiteinde tot uiteinde en tel de C-atomen. Een <b>vertakking</b> is iets anders: daar zit één C-atoom aan <b>drie</b> andere C-atomen vast.",
          structuren: [
            { label: "pentaan", volledig: recht(5) },
            { label: "ook pentaan: alleen een knik", volledig: knik(5, 3) },
            { label: "vertakt: een andere stof", volledig: methyl(4, 1) }
          ],
          uitwerking: "In de eerste twee tekeningen zit elk C-atoom aan hoogstens <b>twee</b> andere C-atomen vast: één keten van 5. In de derde zit het tweede C-atoom aan <b>drie</b> C-atomen vast."
        },
        makkelijk: {
          type: "getal",
          verhaal: "“Tel mijn ringen,” zegt de Rups, en hij kronkelt nog wat verder.",
          volledig: {
            atomen: [[0, 0], [1, 0], [1, 1], [2, 1], [3, 1], [3, 2]],
            bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1]]
          },
          vraag: "Hoeveel C-atomen telt de keten van dit molecuul?",
          hash: ["0735791ddab542362f668aba2a57d5cdb0eeee1296fcdcacbe9d7daf02e48b85"],
          hint: "Begin bij een uiteinde en volg de bindingen, ook om de hoeken."
        }
      }
    },
    kluis: {
      intro: "In de tuin staat een oude schatkist met vijf draaischijven. Wie hem opent, krijgt een edelsteen. Werk in je schrift en teken waar dat helpt. Als je alle getallen hebt ingevuld, zie je per getal of het klopt.",
      extra: [
        {
          tekst: "In een geheime la ligt nog een flesje.",
          formule: "een alkaan met een molecuulmassa van 72,15 u",
          vraag: "Hoeveel C-atomen heeft dit molecuul?",
          hash: "32e57a59a150ad44cab10b8f80620d9f5d5a9ae783e7af75199fa4b3bbcb7bc6",
          hint: "Reken de molecuulmassa uit van een paar alkanen (C = 12,01 u, H = 1,008 u). Welke komt uit op 72,15 u?"
        }
      ]
    },
    geheim: {
      intro: "Achter de stapel bladeren glinstert een gouden slotje. Het is maar voor heel weinig mensen te openen."
    },
    einde: "Alice is door het deurtje. Maar het avontuur is nog niet voorbij: in de tuin wacht een schatkist."
  },
  2: {
    titel: "Het huis van het Witte Konijn",
    plaat: P(2),
    intro: [
      "Het Witte Konijn ziet Alice voor zijn dienstmeid aan. “Mary Ann! Haal mijn handschoentjes en mijn waaier, vlug!”",
      "Alice rent naar het huisje met het koperen bordje: W. RABBIT. Binnen staan overal potjes en flesjes — met etiketten in het haastige, slordige handschrift van het Konijn."
    ],
    duur: "Ongeveer 20 minuten. Wat je in de les niet af krijgt, maak je thuis af.",
    personages: {
      D: { naam: "Het Witte Konijn", plaat: P(2) },
      E: { naam: "De Hoedenmaker", plaat: P(25) },
      F: { naam: "De Kolderkat", plaat: P(23) }
    },
    hoofdpad: [
      {
        id: "h1", type: "naam",
        verhaal: "In de hal van het huisje staat een kast vol potjes. Op het eerste etiket heeft het Konijn alleen een tekening gekrabbeld — de naam is uitgeveegd.",
        volledig: tak(recht(7), 1, [0, 1]),
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["fc403496015ab008520f8062439a36db280cacac54ecdd8a67c29afdd1be52dc"],
        hint: "Zoek eerst de langste keten. Wat blijft er dan over als zijtak, en op welk C-atoom van de keten zit die?",
        omweg: "D",
        goed: "Alice schrijft de naam netjes op een nieuw etiket. De kastdeur klikt open.",
        parallel: {
          verhaal: "Op de onderste plank staat nog een potje met een uitgeveegd etiket.",
          volledig: tak(recht(8), 6, [0, 1]),
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["16ef224c8f67a9c82c6a77d95edb49b55c8bcef624529a705576a5795ab442d5"],
          hint: "Welke kant van de keten ligt het dichtst bij de zijtak? Begin daar met nummeren."
        }
      },
      {
        id: "h2", type: "kies",
        verhaal: "Op een la staat in sierlijke letters: 2,3-dimethylpentaan. In de la liggen zes tekeningen. “Er zitten er een paar tussen die ik zelf heb gemaakt,” mompelt een stemmetje. “En een paar die ik verknoeid heb.”",
        vraag: "Kies álle tekeningen van 2,3-dimethylpentaan.",
        opties: [
          { label: "A", volledig: tak(tak(recht(5), 1, [0, 1]), 1, [0, -1]), omweg: "F", k: "e81974e58d13cc747127afe8605d115a9a7acf22650db59bfc4c7f975f3c6d4b" },
          { label: "B", volledig: tak(tak(recht(5), 2, [0, 1]), 3, [0, -1]), omweg: "E", k: "c738690ac71683edb79c8a1ddfba268a3b77b10e49daacac176a3580b824dfa0" },
          { label: "C", volledig: tak(tak(recht(6), 1, [0, -1]), 2, [0, 1]), omweg: "D", k: "c136bccfb0500c9b35e5cb253f2f0f13d8914a68d0f548aeeef92b25be1a164a" },
          { label: "D", volledig: tak(tak(recht(5), 1, [0, 1]), 2, [0, -1]), omweg: "F", k: "22acb9e177cd41104a36a2833cef9b755c31655d17758d305b58914fed51cb95" },
          { label: "E", volledig: tak(tak(tak(recht(5), 1, [0, 1]), 2, [0, -1]), 3, [0, 1]), omweg: "F", k: "2c917c101d168b23fae667ca2c7838e062b69aaa15206868fa84eab479aeea0b" },
          { label: "F", volledig: tak(tak(knik(5, 4), 1, [0, 1]), 2, [0, -1]), omweg: "D", k: "82f6721298bfb66394c9cd8ca9a9042d4f11b52564094ecd81adad26c22a2710" }
        ],
        hint: "Bepaal bij elke tekening zelf de naam: langste keten, zijtakken, en nummeren vanaf de kant met de laagste plaatsnummers.",
        goed: "Alice legt de juiste tekeningen bovenop de la. Die schuift vanzelf dicht — en de trap naar boven verschijnt.",
        parallel: {
          verhaal: "Onder aan de trap staat een tweede la, met het etiket 2,4-dimethylhexaan.",
          vraag: "Kies álle tekeningen van 2,4-dimethylhexaan.",
          opties: [
            { label: "A", volledig: tak(tak(recht(6), 1, [0, 1]), 4, [0, 1]), k: "3b9a0c298f1d557f0324aa71d0f3278afc09210a89ffbf054566aba57ac7815e" },
            { label: "B", volledig: tak(tak(recht(6), 2, [0, 1]), 4, [0, 1]), k: "8765b8eaece54fc14e218e4e520e25bae8ae7e9d843f8ee7ea8af5af3b5b8eeb" },
            { label: "C", volledig: tak(tak(recht(6), 1, [0, 1]), 1, [0, -1]), k: "014661c556108f3dd0f70b5d5dddd43228642bf50ae3f2f772e9c79377a6b1e4" },
            { label: "D", volledig: tak(tak(recht(7), 1, [0, 1]), 3, [0, 1]), k: "36b630a8357d156a531c33ba8955cb8f3eec697c7686b4e2427da7804bf1ab1a" },
            { label: "E", volledig: tak(tak(knik(6, 5), 1, [0, 1]), 3, [0, -1]), k: "cb6ed37bfcc0f9370d79fb60f090c63a6d9d3b53853478da509ec623dcdbe0d7" },
            { label: "F", volledig: tak(tak(tak(recht(6), 1, [0, 1]), 3, [0, 1]), 3, [0, -1]), k: "df3b9c4af991b2ea69473181073c60c98422f5d739f3e4dc8fef6192d58b7c89" }
          ],
          hint: "Volg bij elke tekening de langste keten, ook om de hoek. Nummer daarna vanaf beide kanten en kies de laagste plaatsnummers."
        }
      },
      {
        id: "h3", type: "naam",
        verhaal: "Halverwege de trap hangt een lijstje met een vreemd gekronkeld molecuul. Het bordje eronder is onleesbaar geworden.",
        volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [1, 1], [1, 2]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [1, 6, 1], [6, 7, 1]] },
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["ad5dc8e9bd16dfc20f5e2687bc52e93eee84d7757de6dc025781503a10d2599e"],
        hint: "Hoe lang is de langste keten echt? Probeer alle routes van uiteinde tot uiteinde, ook om de hoek.",
        omweg: "D",
        goed: "Alice verbetert het bordje. Het lijstje hangt ineens recht.",
        parallel: {
          verhaal: "Op de overloop hangt nog een lijstje, ook zonder leesbaar bordje.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [1, 1], [1, 2], [1, 3]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [1, 6, 1], [6, 7, 1], [7, 8, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["b66c011c62268040cfdd192f0bdd5dffc71b5ee9cd41bd9759d3cf6fc3c74c75"],
          hint: "De langste keten hoeft niet recht te lopen. Tel alle routes van uiteinde tot uiteinde."
        }
      },
      {
        id: "h4", type: "naam",
        verhaal: "In de slaapkamer van het Konijn staat een flesje met twee verschillende zijtakken. Het etiket is half afgescheurd.",
        volledig: tak(tak(recht(5), 1, [0, -1]), 2, [0, 1], 2),
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["3fbccefeab3c10edee2c0a2d1ce8b1f866c8f1c22f7c6508ec9da32e2f98ce2a"],
        hint: "Benoem de zijtakken en geef ze een plaatsnummer. In welke volgorde zet je ze in de naam?",
        omweg: "F",
        goed: "“Precies zo moet het,” zegt een stemmetje uit de kast. “Eindelijk iemand die kan spellen.”",
        parallel: {
          verhaal: "Naast het bed staat nog een flesje met twee soorten zijtakken.",
          volledig: tak(tak(recht(6), 2, [0, 1], 2), 4, [0, -1]),
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["4fef6bd2ba7d12f82a7b2a516bae811c690db007deb18ccd35029c9e452998a4"],
          hint: "Nummer de keten eerst vanaf beide kanten: welke kant geeft de laagste plaatsnummers? Pas daarna kies je de volgorde in de naam."
        }
      },
      {
        id: "h5", type: "naam",
        verhaal: "Op het nachtkastje ligt een doosje met een tekening op het deksel. Het etiket is eraf gevallen.",
        volledig: recht(7, { 3: 2 }),
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["d64eaa21186e6adb9cfbe502231cfb0b01c017d6b6bbd7c476aa1772292d54c8"],
        hint: "Nummer vanaf beide kanten. Bij welk nummer begint de dubbele binding dan?",
        omweg: "E",
        goed: "Het doosje springt open. Er zitten waaiertjes en witte handschoentjes in.",
        parallel: {
          verhaal: "Onder het doosje ligt nog een doosje, ook met een tekening op het deksel.",
          volledig: knik(8, 5, { 5: 2 }),
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["0a7830bbec6103799ccc91aea1bf1db0394c693e1f6d3ff7a545d8420f173681"],
          hint: "Volg de keten van uiteinde tot uiteinde. Vanaf welk uiteinde krijgt de dubbele binding het laagste nummer?"
        }
      },
      {
        id: "h6", type: "kies",
        verhaal: "Bij het raam staat een flesje met het etiket 4-methylhex-2-yn. Ernaast liggen zes kaartjes.",
        vraag: "Kies álle kaartjes met de structuurformule van 4-methylhex-2-yn.",
        opties: [
          { label: "A", volledig: tak(recht(6, { 1: 2 }), 3, [0, 1]), omweg: "E", k: "535e89afebb9a53767ad599475ac8add3323734ebdc50574390b1fa624eed9bb" },
          { label: "B", volledig: tak(recht(6, { 3: 3 }), 2, [0, -1]), omweg: "E", k: "253b81b00c3474078465ce5ccc89a7f94f88721f24ad4c8b05404c32d984d694" },
          { label: "C", volledig: tak(recht(6, { 1: 3 }), 4, [0, 1]), omweg: "E", k: "e90bdcb84b6a63d46233cbe287179be70f82c18ddccda5969296cffac9a8f6ba" },
          { label: "D", volledig: tak(tak(recht(6, { 1: 3 }), 3, [0, 1]), 3, [0, -1]), omweg: "F", k: "100250385ec621bfcb5afe097f67882d25e33d5fb40525e84f42d756c19d5d74" },
          { label: "E", volledig: tak(recht(6, { 1: 3 }), 3, [0, 1]), omweg: "E", k: "0eca0612ab1be1b826e1d4ecd37810304a006887591d4e1b8bdcf9954b21759f" },
          { label: "F", volledig: tak(recht(7, { 1: 3 }), 3, [0, 1]), omweg: "D", k: "a7ba4204dbc222330e82adb22bab8246adb618e8d9a221ae7cedd8bd0ca698a8" }
        ],
        hint: "Geef elke tekening zelf een naam. Welke binding zit erin, en vanaf welke kant nummer je?",
        goed: "Alice drinkt. En groeit. En groeit…",
        parallel: {
          verhaal: "Op de vensterbank staat nog een flesje: 5-methylhex-2-een.",
          vraag: "Kies álle kaartjes met de structuurformule van 5-methylhex-2-een.",
          opties: [
            { label: "A", volledig: tak(recht(6, { 2: 2 }), 4, [0, 1]), k: "086d778eda2c492332b7c1fe065550f2b7e832f68a6309d95de51c438839daa5" },
            { label: "B", volledig: tak(knik(6, 4, { 1: 2 }), 4, [1, 0]), k: "afd8200ddd94a945a62ab4ef023ef4c76dbe9cf9d8c8e95b30e67fa0414a5e1a" },
            { label: "C", volledig: tak(recht(6, { 1: 2 }), 3, [0, -1]), k: "0ba5c938469b6df0cf34524a6b039b9f82c1913f5b3c84a4b72481f2f2891ec4" },
            { label: "D", volledig: tak(recht(6, { 3: 2 }), 1, [0, 1]), k: "8b17f4bc29c739d6c0208ae980462af117b6d24130129617505b5b16974d5119" },
            { label: "E", volledig: tak(recht(6, { 1: 3 }), 4, [0, -1]), k: "5fb5ac3e4ace42423f85088324f0d935cfd529449bdb109848f115475de079bd" },
            { label: "F", volledig: tak(recht(7, { 1: 2 }), 4, [0, 1]), k: "94286ae53290d2c2677677150dc8de1d3b8238cf9d15591b85a3929b74f1641b" }
          ],
          hint: "Zoek de langste keten, nummer vanaf de kant die het dichtst bij de dubbele binding zit, en kijk dan waar de zijtak zit."
        }
      }
    ],
    omwegen: {
      D: {
        personage: "D",
        verhaal: "Het Witte Konijn rent de kamer in en struikelt over zijn eigen voeten. “Mijn handschoentjes! Mijn waaier! En meet die keten toch eens goed, Mary Ann!”",
        voorbeeld: {
          tekst: "De <b>langste keten</b> bepaalt de stamnaam. Die hoeft niet recht getekend te zijn: hij kan <b>om de hoek</b> lopen. Probeer daarom alle routes van uiteinde tot uiteinde. Wat overblijft, zijn de zijtakken.",
          structuren: [{ label: "langste keten: 8 C-atomen, om de hoek", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [1, 1], [1, 2]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [1, 7, 1], [7, 8, 1]] } }],
          uitwerking: "Horizontaal tel je 7 C-atomen. Maar de route die linksonder begint en dan naar rechts loopt, telt er <b>8</b>: stam <b>octaan</b>. Wat overblijft is één CH₃-groep: een <b>methyl</b>. Van onderaf genummerd zit die op C-atoom <b>3</b>: <b>3-methyloctaan</b>."
        },
        makkelijk: {
          type: "getal",
          verhaal: "“Tel jij maar,” hijgt het Konijn. “Ik heb geen tijd.”",
          volledig: tak(recht(5), 2, [0, 1], 4),
          vraag: "Hoeveel C-atomen telt de langste keten van dit molecuul?",
          hash: ["79f6c81c631cfe55e1d02d45466b2ec20320ef7f664f71662fa2ae1f3080d234"],
          hint: "Begin bij een uiteinde en volg de keten, ook naar beneden. Probeer elke route."
        }
      },
      E: {
        personage: "E",
        verhaal: "Uit de kast stapt de Hoedenmaker, met een kopje thee in de ene hand en een liniaal in de andere. “Je telt van de verkeerde kant! Altijd van de kant die het dichtst bij is!”",
        voorbeeld: {
          tekst: "Nummer de langste keten vanaf de kant waarbij de plaatsnummers <b>zo laag mogelijk</b> worden. Zit er een dubbele of drievoudige binding in, dan gaat die <b>vóór</b> de zijtakken: de binding krijgt het laagste nummer.",
          structuren: [
            { label: "2,5-dimethylheptaan", volledig: tak(tak(recht(7), 1, [0, 1]), 4, [0, 1]) },
            { label: "4-methylhex-1-een", volledig: tak(recht(6, { 4: 2 }), 2, [0, 1]) }
          ],
          uitwerking: "Bovenste: van links genummerd 2 en 5, van rechts 3 en 6. Dus <b>2,5-dimethylheptaan</b>. Onderste: van links genummerd krijgt de methylgroep 3, maar de dubbele binding 5. Van rechts krijgt de dubbele binding <b>1</b>. De binding wint: <b>4-methylhex-1-een</b>."
        },
        makkelijk: {
          type: "getal",
          verhaal: "“Nog een kopje?” vraagt de Hoedenmaker. “Alleen als je dit plaatsnummer weet.”",
          volledig: recht(7, { 4: 3 }),
          vraag: "Welk plaatsnummer staat in de naam van deze stof?",
          hash: ["57e4c95a1e35f358faf527ee1785f38736eb7104b77b2e7126e7392a37b78c33"],
          hint: "Nummer vanaf de kant die het dichtst bij de drievoudige binding zit."
        }
      },
      F: {
        personage: "F",
        verhaal: "Boven op de kast verschijnt een grijns, en dan de Kolderkat. “Een naam is net een zin,” spint hij. “Alles in de goede volgorde, anders snapt niemand het.”",
        voorbeeld: {
          tekst: "Zo bouw je de naam op: <b>plaatsnummer(s) – zijtak – stam</b>. Meer zijtakken van dezelfde soort? Zet er <b>di-</b> (2) of <b>tri-</b> (3) voor. Komma's tussen getallen, een streepje tussen getal en woord. Verschillende soorten zijtakken zet je op <b>alfabet</b>: ethyl vóór methyl. Di- en tri- tellen daarbij niet mee.",
          structuren: [{ label: "4-ethyl-2,3-dimethylheptaan", volledig: tak(tak(tak(recht(7), 1, [0, 1]), 2, [0, -1]), 3, [0, 1], 2) }],
          uitwerking: "Langste keten: 7 C-atomen (heptaan). Van links genummerd: methyl op 2 en 3, ethyl op 4. Van rechts zou het 4, 5 en 6 worden: hoger. Ethyl komt vóór methyl: <b>4-ethyl-2,3-dimethylheptaan</b>."
        },
        makkelijk: {
          type: "naam",
          verhaal: "“Nu jij,” zegt de Kat, en verdwijnt tot alleen zijn grijns er nog is.",
          volledig: tak(tak(recht(6), 2, [0, 1]), 3, [0, -1]),
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["808bb189280efe76a1399a464c9470302e2d2c94255a234e49e32159f0bdfc31"],
          hint: "Twee zijtakken van dezelfde soort: welk voorvoegsel hoort daarbij? Vergeet de komma en het streepje niet."
        }
      }
    },
    kluis: {
      intro: "Onder het bed staat een schatkist met vier draaischijven. Wie hem opent, krijgt een edelsteen. Werk in je schrift en teken waar dat helpt. Als je alle getallen hebt ingevuld, zie je per getal of het klopt."
    },
    geheim: {
      intro: "Achter op de bovenste plank glinstert een gouden slotje, half verstopt achter een stoffig potje."
    },
    einde: "Alice is zo groot geworden dat haar arm uit het raam steekt. Maar de schatkist onder het bed wacht nog…"
  },
  3: {
    titel: "De Rups",
    plaat: P(15),
    intro: [
      "Alice is nu zo klein als een duim. Ze kijkt over de rand van een paddenstoel — recht in de ogen van een grote blauwe Rups met een waterpijp.",
      "“Ik weet niet meer wie ik ben,” zegt Alice. “Ik ben nog van dezelfde dingen gemaakt, maar ik ben niet meer dezelfde.” De Rups blaast een kringetje rook. “Dat,” zegt hij, “gaan we uitzoeken.”"
    ],
    duur: "Ongeveer 20 minuten. Wat je in de les niet af krijgt, maak je thuis af.",
    personages: {
      G: { naam: "De Rups", plaat: P(15) },
      H: { naam: "De Hoedenmaker", plaat: P(25) },
      K: { naam: "De Kolderkat", plaat: P(23) }
    },
    hoofdpad: [
      {
        id: "h1", type: "indeling",
        verhaal: "“Who… are… YOU?” vraagt de Rups. Hij legt zes kaartjes neer, met op elk kaartje twee namen. “Zijn dat twee verschillende stoffen met dezelfde dingen erin? Of dezelfde stof met een andere naam? Of hebben ze niets met elkaar te maken?”",
        vraag: "Wat geldt voor elk paar?",
        items: ["heptaan + 2,3-dimethylpentaan", "octaan + oct-1-een", "3-methylheptaan + 5-methylheptaan", "pent-1-yn + 3-methylbut-1-yn", "2-methylbutaan + 2-methylbut-1-een", "1-methylhexaan + heptaan"],
        keuzes: ["isomeren", "dezelfde stof", "geen isomeren"],
        rijHash: ["f39433225a3b2ee26145e734a6519e3e7fa033b3230c8172943a67adfec50c03", "6728775bd79f178606c1f7840e56b702f218c174cf5f2a4eca0d58258e51eadc", "d2b730f0502d04ad0168eca1949a32e8d914d08fce9a56c71cc05254cf2bafda", "7a800e2ffde3cd765bfbd5b5e426b07d6db5e0b20db6675a5300fea9db9d6fe9", "9e53c93db66873a3cc076ef737c559a131a09dd11e50c428a6d2c26bf723d9e9", "f786f3c31c154e1764e3f5541f547c64901ed0a79c66e3fc9fae8065baa109ea"],
        hint: "Teken in je schrift bij elke naam de structuur en bepaal de molecuulformule. Hebben twee namen dezelfde structuur, dan zijn ze dezelfde stof.",
        omweg: "G",
        goed: "De Rups blaast een kringetje rook. “Hm. Je weet in elk geval wat je ziet.”",
        parallel: {
          verhaal: "De Rups schudt de kaartjes en legt er zes nieuwe neer.",
          vraag: "Wat geldt voor elk paar?",
          items: ["2-ethylhexaan + 3-methylheptaan", "nonaan + 2,2-dimethylheptaan", "hex-1-yn + hex-1-een", "oct-2-yn + oct-3-yn", "pent-4-een + pent-1-een", "hex-1-een + 2-methylpent-2-een"],
          keuzes: ["isomeren", "dezelfde stof", "geen isomeren"],
          rijHash: ["2cff026ffb7ec9db9551fee1ba9fa2164a92a484d38c520c371f90758e745404", "eaf639615f0f413e3c1a5048199e3821495f1ec3fb0e278bead7e913c3e38062", "7a53eba9c49f74ef1ad6d0db01253848eb0a63c91a49f86bd9fa4ffad6ea428f", "43fe05cbaf5a5eafda1a68a742a2ea94f80f5365ebeda93f6bd8d3fc51fe6c83", "d8ccfb12a1f1c0cda8af0745d72fef25b835ba5a9de8ee60115581a595e0fc7c", "d28b9cd25eee987aa5320c8e95cdd4b3e6faff6c4bb95115717920525db2433b"],
          hint: "Bepaal bij elke naam de molecuulformule. Dezelfde formule maar een andere structuur: isomeren. Dezelfde structuur: dezelfde stof."
        }
      },
      {
        id: "h2", type: "getal",
        verhaal: "“Ik ken een stof met zes koolstofatomen en een drievoudige binding,” zegt de Rups. “Zonder vertakkingen. Maar welke bedoel ik?”",
        formule: "C₆H₁₀ — onvertakt, alkyn",
        vraag: "Hoeveel verschillende stoffen passen bij deze beschrijving?",
        hash: ["2bffdc57be916168b5feff181a3bd397c6e456bc7d739d2b244d007b1b6c90d4"],
        hint: "Teken in je schrift alle mogelijkheden en geef elke stof een naam. Hoeveel verschillende namen houd je over?",
        omweg: "H",
        goed: "“Precies zoveel,” zegt de Rups. “Niet meer, niet minder.”",
        parallel: {
          verhaal: "“En nu met een dubbele binding,” zegt de Rups, “en wat langer.”",
          formule: "C₈H₁₆ — onvertakt, alkeen",
          vraag: "Hoeveel verschillende stoffen passen bij deze beschrijving?",
          hash: ["20f9afa2f01c29a9a48efeb980d72ed511d8814c5c86647f3222ea970039910b"],
          hint: "Schuif de dubbele binding stap voor stap door de keten en geef elke stof een naam. Welke namen zijn dubbel?"
        }
      },
      {
        id: "h3", type: "kies",
        verhaal: "Op de paddenstoel ligt een etiket met een tekening. Eromheen liggen zes andere tekeningen. “Sommige zijn mij,” zegt de Rups, “alleen anders gaan zitten.”",
        volledig: tak(tak(recht(6), 1, [0, 1]), 2, [0, -1]),
        vraag: "Kies álle tekeningen van dezelfde stof als op het etiket.",
        opties: [
          { label: "A", volledig: tak(tak(recht(6), 1, [0, 1]), 3, [0, 1]), omweg: "K", k: "1da0d3411caec8ca830aba748bced462e218ec7313926b15fd277dcbaab79147" },
          { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [2, 1], [2, 2], [2, 3], [1, -1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [2, 4, 1], [4, 5, 1], [5, 6, 1], [1, 7, 1]] }, omweg: "K", k: "dc15a8704b9e20fce8065568bf02307458dd9784bb115b469a2f0ff761821c63" },
          { label: "C", volledig: tak(tak(recht(6), 3, [0, -1]), 4, [0, 1]), omweg: "K", k: "e5c4dfc5ff61bbc0c63cdf69ed673cb0cdf3be46a96456912221b3cfea743c32" },
          { label: "D", volledig: tak(tak(recht(5), 1, [0, 1], 2), 2, [0, -1]), omweg: "K", k: "e63fff033059dca308aef28041f87dc29598e55ef9f3c08473f907f32ba8c54e" },
          { label: "E", volledig: tak(tak(recht(7), 1, [0, 1]), 2, [0, -1]), omweg: "K", k: "cb9a2af35750d786e11b3881822f0b5d3393c765fb01dc98c6265cbee9d9d144" },
          { label: "F", volledig: tak(tak(knik(6, 5), 1, [0, 1]), 2, [0, -1]), omweg: "K", k: "14b95f8ba6d099384274ac99fa2081a1c0e70e95a09078590ece5afc2b08838e" }
        ],
        hint: "Geef het etiket en elke tekening een systematische naam. Dezelfde naam is dezelfde stof.",
        goed: "“Allemaal ik,” knikt de Rups. “Hoe ik ook ga zitten.”",
        parallel: {
          verhaal: "De Rups kruipt naar een tweede etiket.",
          volledig: tak(tak(recht(6), 1, [0, 1]), 1, [0, -1]),
          vraag: "Kies álle tekeningen van dezelfde stof als op het etiket.",
          opties: [
            { label: "A", volledig: tak(tak(recht(6), 2, [0, 1]), 2, [0, -1]), k: "945e2cf27b50fe631c03e3a11fdb11136698587e7e43d27d3a65128e3223536a" },
            { label: "B", volledig: tak(tak(recht(7), 1, [0, 1]), 1, [0, -1]), k: "45670081aed9b41f683644703155e5007597d3fcc0e865c9066076c60c2b1814" },
            { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [1, -1], [1, 1], [1, 2], [1, 3], [1, 4]], bindingen: [[0, 1, 1], [1, 2, 1], [1, 3, 1], [1, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1]] }, k: "c3f7f4610d57088ed24cfa2d07c6335b87ae84d93926bc20d45af22a561ea10f" },
            { label: "D", volledig: tak(tak(recht(6), 1, [0, 1]), 4, [0, 1]), k: "1e29e3455268ef747a4a8c55f398eb227c088b977e91ad71dd0fdd1c4915cd6a" },
            { label: "E", volledig: tak(tak(recht(6), 4, [0, 1]), 4, [0, -1]), k: "ce0452b675fe74e085ab46a1b1d83464f28091d720e364af5dd5a5fc04742c09" },
            { label: "F", volledig: tak(tak(recht(5), 1, [0, 1]), 1, [0, -1]), k: "b8d62ae87d01c01cf85f24850acec1956bd60d71d19d63c4218a9bc903a3f29b" }
          ],
          hint: "Zoek bij elke tekening de langste keten, ook als die naar beneden loopt. Geef daarna elke tekening een naam."
        }
      },
      {
        id: "h4", type: "getal",
        verhaal: "“Ik heb acht koolstofatomen,” zegt de Rups, “en mijn langste keten is zeven lang. Meer zeg ik niet.”",
        formule: "C₈H₁₈ — langste keten van 7 C-atomen",
        vraag: "Hoeveel verschillende alkanen passen bij deze beschrijving?",
        hash: ["c7cbc0cb6fac4731f86fd351202ec58dab1ffdf63326caa415e434e2522fdec1"],
        hint: "Zet de zijtak op elke plek van de keten en geef elke structuur een naam. Wordt de keten ergens langer? Zijn er namen dubbel?",
        omweg: "H",
        goed: "“Slimme meid,” mompelt de Rups. Het klinkt bijna als een compliment.",
        parallel: {
          verhaal: "“Nog eentje. Groter.”",
          formule: "C₁₀H₂₂ — langste keten van 9 C-atomen",
          vraag: "Hoeveel verschillende alkanen passen bij deze beschrijving?",
          hash: ["1bfe36397387125ee4764d68d1b4c33a66f20ca6c26100d65059c861707590f0"],
          hint: "Teken de keten van 9 en zet de zijtak op elke plek. Welke plekken geven dezelfde naam?"
        }
      },
      {
        id: "h5", type: "naam",
        verhaal: "Op een blaadje heeft de Rups een naam gekrabbeld. “Dat ben ik,” zegt hij. “Toch?” Alice tekent de stof — en schudt haar hoofd. Het is de goede stof, maar niet de goede naam.",
        formule: "4-methylhex-5-een",
        vraag: "Geef de juiste systematische naam van deze stof.",
        hash: ["53d92b4e392bb37daaab1be536deaf97848f077d1824cb6a18df0a896441446e"],
        hint: "Teken de stof zoals de naam zegt. Nummer daarna opnieuw volgens de regels: wat krijgt het laagste plaatsnummer?",
        omweg: "K",
        goed: "De Rups kijkt lang naar het blaadje. “Dezelfde stof,” zegt hij. “Een andere naam. Interessant.”",
        parallel: {
          verhaal: "Op de achterkant van het blaadje staat nog een naam.",
          formule: "2-ethyl-3-methylbutaan",
          vraag: "Geef de juiste systematische naam van deze stof.",
          hash: ["e3cf06603d8635bb5834afd3e84dfc59aec221125fb9f11443cfa76678b3283e"],
          hint: "Teken de stof en zoek opnieuw de langste keten: loopt die misschien door de zijtak?"
        }
      },
      {
        id: "h6", type: "kies",
        verhaal: "“Laatste vraag,” zegt de Rups, en hij laat zich van de paddenstoel glijden. “Ik ben 2-methylhex-1-een. Wie zijn mijn familieleden: dezelfde dingen, maar een ander?”",
        vraag: "Kies álle isomeren van 2-methylhex-1-een.",
        opties: [
          { label: "A", volledig: tak(recht(6), 1, [0, 1]), omweg: "G", k: "f3acefd19d55c367647f0b9b1f3c9115999c2b4dece828fff3779fd92ccd7e79" },
          { label: "B", volledig: recht(7, { 0: 2 }), omweg: "G", k: "7d28f2bf5620742917894141d2e7db7047e6f9c428fc9f56e04504f4312c6942" },
          { label: "C", volledig: tak(knik(6, 4, { 0: 2 }), 1, [0, -1]), omweg: "K", k: "1a7efb580f11d972b7229060b5962e84b338ae691d830c4f3b11e85897c2caec" },
          { label: "D", volledig: tak(recht(6, { 0: 3 }), 4, [0, 1]), omweg: "G", k: "084460f335a5fc72f3d1cec2b5e9cda7985710190e55a7301a22506e4da89249" },
          { label: "E", volledig: tak(recht(5, { 1: 2 }), 2, [0, 1], 2), omweg: "G", k: "a6ec83f86e9d2549a162b76b86f8a7121862d3e3466e127ab576db749fe51603" },
          { label: "F", volledig: tak(recht(5, { 0: 2 }), 1, [0, -1]), omweg: "G", k: "c2e30a51f39d9159acdb7575ad25762dd97b730d0aa699a798b49cc4344ba439" }
        ],
        hint: "Bepaal bij elke tekening de molecuulformule en vergelijk met 2-methylhex-1-een. Let op: is het wel een ándere stof?",
        goed: "De Rups kruipt weg in het gras. “De ene kant maakt je groter,” roept hij nog. “De andere kant kleiner.”",
        parallel: {
          verhaal: "Onder de paddenstoel vindt Alice nog een etiket: oct-1-yn.",
          vraag: "Kies álle isomeren van oct-1-yn.",
          opties: [
            { label: "A", volledig: recht(8, { 0: 2 }), k: "8760f0060be98c16a3892c6fa745960ad9870885e974031d48c1a8099b56bf94" },
            { label: "B", volledig: recht(8, { 2: 3 }), k: "625e68d28b81f8e41bcd04a598df154e0e3e23fce942ee2e28bff930e9de9376" },
            { label: "C", volledig: knik(8, 5, { 0: 3 }), k: "647690428159caa055f55704869a4b06ccfe7765090d5b779719a54b4b299f9e" },
            { label: "D", volledig: tak(tak(recht(6, { 0: 3 }), 2, [0, 1]), 2, [0, -1]), k: "2eae1606509ce48834dfba91d2dd1bbbcca6e2f99fcd83527bccdb175695a556" },
            { label: "E", volledig: recht(7, { 0: 3 }), k: "5abc3bf4692a50df26a7e2aab413f48c569a95a68a2fba31ccfa08936c473146" },
            { label: "F", volledig: tak(recht(7, { 1: 3 }), 3, [0, 1]), k: "69cdda9c8c547387b28d65ab5afd1a7ed46c26c189ffa63f8cea711aeb42bb69" }
          ],
          hint: "Een isomeer heeft dezelfde molecuulformule, maar is een andere stof. Controleer dus allebei."
        }
      }
    ],
    omwegen: {
      G: {
        personage: "G",
        verhaal: "De Rups haalt de waterpijp uit zijn mond. “Dezelfde… dingen,” zegt hij heel langzaam. “Tel… ze… eerst.”",
        voorbeeld: {
          tekst: "<b>Isomeren</b> zijn stoffen met <b>dezelfde molecuulformule</b> maar een <b>andere structuurformule</b>. Het zijn echt verschillende stoffen. Bepaal dus altijd eerst de molecuulformule, en kijk daarna of de structuur anders is.",
          structuren: [
            { label: "nonaan · C₉H₂₀", volledig: recht(9) },
            { label: "3-ethyl-3-methylhexaan · C₉H₂₀", volledig: tak(tak(recht(6), 2, [0, 1], 2), 2, [0, -1]) },
            { label: "non-1-een · C₉H₁₈", volledig: recht(9, { 0: 2 }) }
          ],
          uitwerking: "Nonaan en 3-ethyl-3-methylhexaan hebben allebei <b>C₉H₂₀</b>, met een andere structuur: <b>isomeren</b>. Non-1-een heeft <b>C₉H₁₈</b>: twee H-atomen minder, dus <b>geen</b> isomeer van nonaan."
        },
        makkelijk: {
          type: "getal",
          verhaal: "“Nu jij,” zegt de Rups.",
          formule: "een isomeer van decaan",
          vraag: "Hoeveel H-atomen heeft één molecuul van dit isomeer?",
          hash: ["d047aa3e027b12df90c8887dbc3499f84fa8c4dffddc139c348e3f5d03206fca"],
          hint: "Een isomeer heeft dezelfde molecuulformule. Wat is de molecuulformule van decaan?"
        }
      },
      H: {
        personage: "H",
        verhaal: "“Opschuiven! Opschuiven!” roept de Hoedenmaker, en hij schuift een plaats op aan de theetafel. “Zo vind je ze allemaal: één voor één opschuiven, en dan tellen!”",
        voorbeeld: {
          tekst: "Zo vind je systematisch alle mogelijkheden: <b>schuif</b> de binding of de zijtak stap voor stap door de keten, en <b>geef elke stof een naam</b>. Twee structuren met dezelfde naam tel je maar één keer.",
          structuren: [
            { label: "hept-1-een", volledig: recht(7, { 0: 2 }) },
            { label: "hept-2-een", volledig: recht(7, { 1: 2 }) },
            { label: "hept-3-een", volledig: recht(7, { 2: 2 }) }
          ],
          uitwerking: "Onvertakte alkenen C₇H₁₄: de dubbele binding kan beginnen bij C-atoom 1, 2 of 3. Bij C-atoom 4 is het hept-3-een vanaf de andere kant. Dus <b>3</b> stoffen.<br>Zo werkt het ook met een zijtak. Alkanen C₉H₂₀ met een langste keten van 8: een methylgroep op C-atoom 2, 3 of 4. Op C-atoom 1 wordt de keten langer, en op C-atoom 5 is het 4-methyloctaan vanaf de andere kant. Ook <b>3</b> stoffen."
        },
        makkelijk: {
          type: "getal",
          verhaal: "“Een kopje thee als je dit goed telt,” zegt de Hoedenmaker.",
          formule: "C₇H₁₂ — onvertakt, alkyn",
          vraag: "Hoeveel verschillende stoffen passen bij deze beschrijving?",
          hash: ["298a49e36ebef24c5a129b7ae7a43c3b833bad197e2a0ba559f596ff2cc63ddb"],
          hint: "Schuif de drievoudige binding door de keten en geef elke stof een naam."
        }
      },
      K: {
        personage: "K",
        verhaal: "De Kolderkat draait zich om. En nog eens. Dan hangt hij ondersteboven aan een tak. “Ik ben nog steeds dezelfde kat,” grijnst hij. “Hoe je me ook neerlegt.”",
        voorbeeld: {
          tekst: "Een molecuul <b>draaien</b>, <b>spiegelen</b> of de keten <b>om de hoek</b> tekenen maakt <b>geen nieuwe stof</b>. Twijfel je of twee tekeningen dezelfde stof zijn? Geef ze allebei een systematische naam: <b>dezelfde naam = dezelfde stof</b>.",
          structuren: [
            { label: "3-ethylheptaan", volledig: tak(recht(7), 2, [0, 1], 2) },
            { label: "ook 3-ethylheptaan: gespiegeld", volledig: tak(recht(7), 4, [0, -1], 2) },
            { label: "ook 3-ethylheptaan: om de hoek", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [2, 1], [2, 2], [2, 3], [2, 4]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [2, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1]] } }
          ],
          uitwerking: "In de derde tekening lijkt de horizontale keten maar 5 lang. Maar de langste keten loopt naar beneden: <b>7</b> C-atomen. Wat overblijft is een ethylgroep op C-atoom <b>3</b>. Dezelfde naam, dus dezelfde stof."
        },
        makkelijk: {
          type: "naam",
          verhaal: "“En deze?” vraagt de Kat. Alleen zijn grijns is nog te zien.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [2, 1], [2, 2], [2, 3]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [2, 6, 1], [6, 7, 1], [7, 8, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["b995afe936d4f2ad088db6e80ff3b6a4fc7f2764d8e6d7f88b1d8b8ee53ca872"],
          hint: "Zoek eerst de langste keten: probeer ook de route naar beneden."
        }
      }
    },
    kluis: {
      intro: "Aan de voet van de paddenstoel staat een schatkist met vier draaischijven. Wie hem opent, krijgt een edelsteen. Werk in je schrift en teken systematisch. Als je alle getallen hebt ingevuld, zie je per getal of het klopt."
    },
    geheim: {
      intro: "In de hoed van de paddenstoel zit een gouden slotje verstopt. Het is maar voor heel weinig mensen te openen."
    },
    einde: "Alice heeft van beide kanten van de paddenstoel een stukje. Maar onder de paddenstoel wacht nog een schatkist…"
  },
  4: {
    titel: "De Cheshire Kat",
    plaat: P(23),
    intro: [
      "Op een tak zit een kat, met een grijns van oor tot oor. “Wilt u me alstublieft zeggen welke kant ik op moet?” vraagt Alice.",
      "“Dat hangt er nogal van af waar je naartoe wilt,” zegt de Kat. “In mijn wereld tekenen we trouwens niet wat iedereen allang weet. Maar dat betekent niet dat het er niet is.”"
    ],
    duur: "Ongeveer 20 minuten. Wat je in de les niet af krijgt, maak je thuis af.",
    personages: {
      R: { naam: "De Kolderkat", plaat: P(23) },
      B: { naam: "De Rups", plaat: P(15) },
      N: { naam: "De Hoedenmaker", plaat: P(25) }
    },
    hoofdpad: [
      {
        id: "h1", type: "kies",
        verhaal: "Op een tak zit een kat met een grijns van oor tot oor. Onder de boom liggen zes tekeningen in het gras. “Eén stof,” zegt de Kat, “maar ik teken hem op verschillende manieren. En ik heb er een paar valse tussen gelegd.”",
        vraag: "Kies álle tekeningen van cyclohexaan.",
        opties: [
          { label: "A", volledig: { atomen: [[0.0, -1.0], [0.866, -0.5], [0.866, 0.5], [0.0, 1.0], [-0.866, 0.5], [-0.866, -0.5]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 0, 1]] }, omweg: "R", k: "132539e9a1a50d9263eced860013047a1513e8d8c8d650fa819bdba10fe33680" },
          { label: "B", skelet: { soort: "ring", n: 6, cirkel: true }, omweg: "B", k: "a228cf954f0d08c1f8e9a8839bc41f179a6f20f56ec0420d1735c54f927433ad" },
          { label: "C", skelet: { soort: "ring", n: 6 }, omweg: "R", k: "a502d849d6e081db366ae1d7efeffcd50b23549a5433b3841bc48ac97f7d0845" },
          { label: "D", skelet: { soort: "ring", n: 5 }, omweg: "R", k: "6ac64f84031c54bb93a320e923822d6e08211e4231cf5f504082245e0cd90b3c" },
          { label: "E", volledig: recht(6), omweg: "R", k: "9f8cda5f7dd1fd5a8a88ebed100a173da81d0f0202c0ab135b193f653136185f" },
          { label: "F", skelet: { soort: "ring", n: 6, takken: [{ bij: 0, lengte: 1 }] }, omweg: "R", k: "5b8813e99b5efd2a9f198c53d3181cfdcd5c220d4f0f7a2687b827e84de36361" }
        ],
        hint: "Tel bij elke tekening de C-atomen, ook de hoekpunten. Is het een ring? En zitten er dubbele bindingen in?",
        goed: "De Kat knikt. “Met of zonder letters: het blijft dezelfde ring.”",
        parallel: {
          verhaal: "De Kat veegt de tekeningen weg en legt er zes nieuwe neer. “En nu benzeen.”",
          vraag: "Kies álle tekeningen van benzeen.",
          opties: [
            { label: "A", skelet: { soort: "ring", n: 6 }, k: "69bedc309b23fdf3e5b2fd789e3c4d24a7ffc75b0f712d42c4e35ded1543d064" },
            { label: "B", skelet: { soort: "ring", n: 6, cirkel: true }, k: "f9dcdd93afab4235cbeb254737e6f71a9cebd121dd4c45bb1d61831e3426fd8e" },
            { label: "C", skelet: { soort: "ring", n: 6, dubbel: [0, 2, 4] }, k: "356bf30c75d08d51b7608de4d07506a2ae49a918cb4f15a3a850bb92b62043f2" },
            { label: "D", skelet: { soort: "ring", n: 6, dubbel: [0] }, k: "88dda367403286c6ffa22a192692ff9c4e064ff5932745a9f9d0fbb8d80dd8a4" },
            { label: "E", volledig: { atomen: [[0.0, -1.0], [0.866, -0.5], [0.866, 0.5], [0.0, 1.0], [-0.866, 0.5], [-0.866, -0.5]], bindingen: [[0, 1, 2], [1, 2, 1], [2, 3, 2], [3, 4, 1], [4, 5, 2], [5, 0, 1]] }, k: "d0e582ef3d3edc4d206c6571611cec1073a079a987c19697582dbde2fa5caa75" },
            { label: "F", skelet: { soort: "ring", n: 6, dubbel: [0, 2] }, k: "bbe5fa075790ca5843ffe6a53313d0877db3a6c1d3502aebe82983b49984c45a" }
          ],
          hint: "Benzeen is een zesring met drie dubbele bindingen. Een cirkel in de ring betekent hetzelfde."
        }
      },
      {
        id: "h2", type: "getal",
        verhaal: "Dan begint de Kat te verdwijnen. Eerst zijn staart, dan zijn poten. Op de tak blijft een tekening achter — alleen lijnen.",
        skelet: { soort: "ring", n: 4, takken: [{ bij: 0, lengte: 3 }] },
        vraag: "Hoeveel H-atomen heeft dit molecuul?",
        hash: ["0f7360700fbec04eb4b699bf6ef1c336d93357db33889340e2aa8585a84a694f"],
        hint: "Ga elk hoekpunt en elk uiteinde langs: hoeveel bindingen heeft dit C-atoom al? Vul aan tot 4 met H.",
        omweg: "R",
        goed: "“Precies,” zegt de grijns. “Je ziet ze niet, maar ze zijn er wel.”",
        parallel: {
          verhaal: "Verderop in de boom hangt nog een tekening.",
          skelet: { soort: "ring", n: 6, cirkel: true, takken: [{ bij: 0, lengte: 3 }] },
          vraag: "Hoeveel H-atomen heeft dit molecuul?",
          hash: ["4ee0fb1cc0f694c45a028c706d2ee260bbd5c1d363accc2c02c2613f2d5668fe"],
          hint: "Op elk hoekpunt zit een C-atoom. Hoeveel H heeft een C-atoom in een benzeenring? En op het hoekpunt met de zijtak?"
        }
      },
      {
        id: "h3", type: "naam",
        verhaal: "Alleen de grijns hangt nog in de lucht. “Hoe heet ik?” vraagt hij, en hij tekent zichzelf.",
        skelet: { soort: "ring", n: 6, takken: [{ bij: 1, lengte: 3 }] },
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["d1a837d55cc855b7f388f92f629c0489c431edeec38af924f0bef7f16fb87927", "dd93e8b2133536e2ea57c8b9425ac887b0eab0349a1e2bfdae670bdc39ecf72c"],
        hint: "Tel de hoekpunten van de ring. Welk voorvoegsel hoort bij een ring? En hoe lang is de zijtak?",
        omweg: "N",
        goed: "De grijns wordt nog breder. “Zo heet ik inderdaad.”",
        parallel: {
          verhaal: "“En mijn neef?” De grijns tekent nog een ring.",
          skelet: { soort: "ring", n: 7, takken: [{ bij: 2, lengte: 1 }] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["1f92fae0a459d7a4562481ed74a8c71df268feb7863de7d4a923cf709dcef4e3", "cf3289798a335f6e45b6eea82683113717c996a77901efac58405bbbfa8bfbfa"],
          hint: "Tel de hoekpunten van de ring nog eens zorgvuldig. Welke zijtak zit eraan?"
        }
      },
      {
        id: "h4", type: "naam",
        verhaal: "“Welke kant moet ik op?” vraagt Alice. “Dat hangt ervan af waar je heen wilt,” zegt de grijns, en hij tekent een ring met twee zijtakken.",
        skelet: { soort: "ring", n: 6, cirkel: true, takken: [{ bij: 0, lengte: 2 }, { bij: 4, lengte: 2 }] },
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["1558f95320720ab362f0b6f85b2876bd507e0050423d0373942da780fc2e0c73"],
        hint: "Geef een zijtak nummer 1 en tel rond de ring. Welke kant op geeft de laagste plaatsnummers?",
        omweg: "N",
        goed: "“Die kant op dus,” zegt de grijns. “Naar de Hoedenmaker. Of naar de Maartse Haas. Ze zijn allebei gek.”",
        parallel: {
          verhaal: "Op de stam van de boom staat nog een ring gekrast.",
          skelet: { soort: "ring", n: 5, takken: [{ bij: 0, lengte: 2 }, { bij: 4, lengte: 2 }] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["f70e8203a5ad4f58e5a7cd430ad8b0906b3b968a33a01311e96be9ae079b7de7"],
          hint: "Geef een zijtak nummer 1. Tel de kant op rond de ring waarmee je het snelst bij de andere zijtak bent."
        }
      },
      {
        id: "h5", type: "kies",
        verhaal: "“Ben je een goede kijker?” vraagt de grijns. Op het gras liggen zes tekeningen: sommige met letters, sommige alleen met lijnen.",
        vraag: "Kies álle tekeningen van 1,2-dimethylcyclobutaan.",
        opties: [
          { label: "A", skelet: { soort: "ring", n: 4, takken: [{ bij: 0, lengte: 1 }, { bij: 1, lengte: 1 }] }, omweg: "R", k: "0e713b0ff93feb12ebfeb408ebad9f5f026a22b96dcc06fdccc9d659e44dc037" },
          { label: "B", volledig: { atomen: [[0, 0], [1, 0], [1, 1], [0, 1], [-1, 0], [2, 0]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 0, 1], [0, 4, 1], [1, 5, 1]] }, omweg: "R", k: "548f7010b84d1002beaaddccec3886d11f56056d528b9a0451237511bf2abba3" },
          { label: "C", skelet: { soort: "ring", n: 4, takken: [{ bij: 0, lengte: 1 }, { bij: 2, lengte: 1 }] }, omweg: "R", k: "731b41aee44590b4843c343017325d09c271f1ce975fc3446d3e9d768dd7e3a8" },
          { label: "D", skelet: { soort: "ring", n: 4, takken: [{ bij: 2, lengte: 1 }, { bij: 3, lengte: 1 }] }, omweg: "R", k: "5333ed5f6fb4952cb611b1e4eb363f92ab6150a1a47e1589d91685b063b9e2f8" },
          { label: "E", skelet: { soort: "ring", n: 4, takken: [{ bij: 0, lengte: 1, hoek: -35 }, { bij: 0, lengte: 1, hoek: 35 }] }, omweg: "R", k: "72d6914d4388ad11c88b7089e419f4acbc8f637af94310d491cbc080eacb3bd7" },
          { label: "F", volledig: { atomen: [[0, 0], [1, 0], [1, 1], [0, 1], [-1, 0], [2, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 0, 1], [0, 4, 1], [2, 5, 1]] }, omweg: "R", k: "5922d751537efe617459ba0bf60594e4c32362a0f4122654dbb2912cffea870a" }
        ],
        hint: "Zoek bij elke tekening de ring en de methylgroepen. Zitten de methylgroepen aan C-atomen die naast elkaar liggen?",
        goed: "“Met letters of zonder,” zegt de grijns. “Jij ziet het toch.”",
        parallel: {
          verhaal: "De grijns legt nog zes tekeningen neer.",
          vraag: "Kies álle tekeningen van 1,3-dimethylcyclobutaan.",
          opties: [
            { label: "A", skelet: { soort: "ring", n: 4, takken: [{ bij: 0, lengte: 1 }, { bij: 1, lengte: 1 }] }, k: "68f6b4322efc85a39e33552b74dce46e4881ca27db819517c3dbeaee8d206bbd" },
            { label: "B", skelet: { soort: "ring", n: 4, takken: [{ bij: 1, lengte: 1 }, { bij: 3, lengte: 1 }] }, k: "2b1d90761eda0b146b2376877a88ac11c392d9a3932ea64249e36ad0b7ba1e04" },
            { label: "C", volledig: { atomen: [[0, 0], [1, 0], [1, 1], [0, 1], [-1, 0], [2, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 0, 1], [0, 4, 1], [2, 5, 1]] }, k: "3b9e307d59724ce5b6ae7a8cf368ade36799b9d71a7799576ee1f22b67f0fc86" },
            { label: "D", skelet: { soort: "ring", n: 4, takken: [{ bij: 0, lengte: 1, hoek: -35 }, { bij: 0, lengte: 1, hoek: 35 }] }, k: "364694556aa22959be54a6ebad11369f7d618259e4669759095532734857d01f" },
            { label: "E", volledig: { atomen: [[0, 0], [1, 0], [1, 1], [0, 1], [-1, 0], [2, 0]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 0, 1], [0, 4, 1], [1, 5, 1]] }, k: "00cb65079ab2650e8c6c9516a5777284c64bf4cc652556c4c7e73cbd359e0c0f" },
            { label: "F", skelet: { soort: "ring", n: 4, takken: [{ bij: 0, lengte: 1 }, { bij: 2, lengte: 1 }] }, k: "010ac7ebf85acae88b83361cf805a6d28b7a8c2e6c2cc40c1d9887667d41259e" }
          ],
          hint: "Bij 1,3 zitten de twee methylgroepen aan C-atomen die tegenover elkaar liggen in de vierring."
        }
      },
      {
        id: "h6", type: "kies",
        verhaal: "Voordat de grijns helemaal verdwijnt, laat hij een briefje vallen: “C₈H₁₆. Wie past in mijn formule?”",
        vraag: "Kies álle tekeningen met de molecuulformule C₈H₁₆.",
        opties: [
          { label: "A", skelet: { soort: "ring", n: 5, takken: [{ bij: 0, lengte: 3 }] }, omweg: "B", k: "0f86b3736648be73f9ddc21cc658b41650e9e3181820d531a70a3872279300b0" },
          { label: "B", skelet: { soort: "ring", n: 6, cirkel: true, takken: [{ bij: 0, lengte: 2 }, { bij: 2, lengte: 1 }] }, omweg: "B", k: "7d71182019bf7d8325feec7a30742baa51c275cfb3e2daf872c5ebe0dc9fbe60" },
          { label: "C", volledig: recht(8, { 1: 2 }), omweg: "B", k: "f88d1818d85187021a06969eb9a328aab7bfcc3f029677b69d6e344ee97de7dc" },
          { label: "D", skelet: { soort: "ring", n: 6, takken: [{ bij: 0, lengte: 1 }, { bij: 1, lengte: 1 }] }, omweg: "B", k: "1d45bf4d0a0e82fadda8564814195a98d7f0b98ce559cf0eeb3766767afa2367" },
          { label: "E", skelet: { soort: "ring", n: 3, takken: [{ bij: 0, lengte: 1 }, { bij: 1, lengte: 1 }] }, omweg: "B", k: "efe501cbaf1e2bc43dfc5c1e91a4209df7634aef9c642d575485234d036b6f76" },
          { label: "F", volledig: recht(8), omweg: "B", k: "bdb45f60da2f417c95fb18314860f9b4acafe6ca50d5cc874f675bf487e456d3" }
        ],
        hint: "Bepaal bij elke tekening het aantal C- en H-atomen. Denk bij de hoekpuntnotatie aan de H-atomen die je niet ziet.",
        goed: "De grijns verdwijnt. Alleen zijn stem blijft nog even hangen: “Een ring of een dubbele binding — allebei kosten ze twee H.”",
        parallel: {
          verhaal: "Op de achterkant van het briefje: “C₉H₁₈.”",
          vraag: "Kies álle tekeningen met de molecuulformule C₉H₁₈.",
          opties: [
            { label: "A", skelet: { soort: "ring", n: 6, takken: [{ bij: 0, lengte: 3 }] }, k: "cde533b73fdc962568db36c90aec24d47e955d89c2cc9d94beff5b704caa3a59" },
            { label: "B", skelet: { soort: "ring", n: 6, cirkel: true, takken: [{ bij: 0, lengte: 1 }, { bij: 2, lengte: 1 }, { bij: 4, lengte: 1 }] }, k: "52e42f6db759cf063423a106e301d8080490f9046a933e0795110100cc542448" },
            { label: "C", volledig: recht(9, { 1: 2 }), k: "c3ac21080daecd6c739f831c5d2a6664acec5931c1d6258d57b49978db7dc4ce" },
            { label: "D", volledig: recht(9), k: "c40eb87fc404e521d0773ff9e919bab9871d8d61646c8fdcc024ff405d951444" },
            { label: "E", skelet: { soort: "ring", n: 6, takken: [{ bij: 0, lengte: 2 }, { bij: 2, lengte: 1 }] }, k: "5463c1942dc7b3dfd52edac9b5fe99c99bb5a84119c131d22bca0e5c4fa85f76" },
            { label: "F", skelet: { soort: "ring", n: 5, takken: [{ bij: 0, lengte: 3 }] }, k: "65b8ebf7b7facf55413092c116b967951e8a957de706b5322d7e2e8eba0e4076" }
          ],
          hint: "Tel de C-atomen en de H-atomen. Een ring en een dubbele binding kosten allebei twee H ten opzichte van het alkaan."
        }
      }
    ],
    omwegen: {
      R: {
        personage: "R",
        verhaal: "De Kolderkat komt even helemaal terug. “Kijk,” zegt hij. “Eerst teken ik alles. Dan laat ik weg wat iedereen allang weet.”",
        voorbeeld: {
          tekst: "In de <b>hoekpuntnotatie</b> is elk hoekpunt en elk uiteinde van een lijn een <b>C-atoom</b>. De H-atomen teken je niet: vul elk C-atoom in gedachten aan tot <b>4 bindingen</b>. Zit er een zijtak aan een hoekpunt, dan zit daar <b>één H minder</b>.",
          structuren: [
            { label: "ethylcyclopropaan · volledig", volledig: { atomen: [[0, 0], [1, 0], [0.5, 0.866], [-1, 0], [-2, 0]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 0, 1], [0, 3, 1], [3, 4, 1]] } },
            { label: "dezelfde stof · hoekpuntnotatie", skelet: { soort: "ring", n: 3, takken: [{ bij: 0, lengte: 2 }] } }
          ],
          uitwerking: "Ring-C-atoom met de zijtak: 1 H. De twee andere ring-C-atomen: elk 2 H. De ethylgroep: 2 + 3 = 5 H. Samen 1 + 4 + 5 = <b>10</b> H: C₅H₁₀."
        },
        makkelijk: {
          type: "getal",
          verhaal: "“Nu jij,” zegt de Kat, en zijn staart begint alweer te vervagen.",
          skelet: { soort: "ring", n: 3, takken: [{ bij: 0, lengte: 1 }] },
          vraag: "Hoeveel H-atomen heeft dit molecuul?",
          hash: ["17c4c25c19cd7abe6eee9f69de0c7ea6ced6eed55b463a0c2a82d68d5374144d"],
          hint: "Ga elk hoekpunt en het uiteinde langs en vul aan tot 4 bindingen."
        }
      },
      B: {
        personage: "B",
        verhaal: "De Rups kijkt op van zijn paddenstoel. “Een ring met een cirkel erin,” zegt hij langzaam, “is niet dezelfde als een ring zonder.”",
        voorbeeld: {
          tekst: "<b>Benzeen</b> is een zesring met <b>drie afwisselende dubbele bindingen</b>. Vaak teken je een <b>cirkel</b> in plaats van die dubbele bindingen: dat is dezelfde stof. Elk C-atoom van benzeen heeft <b>1 H</b>. In <b>cyclohexaan</b> (geen dubbele bindingen) heeft elk C-atoom <b>2 H</b>. Een ring zonder dubbele binding heeft de formule <b>CₙH₂ₙ</b>: net zoveel H als een alkeen.",
          structuren: [
            { label: "benzeen · C₆H₆", skelet: { soort: "ring", n: 6, dubbel: [0, 2, 4] } },
            { label: "benzeen · C₆H₆", skelet: { soort: "ring", n: 6, cirkel: true } },
            { label: "cyclohexaan · C₆H₁₂", skelet: { soort: "ring", n: 6 } }
          ],
          uitwerking: "Benzeen en cyclohexaan hebben allebei 6 C-atomen, maar benzeen heeft 6 H en cyclohexaan 12 H."
        },
        makkelijk: {
          type: "getal",
          verhaal: "“Tel maar,” zegt de Rups. “Alleen aan de ring.”",
          skelet: { soort: "ring", n: 6, cirkel: true, takken: [{ bij: 0, lengte: 2 }, { bij: 3, lengte: 1 }] },
          vraag: "Hoeveel H-atomen zitten er direct aan de ring?",
          hash: ["4607c4512ee26f9de267b396e49113364444b2bf600013a8b964a6c70f030b61"],
          hint: "Elk C-atoom van een benzeenring heeft 1 H, behalve waar een zijtak zit."
        }
      },
      N: {
        personage: "N",
        verhaal: "Uit de struiken stapt de Hoedenmaker, met zijn hoed vol cijfertjes. “Rond de ring, rond de ring! Maar wel de kortste kant op!”",
        voorbeeld: {
          tekst: "Een ring krijgt <b>cyclo-</b> voor de stamnaam: cyclobutaan, cyclohexaan. Bij benzeen is <b>benzeen</b> de stamnaam. Eén zijtak: <b>geen plaatsnummer</b> nodig. Meer zijtakken: geef er één nummer 1 en tel rond de ring de kant op die de <b>laagste plaatsnummers</b> geeft.",
          structuren: [
            { label: "methylcyclooctaan", skelet: { soort: "ring", n: 8, takken: [{ bij: 0, lengte: 1 }] } },
            { label: "1,2-dimethylcyclohexaan", skelet: { soort: "ring", n: 6, takken: [{ bij: 0, lengte: 1 }, { bij: 5, lengte: 1 }] } }
          ],
          uitwerking: "Rechts: met de klok mee geteld krijg je 1 en 6. Tegen de klok in liggen de methylgroepen naast elkaar: <b>1,2-dimethylcyclohexaan</b>."
        },
        makkelijk: {
          type: "naam",
          verhaal: "“Hoe heet deze?” De Hoedenmaker tikt met zijn lepeltje op een tekening.",
          skelet: { soort: "ring", n: 6, cirkel: true, takken: [{ bij: 0, lengte: 2 }, { bij: 3, lengte: 2 }] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["c31a8061c007568c377ae93dff21c9240df2f3ec370241088e1e2ad914fec789"],
          hint: "Welke zijtakken zie je, en hoeveel? Tel rond de ring van de ene naar de andere."
        }
      }
    },
    kluis: {
      intro: "Onder de boom staat een schatkist met vier draaischijven. Wie hem opent, krijgt een edelsteen. Werk in je schrift. Als je alle getallen hebt ingevuld, zie je per getal of het klopt."
    },
    geheim: {
      intro: "In de lucht hangt nog een glinstering waar net de grijns was: een gouden slotje. Het is maar voor heel weinig mensen te openen."
    },
    einde: "De grijns is weg. Maar onder de boom wacht nog een schatkist…"
  }
};
})();

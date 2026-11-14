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
            { label: "E", skelet: { soort: "ring", n: 6, takken: [{ bij: 0, lengte: 2 }, { bij: 1, lengte: 1 }] }, k: "5463c1942dc7b3dfd52edac9b5fe99c99bb5a84119c131d22bca0e5c4fa85f76" },
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
            { label: "1,3-dimethylcycloheptaan", skelet: { soort: "ring", n: 7, takken: [{ bij: 0, lengte: 1 }, { bij: 5, lengte: 1 }] } }
          ],
          uitwerking: "Rechts: met de klok mee geteld krijg je 1 en 6. Tegen de klok in kom je al na twee stappen bij de andere methylgroep: <b>1,3-dimethylcycloheptaan</b>."
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
  },
  5: {
    titel: "De tuinmannen van de Koningin",
    plaat: P(28),
    intro: ["Achter een poortje in een hoge muur ligt een tuin vol rozenstruiken. Drie tuinmannen, plat als speelkaarten, schilderen witte rozen razendsnel rood.", "“Als de Koningin ziet dat we een witte struik hebben geplant…” fluistert Twee. Overal staan potjes en flesjes — maar de etiketten zijn van de regen uitgelopen."],
    duur: "Ongeveer 20 minuten. Wat je in de les niet af krijgt, maak je thuis af.",
    personages: {
      X: { naam: "Tuinman Twee", plaat: P(28) },
      Y: { naam: "De Hoedenmaker", plaat: P(25) },
      Z: { naam: "De Rups", plaat: P(15) }
    },
    hoofdpad: [
      {
        id: "h1", type: "naam",
        verhaal: "Bij de rozenstruik staan drie tuinmannen, plat als speelkaarten, met verfpotten. Op het eerste potje staat geen naam meer — alleen een tekening.",
        volledig: { atomen: [[0, 0], [1, 0], [2, 0], [0, -1, "Cl"], [2, 1, "Cl"]], bindingen: [[0, 1, 1], [1, 2, 1], [0, 3, 1], [2, 4, 1]] },
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["5573fb7448ddf7a077f3328851e9289952fd7efd797233eab19bd2f8bb27f028"],
        hint: "Hoeveel Cl-atomen zie je, en aan welke C-atomen zitten ze? Dat hoort allemaal in de naam.",
        omweg: "X",
        goed: "“Dank u, juffrouw,” fluistert tuinman Twee. “Nu weten we tenminste wat erin zit.”",
        parallel: {
          verhaal: "Op een tweede potje staat ook alleen een tekening.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [3, 1, "I"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [3, 6, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["eef67963b802b10a19ebd7dc53dee2fad9eb680dea1eaf57b7fb0a4f0835ed92"],
          hint: "Nummer de keten vanaf de kant die het dichtst bij het I-atoom zit."
        }
      },
      {
        id: "h2", type: "naam",
        verhaal: "Tuinman Vijf houdt een potje omhoog. “Hier zitten twee verschillende dingen aan de keten,” zegt hij. “Hoe moet dat in de naam?”",
        volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, -1, "Br"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [1, 5, 1], [2, 6, 1]] },
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["e07ce995f6c52830a3e3be24bdb98b29ebb70652724617df1525a181ed19eac1"],
        hint: "Nummer zo dat de plaatsnummers zo laag mogelijk zijn. In welke volgorde zet je broom en methyl in de naam?",
        omweg: "X",
        goed: "Vijf schrijft de naam op het potje. Zijn kwast trilt een beetje.",
        parallel: {
          verhaal: "Tuinman Zeven heeft er ook nog een.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [4, -1, "Cl"], [2, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [4, 6, 1], [2, 7, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["866f49e6162ae78011cda24b39fc285833d13654b753cba6af2a099dfddee833"],
          hint: "Nummer vanaf beide kanten: welke kant geeft de laagste plaatsnummers? Pas daarna kies je de volgorde in de naam."
        }
      },
      {
        id: "h3", type: "naam",
        verhaal: "“Deze ruikt naar… alcohol,” zegt Alice, en ze houdt een flesje een eindje van zich af.",
        volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [3, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [3, 5, 1]] },
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["ab2045288bdf9e0f298d265a17398a420fa3f119ba5464ec1bf5177a852d3489"],
        hint: "Aan welk C-atoom zit de OH-groep? Nummer zo dat dat nummer zo laag mogelijk is.",
        omweg: "Y",
        goed: "“Precies,” zegt Twee. “Die gebruiken we om de kwasten schoon te maken.”",
        parallel: {
          verhaal: "Naast het flesje staat er nog een.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [4, 1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [4, 7, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["fe4d088930bb4b67abdf0d3fc48ea83b2a3017cafa44d63e9c7b37ecd7e2d112"],
          hint: "Nummer vanaf de kant die het dichtst bij de OH-groep zit."
        }
      },
      {
        id: "h4", type: "naam",
        verhaal: "In de schuur staat een fles met een zoete, bedwelmende geur. “Niet aan ruiken!” roept Zeven. “Daar val je van in slaap!”",
        volledig: { atomen: [[0, 0], [1, 0], [2, 0, "O"], [3, 0], [4, 0], [5, 0], [6, 0]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1]] },
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["6dd88b9703cb34c83bc885afe0a86dc3403ffbce670d35ac1e00736c1788eb4f", "48b99a8e97834770859eaaa142a7f2bdd6d0b2025df9166e0a5bcbe943594d3e"],
        hint: "Waar zit het O-atoom? Tel aan beide kanten de C-atomen. Welk deel wordt de alkoxy-groep, en welk deel de stam?",
        omweg: "Z",
        goed: "Alice zet de fles voorzichtig terug, met de dop er stevig op.",
        parallel: {
          verhaal: "Op de plank erboven staat nog een fles met zo'n geur.",
          volledig: { atomen: [[0, 0], [1, 0, "O"], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["b2daa3e7ebf3f5c113b86d40cac9ee257deaf602a5475a3ecf14149b7ca6dbf1", "a9cba1c2a69d05206eae43ccccb9842988986eadfc41b090a816d2b75c93acdd"],
          hint: "Tel de C-atomen aan beide kanten van het O-atoom. Het kleinste deel wordt de alkoxy-groep."
        }
      },
      {
        id: "h5", type: "kies",
        verhaal: "Op de grond liggen zes etiketten. “De Koningin wil alleen potjes met C₅H₁₂O,” zegt Twee. “Welke etiketten passen daarbij?”",
        vraag: "Kies álle tekeningen met de molecuulformule C₅H₁₂O.",
        opties: [
          { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [0, 5, 1]] }, omweg: "Z", k: "1ef5d4ea578dec763a591f9ef0691142bdb5eed33952c03396cb16e62de30fd3" },
          { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, -1, "Cl"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [0, 5, 1]] }, omweg: "X", k: "d85f489bf7c28713ecb2d0ad5a46cfdebbecb6967993efbc0c132e4510ae8fc9" },
          { label: "C", volledig: { atomen: [[0, 0], [1, 0, "O"], [2, 0], [3, 0], [4, 0], [5, 0]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1]] }, omweg: "Z", k: "64a9f5847900cdcab51dc99d66417d1a989925efb1de5c338ca6a7591ffcd6ba" },
          { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [5, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1]] }, omweg: "Z", k: "4410b38003833ac1ae71b53c49210f64b0edb7b6b1bccf9443555d1e1e0a5091" },
          { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [1, 1], [1, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [1, 4, 1], [1, 5, 1]] }, omweg: "Y", k: "11b60b22ffe1b95a8f9d80111957bdce1c2e0171c3761b34050fcdf1f5852cea" },
          { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [1, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [1, 4, 1]] }, omweg: "Z", k: "f93f2d8b5bb5b1370bfcb7d9251e294c1bcf8a920656d432a81d15afc3534f0d" }
        ],
        hint: "Tel bij elke tekening de C-, H- en O-atomen.",
        goed: "“Drie verschillende stoffen,” zegt Twee verbaasd, “en toch dezelfde formule.”",
        parallel: {
          verhaal: "“En nu C₆H₁₄O,” zegt Zeven, en hij legt zes nieuwe etiketten neer.",
          vraag: "Kies álle tekeningen met de molecuulformule C₆H₁₄O.",
          opties: [
            { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [1, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [1, 6, 1]] }, k: "922ca646407a57391f6becb487b004950576037b988b3d890d22f879b1a9bb8c" },
            { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [4, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1]] }, k: "05e5e450bfb6021d0c6991075668f00bd53ff5417396082f9e1f56251e67f367" },
            { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0, "O"], [4, 0], [5, 0], [6, 0]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1]] }, k: "075d207d5fee54aadbff41a3816c9a1e106cb9273b95c5ff79c97b22133c573d" },
            { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [1, 5, 1], [2, 6, 1]] }, k: "cc452913eea2471778023f30b49eb6758cc5ddb77eba5a40c1e7497e9c149b1e" },
            { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, -1, "Cl"], [1, 1, "Cl"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [0, 6, 1], [1, 7, 1]] }, k: "949203d2d48b9b871606036fdfa6c5e194b31d78620ab0b091da4480a2e8a7fd" },
            { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1]] }, k: "09a0e19ae20c0879134e902bf55c9dc591093ece11c83901988853e487d4382f" }
          ],
          hint: "Tel de C-, H- en O-atomen. Een alkanol en een ether kunnen dezelfde formule hebben."
        }
      },
      {
        id: "h6", type: "indeling",
        verhaal: "Dan klinken er trompetten. “De Koningin!” Snel moeten alle potjes op de goede plank: één plank voor elke soort.",
        vraag: "Op welke plank hoort elk potje?",
        items: ["CH₃–O–CH₂–CH₂–CH₂–CH₃", "CH₃–CHBr–CH₃", "CH₃–CH(OH)–CH₂–CH₂–CH₂–CH₃", "CH₃–CH₂–CH₂–O–CH₂–CH₂–CH₃", "CH₃–CH₂–CH₂–CH₂–CH₂–O–H", "I–CH₂–CH₂–CH₃"],
        keuzes: ["alkanol", "ether", "halogeenalkaan"],
        rijHash: ["514cd22791396e34a5e7fbb52cddecd1358c3600c654b752efd08ec3e5a24121", "c6ea3c15a250265b32fd1942c0edd34fac2a2b2c93d9409403878d8211a991c6", "9f0de141d8ea6cacb4bb2588544eb2e7b377958bd0c029beffffb6b2b9e70421", "546e6c7a8bdcab99ec76ef5124aaf34862b78a9ddebbafc2d8bf5a9d8adcf7ac", "7b08d5a022592cdba376b7a9887abbbc4d39289e008ca760e3d44f20c650ec47", "bc88b7eacab92b257738617cf7e0970b34bfae339fdc6cc79b3d702e39c1476b"],
        hint: "Zoek bij elk potje het O- of halogeenatoom. Zit de O tussen twee C-atomen, of tussen een C-atoom en een H-atoom?",
        omweg: "Z",
        goed: "Net op tijd. De tuinmannen gooien zich plat op hun gezicht.",
        parallel: {
          verhaal: "Op het onderste schap staan nog zes potjes zonder plek.",
          vraag: "Op welke plank hoort elk potje?",
          items: ["CH₃–CH₂–Br", "CH₃–CH₂–CH₂–O–CH₂–CH₂–CH₂–CH₃", "HO–CH₂–CH₂–CH₂–CH₂–CH₂–CH₂–CH₃", "CH₂F–CH₂F", "CH₃–CH₂–CH₂–CH₂–O–CH₂–CH₂–CH₂–CH₃", "CH₃–O–H"],
          keuzes: ["alkanol", "ether", "halogeenalkaan"],
          rijHash: ["e10a3b3192b62059bc542db3eb7840ab5cbc5cf62761e0e71dbf3fabe1a4235a", "9404108b794bf8ad18e1ad5713e1b40371dc016b03182e6b616a40bd6443e5a7", "36b41874330a7ca29c8f3e2004d767a418dec120e724be930bc9e8e0b72343da", "f729ec4c6fb765e37e9dd0a64bfe85945b6809fe36d69618e114c07a7f7c972f", "28d259c9bd0c7d293efd8cf8656e09bef9d23d5bec94310a0b943dfa8e977c43", "0a4b860063591e4b1707830679c3a23ed029d6a910e02419b4ed83995da251fd"],
          hint: "Waar zit de O: tussen twee C-atomen (ether) of tussen een C-atoom en een H-atoom (alkanol)?"
        }
      }
    ],
    omwegen: {
      X: {
        personage: "X",
        verhaal: "Tuinman Twee legt zijn kwast neer. “Een H vervangen door Cl, Br of I is net als een roos overschilderen,” zegt hij. “Het blijft dezelfde struik, maar je moet wel zeggen wát je hebt overgeschilderd.”",
        voorbeeld: {
          tekst: "Een H-atoom kan vervangen zijn door een <b>halogeenatoom</b>: <b>fluor-</b>, <b>chloor-</b>, <b>broom-</b> of <b>jood-</b>. Dat komt met een plaatsnummer vóór de stamnaam, zo nodig met <b>di-</b> of <b>tri-</b>. Halogenen en alkylgroepen samen zet je op <b>alfabet</b>; de plaatsnummers kies je zo laag mogelijk.",
          structuren: [
            { label: "3-chloor-2-methylhexaan", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [1, 1], [2, -1, "Cl"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [1, 6, 1], [2, 7, 1]] } }
          ],
          uitwerking: "Langste keten: 6 → hexaan. Van links: methyl op 2, Cl op 3. Van rechts zou het 4 en 5 zijn: hoger. Op alfabet: chloor vóór methyl → <b>3-chloor-2-methylhexaan</b>. Let op: de volgorde in de naam is níet de volgorde van de nummers."
        },
        makkelijk: {
          type: "naam",
          verhaal: "“Nu jij,” zegt Twee, en hij doopt zijn kwast in de verf.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [0, -1, "I"], [1, 1, "I"]], bindingen: [[0, 1, 1], [1, 2, 1], [0, 3, 1], [1, 4, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["2c8e4f01778ca7df8f4e1719731e3bdbe39b27b25ac5a006854050df0cfaa7e9"],
          hint: "Hoeveel I-atomen zie je? Welk voorvoegsel hoort daarbij?"
        }
      },
      Y: {
        personage: "Y",
        verhaal: "“Een OH!” roept de Hoedenmaker, die over de heg kijkt. “Die krijgt altijd voorrang bij het nummeren. Altijd!”",
        voorbeeld: {
          tekst: "Een <b>hydroxylgroep</b> is een –OH-groep. Een alkaan met een OH-groep heet een <b>alkanol</b>: de naam eindigt op <b>-ol</b>, met het plaatsnummer van de OH ervoor. Nummer zo dat de OH-groep een <b>zo laag mogelijk</b> nummer krijgt.",
          structuren: [
            { label: "octaan-3-ol", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [5, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [5, 8, 1]] } }
          ],
          uitwerking: "Van links genummerd zit de OH aan C-atoom 6, van rechts aan C-atoom 3. Het laagste nummer wint: <b>octaan-3-ol</b>."
        },
        makkelijk: {
          type: "naam",
          verhaal: "“En deze?” De Hoedenmaker zwaait met een theelepeltje.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [4, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["f04ea5e4cd7e0cf8e78a10c6d2e1ef6de979472b94348e71441cfc8cff74829a"],
          hint: "Begin met nummeren aan de kant van de OH-groep."
        }
      },
      Z: {
        personage: "Z",
        verhaal: "De Rups kronkelt naar de rand van zijn paddenstoel. “Een O-atoom,” zegt hij langzaam, “kan aan het eind zitten… of ertussen.”",
        voorbeeld: {
          tekst: "Zit het O-atoom tussen een C-atoom en een H-atoom (–O–H), dan is het een <b>alkanol</b>. Zit het O-atoom <b>tussen twee C-atomen</b> (C–O–C), dan is het een <b>ether</b>. Een ether heet <b>alkoxyalkaan</b>: het <b>kleinste</b> deel wordt alkoxy- (methoxy-, ethoxy-, propoxy-), het grootste deel geeft de stamnaam. Een alkanol en een ether met evenveel C-atomen zijn isomeren.",
          structuren: [
            { label: "ethoxypentaan", volledig: { atomen: [[0, 0], [1, 0], [2, 0, "O"], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1]] } }
          ],
          uitwerking: "Links van de O: 2 C-atomen → <b>ethoxy-</b>. Rechts: 5 C-atomen → <b>pentaan</b>. Samen: <b>ethoxypentaan</b>, C₇H₁₆O."
        },
        makkelijk: {
          type: "naam",
          verhaal: "“Nu jij,” zegt de Rups, en hij blaast een kringetje.",
          volledig: { atomen: [[0, 0], [1, 0, "O"], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["2f902d7b8b5915ff1a35ccd726bc4320f5733391d9b9564b7defa8cfde2831f6", "026ec2a5c788a6333c90e0a1e5644e5792681748f329f454cbe5ed7524fcb4f5"],
          hint: "Tel de C-atomen aan beide kanten van het O-atoom."
        }
      }
    },
    kluis: {
      intro: "Onder de rozenstruik staat een schatkist met vier draaischijven. Wie hem opent, krijgt een edelsteen. Werk in je schrift. Als je alle getallen hebt ingevuld, zie je per getal of het klopt."
    },
    geheim: {
      intro: "Tussen de rode rozen hangt één witte roos. Er zit een gouden slotje aan. Het is maar voor heel weinig mensen te openen."
    },
    einde: "De potjes staan op hun plek. Maar onder de rozenstruik wacht nog een schatkist…"
  },
  6: {
    titel: "Het theekransje",
    plaat: P(25),
    intro: ["Achter het deurtje van de Kolderkat staat een lange tafel onder een boom, gedekt voor heel veel gasten. Maar er zitten er maar drie: de Hoedenmaker, de Maartse Haas en een slapende Hazelmuis.", "Het is altijd zes uur, dus het is altijd theetijd. En steeds als hun kopjes vuil zijn, schuiven ze een plaats op."],
    duur: "Ongeveer 20 minuten. Wat je in de les niet af krijgt, maak je thuis af.",
    personages: {
      K: { naam: "De Maartse Haas", plaat: P(25) },
      N: { naam: "De Hoedenmaker", plaat: P(25) },
      T: { naam: "De Rups", plaat: P(15) }
    },
    hoofdpad: [
      {
        id: "h1", type: "kies",
        verhaal: "Onder een boom staat een lange tafel, gedekt voor heel veel gasten. Aan één hoekje zitten de Hoedenmaker, de Maartse Haas en een slapende Hazelmuis. “Geen plaats! Geen plaats!” roepen ze. Op tafel staan zes theepotten met een tekening erop.",
        vraag: "Kies álle theepotten met een aldehyde.",
        opties: [
          { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 2]] }, omweg: "K", k: "4309134338309995e8a086aeb0a21e2ff6d6d5bb59e37db573745768eaee8bc4" },
          { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [1, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [1, 8, 2]] }, omweg: "K", k: "baa4e28fff154bb47308114f186f18cc63328c1fece3a573344695d321237114" },
          { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [6, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1]] }, omweg: "K", k: "5449b9943cf5ad8fe36d4fc3fae9d63e014b0956986260abf48e2f382a7be056" },
          { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, -1, "O"], [1, 1], [2, -1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [0, 5, 2], [1, 6, 1], [2, 7, 1]] }, omweg: "K", k: "9888ca449cb137f51ddc437ed81e914c35de887eb8f45d97e5149245093b05f6" },
          { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [3, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [3, 9, 2]] }, omweg: "K", k: "20869c034988b81bbb568a34d56e004800d2c22827167a06fe1ca40909c4f0e6" },
          { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, -1, "O"], [3, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [0, 6, 2], [3, 7, 1]] }, omweg: "K", k: "5f083af416641380caa23fb70f1d7aa3021a3ddc34617366c9547abaca24bbe4" }
        ],
        hint: "Zoek bij elke tekening de C=O. Zit die aan het uiteinde of midden in de keten? En is het wel een C=O?",
        goed: "“Ga zitten,” zegt de Maartse Haas, al is er helemaal geen stoel vrij.",
        parallel: {
          verhaal: "“Andere kopjes!” roept de Hoedenmaker, en iedereen schuift een plaats op. Op de nieuwe kopjes staan weer tekeningen.",
          vraag: "Kies álle kopjes met een keton.",
          opties: [
            { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [2, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [2, 9, 2]] }, k: "3326afca9105317faa11ebe78b0a9219b3aa2db617a997d6ed0e0461efde0df7" },
            { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [8, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 2]] }, k: "cb45f802c7c95992ee909c2bd237ef43072ce427d72754f5c380776a49a013f3" },
            { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [1, -1, "O"], [2, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [1, 6, 2], [2, 7, 1]] }, k: "6cb43c9c2184c0fb67883c45974d552be37221a9ff25844ec470d0fdc61c6b5a" },
            { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [1, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [1, 8, 1]] }, k: "263114b30ebe3ebeff3255ec7364202fcf84bcf7665b90e6406345c8a9062176" },
            { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, -1, "O"], [1, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [0, 6, 2], [1, 7, 1]] }, k: "2acb14e1d7a198249197c9a671ea6bb30b50bd8020b95eaec60bfcb771fc6475" },
            { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [3, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [3, 8, 2]] }, k: "bc043e92591f87f8e7040c7de70ca6ad1b2909bb43e63e109dc9b54eedb62d0d" }
          ],
          hint: "Een keton heeft de C=O midden in de keten, niet aan het uiteinde."
        }
      },
      {
        id: "h2", type: "naam",
        verhaal: "“Wil je wat wijn?” vraagt de Maartse Haas. Alice ziet alleen thee. Op de theepot voor haar staat een tekening, maar geen naam.",
        volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, -1, "O"], [3, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [0, 5, 2], [3, 6, 1]] },
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["1d5b5c7f0d2b752cdc2bfe9960138dc23bec1aca641d72e5814f662cc42a9afb", "7f525f98c99ecb2cf8c2f888e2225cf03f5ddf0fab211a0e0d32d0ca4f8c4a44", "8f8768280ec63fe70a4957095c14e09e1e3a8c5c826dc153eaaf903a6901ae66"],
        hint: "Welk C-atoom krijgt bij een aldehyde altijd nummer 1? Tel vanaf daar.",
        omweg: "N",
        goed: "“Er is helemaal geen wijn,” zegt de Maartse Haas tevreden.",
        parallel: {
          verhaal: "Op de suikerpot staat ook een tekening.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [5, -1, "O"], [3, 1], [3, 2]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 2], [3, 7, 1], [7, 8, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["04e93160ddf32e9c2635e3a6971c5b2a28528a105e84d9923901c541486068fa", "9e8b41a5b9dc97733e850be633f7d831fcd4ebe6ca4cc45d80a850a60d4b5aa4", "83f48f607c7784d6fce6446dfdaf8b38b24b1825f2d37ba92eda6b17db36b1d9"],
          hint: "Zoek de langste keten met het C-atoom van de C=O erin, en geef dat C-atoom nummer 1."
        }
      },
      {
        id: "h3", type: "naam",
        verhaal: "“Waarom lijkt een raaf op een schrijftafel?” vraagt de Hoedenmaker. Alice weet het niet. “Ik ook niet,” zegt hij. “Maar hoe heet déze?”",
        volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [5, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [5, 8, 2]] },
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["14a307afe7a5fce067f8ed2cd264de0b05617c2426b93497bb03ec0a5f5c8243"],
        hint: "Waar zit de C=O? Nummer zo dat dat C-atoom een zo laag mogelijk nummer krijgt.",
        omweg: "N",
        goed: "“Goed zo,” zegt de Hoedenmaker. “Een raadsel zonder antwoord is ook een raadsel.”",
        parallel: {
          verhaal: "De Hoedenmaker schuift zijn kopje naar Alice. Er staat een tekening op.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [7, 9, 2]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["6b03ad41b4badfad7c9c2c4e9588f0ed159ae7612165dde6587d3ab88113170c"],
          hint: "Nummer vanaf de kant die het dichtst bij de C=O zit."
        }
      },
      {
        id: "h4", type: "kies",
        verhaal: "“Schuif op!” roept de Hoedenmaker weer. “Zelfde gasten, andere plaatsen.” Hij legt een kaartje neer: octaan-2-on. “Wie hoort er bij mijn familie?”",
        vraag: "Kies álle isomeren van octaan-2-on.",
        opties: [
          { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [0, -1, "O"], [1, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [0, 7, 2], [1, 8, 1]] }, omweg: "T", k: "45376be764d833f235aa1b67b0ce75fecfcca7d099519a60d3d1dff513f93b43" },
          { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [1, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [1, 8, 1]] }, omweg: "T", k: "fc25e9838fbd520abbff78ceb667ff62478953181d1269aaa19023a80da03a5f" },
          { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [6, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [6, 8, 2]] }, omweg: "T", k: "8569f7e206ad7a7f45cd20c5f0c3c23049ad9d1be84daf43db5979ab45000ea1" },
          { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [3, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [3, 8, 2]] }, omweg: "T", k: "cdf4f0839c79df78ea285173c4e198390babfbee466c6f1444556a2e8f8e3f58" },
          { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [2, -1, "O"], [4, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [2, 7, 2], [4, 8, 1]] }, omweg: "T", k: "aebc555c26bd6379d185543428df2e80c5804a92edeec98434ef6ec5aede45be" },
          { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]], bindingen: [[0, 1, 1], [1, 2, 2], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1]] }, omweg: "T", k: "026554ed4f23f953b806c0ebba14c3e1e16dfe48725b362bd1da8c86b40d89c4" }
        ],
        hint: "Bepaal bij elke tekening de molecuulformule en vergelijk met octaan-2-on. Is het wel een ándere stof?",
        goed: "“Dezelfde stukjes, een andere plaats aan tafel,” zegt de Hoedenmaker. “Zo hoort het.”",
        parallel: {
          verhaal: "Een nieuw kaartje: nonanal.",
          vraag: "Kies álle isomeren van nonanal.",
          opties: [
            { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [1, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [1, 9, 2]] }, k: "60d000e9775541d1b325149d924998ddfed17f87de5403380345ce2c0018e9f8" },
            { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [0, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [0, 9, 2]] }, k: "68a205f9e7a1cb457c4ca1806efbd39c04d294fd9d0027e09a21e0d5eea5fb5a" },
            { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [0, -1, "O"], [1, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [0, 8, 2], [1, 9, 1]] }, k: "cbc02c2401f59cc5f1e658df0327fe6c92ec7939cdfc2f7b95cc31461ab29fea" },
            { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [8, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1]] }, k: "fd2030ab7f1d03fd11ebb5e1a1760ae8978f4bfeac635828371d0a69ba9da025" },
            { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [4, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [4, 9, 2]] }, k: "dbd7d6dcf80174ee7dc32add9cb4af9ee51e494571763a74db82a1a2f07e9c8d" },
            { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 2]] }, k: "a4e4ab5fdb7ffd0a4aab7d89c3b15893615fe9b264d530d52e3ecef4b19f24eb" }
          ],
          hint: "Een isomeer heeft dezelfde molecuulformule, maar is een andere stof."
        }
      },
      {
        id: "h5", type: "getal",
        verhaal: "De Hazelmuis wordt even wakker. “Ik heb een theepot gedroomd,” mompelt hij, “met dit erop.” En hij valt weer in slaap.",
        formule: "2,2-dimethylpentanal",
        vraag: "Teken de structuur. Hoeveel H-atomen heeft het molecuul?",
        hash: ["78151920941f40502e7e33edc8b46c1980727d1445b7080c0b0753f8b4f1f55b"],
        hint: "Teken eerst de keten met de C=O aan C-atoom 1. Zet de methylgroepen erop en vul elk C-atoom aan tot 4 bindingen.",
        omweg: "T",
        goed: "De Hazelmuis snurkt tevreden.",
        parallel: {
          verhaal: "De Hazelmuis mompelt nog iets.",
          formule: "3,3-dimethylhexanal",
          vraag: "Teken de structuur. Hoeveel H-atomen heeft het molecuul?",
          hash: ["0d4e4e099e9afab4b64c6d52fd5f0ea8d21f2c9d82e81a36e923a5dc51c0bbaa"],
          hint: "Teken de keten van 6 C-atomen met de C=O aan C-atoom 1, en zet beide methylgroepen op C-atoom 3."
        }
      },
      {
        id: "h6", type: "getal",
        verhaal: "Dan stoppen ze de Hazelmuis in de theepot. “Laatste raadsel,” zegt de Maartse Haas. “Zeven koolstofatomen, één zuurstofatoom, een C=O — en geen vertakkingen.”",
        formule: "C₇H₁₄O — aldehyden én ketonen, onvertakt",
        vraag: "Hoeveel verschillende stoffen passen bij deze beschrijving?",
        hash: ["c0ea46990ed62d7fe75e5e9e6cfe6e5a2e620284720fcdbdd7d7f5bac09bbcec"],
        hint: "Schuif de C=O stap voor stap door de keten, van het uiteinde naar het midden. Geef elke stof een naam.",
        omweg: "T",
        goed: "Alice staat op. “Dit is het domste theekransje waar ik ooit ben geweest,” zegt ze — en ze ziet een deurtje in een boomstam.",
        parallel: {
          verhaal: "Nog één: “Acht koolstofatomen, alleen ketonen, onvertakt.”",
          formule: "C₈H₁₆O — alleen ketonen, onvertakt",
          vraag: "Hoeveel verschillende stoffen passen bij deze beschrijving?",
          hash: ["aeca3bc0d28c45740853e8f43524694d526e152082db13e3c053d2511a5ab9f2"],
          hint: "Een keton heeft de C=O midden in de keten. Welke plaatsen geven verschillende namen?"
        }
      }
    ],
    omwegen: {
      K: {
        personage: "K",
        verhaal: "De Maartse Haas zet twee theepotten naast elkaar. “Kijk goed,” zegt hij. “Waar zit het deksel?”",
        voorbeeld: {
          tekst: "Een <b>carbonylgroep</b> is een C-atoom met een dubbele binding naar een O-atoom: <b>C=O</b>. Zit de C=O aan het <b>uiteinde</b> van de keten, dan is het een <b>aldehyde</b> (naam op <b>-al</b>). Zit de C=O <b>midden in</b> de keten, dan is het een <b>keton</b> (naam op <b>-on</b>). Let op: een –OH is géén C=O, dat is een alkanol.",
          structuren: [
            { label: "octanal · aldehyde", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 2]] } },
            { label: "octaan-2-on · keton", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [1, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [1, 8, 2]] } }
          ],
          uitwerking: "Bij octanal heeft het C-atoom van de C=O nog 1 H en maar één buur-C. Bij octaan-2-on zit de C=O tussen twee C-atomen."
        },
        makkelijk: {
          type: "naam",
          verhaal: "“Nu jij,” zegt de Haas.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [3, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [3, 10, 2]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["4796682b7117af7ab4a6c4b44a3f203bf6e2be6a403492e55a9102cf5822f399"],
          hint: "Is het een aldehyde of een keton? Nummer daarna vanaf de kant die het dichtst bij de C=O zit."
        }
      },
      N: {
        personage: "N",
        verhaal: "“Nummer één aan tafel!” roept de Hoedenmaker. “Bij een aldehyde zit de C=O altijd op plek één. Bij een keton: zo dicht mogelijk bij het begin.”",
        voorbeeld: {
          tekst: "Bij een <b>aldehyde</b> krijgt het C-atoom van de C=O altijd <b>nummer 1</b>; een plaatsnummer voor -al is niet nodig. Zijtakken nummer je vanaf dat C-atoom. Bij een <b>keton</b> nummer je zo dat de C=O een <b>zo laag mogelijk</b> nummer krijgt; dat nummer staat vóór -on.",
          structuren: [
            { label: "2-ethylhexanal", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, -1, "O"], [1, 1], [1, 2]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [0, 6, 2], [1, 7, 1], [7, 8, 1]] } },
            { label: "nonaan-3-on", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [6, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [6, 9, 2]] } }
          ],
          uitwerking: "Links: de C=O zit aan het uiteinde, dus dat C-atoom is 1. De ethylgroep zit op 2: <b>2-ethylhexanal</b>. Rechts: van links zou de C=O op 7 zitten, van rechts op 3: <b>nonaan-3-on</b>."
        },
        makkelijk: {
          type: "naam",
          verhaal: "“En deze?” De Hoedenmaker tikt met zijn lepeltje op een kopje.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [8, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [8, 10, 2]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["b5fee9fcad901a6df0397583285d81e1432a9a143679aa0b71bd1e042ec386f3"],
          hint: "Nummer vanaf de kant die het dichtst bij de C=O zit."
        }
      },
      T: {
        personage: "T",
        verhaal: "De Rups is er ook, op een paddenstoel naast de tafel. “Schuif op,” zegt hij langzaam. “Eén plaats. En nog één. Tot je in het midden bent.”",
        voorbeeld: {
          tekst: "Zo vind je systematisch alle aldehyden en ketonen bij een formule: zet de C=O eerst aan het <b>uiteinde</b> (aldehyde) en <b>schuif</b> hem dan stap voor stap op naar het midden (ketonen). Geef elke stof een naam: wat voorbij het midden komt, is dezelfde stof van de andere kant. Een aldehyde en een keton met evenveel C-atomen zijn <b>isomeren</b> (CₙH₂ₙO).",
          structuren: [
            { label: "nonanal", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [8, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 2]] } },
            { label: "nonaan-2-on", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [1, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [1, 9, 2]] } },
            { label: "nonaan-3-on", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [2, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [2, 9, 2]] } },
            { label: "nonaan-4-on", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [3, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [3, 9, 2]] } },
            { label: "nonaan-5-on", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [4, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [4, 9, 2]] } }
          ],
          uitwerking: "Onvertakt C₉H₁₈O: nonanal en nonaan-2-, 3-, 4- en 5-on. ‘Nonaan-6-on’ is nonaan-4-on van de andere kant. Dus <b>5</b> stoffen."
        },
        makkelijk: {
          type: "getal",
          verhaal: "“Tel maar,” zegt de Rups.",
          formule: "C₁₀H₂₀O — alleen ketonen, onvertakt",
          vraag: "Hoeveel verschillende stoffen passen bij deze beschrijving?",
          hash: ["558aad6002212f809a32ae30b3e402098ea90b86dceb78b4090a525fee1e1675"],
          hint: "Schuif de C=O vanaf C-atoom 2 naar het midden en geef elke stof een naam."
        }
      }
    },
    kluis: {
      intro: "Onder de theetafel staat een schatkist met vier draaischijven. Wie hem opent, krijgt een edelsteen. Werk in je schrift. Als je alle getallen hebt ingevuld, zie je per getal of het klopt."
    },
    geheim: {
      intro: "In de theepot, naast de Hazelmuis, glinstert een gouden slotje. Het is maar voor heel weinig mensen te openen."
    },
    einde: "Alice loopt door het deurtje in de boom. Maar onder de theetafel wacht nog een schatkist…"
  },
  7: {
    titel: "De keuken van de Hertogin",
    plaat: P(21),
    intro: ["Midden in het bos staat een huisje. Een lakei met een vissenkop overhandigt een enorme brief aan een lakei met een kikkerkop: “Voor de Hertogin. Een uitnodiging van de Koningin.”", "Alice glipt naar binnen. De keuken staat vol rook. Een kokkin roert in een ketel soep, en het ruikt naar azijn, peper en… vis."],
    duur: "Ongeveer 20 minuten. Wat je in de les niet af krijgt, maak je thuis af.",
    personages: {
      Z: { naam: "De kokkin", plaat: P(21) },
      A: { naam: "De Kolderkat", plaat: P(23) },
      T: { naam: "De Hoedenmaker", plaat: P(25) }
    },
    hoofdpad: [
      {
        id: "h1", type: "kies",
        verhaal: "Uit een huis in het bos komt een vreselijke geur. Binnen, in de keuken van de Hertogin, staat een kokkin te roeren in een ketel. Op de plank staan zes potten met een tekening. “Zuur!” roept de kokkin. “Ik wil alleen de zure!”",
        vraag: "Kies álle potten met een carbonzuur.",
        opties: [
          { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [7, -1, "O"], [7, 1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 2], [7, 9, 1]] }, omweg: "Z", k: "2ec002f4052afde6d999cf1149a9137ddf2e93a90127e0daf4d71b3510d6f412" },
          { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 2]] }, omweg: "Z", k: "108e528d756dec7ef7821559a128a435e380390293fb1bd6ffd4836ff3fb9503" },
          { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, -1, "O"], [0, 1, "O"], [3, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [0, 5, 2], [0, 6, 1], [3, 7, 1]] }, omweg: "Z", k: "fd8318c2149a7c502e62397d99adf43c030c7f8c809f1dcdba3d73d90bf42ef0" },
          { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [0, 6, 1]] }, omweg: "A", k: "999e2a444fb6db4f1b507bdac4ecf45859ee9306a6c126850d87af1b343c6283" },
          { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [5, -1, "O"], [5, 1, "O"], [3, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 2], [5, 7, 1], [3, 8, 1]] }, omweg: "Z", k: "9fca28803d0ddbe719eb8cfef6d3a13a41e08e3ea40c54e4513bfc8c22a33371" },
          { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, -1, "O"], [1, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [0, 6, 2], [1, 7, 1]] }, omweg: "Z", k: "93335b8c29de6d1749c9a468216645f4385c7d69dbaa251bfe9616386a28a101" }
        ],
        hint: "Zoek bij elke tekening de groep aan het uiteinde. Zit er aan het eind-C een C=O én een OH?",
        goed: "De kokkin gooit ze er alle drie in. De soep begint nog zuurder te ruiken.",
        parallel: {
          verhaal: "“En nu de vispotten!” Op de onderste plank staan nog zes potten.",
          vraag: "Kies álle potten met een amine.",
          opties: [
            { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [1, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [1, 6, 1]] }, k: "6f2fe2598540879fa5e3530ed81a62302a5e79f96dd17b416ac3865cac10409f" },
            { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [8, -1, "O"], [8, 1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 2], [8, 10, 1]] }, k: "99a70c86c7317d3b826b983a5cb933c8b0f7a61314a47ef7f784f81dc94d037f" },
            { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [6, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1]] }, k: "9992c43b582837197a0a5bc840eb55c6d0216b0567f966bf8dcc65a8cdf8bde9" },
            { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [0, 6, 1]] }, k: "4838f7402a95cc5a5476a13e0b42fc2dabfc646ca5a43a7ecc9d69c7ec1ea92f" },
            { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [1, -1, "N"], [1, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [1, 4, 1], [1, 5, 1]] }, k: "f970b8a3c109c989402180983866c897bf1247cedfea28eb57cd11e4d2e32c74" },
            { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 2]] }, k: "81e3b1b860815358321fb2050dfb180348b828bce30f34ecce6a2cbb2984a2c0" }
          ],
          hint: "Een amine heeft een N-atoom met twee H-atomen: –NH₂."
        }
      },
      {
        id: "h2", type: "naam",
        verhaal: "Een lakei met een kikkerkop houdt Alice een pot voor. “Wat staat erop?” kwaakt hij. “Ik kan niet lezen.”",
        volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [6, -1, "O"], [6, 1, "O"], [4, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 2], [6, 8, 1], [4, 9, 1]] },
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["21cbaaba1d98139b4ff07c87385a99e48542cffaf9d12a8a5f34a0689ced74cd"],
        hint: "Welk C-atoom krijgt bij een carbonzuur altijd nummer 1? Tel de keten vanaf daar.",
        omweg: "Z",
        goed: "“Aha,” kwaakt de lakei. Hij zet de pot ondersteboven terug.",
        parallel: {
          verhaal: "De lakei heeft nog een pot.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, -1, "O"], [0, 1, "O"], [1, 1], [1, 2]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [0, 5, 2], [0, 6, 1], [1, 7, 1], [7, 8, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["e9f2e1a117b222abba784fa6dfa54ea8670e976b79ec9249320f56152333804b"],
          hint: "Zoek de langste keten met het C-atoom van de COOH erin, en geef dat C-atoom nummer 1."
        }
      },
      {
        id: "h3", type: "naam",
        verhaal: "Een lakei met een vissenkop komt binnen. Hij ruikt naar… vis. In zijn hand een flesje.",
        volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [5, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [5, 7, 1]] },
        vraag: "Geef de systematische naam van deze stof.",
        hash: ["81e55f875f0c51c4fe134f73590fce439bcfb7796f191622b7844bcf6055e6b2"],
        hint: "Aan welk C-atoom zit de NH₂-groep? Nummer zo dat dat nummer zo laag mogelijk is.",
        omweg: "A",
        goed: "De vissenlakei buigt zo diep dat zijn pruik op de grond valt.",
        parallel: {
          verhaal: "Uit zijn zak haalt hij nog een flesje.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [5, 1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [5, 8, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["d2c7a285a5a7cd478ac908e168e372b230bcb01975cf911065f75bdbee8d2538"],
          hint: "Nummer vanaf de kant die het dichtst bij de NH₂-groep zit."
        }
      },
      {
        id: "h4", type: "getal",
        verhaal: "De Hertogin wiegt een baby die steeds harder niest. “Peper!” roept ze. Op het peperpotje staat een naam.",
        formule: "4-methylpentaan-1-amine",
        vraag: "Teken de structuur. Hoeveel H-atomen heeft het molecuul?",
        hash: ["757aadb1f2b01e75f1123731ac658e096ff7d73fe9a2f82eabe5dcd031b6bfc8"],
        hint: "Teken de keten, zet de methylgroep en de NH₂-groep erop en vul elk C-atoom aan tot 4 bindingen. Vergeet de H-atomen aan de N niet.",
        omweg: "A",
        goed: "De baby niest. En niest nog eens.",
        parallel: {
          verhaal: "Op het zoutvaatje staat ook een naam.",
          formule: "2-ethylbutaanzuur",
          vraag: "Teken de structuur. Hoeveel H-atomen heeft het molecuul?",
          hash: ["27a3cb26db23f4ab78912d4131c8961e20785b46aaed62ad17dd922db7583d08"],
          hint: "Teken de keten met de COOH aan C-atoom 1. Het C-atoom van de COOH heeft geen H aan zich; de OH wel."
        }
      },
      {
        id: "h5", type: "kies",
        verhaal: "“Hier, pas jij er maar even op,” zegt de Hertogin, en ze gooit Alice de baby toe. Op de wieg hangt een briefje: “C₇H₁₄O₂”. Daaronder zes tekeningen.",
        vraag: "Kies álle tekeningen met de molecuulformule C₇H₁₄O₂.",
        opties: [
          { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, -1, "O"], [0, 1, "O"], [1, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [0, 6, 2], [0, 7, 1], [1, 8, 1]] }, omweg: "Z", k: "cd96c59ac1ae3158a9259165dad83f87c362257f20a50fac9b74e4579d5a5db9" },
          { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [6, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 2]] }, omweg: "Z", k: "cdccbe94ec09aa150b1d7b5bd4c6ed98945c7233397f1c320c1b069d3b268871" },
          { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, -1, "O"], [0, 1, "O"], [2, 1], [2, -1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [0, 5, 2], [0, 6, 1], [2, 7, 1], [2, 8, 1]] }, omweg: "Z", k: "4ceb5f17cefd304f23eb03543169a69e3c636e14fda398836e9c66271a805443" },
          { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [0, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [0, 7, 1]] }, omweg: "A", k: "972518940539809da44085ff1029fcac47c5de81cae1a53db5c2bdc7fddb6d50" },
          { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [0, -1, "O"], [0, 1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [0, 8, 2], [0, 9, 1]] }, omweg: "Z", k: "034aae6ee6f782e8affb31e7f11dd758cffb80f5e383ed46e21e279a56d41ca7" },
          { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, -1, "O"], [0, 1, "O"], [3, 1], [3, 2]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [0, 5, 2], [0, 6, 1], [3, 7, 1], [7, 8, 1]] }, omweg: "Z", k: "dc9f412c9cb23a46fdae492c0055135a514103cba405b0c0e584fb2d7bb60d02" }
        ],
        hint: "Tel bij elke tekening de C-, H-, O- en N-atomen.",
        goed: "Buiten begint de baby te knorren. Als Alice kijkt, is het geen baby meer — maar een biggetje.",
        parallel: {
          verhaal: "Op de achterkant van het briefje: “C₆H₁₅N”.",
          vraag: "Kies álle tekeningen met de molecuulformule C₆H₁₅N.",
          opties: [
            { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [2, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [2, 6, 1]] }, k: "0090c407f3a82da4da5fe4e78fc91385d5c0e1bd4e2149fdcd1a7656cee75e81" },
            { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [0, 6, 2]] }, k: "ad058e955a31ac92114cef6aea2835069c2a7d8a52cd49f300201c346c4184f2" },
            { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [1, -1, "N"], [2, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [1, 5, 1], [2, 6, 1]] }, k: "a8a75528964ec739f9ada372e92e2e65ee63772827ad97c4d804f3f5f7784769" },
            { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [1, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [1, 7, 1]] }, k: "1b1aa015385aca3e2eaa23227e689eb8b7b2dbf601481723a0037cfb0490a5f4" },
            { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [5, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1]] }, k: "f25f0c79aabfd4ceda36cfd050f71eff0677ab4e13cf9dd201e1b5b7b70a7a02" },
            { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [5, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1]] }, k: "5bc83881b808508b2edc4610c0a07239e3da3818e5c1b8ecb1d4c70d6c4af151" }
          ],
          hint: "Tel de C-, H- en N-atomen. Vergeet de twee H-atomen aan de N niet."
        }
      },
      {
        id: "h6", type: "getal",
        verhaal: "Het biggetje draaft het bos in. Alice ruikt de soep nog. “Hoeveel verschillende vissige stoffen zitten daar wel niet in?” vraagt ze zich af.",
        formule: "C₆H₁₅N — amines met een onvertakte keten",
        vraag: "Hoeveel verschillende stoffen passen bij deze beschrijving?",
        hash: ["7417c13cafcd9cb41ec107e5ff8971f6c185e493d10233f6485541ef8d5b9956"],
        hint: "Schuif de NH₂-groep stap voor stap van het uiteinde naar het midden van de keten. Geef elke stof een naam.",
        omweg: "T",
        goed: "Uit de verte waait een heerlijke geur aan: aardbeien, peren, ananas. Het komt uit de keuken van het paleis.",
        parallel: {
          verhaal: "En met één C-atoom meer?",
          formule: "C₇H₁₇N — amines met een onvertakte keten",
          vraag: "Hoeveel verschillende stoffen passen bij deze beschrijving?",
          hash: ["8ec0a11430f41b46b65f7d4b62417fca5628eebde3ee7ab98b48826a0e90701a"],
          hint: "Schuif de NH₂-groep van C-atoom 1 naar het midden. Welke plaatsen geven verschillende namen?"
        }
      }
    ],
    omwegen: {
      Z: {
        personage: "Z",
        verhaal: "De kokkin slaat met haar pollepel op de ketel. “Een zuur herken je aan het eind,” bromt ze. “Daar zit een C=O én een OH aan hetzelfde C-atoom.”",
        voorbeeld: {
          tekst: "Een <b>carbonzuur</b> heeft een <b>carboxylgroep</b>: een C-atoom met een <b>C=O</b> én een <b>OH</b> (–COOH). Dat C-atoom zit altijd aan het <b>uiteinde</b>, <b>telt mee</b> in de stamnaam en krijgt altijd <b>nummer 1</b>. De naam eindigt op <b>-zuur</b>: alkaanzuur. Let op: bij een aldehyde zit aan dat C-atoom een H in plaats van een OH.",
          structuren: [
            { label: "3-methylpentaanzuur", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [4, -1, "O"], [4, 1, "O"], [2, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 2], [4, 6, 1], [2, 7, 1]] } }
          ],
          uitwerking: "Het C-atoom van de COOH (rechts) is C-atoom 1. De keten is 5 lang → <b>pentaanzuur</b>. De methylgroep zit dan op 3: <b>3-methylpentaanzuur</b>."
        },
        makkelijk: {
          type: "naam",
          verhaal: "“Nu jij,” zegt de kokkin, en ze strooit nog wat peper.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [0, -1, "O"], [0, 1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [0, 10, 2], [0, 11, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["d5986928d75e253197b135adba7e46ae02d4258442605b94f9415447fc72caf5"],
          hint: "Tel alle C-atomen, ook het C-atoom van de COOH."
        }
      },
      A: {
        personage: "A",
        verhaal: "In de hoek van de keuken verschijnt een grijns. “Vis,” zegt de Kolderkat, en hij snuift. “Dat is stikstof. Drie armen heeft dat.”",
        voorbeeld: {
          tekst: "Een <b>amine</b> heeft een <b>aminogroep</b>: –NH₂. Een N-atoom heeft <b>3 bindingen</b>: één naar het C-atoom en twee naar H-atomen. De naam is <b>alkaanamine</b>, met het plaatsnummer van de NH₂-groep ervoor. Nummer zo dat dat nummer <b>zo laag mogelijk</b> is.",
          structuren: [
            { label: "butaan-1-amine", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [0, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 4, 1]] } },
            { label: "pentaan-3-amine", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [2, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [2, 5, 1]] } }
          ],
          uitwerking: "Links zit de NH₂ aan het uiteinde: <b>butaan-1-amine</b>. Rechts zit hij precies in het midden: van beide kanten C-atoom 3, <b>pentaan-3-amine</b>."
        },
        makkelijk: {
          type: "naam",
          verhaal: "“En deze?” vraagt de Kat. Alleen zijn grijns is nog te zien.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [3, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [3, 7, 1]] },
          vraag: "Geef de systematische naam van deze stof.",
          hash: ["75ba541829b7cba887ed48799d48c0e005f3d3bb27caa259c945b95e26e25df9"],
          hint: "Tel de C-atomen en zoek aan welk C-atoom de NH₂ zit."
        }
      },
      T: {
        personage: "T",
        verhaal: "De Hoedenmaker steekt zijn hoofd door het raam. “Opschuiven! Altijd opschuiven! Tot je in het midden bent!”",
        voorbeeld: {
          tekst: "Zo vind je systematisch alle onvertakte amines bij een formule: zet de NH₂ eerst aan het <b>uiteinde</b> en <b>schuif</b> hem dan stap voor stap naar het midden. Geef elke stof een naam: wat voorbij het midden komt, is dezelfde stof van de andere kant.",
          structuren: [
            { label: "pentaan-1-amine", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [0, 5, 1]] } },
            { label: "pentaan-2-amine", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [1, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [1, 5, 1]] } },
            { label: "pentaan-3-amine", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [2, -1, "N"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [2, 5, 1]] } }
          ],
          uitwerking: "Onvertakt C₅H₁₃N: NH₂ op C-atoom 1, 2 of 3. ‘Pentaan-4-amine’ is pentaan-2-amine van de andere kant. Dus <b>3</b> stoffen."
        },
        makkelijk: {
          type: "getal",
          verhaal: "“Tel maar,” zegt de Hoedenmaker.",
          formule: "C₈H₁₉N — amines met een onvertakte keten",
          vraag: "Hoeveel verschillende stoffen passen bij deze beschrijving?",
          hash: ["423e9e15f78983843ab55e2bb2f3b2a4cd4a8e8564edd5835cdcb683e3188814"],
          hint: "Schuif de NH₂ van C-atoom 1 naar het midden en geef elke stof een naam."
        }
      }
    },
    kluis: {
      intro: "Onder de keukentafel staat een schatkist met vier draaischijven. Wie hem opent, krijgt een edelsteen. Werk in je schrift. Als je alle getallen hebt ingevuld, zie je per getal of het klopt."
    },
    geheim: {
      intro: "In de soepketel glinstert iets: een gouden slotje. Het is maar voor heel weinig mensen te openen."
    },
    einde: "Alice loopt het bos in, achter de geur van taartjes aan. Maar onder de keukentafel wacht nog een schatkist…"
  },
  8: {
    titel: "De taartjes van de Koningin",
    plaat: P(29),
    intro: ["Achter het theekransje ligt de tuin van het paleis. Uit de keuken komt een heerlijke geur: aardbeien, peren, ananas, banaan.", "De Koningin van Harten heeft taartjes laten bakken. Maar die geur komt niet van fruit — die komt uit flesjes."],
    duur: "Ongeveer 20 minuten. Wat je in de les niet af krijgt, maak je thuis af.",
    personages: {
      E: { naam: "De Koningin van Harten", plaat: P(29) },
      N: { naam: "De Hoedenmaker", plaat: P(25) },
      F: { naam: "De Rups", plaat: P(15) }
    },
    hoofdpad: [
      {
        id: "h1", type: "kies",
        verhaal: "In de keuken van het paleis staan taartjes af te koelen. Ze ruiken naar aardbeien, peren en ananas. Op een plank staan zes flesjes geurstof. “De Koningin wil alleen de fruitige,” zegt de kok.",
        vraag: "Kies álle flesjes met een ester.",
        opties: [
          { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0, "O"], [4, 0], [5, 0], [6, 0], [7, 0], [2, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [2, 8, 2]] }, omweg: "E", k: "98ca369c5a046c7c9921a4edd67334ae2ae571a4e32864fed4a4bfc327dad4d4" },
          { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [7, -1, "O"], [7, 1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 2], [7, 9, 1]] }, omweg: "E", k: "c9422622610bcd2540af8f9aa2dec0e6eeedf55cafe7ee9d26dfc884387d15cf" },
          { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0, "O"], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1]] }, omweg: "E", k: "58abbff99d331de3ac286534596989b8cea579e2960944d633e1f15874e0f05e" },
          { label: "D", volledig: { atomen: [[0, 0], [1, 0, "O"], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [2, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [2, 8, 2]] }, omweg: "E", k: "294ef0b823721f44d221520e6f735701b03f0993a4284da5d5dd53ccb4b01f61" },
          { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [3, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [3, 9, 2]] }, omweg: "E", k: "265d65fd2c0050875ea306aecd07a3d336e9b5c7b65efa62d82a38f8ff6f67b8" },
          { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0, "O"], [6, 0], [7, 0], [8, 0], [4, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [4, 9, 2]] }, omweg: "E", k: "5c946e19dde390e8acaaf3510844a9924bab3d7b84db2992b61f9d4a4dbd705d" }
        ],
        hint: "Zoek bij elke tekening een C=O. Zit er direct naast dat C-atoom een O-atoom dat naar een volgend C-atoom gaat?",
        goed: "De kok schenkt de drie flesjes leeg boven het deeg. De keuken ruikt naar een fruitmand.",
        parallel: {
          verhaal: "Op de plank erboven staan nog zes flesjes.",
          vraag: "Kies álle flesjes met een ester.",
          opties: [
            { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0, "O"], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [3, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [3, 9, 2]] }, k: "6b73dbf532a9e7e9335efa785637b534d864b2e59f07187f95c7ac29b051dcff" },
            { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [8, -1, "O"], [8, 1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 2], [8, 10, 1]] }, k: "ffad9c94fc962817b26461c7569db14b34ff7c126b543444b3690493e00d9394" },
            { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0, "O"], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [2, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [2, 9, 2]] }, k: "17be071287106aa3c536da749e0fcf475f7bab24e15899e90fda99984db2bc6b" },
            { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0, "O"], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1]] }, k: "ded067762e06768e562d2ba67483eb624a8a1879827f710dbbfa5431aceae8c3" },
            { label: "E", volledig: { atomen: [[0, 0], [1, 0, "O"], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [0, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [0, 8, 2]] }, k: "5594e81e1b948cb899037a3eeae0f5044592156d8951cdf7344d629f41b8e9e7" },
            { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [1, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [1, 10, 2]] }, k: "489e46cde8f2e6f597e3934eed301c92d4813e461b086b3cc886442a96e3af91" }
          ],
          hint: "Een ester heeft de groep –C(=O)–O– midden in het molecuul: een C=O met direct daarnaast een O tussen twee C-atomen."
        }
      },
      {
        id: "h2", type: "naam",
        verhaal: "Eén flesje heeft geen etiket. “Hoe heet dat?” vraagt de kok. “De Koningin wil van elke geur de naam weten. Anders… OFF WITH YOUR HEAD!”",
        volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0, "O"], [7, 0], [8, 0], [9, 0], [5, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [5, 10, 2]] },
        vraag: "Geef de systematische naam van deze ester.",
        hash: ["93925c7de5cfc588d6b0a4c4c6228ebec838e3336531eed3d33c742801fbd701"],
        hint: "Knip de ester tussen het C-atoom van de C=O en het O-atoom in de keten. Welk deel hoort bij het zuur, en welk bij het alkanol?",
        omweg: "N",
        goed: "De kok schrijft de naam op het flesje, met trillende hand.",
        parallel: {
          verhaal: "Er staat nog een flesje zonder etiket.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0, "O"], [3, 0], [4, 0], [5, 0], [6, 0], [1, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [1, 7, 2]] },
          vraag: "Geef de systematische naam van deze ester.",
          hash: ["fa57c7a440495e5197d51fd3399618136c8df5abab08477383306f1d2327fc41"],
          hint: "Welke kant van het O-atoom heeft de C=O? Dat deel hoort bij het zuur en wordt het -oaat-deel."
        }
      },
      {
        id: "h3", type: "naam",
        verhaal: "Op het receptenboek staat: “Voor de abrikozentaart: meng deze twee en verwarm met een beetje zwavelzuur.”",
        formule: "pentaan-1-ol + propaanzuur",
        vraag: "Geef de naam van de ester die ontstaat.",
        hash: ["c2d5fbd05f5f07ed900e4acdb2edaf468c3a8ae4cbeb69ad9565df857dc7d17c"],
        hint: "Uit het alkanol komt het eerste deel van de naam (alkyl-), uit het zuur het tweede deel (-oaat).",
        omweg: "N",
        goed: "De abrikozentaart ruikt heerlijk. De kok glimlacht voor het eerst.",
        parallel: {
          verhaal: "Op de volgende bladzijde: “Voor de sinaasappeltaart:”",
          formule: "methanol + octaanzuur",
          vraag: "Geef de naam van de ester die ontstaat.",
          hash: ["e859a7e720358082096501ee555baa7470c491866a89117187914eea585a8b5f"],
          hint: "Welk deel van de naam komt uit het alkanol, en welk deel uit het zuur?"
        }
      },
      {
        id: "h4", type: "kies",
        verhaal: "De Hartenboer sluipt de keuken in. Hij ruikt aan een flesje en fluistert: “Hieruit wil ik de beginstoffen terug.” Naast het flesje liggen zes tekeningen.",
        volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0, "O"], [9, 0], [10, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [9, 10, 1], [7, 11, 2]] },
        vraag: "Uit welke stoffen is deze ester gemaakt? Kies álle beginstoffen.",
        opties: [
          { label: "A", volledig: { atomen: [[0, 0], [1, 0], [1, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1]] }, omweg: "E", k: "c9a0b08264b459d8a923374155a9e49af887f99e275159059195c92b2040650c" },
          { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [7, -1, "O"], [7, 1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 2], [7, 9, 1]] }, omweg: "E", k: "4f71eab64ac3fd73352acf6a5842e6c194aada1565092561fddb338abd6eb69f" },
          { label: "C", volledig: { atomen: [[0, 0], [1, 0], [1, -1, "O"], [1, 1, "O"]], bindingen: [[0, 1, 1], [1, 2, 2], [1, 3, 1]] }, omweg: "E", k: "1741fe1b12176650e212eea6388ef44b6c635a08552b862e254a914165099016" },
          { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1]] }, omweg: "E", k: "5e500943df09c94a1017897627c0b7f3dde9cb3506d049f80ca28a433379f0b3" },
          { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 2]] }, omweg: "E", k: "f2d1c299a6845a50105d17292f7561b349fc3a991bf8f9a8685a1c2312a16842" },
          { label: "F", volledig: { atomen: [[0, 0], [1, 0], [1, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 2]] }, omweg: "E", k: "8ed12ea46cc2ac6c8dc64407bfac4f2d53399b8fa2c35c864b9e6fe5ad70751c" }
        ],
        hint: "Knip de ester tussen het C-atoom van de C=O en het O-atoom in de keten. Zet aan beide kanten de OH of de H terug.",
        goed: "“Precies,” fluistert de Hartenboer. Hij stopt een taartje in zijn zak.",
        parallel: {
          verhaal: "Hij pakt een tweede flesje.",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0, "O"], [7, 0], [8, 0], [9, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [7, 10, 2]] },
          vraag: "Uit welke stoffen is deze ester gemaakt? Kies álle beginstoffen.",
          opties: [
            { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [2, -1, "O"], [2, 1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 2], [2, 4, 1]] }, k: "f76939e1c2c73999a8502752c39a3c06d2996e541cbcd4e41f8dbf35f5e4adc1" },
            { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [5, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1]] }, k: "33a38bf8d6c34c4939e57046898b9bbf82642d9dc36ae6f995461ba2495c8ea4" },
            { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [2, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1]] }, k: "f02f55faa2a385d0e97d541e39a03d44f1678f1f925d1e3d2dafa101bb0990db" },
            { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [5, -1, "O"], [5, 1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 2], [5, 7, 1]] }, k: "c0660211df7bc3da656cd724475fae53ba0c4bb950bd430f8646e024f719c0d0" },
            { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [5, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 2]] }, k: "f68d1264ea941e228bb47a62d9c1cdc3f4cc6d53e3428352841517ea99022de4" },
            { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [2, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 2]] }, k: "c03c360179cbbb16cd1998e5681104ed14cfffb68396c3ebc159287c20a769c7" }
          ],
          hint: "De kant met de C=O hoort bij het zuur; de kant met de –O–alkylgroep hoort bij het alkanol."
        }
      },
      {
        id: "h5", type: "getal",
        verhaal: "Op een taartje staat in suiker: “Butaan-1-ol en hexaanzuur.” “Hoeveel waterstof zit er in die geurstof?” vraagt de kok zich af.",
        formule: "de ester uit butaan-1-ol en hexaanzuur",
        vraag: "Hoeveel H-atomen heeft één molecuul van deze ester?",
        hash: ["953f9f3743ebab892595ae7b53018cd618b288eabe5de7aa9252e198c61f3643"],
        hint: "Tel de H-atomen van het alkanol en het zuur op. Wat gaat er bij de reactie af?",
        omweg: "F",
        goed: "Het suikerschrift glinstert even, alsof het knipoogt.",
        parallel: {
          verhaal: "Op een ander taartje staat: “Ethanol en nonaanzuur.”",
          formule: "de ester uit ethanol en nonaanzuur",
          vraag: "Hoeveel H-atomen heeft één molecuul van deze ester?",
          hash: ["6027b27a6b9ecaf41272968b4405fcdb4bf5c5b85e6cdfc1496ebfe811394e30"],
          hint: "Bepaal de molecuulformules van het alkanol en het zuur, tel ze op en haal er H₂O af."
        }
      },
      {
        id: "h6", type: "kies",
        verhaal: "Dan klinken er trompetten. De Koningin! Ze wijst naar zes taartjes. “Ik wil alleen de taartjes met C₆H₁₂O₂,” zegt ze. “En snel!”",
        vraag: "Kies álle tekeningen met de molecuulformule C₆H₁₂O₂.",
        opties: [
          { label: "A", volledig: { atomen: [[0, 0], [1, 0, "O"], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [0, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [0, 7, 2]] }, omweg: "F", k: "bee9196820a6200acc4c339be9ebc34d751a5cb68d4ecb22f216599128a02bb1" },
          { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [5, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 2]] }, omweg: "F", k: "1766962e7caceab81fb6fe90bc668001ed95067106926d2d3555eff25d65b50f" },
          { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, -1, "O"], [0, 1, "O"], [1, 1]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [0, 5, 2], [0, 6, 1], [1, 7, 1]] }, omweg: "F", k: "4dadb04b8260739714d2ef26fc70589051c0aee82aae439cd7acde2a00062f67" },
          { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0, "O"], [6, 0], [4, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [4, 7, 2]] }, omweg: "F", k: "5c4f83f316f75f685325247b7c6e284e38903eb99d2214cb5880fc85f10ddefe" },
          { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0, "O"], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [3, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [9, 10, 1], [3, 11, 2]] }, omweg: "F", k: "1e8e32c29a332db313987779d6a2ccc4862c111fcb8e2f512c85087f51761c5b" },
          { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [5, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1]] }, omweg: "F", k: "d50d5514d3ecaddd22f15a38e7227dd7f352494a76825626b953071c4fe98f44" }
        ],
        hint: "Tel bij elke tekening de C-, H- en O-atomen.",
        goed: "De Koningin eet ze alle drie op. “Waar zijn de rest?” Iemand heeft taartjes gestolen…",
        parallel: {
          verhaal: "“En nu C₈H₁₆O₂!”",
          vraag: "Kies álle tekeningen met de molecuulformule C₈H₁₆O₂.",
          opties: [
            { label: "A", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0, "O"], [5, 0], [6, 0], [7, 0], [8, 0], [3, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [3, 9, 2]] }, k: "bcfa97568fa6634229f73c29718d7361abb7a5daa4ddd16a24e1647b0b4ab21d" },
            { label: "B", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 2]] }, k: "1ea7ab26c6976eb0a17d5736c370c513baeaad82f1e3b36d5c2e492c53332e2a" },
            { label: "C", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [0, -1, "O"], [0, 1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [0, 8, 2], [0, 9, 1]] }, k: "a28d19580a8e65b20dafd4a5a3d04f14580a3cda2b214ed6842849f865825d8d" },
            { label: "D", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0, "O"], [7, 0], [8, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [7, 9, 2]] }, k: "ab1aefec4212fe8e2f09596ade9fc95787fec2292fb55362cc075a621e1920f1" },
            { label: "E", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1]] }, k: "94b639740ca0349a9bc95999a18bf83848fcbc3e65c56acddc104152a687bfd0" },
            { label: "F", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0, "O"], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [3, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [3, 10, 2]] }, k: "aa1d6eb16878aec8e9b2e821d233957df5bfaf6ea98362e2a09e888c227035e1" }
          ],
          hint: "Tel de atomen. Een ester en een carbonzuur met evenveel C-atomen zijn isomeren."
        }
      }
    ],
    omwegen: {
      E: {
        personage: "E",
        verhaal: "De Koningin van Harten tikt met haar scepter op een flesje. “Eerst de C=O zoeken,” snauwt ze. “Dáár knippen. En snel!”",
        voorbeeld: {
          tekst: "Een <b>ester</b> heeft de estergroep <b>–C(=O)–O–</b>: een C=O met direct daarnaast een O-atoom dat naar een volgend C-atoom gaat. Een ester ontstaat uit een <b>alkaanzuur</b> en een <b>alkanol</b> (er komt water bij vrij). Terugknippen: knip tussen het C-atoom van de C=O en het O-atoom in de keten. De kant <b>met de C=O</b> is het <b>zuur</b>, de kant met de –O–alkylgroep is het <b>alkanol</b>.",
          structuren: [
            { label: "methylheptanoaat", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0, "O"], [8, 0], [6, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [6, 9, 2]] } }
          ],
          uitwerking: "Links van de knip: 7 C-atomen met de C=O → <b>heptaanzuur</b>. Rechts: O–CH₃ → <b>methanol</b>. Samen: <b>methylheptanoaat</b>."
        },
        makkelijk: {
          type: "getal",
          verhaal: "“Nu jij,” zegt de Koningin. “Of… je weet wel.”",
          volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0, "O"], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [4, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [9, 10, 1], [10, 11, 1], [11, 12, 1], [4, 13, 2]] },
          vraag: "Hoeveel C-atomen komen uit het zuur?",
          hash: ["a1e85734a2c016e6f7348b45a6e468d1cbdb2583cfff98a546e721a3a151d228"],
          hint: "Zoek de C=O en knip tussen dat C-atoom en het O-atoom in de keten. Tel aan de kant van de C=O, het C-atoom van de C=O telt mee."
        }
      },
      N: {
        personage: "N",
        verhaal: "De Hoedenmaker zit aan het eind van de keukentafel, met een kopje thee. “De naam van een ester,” zegt hij, “begint met wie er als láátste bij kwam.”",
        voorbeeld: {
          tekst: "De naam van een ester is <b>alkylalkanoaat</b>, aan elkaar geschreven. Eerst het <b>alkyl</b>-deel: dat komt uit het <b>alkanol</b> (hexaan-1-ol → hexyl). Dan het <b>alkanoaat</b>-deel: dat komt uit het <b>zuur</b> (butaanzuur → butanoaat). In de tekening is het zuurdeel de kant met de C=O.",
          structuren: [
            { label: "hexylbutanoaat", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0, "O"], [7, 0], [8, 0], [9, 0], [10, 0], [7, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [9, 10, 1], [7, 11, 2]] } }
          ],
          uitwerking: "Rechts van de O: 4 C-atomen met de C=O → uit <b>butaanzuur</b> → butanoaat. Links: 6 C-atomen → uit <b>hexaan-1-ol</b> → hexyl. Samen: <b>hexylbutanoaat</b>."
        },
        makkelijk: {
          type: "naam",
          verhaal: "“En deze?” vraagt de Hoedenmaker.",
          formule: "heptaan-1-ol + ethaanzuur",
          vraag: "Geef de naam van de ester die ontstaat.",
          hash: ["0659a51fc0fb668c75d756cff6722d132975fd1353d6449e924588d0b740233e"],
          hint: "Welk deel van de naam komt uit het alkanol, en welk deel uit het zuur?"
        }
      },
      F: {
        personage: "F",
        verhaal: "De Rups is meegekomen, op een theeschoteltje. “Twee stoffen erin,” zegt hij langzaam. “Twee stoffen eruit. Maar één daarvan is… water.”",
        voorbeeld: {
          tekst: "Bij de vorming van een ester komt <b>water</b> vrij: de OH van het zuur en de H van de OH-groep van het alkanol. Dus: <b>molecuulformule ester = zuur + alkanol − H₂O</b>. Er verdwijnen geen C-atomen.",
          structuren: [
            { label: "pentylhexanoaat", volledig: { atomen: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0, "O"], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [5, -1, "O"]], bindingen: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 9, 1], [9, 10, 1], [10, 11, 1], [5, 12, 2]] } }
          ],
          uitwerking: "Hexaanzuur C₆H₁₂O₂ + pentaan-1-ol C₅H₁₂O = C₁₁H₂₄O₃. Min H₂O: <b>C₁₁H₂₂O₂</b>."
        },
        makkelijk: {
          type: "getal",
          verhaal: "“Reken maar,” zegt de Rups.",
          formule: "de ester uit butaan-1-ol en pentaanzuur",
          vraag: "Hoeveel H-atomen heeft één molecuul van deze ester?",
          hash: ["e6afa6f9b6283c181ea9c1c43289fe8e87459141e3314c0b4dba533e1457d83c"],
          hint: "Tel de H-atomen van het alkanol en het zuur op en haal er 2 af (het water)."
        }
      }
    },
    kluis: {
      intro: "In de provisiekast staat een schatkist met vier draaischijven. Wie hem opent, krijgt een edelsteen. Werk in je schrift. Als je alle getallen hebt ingevuld, zie je per getal of het klopt."
    },
    geheim: {
      intro: "Onder de laatste taartvorm glinstert een gouden slotje. Het is maar voor heel weinig mensen te openen."
    },
    einde: "De taartjes zijn klaar — maar er ontbreken er een paar. En in de provisiekast wacht nog een schatkist…"
  }
};
})();

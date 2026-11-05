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
  }
};
})();

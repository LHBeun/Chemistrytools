// ─────────────────────────────────────────────────────────────
//  De deuren van Wonderland — het individuele avontuur per les
//  Per les: hoofdpad (verplicht), omwegen (bij 2× fout), edelsteenkamer
//  (de codevragen uit data.js + eventueel extra) en de geheime deur
//  (de geheime vraag uit data.js).
//  Antwoorden staan als SHA-256-hash ("wl|<les>|a-<id>|<waarde>").
//  Volledige structuren: { n, b: [bindingsorde tussen C-atomen], h: [aantal H per C] }
// ─────────────────────────────────────────────────────────────
(function () {
const P = n => `https://www.gutenberg.org/files/114/114-h/images/alice${String(n).padStart(2, "0")}a.gif`;
const alkaan = n => ({ n, b: Array(n - 1).fill(1), h: Array.from({ length: n }, (_, i) => (i === 0 || i === n - 1) ? 3 : 2) });
const met = (s, wijz) => ({ n: s.n, b: wijz.b || s.b, h: s.h.map((x, i) => wijz.h && wijz.h[i] !== undefined ? wijz.h[i] : x) });

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
      A: { naam: "De Rups", plaat: P(15) },
      B: { naam: "De Kolderkat", plaat: P(23) },
      C: { naam: "De Hoedenmaker", plaat: P(25) }
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
          hint: "Tel de C-atomen en zoek de stam op in het rijtje van de Rups."
        }
      },
      {
        id: "h2", type: "naam",
        verhaal: "Op het slot van de eerste deur staat een tekening.",
        volledig: alkaan(5),
        vraag: "Geef de naam van deze stof.",
        hash: ["66b1ec278b254a4325113e0c38fb5ec34c9c97bbb38a55bc5cac0fad2867564a"],
        hint: "Tel de C-atomen in de keten. Zijn alle bindingen tussen de C-atomen enkel?",
        omweg: "A",
        goed: "Klik. De eerste deur zwaait open — en daarachter zit… nog een deur.",
        parallel: {
          verhaal: "Op een kastdeur in de gang staat ook een tekening.",
          volledig: alkaan(9),
          vraag: "Geef de naam van deze stof.",
          hash: ["27f95d805cbb65048f44937305eea3d6db2dd4c3a52f3ce1ae4fcc523b89ab14"],
          hint: "Tel de C-atomen nog eens rustig, van links naar rechts."
        }
      },
      {
        id: "h3", type: "kies",
        verhaal: "Op een glazen tafeltje liggen vier gouden sleuteltjes. Op het label van de volgende deur staat: hexaan.",
        vraag: "Welk sleuteltje past? Kies de juiste structuurformule.",
        opties: [
          { label: "A", volledig: met(alkaan(6), { h: { 2: 1 } }), omweg: "B" },
          { label: "B", volledig: alkaan(6), omweg: "A" },
          { label: "C", volledig: alkaan(5), omweg: "A" },
          { label: "D", volledig: met(alkaan(6), { h: { 3: 3 } }), omweg: "B" }
        ],
        hash: ["bd12808a5712ef2a66cd388decd55cede6ed36502a41caa37c638b1c06d5fda9"],
        hint: "Controleer twee dingen: het aantal C-atomen, en of elk C-atoom precies 4 bindingen heeft.",
        goed: "Het sleuteltje draait soepel om.",
        parallel: {
          verhaal: "Achter de deur ligt weer een sleutelbos. Op dit label staat: butaan.",
          vraag: "Welk sleuteltje past? Kies de juiste structuurformule.",
          opties: [
            { label: "A", volledig: alkaan(4) },
            { label: "B", volledig: alkaan(3) },
            { label: "C", volledig: met(alkaan(4), { h: { 1: 3 } }) },
            { label: "D", volledig: met(alkaan(4), { h: { 2: 1 } }) }
          ],
          hash: ["6a7cf25249a943056d4167663434667cf27a4c91516d38865b09eef760a7c38d"],
          hint: "Tel eerst de C-atomen. Tel daarna bij elk C-atoom de bindingen."
        }
      },
      {
        id: "h4", type: "indeling",
        verhaal: "Op het tafeltje staan drie flesjes. “Pas op,” waarschuwt het stemmetje. “Ze lijken op elkaar, maar ze zijn het niet.”",
        vraag: "Wat voor soort stof zit er in elk flesje?",
        items: ["C₅H₁₀", "C₅H₁₂", "C₅H₈"],
        keuzes: ["alkaan", "alkeen", "alkyn"],
        hash: ["3415bbd1e57cf8937d348d1e53b5e18c5f0ffb9c6c73160d041441156663c097"],
        hint: "Hoeveel H-atomen heeft een alkaan met 5 C-atomen? Vergelijk de flesjes daarmee.",
        omweg: "C",
        goed: "Alice zet de flesjes netjes op een rij.",
        parallel: {
          verhaal: "In een la vindt Alice nog drie flesjes.",
          vraag: "Wat voor soort stof zit er in elk flesje?",
          items: ["C₄H₆", "C₄H₁₀", "C₄H₈"],
          keuzes: ["alkaan", "alkeen", "alkyn"],
          hash: ["3b077bfe7f00978b7222d02bc7747a54bd5d1baa01ea89c4f863883356d3bff4"],
          hint: "Begin bij het alkaan: hoeveel H heeft dat met 4 C-atomen? Hoeveel H minder heeft een alkeen, en een alkyn?"
        }
      },
      {
        id: "h5", type: "kies",
        verhaal: "Aan een vierde flesje hangt een kaartje: “Drink me — maar alleen als ik een alkyn ben.” Op de grond liggen vier kaartjes met een tekening.",
        vraag: "Welk kaartje hoort bij een alkyn?",
        opties: [
          { label: "A", volledig: { n: 5, b: [2, 1, 1, 1], h: [2, 1, 2, 2, 3] }, omweg: "C" },
          { label: "B", volledig: alkaan(5), omweg: "C" },
          { label: "C", volledig: { n: 5, b: [1, 3, 1, 1], h: [3, 0, 0, 2, 3] }, omweg: "C" },
          { label: "D", volledig: { n: 5, b: [2, 1, 1, 1], h: [2, 2, 2, 2, 3] }, omweg: "B" }
        ],
        hash: ["930ace9f1d2a6413e179a6931a98d5dafb926e0f7225acb10f41fdb760081b02"],
        hint: "Waaraan herken je een alkyn in een structuurformule? Tel daarna bij elk C-atoom de bindingen.",
        goed: "Alice drinkt. Ze krimpt en krimpt… tot ze precies klein genoeg is.",
        parallel: {
          verhaal: "Er staat nog een flesje: “Drink me — maar alleen als ik een alkeen ben.”",
          vraag: "Welk kaartje hoort bij een alkeen?",
          opties: [
            { label: "A", volledig: met(alkaan(4), { h: { 1: 1 } }) },
            { label: "B", volledig: alkaan(4) },
            { label: "C", volledig: { n: 4, b: [3, 1, 1], h: [1, 0, 2, 3] } },
            { label: "D", volledig: { n: 4, b: [1, 2, 1], h: [3, 1, 1, 3] } }
          ],
          hash: ["b8479a6ab1988935efb392535f2314be1feda2dffaf4b12146c21b5bedacfdb4"],
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
        verhaal: "Op een paddenstoel zit een Rups met een waterpijp. “Wie… ben… jij?” vraagt hij traag. “En hoeveel koolstof heb je?”",
        voorbeeld: {
          tekst: "Bij een alkaan bepaalt het aantal C-atomen de <b>stam</b> van de naam. Achter de stam komt <b>-aan</b>.",
          stammen: true,
          uitwerking: "Voorbeeld: C₃H₈ heeft <b>3</b> C-atomen → stam <b>prop-</b> → <b>propaan</b>."
        },
        makkelijk: {
          type: "naam",
          verhaal: "“Nu jij,” zegt de Rups, en blaast een kringetje rook.",
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
          structuren: [{ label: "ethaan", volledig: { n: 2, b: [1], h: [3, 3] } }],
          uitwerking: "In ethaan heeft elk C-atoom 1 binding naar het andere C-atoom en 3 naar H-atomen: samen <b>4</b>."
        },
        makkelijk: {
          type: "kies",
          verhaal: "De Kat tekent met zijn staart een molecuul in het zand.",
          volledig: met(alkaan(3), { h: { 1: 1 } }),
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
            { label: "propaan · alkaan · C₃H₈", volledig: alkaan(3) },
            { label: "propeen · alkeen · C₃H₆", volledig: { n: 3, b: [2, 1], h: [2, 1, 3] } },
            { label: "propyn · alkyn · C₃H₄", volledig: { n: 3, b: [3, 1], h: [1, 0, 3] } }
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

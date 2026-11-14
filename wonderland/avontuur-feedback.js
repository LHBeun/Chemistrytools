// ─────────────────────────────────────────────────────────────
//  De deuren van Wonderland — feedback bij het individuele avontuur
//  Per les, per opgave-id (h = hoofdpad, p = parallel, o = makkelijke opgave
//  van een omweg):
//    fouten:      { "<fout antwoord>": "gerichte feedback" }  (naam- en getalvragen)
//    optieUitleg: { "<label>": "waarom deze keuze niet past" } (kiesvragen)
//    rijHints:    [ "aanwijzing per rij" ]                    (indeelvragen)
//    zo:          "korte uitwerking, te zien na een goed antwoord"
//  omwegen: { "<letter>": "aankondiging: waar ging het mis?" }
//  Onbekende foute antwoorden krijgen de algemene hint uit avontuur-data.js.
// ─────────────────────────────────────────────────────────────
(function () {
const ANDERE_KANT = "Keten en zijtak kloppen. Nummer nog eens vanaf de andere kant.";
const BINDING_ANDERE_KANT = "Nummer vanaf de andere kant: welk nummer krijgt de binding dan?";
const LANGSTE_KETEN = "Is dit echt de langste keten? Probeer ook de route naar beneden.";
const DUBBEL = "Sommige zijn dezelfde stof, van de andere kant genummerd. Geef ze allemaal een naam.";
const alkaanRij = (n) => `Een alkaan met ${n} C-atomen heeft ${2 * n + 2} H-atomen. Hoeveel heeft deze stof er?`;

window.WL_FEEDBACK = {
  // ── Les 1 · De gang met deuren ─────────────────────────────
  1: {
    omwegen: {
      A: "Het ging mis bij de naam: de stam of de uitgang.",
      B: "Het ging mis bij het aantal bindingen van een C-atoom.",
      C: "Het ging mis bij het aantal H-atomen.",
      K: "Het ging mis bij de vorm van de keten: een knik of een vertakking?"
    },
    h1: {
      fouten: {
        "propaan": "De uitgang klopt. Tel de C-atomen nog eens.",
        "pentaan": "De uitgang klopt. Tel de C-atomen nog eens.",
        "buteen": "De stam klopt. Past de uitgang bij het aantal H-atomen?",
        "butyn": "De stam klopt. Past de uitgang bij het aantal H-atomen?",
        "but-1-een": "De stam klopt. Past de uitgang bij het aantal H-atomen?"
      },
      zo: "4 C-atomen → stam <b>but-</b>. 10 H-atomen = 2 × 4 + 2, dus alleen enkele bindingen → <b>-aan</b>: <b>butaan</b>."
    },
    p1: {
      fouten: {
        "heptaan": "De uitgang klopt. Tel de C-atomen nog eens.",
        "nonaan": "De uitgang klopt. Tel de C-atomen nog eens.",
        "octeen": "De stam klopt. Past de uitgang bij het aantal H-atomen?"
      },
      zo: "8 C-atomen → stam <b>oct-</b>. 18 H-atomen = 2 × 8 + 2, dus alleen enkele bindingen: <b>octaan</b>."
    },
    h2: {
      fouten: {
        "butaan": "Tel de C-atomen nog eens.",
        "hexaan": "Tel de C-atomen nog eens.",
        "penteen": "Kijk naar de bindingen tussen de C-atomen.",
        "pentyn": "Kijk naar de bindingen tussen de C-atomen."
      },
      zo: "5 C-atomen in de keten en alleen enkele bindingen: <b>pentaan</b>."
    },
    p2: {
      fouten: {
        "octaan": "Tel de C-atomen nog eens.",
        "decaan": "Tel de C-atomen nog eens.",
        "noneen": "Kijk naar de bindingen tussen de C-atomen."
      },
      zo: "9 C-atomen in de keten en alleen enkele bindingen: <b>nonaan</b>."
    },
    h3: {
      optieUitleg: {
        B: "Deze keten heeft 5 C-atomen.",
        C: "Eén C-atoom heeft hier maar 3 bindingen.",
        D: "Hier zit één C-atoom aan drie andere C-atomen vast: een vertakking.",
        F: "Eén C-atoom heeft hier 5 bindingen."
      },
      zo: "Twee sleuteltjes passen: <b>A</b> (met een knik) en <b>E</b> (recht). Allebei 6 C-atomen achter elkaar, en elk C-atoom heeft 4 bindingen."
    },
    p3: {
      optieUitleg: {
        A: "Deze keten heeft 3 C-atomen.",
        C: "Eén C-atoom heeft hier 5 bindingen.",
        D: "Hier zit één C-atoom aan drie andere C-atomen vast: een vertakking.",
        E: "Eén C-atoom heeft hier maar 3 bindingen."
      },
      zo: "Twee sleuteltjes passen: <b>B</b> (met een knik) en <b>F</b> (recht). Allebei 4 C-atomen achter elkaar, met 4 bindingen per C-atoom."
    },
    h4: {
      rijHints: [alkaanRij(5), alkaanRij(7), alkaanRij(6), alkaanRij(3), alkaanRij(5)],
      zo: "Reken per flesje uit hoeveel H-atomen het alkaan zou hebben (2n + 2). Evenveel → alkaan, 2 minder → alkeen, 4 minder → alkyn.<br>C₅H₁₀ alkeen · C₇H₁₂ alkyn · C₆H₁₄ alkaan · C₃H₆ alkeen · C₅H₈ alkyn."
    },
    p4: {
      rijHints: [alkaanRij(4), alkaanRij(4), alkaanRij(8), alkaanRij(6), alkaanRij(10)],
      zo: "C₄H₁₀ alkaan · C₄H₆ alkyn (4 H minder) · C₈H₁₆ alkeen (2 H minder) · C₆H₁₀ alkyn · C₁₀H₂₀ alkeen."
    },
    h5: {
      optieUitleg: {
        A: "Hier zit een dubbele binding.",
        C: "Een dubbele binding, en één C-atoom heeft 5 bindingen.",
        E: "Hier zitten alleen enkele bindingen.",
        F: "Hier zit een dubbele binding."
      },
      zo: "Twee kaartjes: <b>B</b> en <b>D</b>. Allebei een drievoudige binding; bij D loopt de keten met een knik."
    },
    p5: {
      optieUitleg: {
        A: "Alleen enkele bindingen, en één C-atoom heeft maar 3 bindingen.",
        C: "Hier zit een drievoudige binding.",
        D: "Hier zitten alleen enkele bindingen.",
        F: "Hier zitten alleen enkele bindingen."
      },
      zo: "Twee kaartjes: <b>B</b> (met een knik) en <b>E</b>. Allebei één dubbele binding, en elk C-atoom heeft 4 bindingen."
    },
    h6: {
      fouten: {
        "12": "Tel de H-atomen aan de uiteinden nog eens na.",
        "18": "Niet elk C-atoom heeft evenveel H-atomen.",
        "24": "Een deel van de vier bindingen gaat naar andere C-atomen.",
        "6": "Een C-atoom heeft 4 bindingen. Hoeveel daarvan gaan naar H?"
      },
      zo: "Uiteinden: 2 × 3 H. Midden: 4 × 2 H. Samen <b>14</b> H-atomen (C₆H₁₄)."
    },
    p6: {
      fouten: {
        "8": "Tel de H-atomen aan de uiteinden nog eens na.",
        "12": "Niet elk C-atoom heeft evenveel H-atomen.",
        "16": "Een deel van de vier bindingen gaat naar andere C-atomen."
      },
      zo: "Uiteinden: 2 × 3 H. Midden: 2 × 2 H. Samen <b>10</b> H-atomen (C₄H₁₀)."
    },
    oA: {
      fouten: {
        "methaan": "Tel de C-atomen nog eens.",
        "propaan": "Tel de C-atomen nog eens.",
        "etheen": "De stam klopt. Past de uitgang bij het aantal H-atomen?"
      },
      zo: "2 C-atomen → <b>eth-</b>, alleen enkele bindingen → <b>ethaan</b>."
    },
    oB: {
      zo: "Het middelste C-atoom heeft 2 bindingen naar C en maar 1 naar H: samen 3. Er hoort nog een H bij. Dus: <b>nee</b>."
    },
    oC: {
      fouten: {
        "10": "Tel de H-atomen aan de uiteinden nog eens na.",
        "15": "Niet elk C-atoom heeft evenveel H-atomen.",
        "20": "Een deel van de vier bindingen gaat naar andere C-atomen."
      },
      zo: "2 × 3 + 3 × 2 = <b>12</b> H-atomen."
    },
    oK: {
      fouten: {
        "4": "Volg de keten ook om de hoeken.",
        "5": "Volg de keten ook om de hoeken."
      },
      zo: "De keten loopt twee keer om de hoek, maar het blijft één keten van <b>6</b> C-atomen."
    }
  },

  // ── Les 2 · Het huis van het Witte Konijn ──────────────────
  2: {
    omwegen: {
      D: "Het ging mis bij het vinden van de langste keten.",
      E: "Het ging mis bij het nummeren.",
      F: "Het ging mis bij het opbouwen van de naam."
    },
    h1: {
      fouten: {
        "6-methylheptaan": ANDERE_KANT,
        "methylheptaan": "Op welk C-atoom zit de zijtak? Dat nummer hoort in de naam.",
        "2-methyl-heptaan": "Bijna: zijtak en stam staan aan elkaar, zonder streepje.",
        "2-methylhexaan": "Tel de C-atomen in de langste keten nog eens."
      },
      zo: "Langste keten: 7 C-atomen → <b>heptaan</b>. Zijtak CH₃ → <b>methyl</b>. Van links genummerd zit hij op C-atoom 2: <b>2-methylheptaan</b>."
    },
    p1: {
      fouten: {
        "7-methyloctaan": ANDERE_KANT,
        "methyloctaan": "Op welk C-atoom zit de zijtak? Dat nummer hoort in de naam.",
        "2-methyl-octaan": "Bijna: zijtak en stam staan aan elkaar, zonder streepje."
      },
      zo: "Langste keten: 8 → <b>octaan</b>. Van rechts genummerd zit de methylgroep op C-atoom 2: <b>2-methyloctaan</b>."
    },
    h2: {
      optieUitleg: {
        A: "Hier zitten beide methylgroepen aan hetzelfde C-atoom.",
        C: "De langste keten is hier 6 lang.",
        E: "Hier zitten drie methylgroepen."
      },
      zo: "Drie tekeningen passen: <b>D</b> (recht), <b>B</b> (gespiegeld: van rechts genummerd ook 2 en 3) en <b>F</b> (met een knik: de keten blijft 5 lang)."
    },
    p2: {
      optieUitleg: {
        A: "Nummer van beide kanten: hier worden de plaatsnummers 2 en 5.",
        C: "Hier zitten beide methylgroepen aan hetzelfde C-atoom.",
        D: "De langste keten is hier 7 lang.",
        F: "Hier zitten drie methylgroepen."
      },
      zo: "Twee tekeningen passen: <b>B</b> (van rechts genummerd 2 en 4) en <b>E</b> (de keten loopt aan het eind naar beneden en is 6 lang)."
    },
    h3: {
      fouten: {
        "2-ethylhexaan": LANGSTE_KETEN,
        "5-methylheptaan": ANDERE_KANT,
        "3-methylhexaan": "Tel de C-atomen in de langste keten nog eens."
      },
      zo: "Via de route naar beneden is de keten <b>7</b> lang. Wat overblijft is één methylgroep, vanaf onder genummerd op C-atoom 3: <b>3-methylheptaan</b>."
    },
    p3: {
      fouten: {
        "2-propylhexaan": LANGSTE_KETEN,
        "5-methyloctaan": ANDERE_KANT
      },
      zo: "De langste keten loopt naar beneden en is <b>8</b> lang. De methylgroep zit op C-atoom 4: <b>4-methyloctaan</b>."
    },
    h4: {
      fouten: {
        "2-methyl-3-ethylpentaan": "Je plaatsnummers kloppen. Kijk nog eens naar de volgorde van de zijtakken in de naam.",
        "3-ethyl-4-methylpentaan": "De volgorde klopt. Nummer nog eens vanaf de andere kant.",
        "4-methyl-3-ethylpentaan": "Kijk naar het nummeren én naar de volgorde van de zijtakken."
      },
      zo: "Van links: methyl op 2, ethyl op 3. Van rechts zou het 3 en 4 worden: hoger. Ethyl komt vóór methyl (alfabet): <b>3-ethyl-2-methylpentaan</b>."
    },
    p4: {
      fouten: {
        "2-methyl-4-ethylhexaan": "Je plaatsnummers kloppen. Kijk nog eens naar de volgorde van de zijtakken in de naam.",
        "3-ethyl-5-methylhexaan": "De volgorde klopt. Nummer nog eens vanaf de andere kant.",
        "5-methyl-3-ethylhexaan": "Kijk naar het nummeren én naar de volgorde van de zijtakken."
      },
      zo: "Van rechts: methyl op 2, ethyl op 4. Van links zou het 3 en 5 worden: hoger. Ethyl vóór methyl: <b>4-ethyl-2-methylhexaan</b>."
    },
    h5: {
      fouten: {
        "hept-4-een": BINDING_ANDERE_KANT,
        "hepteen": "Waar begint de dubbele binding? Dat nummer hoort in de naam.",
        "3-hepteen": "Het plaatsnummer staat vlak voor -een: hept-…-een.",
        "hept-3-yn": "Kijk nog eens naar de soort binding."
      },
      zo: "Van links begint de dubbele binding bij C-atoom 4, van rechts bij C-atoom 3. Het laagste nummer wint: <b>hept-3-een</b>."
    },
    p5: {
      fouten: {
        "oct-6-een": BINDING_ANDERE_KANT,
        "octeen": "Waar begint de dubbele binding? Dat nummer hoort in de naam.",
        "2-octeen": "Het plaatsnummer staat vlak voor -een: oct-…-een.",
        "hept-2-een": "Tel de C-atomen in de keten nog eens, ook om de hoek."
      },
      zo: "De keten is 8 lang (om de hoek). Vanaf onder genummerd begint de dubbele binding bij C-atoom 2: <b>oct-2-een</b>."
    },
    h6: {
      optieUitleg: {
        A: "Hier zit een dubbele binding.",
        C: "Nummer vanaf de kant van de drievoudige binding: waar zit de methylgroep dan?",
        D: "Hier zitten twee methylgroepen.",
        F: "De langste keten is hier 7 lang."
      },
      zo: "Twee tekeningen passen: <b>E</b> (recht) en <b>B</b> (gespiegeld). Nummer steeds vanaf de kant van de drievoudige binding: binding op 2, methyl op 4."
    },
    p6: {
      optieUitleg: {
        A: "Hier begint de dubbele binding bij C-atoom 3, van welke kant je ook nummert.",
        C: "Nummer vanaf de kant van de dubbele binding: waar zit de methylgroep dan?",
        E: "Hier zit een drievoudige binding.",
        F: "De langste keten is hier 7 lang."
      },
      zo: "Twee tekeningen passen: <b>D</b> (gespiegeld) en <b>B</b> (met een knik). Binding op 2, methyl op 5."
    },
    oD: {
      fouten: {
        "5": "Dat is de horizontale keten. Probeer ook de route naar beneden.",
        "6": "Tel nog eens: probeer elke route van uiteinde tot uiteinde."
      },
      zo: "Van links via de route naar beneden: 2 + 1 + 4 = <b>7</b> C-atomen."
    },
    oE: {
      fouten: {
        "5": "Je nummerde vanaf links. Probeer de andere kant.",
        "6": "Het plaatsnummer is het nummer van het eerste C-atoom van de binding."
      },
      zo: "Van rechts genummerd begint de drievoudige binding bij C-atoom <b>2</b>: hept-2-yn."
    },
    oF: {
      fouten: {
        "3,4-methylhexaan": "Twee dezelfde zijtakken: hoe geef je dat aan in de naam?",
        "3-4-dimethylhexaan": "Tussen twee getallen staat een komma.",
        "3,4dimethylhexaan": "Tussen getal en woord staat een streepje.",
        "3,4-dimethyl-hexaan": "Bijna: zijtak en stam staan aan elkaar, zonder streepje."
      },
      zo: "Twee methylgroepen → <b>dimethyl</b>, op C-atoom 3 en 4: <b>3,4-dimethylhexaan</b>."
    }
  },

  // ── Les 3 · De Rups ────────────────────────────────────────
  3: {
    omwegen: {
      G: "Het ging mis bij het herkennen van isomeren.",
      H: "Het ging mis bij het systematisch tellen.",
      K: "Het ging mis bij het herkennen van dezelfde stof."
    },
    h1: {
      rijHints: [
        "Bepaal van allebei de molecuulformule.",
        "Vergelijk de aantallen H-atomen.",
        "Teken allebei en nummer vanaf beide kanten.",
        "Tel bij allebei de C- en H-atomen.",
        "Vergelijk de aantallen H-atomen.",
        "Teken 1-methylhexaan. Hoe lang is de langste keten?"
      ],
      zo: "heptaan + 2,3-dimethylpentaan: allebei C₇H₁₆, andere structuur → <b>isomeren</b><br>octaan (C₈H₁₈) + oct-1-een (C₈H₁₆) → <b>geen isomeren</b><br>5-methylheptaan is 3-methylheptaan van de andere kant → <b>dezelfde stof</b><br>pent-1-yn + 3-methylbut-1-yn: allebei C₅H₈ → <b>isomeren</b><br>2-methylbutaan (C₅H₁₂) + 2-methylbut-1-een (C₅H₁₀) → <b>geen isomeren</b><br>1-methylhexaan heeft een keten van 7: dat is heptaan → <b>dezelfde stof</b>"
    },
    p1: {
      rijHints: [
        "Teken 2-ethylhexaan. Hoe lang is de langste keten?",
        "Bepaal van allebei de molecuulformule.",
        "Vergelijk de aantallen H-atomen.",
        "Tel bij allebei de C- en H-atomen.",
        "Teken allebei en nummer vanaf beide kanten.",
        "Bepaal van allebei de molecuulformule."
      ],
      zo: "2-ethylhexaan heeft een keten van 7: dat is 3-methylheptaan → <b>dezelfde stof</b><br>nonaan + 2,2-dimethylheptaan: allebei C₉H₂₀ → <b>isomeren</b><br>hex-1-yn (C₆H₁₀) + hex-1-een (C₆H₁₂) → <b>geen isomeren</b><br>oct-2-yn + oct-3-yn: allebei C₈H₁₄ → <b>isomeren</b><br>pent-4-een is pent-1-een van de andere kant → <b>dezelfde stof</b><br>hex-1-een + 2-methylpent-2-een: allebei C₆H₁₂ → <b>isomeren</b>"
    },
    h2: {
      fouten: { "4": DUBBEL, "5": DUBBEL, "6": DUBBEL, "2": "Kan de drievoudige binding ook in het midden zitten?" },
      zo: "hex-1-yn, hex-2-yn en hex-3-yn. ‘Hex-4-yn’ is hex-2-yn en ‘hex-5-yn’ is hex-1-yn. Dus <b>3</b>."
    },
    p2: {
      fouten: { "5": DUBBEL, "6": DUBBEL, "7": DUBBEL, "3": "Kan de dubbele binding ook precies in het midden zitten?" },
      zo: "oct-1-een, oct-2-een, oct-3-een en oct-4-een. Verder schuiven geeft dezelfde stoffen van de andere kant. Dus <b>4</b>."
    },
    h3: {
      optieUitleg: {
        A: "Deze heet 2,4-dimethylhexaan: de methylgroepen zitten anders.",
        D: "De langste keten loopt door de ethylgroep: dit is 3,4-dimethylhexaan.",
        E: "De keten is hier 7 lang: dit molecuul heeft meer C-atomen."
      },
      zo: "Drie tekeningen passen: <b>C</b> (gespiegeld), <b>F</b> (met een knik) en <b>B</b> (de keten loopt naar beneden). Ze heten alle drie 2,3-dimethylhexaan."
    },
    p3: {
      optieUitleg: {
        A: "Hier zitten de methylgroepen op C-atoom 3.",
        B: "De keten is hier 7 lang: dit molecuul heeft meer C-atomen.",
        D: "Hier zitten de methylgroepen aan twee verschillende C-atomen.",
        F: "De keten is hier 5 lang: dit molecuul heeft minder C-atomen."
      },
      zo: "Twee tekeningen passen: <b>E</b> (gespiegeld) en <b>C</b> (de keten loopt naar beneden). Allebei 2,2-dimethylhexaan."
    },
    h4: {
      fouten: {
        "4": "Geef elke structuur een naam: sommige zijn dezelfde stof, of hebben een langere keten.",
        "5": "Geef elke structuur een naam: sommige zijn dezelfde stof, of hebben een langere keten.",
        "6": "Geef elke structuur een naam: sommige zijn dezelfde stof, of hebben een langere keten.",
        "2": "Probeer ook plekken dichter bij het midden."
      },
      zo: "2-, 3- en 4-methylheptaan. Op C-atoom 1 wordt de keten 8 lang, en 5- en 6- zijn 3- en 2- van de andere kant. Dus <b>3</b>."
    },
    p4: {
      fouten: {
        "5": "Geef elke structuur een naam: sommige zijn dezelfde stof, of hebben een langere keten.",
        "6": "Geef elke structuur een naam: sommige zijn dezelfde stof, of hebben een langere keten.",
        "7": "Geef elke structuur een naam: sommige zijn dezelfde stof, of hebben een langere keten.",
        "8": "Geef elke structuur een naam: sommige zijn dezelfde stof, of hebben een langere keten.",
        "3": "Probeer ook plekken dichter bij het midden."
      },
      zo: "2-, 3-, 4- en 5-methylnonaan. Verder schuiven geeft dezelfde stoffen van de andere kant. Dus <b>4</b>."
    },
    h5: {
      fouten: {
        "4-methylhex-1-een": "De dubbele binding klopt nu. Op welk C-atoom zit de methylgroep als je zo nummert?",
        "3-methylhex-5-een": "Welke kant geeft de dubbele binding het laagste nummer?",
        "4-methylhex-5-een": "Dat is de naam van de Rups. Nummer opnieuw volgens de regels.",
        "3-methylhexeen": "Waar begint de dubbele binding? Dat nummer hoort in de naam."
      },
      zo: "Opnieuw genummerd vanaf de kant van de dubbele binding: binding op 1, methyl op 3 → <b>3-methylhex-1-een</b>."
    },
    p5: {
      fouten: {
        "3,4-dimethylpentaan": ANDERE_KANT,
        "2-ethyl-3-methylbutaan": "Dat is de naam van de Rups. Zoek de langste keten opnieuw.",
        "2,3-methylpentaan": "Twee dezelfde zijtakken: hoe geef je dat aan in de naam?",
        "3-methyl-2-ethylbutaan": "Zoek de langste keten opnieuw: loopt die misschien door de ethylgroep?"
      },
      zo: "De langste keten loopt door de ethylgroep en is 5 lang. Er blijven twee methylgroepen over, op 2 en 3: <b>2,3-dimethylpentaan</b>."
    },
    h6: {
      optieUitleg: {
        A: "C₇H₁₆: twee H-atomen meer.",
        C: "Dit is 2-methylhex-1-een zelf, anders getekend: dezelfde stof, dus geen isomeer.",
        D: "C₇H₁₂: twee H-atomen minder.",
        F: "C₆H₁₂: één C-atoom minder."
      },
      zo: "Isomeren hebben dezelfde molecuulformule (C₇H₁₄) én zijn een andere stof: <b>B</b> (hept-1-een) en <b>E</b> (3-ethylpent-2-een)."
    },
    p6: {
      optieUitleg: {
        A: "C₈H₁₆: twee H-atomen meer.",
        C: "Dit is oct-1-yn zelf, anders getekend: dezelfde stof, dus geen isomeer.",
        E: "C₇H₁₂: één C-atoom minder."
      },
      zo: "Drie isomeren (C₈H₁₄): <b>B</b> (oct-3-yn), <b>D</b> (3,3-dimethylhex-1-yn) en <b>F</b> (4-methylhept-2-yn)."
    },
    oG: {
      fouten: {
        "20": "Een isomeer heeft precies dezelfde molecuulformule als decaan.",
        "24": "Een isomeer heeft precies dezelfde molecuulformule als decaan."
      },
      zo: "Decaan is C₁₀H₂₂. Elk isomeer heeft ook <b>22</b> H-atomen."
    },
    oH: {
      fouten: { "4": DUBBEL, "5": DUBBEL, "6": DUBBEL, "2": "Kan de drievoudige binding ook in het midden zitten?" },
      zo: "hept-1-yn, hept-2-yn en hept-3-yn. Verder schuiven geeft dezelfde stoffen van de andere kant. Dus <b>3</b>."
    },
    oK: {
      fouten: {
        "3-propylhexaan": LANGSTE_KETEN,
        "4-propylhexaan": LANGSTE_KETEN,
        "2-ethylheptaan": "Tel de C-atomen in de langste keten nog eens."
      },
      zo: "De langste keten loopt naar beneden en is <b>7</b> lang. De ethylgroep zit op C-atoom 4: <b>4-ethylheptaan</b>."
    }
  },
  // ── Les 4 · De Cheshire Kat ────────────────────────────────
  4: {
    omwegen: {
      R: "Het ging mis bij het lezen van de hoekpuntnotatie.",
      B: "Het ging mis bij benzeen of bij het aantal H-atomen van een ring.",
      N: "Het ging mis bij de naam van een ringverbinding."
    },
    h1: {
      optieUitleg: {
        B: "De cirkel staat voor drie dubbele bindingen: dit is benzeen.",
        D: "Deze ring heeft 5 C-atomen.",
        E: "Dit is een keten, geen ring.",
        F: "Aan deze ring zit nog een C-atoom vast: een methylgroep."
      },
      zo: "Twee tekeningen passen: <b>A</b> (volledig, met alle atomen) en <b>C</b> (hoekpuntnotatie). Allebei een ring van 6 C-atomen zonder dubbele bindingen."
    },
    p1: {
      optieUitleg: {
        A: "Geen dubbele bindingen: dit is cyclohexaan.",
        D: "Maar één dubbele binding in de ring.",
        F: "Maar twee dubbele bindingen in de ring."
      },
      zo: "Drie tekeningen passen: <b>B</b> (met cirkel), <b>C</b> (drie dubbele bindingen) en <b>E</b> (volledig). Allemaal benzeen, C₆H₆."
    },
    h2: {
      fouten: {
        "15": "Op het ring-C-atoom met de zijtak zit één H minder.",
        "7": "Tel ook de H-atomen aan de ring.",
        "8": "Vergeet de H-atomen aan de zijtak niet.",
        "16": "Op het ring-C-atoom met de zijtak zit één H minder."
      },
      zo: "Ring: 3 C-atomen met 2 H en 1 C-atoom met 1 H = 7. Propylgroep: 2 + 2 + 3 = 7. Samen <b>14</b> (C₇H₁₄).",
      zoH: true
    },
    p2: {
      fouten: {
        "13": "Op het ring-C-atoom met de zijtak zit geen H.",
        "7": "Vergeet de H-atomen aan de zijtak niet.",
        "5": "Vergeet de H-atomen aan de zijtak niet.",
        "18": "Dit is een benzeenring: hoeveel H heeft elk ring-C-atoom?",
        "17": "Dit is een benzeenring: hoeveel H heeft elk ring-C-atoom?"
      },
      zo: "Ring: 5 C-atomen met 1 H, het C-atoom met de zijtak 0 H = 5. Propylgroep: 7. Samen <b>12</b> (C₉H₁₂).",
      zoH: true
    },
    h3: {
      fouten: {
        "propylhexaan": "Het is een ring: welk voorvoegsel hoort daarbij?",
        "propylbenzeen": "Zie je een cirkel of dubbele bindingen in de ring?",
        "propylcyclohexeen": "Zitten er dubbele bindingen in de ring?",
        "propylcyclopentaan": "Tel de hoekpunten van de ring nog eens.",
        "propylcycloheptaan": "Tel de hoekpunten van de ring nog eens.",
        "ethylcyclohexaan": "Hoe lang is de zijtak?",
        "butylcyclohexaan": "Hoe lang is de zijtak?",
        "cyclohexylpropaan": "De ring is hier de stam; de zijtak komt ervoor."
      },
      zo: "Ring van 6 C-atomen zonder dubbele bindingen: <b>cyclohexaan</b>. Zijtak van 3 C-atomen: <b>propyl</b>. Eén zijtak, dus geen plaatsnummer nodig: <b>propylcyclohexaan</b>.",
      zoH: true
    },
    p3: {
      fouten: {
        "methylcyclohexaan": "Tel de hoekpunten van de ring nog eens.",
        "methylcyclooctaan": "Tel de hoekpunten van de ring nog eens.",
        "methylheptaan": "Het is een ring: welk voorvoegsel hoort daarbij?",
        "ethylcycloheptaan": "Hoe lang is de zijtak?"
      },
      zo: "Ring van 7 C-atomen: <b>cycloheptaan</b>. Zijtak: <b>methyl</b>. Dus <b>methylcycloheptaan</b>.",
      zoH: true
    },
    h4: {
      fouten: {
        "1,5-diethylbenzeen": "Tel de andere kant op rond de ring.",
        "1,3-ethylbenzeen": "Twee dezelfde zijtakken: hoe geef je dat aan in de naam?",
        "diethylbenzeen": "Waar zitten de ethylgroepen? Die plaatsnummers horen in de naam.",
        "1,3-diethylcyclohexaan": "Kijk naar de ring: welke stamnaam hoort bij deze ring?",
        "1,3-dimethylbenzeen": "Hoe lang zijn de zijtakken?",
        "1-3-diethylbenzeen": "Tussen twee getallen staat een komma."
      },
      zo: "De cirkel maakt het een benzeenring. Twee ethylgroepen → <b>diethyl</b>. Geef de bovenste nummer 1 en tel tegen de klok in: de andere zit op 3 (met de klok mee zou het 5 zijn). <b>1,3-diethylbenzeen</b>."
    },
    p4: {
      fouten: {
        "1,5-diethylcyclopentaan": "Tel de andere kant op rond de ring.",
        "1,2-ethylcyclopentaan": "Twee dezelfde zijtakken: hoe geef je dat aan in de naam?",
        "diethylcyclopentaan": "Waar zitten de ethylgroepen? Die plaatsnummers horen in de naam.",
        "1,2-diethylpentaan": "Het is een ring: welk voorvoegsel hoort daarbij?"
      },
      zo: "Vijfring: <b>cyclopentaan</b>. De twee ethylgroepen zitten aan C-atomen naast elkaar: <b>1,2-diethylcyclopentaan</b>."
    },
    h5: {
      optieUitleg: {
        C: "Hier zitten de methylgroepen aan C-atomen tegenover elkaar: 1,3.",
        E: "Hier zitten beide methylgroepen aan hetzelfde C-atoom.",
        F: "Volledig getekend, maar de methylgroepen zitten tegenover elkaar: 1,3."
      },
      zo: "Drie tekeningen passen: <b>A</b> en <b>D</b> (hoekpuntnotatie, gedraaid) en <b>B</b> (volledig). Steeds zitten de methylgroepen aan twee C-atomen die naast elkaar liggen."
    },
    p5: {
      optieUitleg: {
        A: "Hier zitten de methylgroepen aan C-atomen naast elkaar: 1,2.",
        D: "Hier zitten beide methylgroepen aan hetzelfde C-atoom.",
        E: "Volledig getekend, maar de methylgroepen zitten naast elkaar: 1,2."
      },
      zo: "Drie tekeningen passen: <b>B</b> en <b>F</b> (hoekpuntnotatie) en <b>C</b> (volledig). De methylgroepen zitten steeds tegenover elkaar in de vierring."
    },
    h6: {
      optieUitleg: {
        B: "C₉H₁₂: een benzeenring heeft veel minder H-atomen, en hier zijn het 9 C-atomen.",
        E: "C₅H₁₀: tel de C-atomen nog eens.",
        F: "C₈H₁₈: zonder ring of dubbele binding heeft een stof 2 H meer."
      },
      zo: "Drie tekeningen passen: <b>A</b> (propylcyclopentaan), <b>D</b> (1,2-dimethylcyclohexaan) en <b>C</b> (oct-2-een). Een ring en een dubbele binding kosten allebei 2 H: C₈H₁₈ − 2 H = C₈H₁₆."
    },
    p6: {
      optieUitleg: {
        B: "C₉H₁₂: in een benzeenring heeft elk C-atoom hoogstens 1 H.",
        D: "C₉H₂₀: zonder ring of dubbele binding heeft een stof 2 H meer.",
        F: "C₈H₁₆: tel de C-atomen nog eens."
      },
      zo: "Drie tekeningen passen: <b>A</b> (propylcyclohexaan), <b>E</b> (1-ethyl-3-methylcyclohexaan) en <b>C</b> (non-2-een), allemaal C₉H₁₈."
    },
    oR: {
      fouten: {
        "9": "Op het ring-C-atoom met de methylgroep zit één H minder.",
        "4": "Vergeet de H-atomen aan de ring niet.",
        "3": "Vergeet de H-atomen aan de ring niet.",
        "10": "Tel nog eens per C-atoom: hoeveel bindingen heeft het al?"
      },
      zo: "Ring: 2 C-atomen met 2 H en 1 C-atoom met 1 H = 5. Methylgroep: 3. Samen <b>8</b> (C₄H₈).",
      zoH: true
    },
    oB: {
      fouten: {
        "6": "Op de C-atomen met een zijtak zit geen H.",
        "5": "Er zitten twee zijtakken aan de ring.",
        "8": "Elk ring-C-atoom van benzeen heeft hoogstens 1 H.",
        "12": "Alleen de H-atomen direct aan de ring tellen."
      },
      zo: "6 ring-C-atomen, waarvan 2 met een zijtak: <b>4</b> H-atomen aan de ring.",
      zoH: true
    },
    oN: {
      fouten: {
        "1,4-ethylbenzeen": "Twee dezelfde zijtakken: hoe geef je dat aan in de naam?",
        "diethylbenzeen": "Waar zitten de ethylgroepen? Die plaatsnummers horen in de naam.",
        "1,4-diethylcyclohexaan": "Kijk naar de ring: welke stamnaam hoort bij deze ring?",
        "1,4-dimethylbenzeen": "Hoe lang zijn de zijtakken?"
      },
      zo: "Benzeenring met twee ethylgroepen tegenover elkaar: <b>1,4-diethylbenzeen</b>."
    }
  },
  // ── Les 5 · De tuinmannen van de Koningin ──────────────────
  5: {
    omwegen: {
      X: "Het ging mis bij de halogenen in de naam.",
      Y: "Het ging mis bij het plaatsnummer van de OH-groep.",
      Z: "Het ging mis bij het herkennen of benoemen van een ether of alkanol."
    },
    h1: {
      fouten: {
        "1,3-chloorpropaan": "Twee dezelfde atomen: hoe geef je dat aan in de naam?",
        "dichloorpropaan": "Aan welke C-atomen zitten de Cl-atomen? Die nummers horen in de naam.",
        "1,3-dichloropropaan": "Gebruik de Nederlandse naam: chloor-.",
        "1-3-dichloorpropaan": "Tussen twee getallen staat een komma.",
        "1,3-dichloorbutaan": "Tel de C-atomen in de keten nog eens."
      },
      zo: "3 C-atomen → <b>propaan</b>. Twee Cl-atomen → <b>dichloor</b>, aan C-atoom 1 en 3: <b>1,3-dichloorpropaan</b>."
    },
    p1: {
      fouten: {
        "4-joodhexaan": "Nummer nog eens vanaf de andere kant.",
        "joodhexaan": "Aan welk C-atoom zit het I-atoom? Dat nummer hoort in de naam.",
        "3-jodiumhexaan": "Het voorvoegsel voor I is jood-."
      },
      zo: "Van rechts genummerd zit het I-atoom aan C-atoom 3: <b>3-joodhexaan</b>."
    },
    h2: {
      fouten: {
        "2-methyl-3-broompentaan": "Je plaatsnummers kloppen. Kijk nog eens naar de volgorde in de naam.",
        "3-broom-4-methylpentaan": "De volgorde klopt. Nummer nog eens vanaf de andere kant.",
        "4-methyl-3-broompentaan": "Kijk naar het nummeren én naar de volgorde in de naam.",
        "3-broom-2-methylbutaan": "Tel de C-atomen in de keten nog eens."
      },
      zo: "Van links: methyl op 2, Br op 3 (van rechts 3 en 4: hoger). Op alfabet: broom vóór methyl → <b>3-broom-2-methylpentaan</b>."
    },
    p2: {
      fouten: {
        "4-methyl-2-chloorhexaan": "Je plaatsnummers kloppen. Kijk nog eens naar de volgorde in de naam.",
        "5-chloor-3-methylhexaan": "De volgorde klopt. Nummer nog eens vanaf de andere kant.",
        "3-methyl-5-chloorhexaan": "Kijk naar het nummeren én naar de volgorde in de naam."
      },
      zo: "Van rechts: Cl op 2, methyl op 4 (van links 3 en 5: hoger). Chloor vóór methyl: <b>2-chloor-4-methylhexaan</b>."
    },
    h3: {
      fouten: {
        "pentaan-4-ol": "Nummer vanaf de kant die het dichtst bij de OH-groep zit.",
        "pentanol": "Aan welk C-atoom zit de OH-groep? Dat nummer hoort in de naam.",
        "pentaanol": "Aan welk C-atoom zit de OH-groep? Dat nummer hoort in de naam.",
        "2-pentanol": "Het plaatsnummer staat vlak voor -ol: pentaan-…-ol.",
        "hexaan-2-ol": "Tel de C-atomen nog eens. Het O-atoom telt niet mee."
      },
      zo: "5 C-atomen → <b>pentaan</b>. Van rechts genummerd zit de OH aan C-atoom 2: <b>pentaan-2-ol</b>."
    },
    p3: {
      fouten: {
        "heptaan-5-ol": "Nummer vanaf de kant die het dichtst bij de OH-groep zit.",
        "heptanol": "Aan welk C-atoom zit de OH-groep? Dat nummer hoort in de naam.",
        "3-heptanol": "Het plaatsnummer staat vlak voor -ol: heptaan-…-ol."
      },
      zo: "Van rechts genummerd zit de OH aan C-atoom 3: <b>heptaan-3-ol</b>."
    },
    h4: {
      fouten: {
        "butoxyethaan": "Welk deel aan de kant van de O is het kleinst? Dat wordt de alkoxy-groep.",
        "ethylbutylether": "Gebruik de systematische naam: alkoxyalkaan.",
        "hexaan-3-ol": "Zit de O tussen een C-atoom en een H-atoom, of tussen twee C-atomen?",
        "ethoxypentaan": "Tel de C-atomen aan beide kanten van de O nog eens.",
        "methoxybutaan": "Tel de C-atomen aan beide kanten van de O nog eens."
      },
      zo: "Links van de O: 2 C-atomen → <b>ethoxy-</b>. Rechts: 4 C-atomen → <b>butaan</b>. Samen <b>ethoxybutaan</b>."
    },
    p4: {
      fouten: {
        "pentoxymethaan": "Welk deel aan de kant van de O is het kleinst? Dat wordt de alkoxy-groep.",
        "methylpentylether": "Gebruik de systematische naam: alkoxyalkaan.",
        "methoxyhexaan": "Tel de C-atomen aan beide kanten van de O nog eens."
      },
      zo: "Links van de O: 1 C-atoom → <b>methoxy-</b>. Rechts: 5 → <b>pentaan</b>: <b>methoxypentaan</b>."
    },
    h5: {
      optieUitleg: {
        B: "C₅H₁₁Cl: hier zit een Cl-atoom in plaats van een O-atoom.",
        D: "C₆H₁₄O: tel de C-atomen nog eens.",
        F: "C₅H₁₂: hier zit geen O-atoom in."
      },
      zo: "Drie tekeningen passen: <b>A</b> (pentaan-1-ol), <b>E</b> (2-methylbutaan-2-ol) en <b>C</b> (methoxybutaan). Alkanolen en ethers met evenveel C-atomen zijn isomeren."
    },
    p5: {
      optieUitleg: {
        B: "C₅H₁₂O: tel de C-atomen nog eens.",
        E: "C₆H₁₂Cl₂: hier zitten Cl-atomen in plaats van een O-atoom.",
        F: "C₆H₁₄: hier zit geen O-atoom in."
      },
      zo: "Drie tekeningen passen: <b>A</b> (hexaan-2-ol), <b>D</b> (2-methylpentaan-3-ol) en <b>C</b> (propoxypropaan)."
    },
    h6: {
      rijHints: [
        "Zit de O tussen twee C-atomen, of tussen een C-atoom en een H-atoom?",
        "Welk atoom is hier in de plaats van een H gekomen?",
        "Zit de O tussen twee C-atomen, of tussen een C-atoom en een H-atoom?",
        "Zit de O tussen twee C-atomen, of tussen een C-atoom en een H-atoom?",
        "Kijk goed waar de O tussen zit: aan de rechterkant staat een H.",
        "Welk atoom is hier in de plaats van een H gekomen?"
      ],
      zo: "Ether: C–O–C (rij 1 en 4). Alkanol: C–O–H (rij 3 en 5; in rij 3 staat de OH tussen haakjes). Halogeenalkaan: Br of I in plaats van een H (rij 2 en 6)."
    },
    p6: {
      rijHints: [
        "Welk atoom is hier in de plaats van een H gekomen?",
        "Zit de O tussen twee C-atomen, of tussen een C-atoom en een H-atoom?",
        "Zit de O tussen twee C-atomen, of tussen een C-atoom en een H-atoom?",
        "Welk atoom is hier in de plaats van een H gekomen?",
        "Zit de O tussen twee C-atomen, of tussen een C-atoom en een H-atoom?",
        "Kijk goed waar de O tussen zit: aan de rechterkant staat een H."
      ],
      zo: "Halogeenalkaan: rij 1 en 4. Ether: rij 2 en 5 (C–O–C). Alkanol: rij 3 en 6 — ook CH₃–O–H (methanol) is een alkanol."
    },
    oX: {
      fouten: {
        "1,2-joodpropaan": "Twee dezelfde atomen: hoe geef je dat aan in de naam?",
        "dijoodpropaan": "Aan welke C-atomen zitten de I-atomen? Die nummers horen in de naam.",
        "2,3-dijoodpropaan": "Nummer vanaf de andere kant."
      },
      zo: "Twee I-atomen → <b>dijood</b>, aan C-atoom 1 en 2: <b>1,2-dijoodpropaan</b>."
    },
    oY: {
      fouten: {
        "pentaan-5-ol": "Begin met nummeren aan de kant van de OH-groep.",
        "pentanol": "Aan welk C-atoom zit de OH-groep? Dat nummer hoort in de naam."
      },
      zo: "Van rechts genummerd zit de OH aan C-atoom 1: <b>pentaan-1-ol</b>."
    },
    oZ: {
      fouten: {
        "hexoxymethaan": "Welk deel is het kleinst? Dat wordt de alkoxy-groep.",
        "methoxyheptaan": "Tel de C-atomen aan beide kanten van de O nog eens.",
        "heptaan-1-ol": "Zit de O tussen een C-atoom en een H-atoom, of tussen twee C-atomen?"
      },
      zo: "1 C-atoom → <b>methoxy-</b>, 6 C-atomen → <b>hexaan</b>: <b>methoxyhexaan</b>."
    }
  },
  // ── Les 6 · Het theekransje ───────────────────────────────
  6: {
    omwegen: {
      K: "Het ging mis bij het onderscheid tussen aldehyde en keton.",
      N: "Het ging mis bij het nummeren van een aldehyde of keton.",
      T: "Het ging mis bij het systematisch vinden van alle mogelijkheden."
    },
    h1: {
      optieUitleg: {
        B: "De C=O zit hier midden in de keten: een keton.",
        C: "Hier zit een –OH aan het uiteinde, geen C=O: een alkanol.",
        E: "De C=O zit hier midden in de keten: een keton."
      },
      zo: "Drie aldehyden: <b>A</b>, <b>D</b> en <b>F</b>. Steeds zit de C=O aan het uiteinde van de keten (bij F links). B en E zijn ketonen, C is een alkanol."
    },
    p1: {
      optieUitleg: {
        B: "De C=O zit hier aan het uiteinde: een aldehyde.",
        D: "Hier zit een –OH, geen C=O: een alkanol.",
        E: "De C=O zit hier aan het uiteinde: een aldehyde."
      },
      zo: "Drie ketonen: <b>A</b>, <b>C</b> en <b>F</b>, met de C=O steeds midden in de keten."
    },
    h2: {
      fouten: {
        "2-methylpentanal": "Bij een aldehyde krijgt het C-atoom van de C=O altijd nummer 1. Tel vanaf daar.",
        "4-methylpentaan-2-on": "Zit de C=O aan het uiteinde of midden in de keten?",
        "4-methylhexanal": "Tel de C-atomen in de keten nog eens, inclusief het C-atoom van de C=O.",
        "4-methylbutanal": "Tel de C-atomen in de keten nog eens, inclusief het C-atoom van de C=O.",
        "methylpentanal": "Op welk C-atoom zit de methylgroep? Dat nummer hoort in de naam."
      },
      zo: "Het C-atoom van de C=O is C-atoom 1. De keten is 5 lang → <b>pentanal</b>. De methylgroep zit op 4: <b>4-methylpentanal</b>."
    },
    p2: {
      fouten: {
        "4-ethylhexanal": "Bij een aldehyde krijgt het C-atoom van de C=O altijd nummer 1. Tel vanaf daar.",
        "3-ethylheptanal": "Tel de C-atomen in de keten nog eens.",
        "3-ethylhexaan-6-al": "Het C-atoom van de C=O is C-atoom 1."
      },
      zo: "Van rechts: het C-atoom van de C=O is 1, de ethylgroep zit op 3: <b>3-ethylhexanal</b>."
    },
    h3: {
      fouten: {
        "octaan-6-on": "Nummer vanaf de kant die het dichtst bij de C=O zit.",
        "octanon": "Waar zit de C=O? Dat nummer hoort in de naam.",
        "octaan-3-al": "De C=O zit midden in de keten: is het dan een aldehyde?",
        "3-octanon": "Het plaatsnummer staat vlak voor -on: octaan-…-on.",
        "octaan-3-ol": "Een C=O is geen –OH: welke uitgang hoort bij een keton?"
      },
      zo: "8 C-atomen, C=O midden in de keten → keton. Van rechts genummerd zit de C=O op 3: <b>octaan-3-on</b>."
    },
    p3: {
      fouten: {
        "nonaan-8-on": "Nummer vanaf de kant die het dichtst bij de C=O zit.",
        "nonanon": "Waar zit de C=O? Dat nummer hoort in de naam.",
        "2-nonanon": "Het plaatsnummer staat vlak voor -on: nonaan-…-on."
      },
      zo: "Van rechts genummerd zit de C=O op 2: <b>nonaan-2-on</b>."
    },
    h4: {
      optieUitleg: {
        B: "C₈H₁₈O: een alkanol heeft 2 H meer dan een keton.",
        C: "Dit is octaan-2-on zelf, gespiegeld: dezelfde stof, dus geen isomeer.",
        F: "C₈H₁₆: hier zit geen O-atoom in."
      },
      zo: "Drie isomeren (C₈H₁₆O): <b>A</b> (2-methylheptanal), <b>D</b> (octaan-4-on) en <b>E</b> (5-methylheptaan-3-on)."
    },
    p4: {
      optieUitleg: {
        B: "Dit is nonanal zelf, gespiegeld: dezelfde stof, dus geen isomeer.",
        D: "C₉H₂₀O: een alkanol heeft 2 H meer.",
        F: "C₈H₁₆O: één C-atoom minder."
      },
      zo: "Drie isomeren (C₉H₁₈O): <b>A</b> (nonaan-2-on), <b>C</b> (2-methyloctanal) en <b>E</b> (nonaan-5-on)."
    },
    h5: {
      fouten: {
        "15": "Het C-atoom van de C=O heeft maar één H.",
        "16": "De C=O kost twee H: het C-atoom van de C=O heeft er maar één.",
        "13": "Tel de H-atomen aan de methylgroepen nog eens.",
        "12": "Het C-atoom van de C=O heeft nog één H."
      },
      zo: "C₇H₁₄O: CHO (1 H) – C(CH₃)₂ (0 H aan C2, 2 × 3 H aan de methylgroepen) – CH₂ – CH₂ – CH₃. 1 + 6 + 2 + 2 + 3 = <b>14</b>."
    },
    p5: {
      fouten: {
        "17": "Het C-atoom van de C=O heeft maar één H.",
        "18": "De C=O kost twee H: het C-atoom van de C=O heeft er maar één.",
        "14": "Tel de H-atomen aan de methylgroepen nog eens."
      },
      zo: "C₈H₁₆O: 1 (CHO) + 2 + 0 + 6 (methylgroepen) + 2 + 2 + 3 = <b>16</b>."
    },
    h6: {
      fouten: {
        "3": "Vergeet het aldehyde niet: de C=O kan ook aan het uiteinde zitten.",
        "5": "Sommige zijn dezelfde stof, van de andere kant genummerd. Geef ze allemaal een naam.",
        "6": "Sommige zijn dezelfde stof, van de andere kant genummerd. Geef ze allemaal een naam.",
        "7": "Sommige zijn dezelfde stof, van de andere kant genummerd. Geef ze allemaal een naam.",
        "1": "De C=O kan op meer plekken zitten dan aan het uiteinde."
      },
      zo: "heptanal, heptaan-2-on, heptaan-3-on en heptaan-4-on. ‘Heptaan-5-on’ is heptaan-3-on van de andere kant. Dus <b>4</b>."
    },
    p6: {
      fouten: {
        "4": "Alleen ketonen: octanal telt niet mee. Of heb je dubbelen?",
        "5": "Sommige zijn dezelfde stof, van de andere kant genummerd.",
        "6": "Sommige zijn dezelfde stof, van de andere kant genummerd.",
        "2": "Kan de C=O ook dichter bij het midden zitten?"
      },
      zo: "octaan-2-on, octaan-3-on en octaan-4-on. Dus <b>3</b>."
    },
    oK: {
      fouten: {
        "decaan-7-on": "Nummer vanaf de kant die het dichtst bij de C=O zit.",
        "decanal": "De C=O zit midden in de keten: is het dan een aldehyde?",
        "decaan-4-al": "De C=O zit midden in de keten: welke uitgang hoort bij een keton?"
      },
      zo: "Keton (C=O midden in de keten), van links op C-atoom 4: <b>decaan-4-on</b>."
    },
    oN: {
      fouten: {
        "decaan-9-on": "Nummer vanaf de kant die het dichtst bij de C=O zit.",
        "decanal": "De C=O zit niet aan het uiteinde: is het dan een aldehyde?"
      },
      zo: "Van rechts genummerd zit de C=O op 2: <b>decaan-2-on</b>."
    },
    oT: {
      fouten: {
        "5": "Alleen ketonen: het aldehyde telt niet mee.",
        "8": "Sommige zijn dezelfde stof, van de andere kant genummerd.",
        "3": "Kan de C=O ook precies in het midden zitten?"
      },
      zo: "decaan-2-on, 3-on, 4-on en 5-on. Dus <b>4</b>."
    }
  }
};
})();

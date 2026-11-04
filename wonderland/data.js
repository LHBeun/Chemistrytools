// ─────────────────────────────────────────────────────────────
//  De deuren van Wonderland — inhoud van de lessenreeks (4V koolstofchemie)
//  Gedeeld door bord.html en leerling.html.
//  Antwoorden staan als SHA-256-hash ("wl|<les>|<vraag>|<waarde>") zodat
//  leerlingen ze niet in de broncode kunnen lezen. Hints mogen wél leesbaar.
// ─────────────────────────────────────────────────────────────

const PLAAT = n => `https://www.gutenberg.org/files/114/114-h/images/alice${String(n).padStart(2, "0")}a.gif`;

window.WONDERLAND = {
  lessen: [
    {
      nr: 1,
      plek: "De gang met deuren",
      leerdoel: "Alkanen, alkenen en alkynen herkennen; stamnamen; structuurformules met en zonder H",
      plaat: PLAAT(3),
      scene: [
        "Alice volgt het Witte Konijn een donker hol in… en valt… en valt… en valt.",
        "Tot ze — plof! — op een hoop droge bladeren belandt, in een lange, lage hal. Overal deuren. Allemaal op slot.",
        "Op een glazen tafeltje staan flesjes. Op de etiketten staan geen woorden, maar vreemde tekentjes: lijnen, en de letter C.",
        "Achter het kleinste deurtje ziet Alice de mooiste tuin die ze ooit zag. Maar het slot heeft vier draaischijven. En de code… die zit in de flesjes."
      ],
      deur: {
        intro: "Op het glazen tafeltje staan vier flesjes. Werk in je schrift: teken waar dat helpt. Elk antwoord is één getal van de code.",
        vragen: [
          {
            tekst: "Op flesje 1 staat dit molecuul, getekend zónder H-atomen:",
            formule: "C–C≡C–C",
            structuur: { atomen: ["C", "C", "C", "C"], bindingen: [1, 3, 1] },
            vraag: "Hoeveel H-atomen heeft dit molecuul?",
            hash: "5eeffe55908e444a21f8659689b039fcb1a0fecdea0732dbc5d37fa93ca72053",
            hints: {
              "8": "Tel per C-atoom: hoeveel bindingen heeft hij al via de drievoudige binding?",
              "10": "Dit is geen alkaan. Wat doet die drievoudige binding met het aantal plekken voor H?",
              "4": "De C-atomen aan de uiteinden hebben maar één binding naar een ander C-atoom."
            },
            hint: "Een C-atoom heeft altijd 4 bindingen. Vul elk C-atoom aan met H tot het er 4 heeft."
          },
          {
            tekst: "Op flesje 2 staat alleen een naam:",
            formule: "heptaan",
            vraag: "Hoeveel H-atomen heeft één molecuul?",
            hash: "a7530afaac0347ceb79ba2a6225bff485d2d2b4eb7a0b69647249e700a7442aa",
            hints: {
              "14": "Heptaan is een alkaan: alleen enkele bindingen. Welke algemene formule hoort daarbij?",
              "12": "Heptaan is een alkaan: alleen enkele bindingen. Welke algemene formule hoort daarbij?",
              "18": "Hoeveel C-atomen hoort bij 'hept-'?"
            },
            hint: "Welk aantal C-atomen hoort bij 'hept-'? En is het een alkaan, alkeen of alkyn?"
          },
          {
            tekst: "Teken (zonder H) het onvertakte alkeen met 5 C-atomen, waarbij de dubbele binding aan het uiteinde van de keten zit.",
            formule: "",
            vraag: "Hoeveel H-atomen zitten er aan het tweede C-atoom?",
            hash: "de346e890a6dc55c80924d7a6b5de16e221f8076729555d98839b9d3d6434a4c",
            hints: {
              "2": "Het tweede C-atoom doet ook mee aan de dubbele binding. Hoeveel bindingen heeft hij dan nog over?",
              "3": "Tel de bindingen van het tweede C-atoom: naar links, naar rechts — en is één daarvan dubbel?",
              "0": "Tel nog eens: 4 bindingen in totaal. Hoeveel gaan er naar C-atomen?"
            },
            hint: "Teken de keten en tel bij het tweede C-atoom hoeveel bindingen al naar C-atomen gaan."
          },
          {
            tekst: "Op het laatste flesje staat:",
            formule: "een alkaan met 22 H-atomen",
            vraag: "Hoeveel C-atomen heeft dit molecuul?",
            hash: "79a686277fe1272ed265d30d0f70d6fe9ffa6aea7cbb7d7b56fe45a506b48d60",
            hints: {
              "11": "Bij een alkaan is het aantal H niet precies 2× het aantal C. Wat komt er nog bij?",
              "12": "Bij een alkaan hoort CₙH₂ₙ₊₂. Wat is n als 2n + 2 = 22?",
              "9": "Reken het na: hoeveel H heeft een alkaan met 9 C-atomen?"
            },
            hint: "Gebruik de algemene formule van een alkaan en reken terug."
          }
        ],
        geheim: {
          tekst: "Achter een gordijn vind je nog een flesje:",
          formule: "C₆H₁₀ — onvertakt, géén ring en géén drievoudige binding",
          vraag: "Toch bestaat dit molecuul. Teken een mogelijke structuur. Hoeveel dubbele bindingen heeft het?",
          hash: "bb773564e01f8549472df0c70a064e854a14872b7ea136b7886dcc7ca513fe80",
          hint: "Vergelijk met een alkyn met 6 C-atomen: hoeveel H heeft dat? Op welke andere manier kun je evenveel H 'kwijtraken'?"
        }
      },
      na: {
        plaat: PLAAT(6),
        tekst: [
          "Klik. De vier schijven vallen op hun plek en het deurtje zwaait open. De geur van rozen waait de hal in.",
          "Maar Alice is véél te groot om erdoor te passen. Terwijl ze daar zit te huilen, rent het Witte Konijn voorbij:",
          "“Mary Ann! Wat doe jíj hier? Ren naar huis en haal mijn handschoenen!”",
          "Maar Alice heet helemaal geen Mary Ann…"
        ]
      }
    },
    {
      nr: 2,
      plek: "Het huis van het Witte Konijn",
      leerdoel: "Alkanen met vertakkingen systematisch benoemen; plaatsnummer van de dubbele of drievoudige binding (-een/-yn)",
      plaat: PLAAT(2),
      scene: [
        "Alice rent achter het Konijn aan, naar een klein huisje met een glanzend koperen bordje op de deur: W. RABBIT.",
        "Binnen staan planken vol potjes en flesjes, elk met een etiket in het haastige handschrift van het Konijn. Want het Konijn heeft altijd haast. En wie haast heeft, schrijft slordig.",
        "“Mary Ann!” had hij haar nageroepen. Alice weet nu: een verkeerde naam is gevaarlijk. Wie een verkeerde naam krijgt, wordt voor iemand anders aangezien.",
        "Op de deur naar boven hangt een slot met vier schijven. De code? Die zit in de verbeterde etiketten."
      ],
      deur: {
        intro: "Het Konijn heeft zijn etiketten slordig geschreven. Teken in je schrift de structuren en verbeter de namen. Elk antwoord is één getal van de code.",
        vragen: [
          {
            tekst: "Op een potje staat:",
            formule: "2-ethylpropaan",
            vraag: "Teken de structuur. Hoeveel C-atomen telt de langste keten?",
            hash: "7aac0748cdb8a3842feae69d76a4564ad23ee5bba5ca7990c7f2fb91fbbdb7c3",
            hints: {
              "3": "Volg de keten ook eens de zijtak in.",
              "5": "Tel nog eens: de langste keten mag maar één keer door elk C-atoom lopen."
            },
            hint: "De langste keten hoeft niet recht getekend te zijn. Probeer alle routes van uiteinde naar uiteinde."
          },
          {
            tekst: "Op een flesje staat:",
            formule: "4-methylhexaan",
            vraag: "Teken de structuur en geef de juiste naam. Welk plaatsnummer staat in de juiste naam?",
            hash: "ac25b7a931c361344d5d9cddc9554be01cf0daba2a2e923d05739c3ef0c47473",
            hints: {
              "4": "Je mag de keten ook vanaf de andere kant nummeren.",
              "2": "Tel de C-atomen nog eens vanaf het dichtstbijzijnde uiteinde tot de zijtak."
            },
            hint: "Nummer de keten zo dat het plaatsnummer van de zijtak zo laag mogelijk is."
          },
          {
            tekst: "Dit molecuul is getekend zonder H-atomen:",
            formule: "C–C–C–C=C–C",
            structuur: { atomen: ["C", "C", "C", "C", "C", "C"], bindingen: [1, 1, 1, 2, 1] },
            vraag: "Geef de naam. Welk plaatsnummer staat in de naam?",
            hash: "e57613d1bb15172b21476695927e2f162341bb9de4542a5f23a720dfd6898d98",
            hints: {
              "4": "Begin met nummeren aan de kant die het dichtst bij de dubbele binding zit.",
              "5": "Het plaatsnummer is het nummer van het eerste C-atoom van de dubbele binding."
            },
            hint: "Het plaatsnummer geeft aan bij welk C-atoom de dubbele binding begint. Zo laag mogelijk!"
          },
          {
            tekst: "Op het laatste etiket staat:",
            formule: "3-methylbut-1-yn",
            vraag: "Teken de structuur. Hoeveel H-atomen heeft het molecuul?",
            hash: "fb7a64956a1dd2503c5546c08521d229cc96f8155920256b48a0bcf0c28e77a7",
            hints: {
              "10": "Een drievoudige binding kost meer H-atomen dan een enkele. Vul elk C-atoom aan tot 4 bindingen.",
              "12": "Dit is geen alkaan: er zit een drievoudige binding in.",
              "7": "Vergeet de H-atomen aan de methylgroep niet."
            },
            hint: "Teken eerst de hoofdketen van 4 C-atomen met de drievoudige binding, zet dan de methylgroep erop en vul aan met H."
          }
        ],
        geheim: {
          tekst: "Op een stoffig potje achter op de plank staat:",
          formule: "2-propylpentaan",
          vraag: "Het Konijn heeft hier twee fouten tegelijk gemaakt. Wat is de juiste naam? Vul het plaatsnummer in.",
          hash: "3f94edfe9db89c5159fc1401800e960d953118c1d92f3274bd1dd3f09a4c0e07",
          hint: "Zoek eerst de langste keten (die loopt door de zijtak!). Nummer daarna zo dat het plaatsnummer zo laag mogelijk is."
        }
      },
      na: {
        plaat: PLAAT(11),
        tekst: [
          "Boven vindt Alice een flesje zonder etiket. Ze drinkt — en groeit, en groeit, tot haar arm uit het raam steekt en haar voet de schoorsteen in.",
          "Pas als ze een koekje eet, krimpt ze weer. Zo klein dat ze tussen de grassprieten het bos in vlucht.",
          "Daar, op een paddenstoel, zit een grote blauwe Rups. Hij neemt de waterpijp uit zijn mond en vraagt langzaam:",
          "“Who… are… YOU?”"
        ]
      }
    },
    {
      nr: 3,
      plek: "De Rups",
      leerdoel: "Isomeren herkennen (zelfde molecuulformule, andere structuur); alle isomeren bij een molecuulformule tekenen; herkennen wanneer twee getekende structuurformules dezelfde stof zijn",
      plaat: PLAAT(15),
      scene: [
        "Alice is nu zo klein als een duim. Ze kijkt over de rand van een paddenstoel — recht in de ogen van een grote blauwe Rups.",
        "“Who… are… YOU?” vraagt de Rups.",
        "“Ik… ik weet het eigenlijk niet meer, meneer,” zegt Alice. “Ik ben vandaag al zo vaak veranderd. Ik ben nog steeds van dezelfde dingen gemaakt, maar ik ben niet meer dezelfde.”",
        "De Rups blaast een kringetje rook. “Dezelfde dingen… en toch een ander? Laat zien dat je begrijpt wat dat betekent. Dan vertel ik je het geheim van de paddenstoel.”"
      ],
      deur: {
        intro: "De Rups stelt je vier vragen. Teken in je schrift systematisch en controleer met de naam: dezelfde naam is dezelfde stof. Elk antwoord is één getal van de code.",
        vragen: [
          {
            tekst: "“Ik ben C₅H₁₂,” zegt de Rups. “Teken wie ik allemaal kan zijn.”",
            formule: "C₅H₁₂",
            vraag: "Hoeveel isomeren zijn er?",
            hash: "90f9e3b405c1cf3334eec3e61ce64f8a0060e93f5f73a19547a57d33030b0cf2",
            hints: {
              "4": "Sommigen zijn dezelfde, alleen anders gaan zitten. Geef ze allemaal een naam.",
              "5": "Sommigen zijn dezelfde, alleen anders gaan zitten. Geef ze allemaal een naam.",
              "2": "Kun je twee zijtakken aan hetzelfde C-atoom hangen?"
            },
            hint: "Begin met de langste keten. Maak de keten dan steeds één C-atoom korter en zet de rest als zijtak."
          },
          {
            tekst: "Op de paddenstoel liggen zes getekende structuurformules (zonder H-atomen):",
            structuren: [
              { label: "A", structuur: { atomen: ["C", "C", "C", "C", "C"], bindingen: [1, 1, 1, 1], takken: [{ bij: 1, n: 1, r: -1 }] } },
              { label: "B", structuur: { atomen: ["C", "C", "C", "C", "C"], bindingen: [1, 1, 1, 1], takken: [{ bij: 3, n: 1, r: 1 }] } },
              { label: "C", structuur: { atomen: ["C", "C", "C", "C", "C"], bindingen: [1, 1, 1, 1], takken: [{ bij: 2, n: 1, r: -1 }] } },
              { label: "D", structuur: { atomen: ["C", "C", "C", "C"], bindingen: [1, 1, 1], takken: [{ bij: 1, n: 1, r: -1 }, { bij: 2, n: 1, r: 1 }] } },
              { label: "E", structuur: { atomen: ["C", "C", "C", "C"], bindingen: [1, 1, 1], takken: [{ bij: 1, n: 2, r: 1 }] } },
              { label: "F", structuur: { atomen: ["C", "C", "C", "C"], bindingen: [1, 1, 1], takken: [{ bij: 1, n: 1, r: -1 }, { bij: 1, n: 1, r: 1 }] } }
            ],
            vraag: "Hoeveel verschillende stoffen zijn het?",
            animatie: { type: "draai", van: "B", naar: "A", uitleg: "Draai B 180° om… en hij past precies op A. Dezelfde stof, alleen anders neergelegd: 2-methylpentaan." },
            hash: "8758f5e6b02bb4d26648ff37db5bc1d740731b424f3999bccff5a41b5daa15cb",
            hints: {
              "5": "Kijk bij E goed naar de langste keten.",
              "6": "Benoem elke structuurformule. Dezelfde naam = dezelfde stof."
            },
            hint: "Benoem elke structuurformule. Dezelfde naam = dezelfde stof."
          },
          {
            tekst: "De Rups wil alleen onvertakte ketens zien:",
            formule: "C₆H₁₂ — onvertakt, alkeen",
            vraag: "Hoeveel onvertakte alkenen met deze formule bestaan er?",
            hash: "daa1aa0cf70231abc4a99188718f85d0a5d3fe396c989f31faffb986dde20d4a",
            hints: {
              "4": "Hex-4-een is hex-2-een, vanaf de andere kant genummerd.",
              "5": "Hex-4-een is hex-2-een, vanaf de andere kant genummerd.",
              "2": "De dubbele binding kan op meer plekken zitten dan je denkt. Probeer ook het midden van de keten."
            },
            hint: "Schuif de dubbele binding stap voor stap door de keten en geef elke stof een naam."
          },
          {
            tekst: "“Raad eens,” zegt de Rups:",
            formule: "alkaan · 7 C-atomen · langste keten 5 · precies twee methylgroepen",
            vraag: "Hoeveel alkanen passen bij deze beschrijving?",
            hash: "fa980436bb85e1d93f2184afa1f6b91fd06f30bf4c7fddbdffa076a62805da3d",
            hints: {
              "3": "Twee methylgroepen mogen ook aan hetzelfde C-atoom.",
              "5": "Controleer met de naam: 3,4-dimethylpentaan heet eigenlijk anders.",
              "6": "Controleer met de naam: sommige combinaties zijn dezelfde stof, vanaf de andere kant genummerd."
            },
            hint: "Teken de keten van 5 C-atomen en probeer systematisch alle plekken voor twee methylgroepen. Benoem ze om dubbelen te vinden."
          }
        ],
        geheim: {
          tekst: "De Rups blaast een laatste kringetje:",
          formule: "C₅H₁₀ — alkenen, óók vertakt, géén ringen",
          vraag: "Hoeveel van zulke alkenen bestaan er?",
          hash: "fabd2a58b2440747029102a866c831a361cb73760444deffc0b672f3677917b4",
          hint: "Combineer alles: onvertakte ketens met de dubbele binding op verschillende plekken, én ketens van 4 met een methylgroep. Benoem elke stof."
        }
      },
      na: {
        plaat: PLAAT(23),
        tekst: [
          "“Hm,” zegt de Rups tevreden. “Eén kant van de paddenstoel maakt je groter. De andere kant kleiner. Dezelfde paddenstoel — een ander effect.”",
          "Hij kruipt weg in het gras. Alice breekt van beide kanten een stukje af en loopt verder het bos in.",
          "Dan ziet ze iets vreemds in een boom. Eerst alleen een grijns.",
          "Daarna, heel langzaam, de rest van een kat."
        ]
      }
    },
    {
      nr: 4,
      plek: "De Cheshire Kat",
      leerdoel: "Ringstructuren en benzeen (beide notaties) herkennen en benoemen; hoekpuntnotatie lezen: wél H waar geen substituent zit, één H minder waar wel een substituent zit",
      plaat: PLAAT(23),
      scene: [
        "Op een tak zit een kat, met een grijns van oor tot oor.",
        "“Wilt u me alstublieft zeggen welke kant ik op moet?” vraagt Alice. “Dat hangt er nogal van af waar je naartoe wilt,” zegt de Kat.",
        "En dan begint hij te verdwijnen. Eerst het puntje van zijn staart, dan zijn poten, dan zijn lijf. Tot alleen de grijns nog in de lucht hangt.",
        "“In mijn wereld,” zegt de grijns, “tekenen we niet wat iedereen allang weet. Maar dat betekent niet dat het er niet is.”"
      ],
      deur: {
        intro: "De Kat tekent alleen lijnen: op elk hoekpunt zit een C-atoom, en de H-atomen moet je er zelf bij denken. Werk in je schrift. Elk antwoord is één getal van de code.",
        vragen: [
          {
            tekst: "De grijns tekent:",
            skelet: { soort: "ring", n: 6, takken: [{ bij: 0, lengte: 1 }, { bij: 2, lengte: 1 }] },
            animatie: { type: "toonH", uitleg: "De kat komt terug: op elk hoekpunt zit een C-atoom, aangevuld met H tot 4 bindingen. Waar een methylgroep vastzit, zit één H minder." },
            formule: "",
            vraag: "Hoeveel H-atomen heeft dit molecuul?",
            hash: "c8cc008f1dda2e312184b35bfeebab172e600598483665d4c92a96a8a70db4cb",
            hints: {
              "18": "Op de C-atomen waar een methylgroep aan vastzit, zit één H minder.",
              "12": "Vergeet de H-atomen aan de methylgroepen niet.",
              "10": "Vergeet de H-atomen aan de methylgroepen niet."
            },
            hint: "Ga elk hoekpunt langs: hoeveel bindingen heeft dit C-atoom al? Vul aan tot 4 met H."
          },
          {
            tekst: "Daarna tekent de grijns een benzeenring:",
            skelet: { soort: "ring", n: 6, cirkel: true, takken: [{ bij: 0, lengte: 2 }] },
            animatie: { type: "toonH", uitleg: "Elk C-atoom van de benzeenring heeft één H — behalve het C-atoom met de ethylgroep." },
            formule: "",
            vraag: "Hoeveel H-atomen zitten er direct aan de ring?",
            hash: "2ff3122f4d1ceb7952471454efba0d119b406793f263ab5a3cf9b920ef8fb2ba",
            hints: {
              "6": "Op het C-atoom met de ethylgroep zit geen H.",
              "10": "Alleen de H-atomen aan de ring tellen, niet die aan de ethylgroep.",
              "11": "Alleen de H-atomen aan de ring tellen, niet die aan de ethylgroep."
            },
            hint: "Elk C-atoom in benzeen heeft één H — behalve waar een substituent zit."
          },
          {
            tekst: "Dan dezelfde ring, maar nu met afwisselende dubbele bindingen:",
            skelet: { soort: "ring", n: 6, dubbel: [0, 2, 4], takken: [{ bij: 0, lengte: 1 }, { bij: 4, lengte: 1 }] },
            animatie: { type: "toonH", uitleg: "1,3-dimethylbenzeen: op de twee ring-C-atomen met een methylgroep zit geen H." },
            formule: "",
            vraag: "Geef de naam van deze stof. Welk plaatsnummer staat er naast de 1?",
            hash: "5b4dd4b228dd747b672be3903e0d2ba08d5f78b142d8576b24510778d4550739",
            hints: {
              "5": "Je mag rond de ring ook de andere kant op nummeren.",
              "4": "Tel de stappen rond de ring van de ene methylgroep naar de andere.",
              "2": "Tel de stappen rond de ring van de ene methylgroep naar de andere."
            },
            hint: "Geef de eerste methylgroep nummer 1 en nummer rond de ring zó dat het tweede plaatsnummer zo laag mogelijk is."
          },
          {
            tekst: "Tot slot een vijfring:",
            skelet: { soort: "ring", n: 5, takken: [{ bij: 0, lengte: 1 }] },
            animatie: { type: "toonH", uitleg: "Het ring-C-atoom met de methylgroep heeft nog maar plek voor één H." },
            formule: "",
            vraag: "Hoeveel H-atomen zitten er aan het ring-C-atoom waar de methylgroep aan vastzit?",
            hash: "353d411258b16e6355ca87b6268f6b395fab2936b88ba58bdd9341c1f4cf6063",
            hints: {
              "2": "Dit C-atoom heeft al drie bindingen naar andere C-atomen: twee in de ring en één naar de methylgroep.",
              "3": "Dat is het aantal H aan de methylgroep zelf. De vraag gaat over het ring-C-atoom.",
              "0": "Tel nog eens: hoeveel bindingen heeft dit C-atoom al? En hoeveel moeten het er zijn?"
            },
            hint: "Tel de bindingen van dat ene C-atoom en vul aan tot 4."
          }
        ],
        geheim: {
          tekst: "De grijns laat nog iets achter: twee benzeenringen die één zijde delen.",
          skelet: { soort: "naftaleen" },
          formule: "",
          vraag: "Hoeveel H-atomen heeft dit molecuul?",
          hash: "8f31ebed187014652f51f8851656a2cce38c8ed268f00fed70504a0f1351fd4f",
          hint: "Kijk goed naar de twee C-atomen die beide ringen delen: hoeveel bindingen naar C hebben die al?"
        }
      },
      na: {
        plaat: PLAAT(24),
        tekst: [
          "“Een kat zonder grijns heb ik wel vaker gezien,” denkt Alice. “Maar een grijns zonder kat…”",
          "De grijns wijst haar de weg naar een poortje in een hoge muur. Daarachter: een tuin vol rozenstruiken.",
          "Bij een struik met witte rozen staan drie tuinmannen — plat als speelkaarten.",
          "En ze schilderen de witte rozen razendsnel rood."
        ]
      }
    },
    {
      nr: 5,
      plek: "De tuinmannen van de Koningin",
      leerdoel: "Alkanen met halogeensubstituenten en alkanolen benoemen met de juiste plaatsnummers; ethers herkennen, benoemen (alkoxyalkaan) en tekenen",
      plaat: PLAAT(28),
      scene: [
        "Drie tuinmannen, plat als speelkaarten, staan met verfpotten bij een rozenstruik.",
        "“Waarom schilderen jullie die rozen rood?” vraagt Alice. “Nou, ziet u, juffrouw,” fluistert Twee, “dit had een róde rozenstruik moeten zijn. En wij hebben per ongeluk een witte geplant. Als de Koningin dat ontdekt…”",
        "Ze schilderen roos voor roos over. De struik blijft dezelfde struik — alleen hier en daar is iets vervangen.",
        "En toch is het ineens een heel andere struik."
      ],
      deur: {
        intro: "De tuinmannen schilderen H-atomen over. Teken in je schrift de structuren en geef de namen. Elk antwoord is één getal van de code.",
        vragen: [
          {
            tekst: "Tuinman Twee schildert in pentaan twee H-atomen over met Br — allebei aan het vierde C-atoom van links.",
            formule: "",
            vraag: "Geef de naam. Welk plaatsnummer staat er (twee keer) in de naam?",
            animatie: { type: "schilder", n: 5, bij: 3, label: "Br", uitleg: "Twee H-atomen overgeschilderd met Br. Genummerd vanaf rechts zitten ze aan C-atoom 2: 2,2-dibroompentaan." },
            hash: "d796632d96c5d21f56ff76234d3e2c0771db7a42157978d2910bbceb7b3f7701",
            hints: {
              "4": "Je mag de keten ook vanaf de andere kant nummeren.",
              "1": "Beide broomatomen zitten aan hetzelfde C-atoom. Tel nog eens vanaf het dichtstbijzijnde uiteinde.",
              "3": "Tel nog eens vanaf het dichtstbijzijnde uiteinde."
            },
            hint: "Nummer de keten zo dat de plaatsnummers zo laag mogelijk zijn."
          },
          {
            tekst: "Tuinman Vijf heeft dit molecuul getekend (zonder H-atomen aan de C-atomen):",
            structuur: { atomen: ["C", "C", "C", "C", "C", "C"], bindingen: [1, 1, 1, 1, 1], takken: [{ bij: 3, n: 1, r: -1, label: "OH" }] },
            formule: "",
            vraag: "Geef de naam. Welk plaatsnummer staat in de naam?",
            hash: "88cda31b176460e282df5d452a9626f4c1e91a50bc6a1adc8db71b18963ba942",
            hints: {
              "4": "Nummer vanaf de kant die het dichtst bij de OH-groep zit.",
              "2": "Tel nog eens: aan welk C-atoom zit de OH, gerekend vanaf het dichtstbijzijnde uiteinde?"
            },
            hint: "De OH-groep krijgt een zo laag mogelijk plaatsnummer."
          },
          {
            tekst: "Tuinman Zeven heeft een potje met formule:",
            formule: "C₃H₈O",
            vraag: "Hoeveel isomeren met deze formule bestaan er?",
            hash: "1313910d5244d166de8caeaf982500c48daadad08aee0143cfb144216579c184",
            hints: {
              "2": "Vergeet de ethers niet: de O kan ook tussen twee C-atomen zitten.",
              "4": "Controleer met de naam of je dubbelen hebt.",
              "5": "Controleer met de naam of je dubbelen hebt."
            },
            hint: "Teken eerst alle alkanolen (waar kan de OH zitten?), daarna alle ethers (waar kan de O in de keten zitten?)."
          },
          {
            tekst: "Op een rozenpot staat:",
            formule: "2-broom-2-methylbutaan",
            vraag: "Teken de structuur. Hoeveel H-atomen heeft het molecuul?",
            hash: "e3ad9455203210246d727de523129192568b0e33b2ea90724fa2b6bc26ddf5c2",
            hints: {
              "12": "Het Br-atoom neemt de plaats in van een H.",
              "9": "Vergeet de H-atomen aan de methylgroep niet.",
              "10": "Tel per C-atoom: het C-atoom met de Br én de methylgroep heeft geen H meer."
            },
            hint: "Teken de keten van 4 C-atomen, zet de methylgroep en de Br op het tweede C-atoom en vul elk C-atoom aan tot 4 bindingen."
          }
        ],
        geheim: {
          tekst: "Achter de rozenstruik staat nog één potje:",
          formule: "C₄H₁₀O",
          vraag: "Hoeveel isomeren met deze formule bestaan er? Tel alkanolen én ethers.",
          hash: "d6f643d5a57eac97511c4253d15dfa55561deec8a6f71a58e3d02d9ebe4d1a35",
          hint: "Werk systematisch: eerst alle ketens van 4 en van 3 + methyl met een OH erop, daarna alle plekken waar een O tussen twee C-atomen kan zitten."
        }
      },
      na: {
        plaat: PLAAT(29),
        tekst: [
          "Trompetten! De tuinmannen gooien zich plat op hun gezicht. Daar komt de Koningin van Harten, met haar hele hofhouding van speelkaarten.",
          "Ze kijkt naar de rozen. Naar de verfpotten. Naar de tuinmannen.",
          "“OFF WITH THEIR HEADS!”",
          "Alice verstopt de drie snel in een grote bloempot en glipt weg door de heg. Daar ruikt ze iets: thee. En ze hoort gelach, en het rinkelen van kopjes."
        ]
      }
    },
    {
      nr: 6,
      plek: "Het theekransje",
      leerdoel: "De carbonylgroep herkennen; aldehyde (C=O aan het uiteinde) en keton (C=O midden in de keten) onderscheiden, benoemen en tekenen",
      plaat: PLAAT(25),
      scene: [
        "Onder een boom staat een lange tafel, gedekt voor heel veel mensen. Maar er zitten er maar drie, dicht op elkaar: de Hoedenmaker, de Maartse Haas en een slapende Hazelmuis.",
        "“Geen plaats! Geen plaats!” roepen ze als ze Alice zien. “Er is plaats genoeg,” zegt Alice, en ze gaat zitten.",
        "“Het is altijd zes uur,” legt de Hoedenmaker uit. “Altijd theetijd. We hebben nooit tijd om af te wassen. Dus schuiven we gewoon steeds één plaats op.”",
        "Dan buigt hij zich naar haar toe. “Waarom lijkt een raaf op een schrijfbureau?”"
      ],
      deur: {
        intro: "De Hoedenmaker stelt raadsels. Teken in je schrift de structuren en geef de namen. Elk antwoord is één getal van de code.",
        vragen: [
          {
            tekst: "Het raadsel van de Hoedenmaker: “Waarom lijkt propanal op propanon?”",
            formule: "propanal · propanon",
            vraag: "Teken ze allebei. Hoeveel H-atomen heeft elk molecuul?",
            hash: "4f77f488088f0fc727bd7c1a019bcdb62192432ded2a28d3692788bd46280868",
            hints: {
              "8": "De C=O telt als twee bindingen. Dat C-atoom heeft dus minder plek voor H.",
              "7": "Tel per C-atoom en vergeet niet dat de C=O twee bindingen kost."
            },
            hint: "Teken de keten van 3 C-atomen, zet de =O op de juiste plek en vul elk C-atoom aan tot 4 bindingen."
          },
          {
            tekst: "De Maartse Haas heeft dit molecuul getekend (zonder H-atomen):",
            structuur: { atomen: ["C", "C", "C", "C", "C"], bindingen: [1, 1, 1, 1], takken: [{ bij: 3, n: 1, r: -1, label: "O", orde: 2 }] },
            animatie: { type: "schuif", tak: 0, stap: 1, namen: ["pentaan-2-on — keton", "pentanal — aldehyde"], uitleg: "Eén plaats opschuiven, net als aan de theetafel: C=O in de keten is een keton, C=O aan het uiteinde een aldehyde." },
            formule: "",
            vraag: "Geef de naam. Welk plaatsnummer staat in de naam?",
            hash: "94ff6deba1cc448f08824249c31426e6d9445c42cbeb7044fbd26c39489da74c",
            hints: {
              "4": "Nummer vanaf de kant die het dichtst bij de C=O zit.",
              "3": "Tel nog eens vanaf het dichtstbijzijnde uiteinde."
            },
            hint: "De C=O krijgt een zo laag mogelijk plaatsnummer."
          },
          {
            tekst: "De Hazelmuis mompelt in zijn slaap:",
            formule: "keton · onvertakte keten van 5 C-atomen",
            vraag: "Hoeveel van zulke ketonen bestaan er?",
            hash: "9eab7be73666d743a4e4e77806471f3581da02fd617b02d403181cdfea80eb83",
            hints: {
              "3": "Pentaan-4-on is pentaan-2-on, vanaf de andere kant genummerd.",
              "4": "Een C=O aan het uiteinde is geen keton meer.",
              "5": "Een C=O aan het uiteinde is geen keton meer."
            },
            hint: "Schuif de C=O stap voor stap door de keten en geef elke stof een naam."
          },
          {
            tekst: "Op de theepot staat:",
            formule: "3-methylbutanal",
            vraag: "Teken de structuur. Hoeveel H-atomen heeft het molecuul?",
            hash: "fab6cb460c288c1a439332109d34f685ce75c10bb172766c903a25f03a9b1c6d",
            hints: {
              "12": "Het C-atoom van de CHO-groep heeft maar één H.",
              "11": "Tel per C-atoom: het C-atoom met de methylgroep heeft één H.",
              "9": "Vergeet de H aan het C-atoom van de CHO-groep niet."
            },
            hint: "Teken de keten van 4 C-atomen met de CHO-groep als C-atoom 1, zet de methylgroep op C-atoom 3 en vul aan met H."
          }
        ],
        geheim: {
          tekst: "Onder het tafelkleed ligt nog een briefje:",
          formule: "C₅H₁₀O — aldehyden én ketonen, ook vertakt",
          vraag: "Hoeveel aldehyden en ketonen samen bestaan er met deze formule?",
          hash: "dc14b8ad20c9f5a233242ed8e8fd85f7a31ff05b643e3fd66863ec35801e50f3",
          hint: "Werk systematisch: eerst alle aldehyden (ketens van 5, 4 + methyl, 3 + twee methyl), daarna alle ketonen. Benoem ze om dubbelen te vinden."
        }
      },
      na: {
        plaat: PLAAT(27),
        tekst: [
          "“Ik geef het op,” zegt Alice. “Wat ís het antwoord?” — “Ik heb geen idee,” zegt de Hoedenmaker.",
          "Alice staat boos op en loopt weg. Als ze omkijkt, zijn de Hoedenmaker en de Haas de Hazelmuis in de theepot aan het proppen.",
          "Even verderop ziet ze een boom met een deurtje erin. Erachter: een huis waar een vreemde, scherpe geur uit komt. Peper. En azijn.",
          "Voor de deur staat een lakei — met een vissenkop."
        ]
      }
    },
    {
      nr: 7,
      plek: "De keuken van de Hertogin",
      leerdoel: "De carboxylgroep (–COOH) en de aminogroep (–NH₂) herkennen; carbonzuren (alkaanzuur) en amines (alkaanamine) benoemen met de juiste plaatsnummers en tekenen vanuit een naam",
      plaat: PLAAT(21),
      scene: [
        "Een lakei met een vissenkop overhandigt een enorme brief aan een lakei met een kikkerkop: “Voor de Hertogin. Een uitnodiging van de Koningin — voor een partijtje croquet.”",
        "Alice glipt naar binnen. De keuken staat vol rook. Een kokkin roert in een ketel soep en strooit er peper in, en azijn, en nog meer peper. Iedereen niest — behalve de kokkin. En behalve een kat die grijnst bij de haard.",
        "“Er zit veel te veel peper in die soep!” proest Alice.",
        "“Alles heeft een moraal,” zegt de Hertogin, “als je het maar kunt vinden.” En ze gooit een pan naar de kokkin."
      ],
      deur: {
        intro: "In de keuken van de Hertogin ruikt alles naar azijn en vis. Teken in je schrift de structuren en geef de namen. Elk antwoord is één getal van de code.",
        vragen: [
          {
            tekst: "In de soep zit ook:",
            formule: "pentaanzuur",
            vraag: "Teken de structuur. Hoeveel H-atomen heeft het molecuul?",
            hash: "344f4f84e4398695c5b9c29b5008bc892d068a2eb4964be710588be75e782268",
            hints: {
              "11": "De COOH-groep heeft maar één H.",
              "12": "Het C-atoom van de COOH-groep heeft geen H: het heeft al een =O en een –OH.",
              "9": "Vergeet de H van de –OH in de COOH-groep niet."
            },
            hint: "Het C-atoom van de COOH-groep telt mee in de stamnaam: pentaanzuur heeft 5 C-atomen in totaal."
          },
          {
            tekst: "De kokkin heeft dit op een pot geschreven (zonder H-atomen aan de C-atomen):",
            structuur: { atomen: ["C", "C", "C", "C"], bindingen: [1, 1, 1], takken: [{ bij: 1, n: 1, r: -1 }, { bij: 3, n: 1, r: -1, label: "O", orde: 2 }, { bij: 3, n: 1, r: 1, label: "OH" }] },
            formule: "",
            vraag: "Geef de naam. Welk plaatsnummer staat in de naam?",
            hash: "b48559ff040508c77c9b338e62d244046d8a56b32ee988202f93c0af90df4823",
            hints: {
              "2": "Het C-atoom van de COOH-groep is altijd nummer 1. Begin daar met tellen.",
              "1": "Tel nog eens vanaf het C-atoom van de COOH-groep: dat is nummer 1."
            },
            hint: "Het C-atoom van de COOH-groep is altijd C-atoom 1."
          },
          {
            tekst: "De Kikker-Lakei snuift aan dit molecuul (zonder H-atomen aan de C-atomen):",
            structuur: { atomen: ["C", "C", "C", "C", "C"], bindingen: [1, 1, 1, 1], takken: [{ bij: 3, n: 1, r: -1, label: "NH₂" }] },
            formule: "",
            vraag: "Geef de naam. Welk plaatsnummer staat in de naam?",
            hash: "a45b58e6a219343fc32a9338f2851549a07c0774926a3bfa3614f638d6bfd722",
            hints: {
              "4": "Nummer vanaf de kant die het dichtst bij de NH₂ zit.",
              "3": "Tel nog eens vanaf het dichtstbijzijnde uiteinde."
            },
            hint: "De NH₂-groep krijgt een zo laag mogelijk plaatsnummer."
          },
          {
            tekst: "De Vis-Lakei ruikt naar:",
            formule: "2-methylpropaan-2-amine",
            vraag: "Teken de structuur. Hoeveel H-atomen heeft het molecuul?",
            hash: "9e615a30966681d0d4600118c3c36681758bb04b1ac019d0d3f26ae42d195105",
            hints: {
              "9": "Vergeet de twee H-atomen aan de N niet.",
              "12": "Het C-atoom met de NH₂ en de methylgroep heeft geen H meer.",
              "10": "Tel per atoom: drie CH₃-groepen, één C zonder H, en een NH₂."
            },
            hint: "Teken een keten van 3 C-atomen, zet een methylgroep én de NH₂ op het middelste C-atoom, en vul aan met H."
          }
        ],
        geheim: {
          tekst: "In de soep drijft een molecuul met beide groepen tegelijk — een aminozuur:",
          formule: "2-aminopropaanzuur",
          vraag: "Teken de structuur. Hoeveel H-atomen heeft het molecuul?",
          hash: "32a234aab01fe764230191d99825dc787f81d08dad9d14941c97cf5e36b9d4c9",
          hint: "Begin bij de COOH-groep (C-atoom 1). Zet de NH₂ op C-atoom 2 en tel daarna per atoom de H-atomen."
        }
      },
      na: {
        plaat: PLAAT(22),
        tekst: [
          "De Hertogin gooit Alice de baby toe: “Hier, pas jij er maar even op. Ik moet naar het croquet van de Koningin!”",
          "Buiten begint de baby te knorren. En te knorren. Als Alice kijkt, is het geen baby meer — maar een biggetje. Ze zet het in het bos, en het draaft tevreden weg.",
          "Dan waait er een heerlijke geur aan. Aardbeien. Peren. Ananas.",
          "Het komt uit de keuken van het paleis. Daar bakt de Koningin van Harten haar taartjes."
        ]
      }
    },
    {
      nr: 8,
      plek: "De taartjes van de Koningin",
      leerdoel: "De estergroep herkennen; aangeven uit welk alkaanzuur en alkanol een ester ontstaat (en terug); esters benoemen (alkylalkanoaat, één woord); de vorming van een ester en water weergeven",
      plaat: PLAAT(1),
      scene: [
        "In de paleiskeuken staat de Koningin van Harten zelf aan het fornuis. Op lange tafels koelen taartjes af: aardbei, peer, ananas, banaan.",
        "“Mijn geheim,” fluistert de kokkin tegen Alice, “is dat er geen fruit in zit. Helemaal niets. Alleen een paar druppels uit deze flesjes.”",
        "Op de flesjes staan vreemde namen. Ethylbutanoaat. Pentylethanoaat. En ze ruiken precies naar fruit.",
        "Achter Alice glipt iemand de keuken uit: de Boer van Harten — met iets onder zijn mantel."
      ],
      deur: {
        intro: "Elk taartje heeft zijn eigen geur-ester. Teken in je schrift de structuren: van zuur en alkanol naar ester, en weer terug. Elk antwoord is één getal van de code.",
        vragen: [
          {
            tekst: "De aardbeientaart: de ester uit",
            formule: "propaan-1-ol + butaanzuur",
            vraag: "Geef de naam van de ester. Hoeveel C-atomen heeft de ester?",
            hash: "4610aab8245bf84a986addd88c27289f0fc1221d4476b8609d7db547d439b92b",
            hints: {
              "8": "Bij de estervorming verdwijnt er geen C-atoom — en er komt er ook geen bij.",
              "6": "Bij de estervorming verdwijnt er geen C-atoom. Tel de C-atomen van het zuur en het alkanol bij elkaar op."
            },
            hint: "Tel de C-atomen van het zuur en van het alkanol. Water bevat geen C."
          },
          {
            tekst: "Op een flesje staat deze ester (zonder H-atomen aan de C-atomen):",
            structuur: { atomen: ["C", "C", "C", "O", "C", "C", "C", "C"], bindingen: [1, 1, 1, 1, 1, 1, 1], takken: [{ bij: 2, n: 1, r: -1, label: "O", orde: 2 }] },
            formule: "",
            vraag: "Uit welk alkanol is deze ester gemaakt? Hoeveel C-atomen heeft dat alkanol?",
            hash: "07a9f1a4d00dcd8610eac608c62c7822f059ef596591c6f8148dd01d6fb3a55d",
            hints: {
              "3": "De kant met de C=O hoort bij het zuur, niet bij het alkanol.",
              "7": "Knip de ester tussen de C=O-kant en de –O–alkyl-kant. Tel alleen de alkanol-kant."
            },
            hint: "Knip tussen de C=O en de O in de keten. De kant met de C=O hoort bij het zuur."
          },
          {
            tekst: "De perentaart: de ester uit",
            formule: "ethanol + pentaanzuur",
            vraag: "Hoeveel H-atomen heeft de ester?",
            hash: "e562f71b3d9b38f8590a3ae2fb53ff9942ccb31d0bac40ca4ac2d3a43550eaf3",
            hints: {
              "16": "Bij de estervorming wordt water afgesplitst. Welke H-atomen verdwijnen daarbij?",
              "15": "Er wordt een heel watermolecuul afgesplitst: twee H-atomen.",
              "12": "Tel nog eens: alleen de H-atomen van het watermolecuul verdwijnen."
            },
            hint: "Tel de H-atomen van het zuur en het alkanol bij elkaar op, en haal de H-atomen van het afgesplitste water eraf."
          },
          {
            tekst: "De bananentaart ruikt naar:",
            formule: "pentylethanoaat",
            vraag: "Hoeveel C-atomen komen uit het zuur?",
            hash: "ba26ccb4e877a0b8fe52c5711f73fa66ec0f5c32bdf9fd284e872be28bc479a0",
            hints: {
              "5": "Het pentyl-deel komt uit het alkanol. Het -anoaat-deel komt uit het zuur.",
              "7": "Niet de hele ester: alleen het deel dat uit het zuur komt."
            },
            hint: "De naam van een ester: eerst het alkyl (uit het alkanol), dan het alkanoaat (uit het zuur)."
          }
        ],
        geheim: {
          tekst: "Op het laatste flesje staat alleen een molecuulformule:",
          formule: "C₄H₈O₂ — esters",
          vraag: "Hoeveel verschillende esters bestaan er met deze formule?",
          hash: "44218ef73b06239946f2ebb3f7d18dbe1a6fcee90270b11fcc0e8005cb83961c",
          hint: "Verdeel de 4 C-atomen op alle mogelijke manieren over het zuur-deel en het alkanol-deel. Vergeet niet dat het alkanol ook vertakt kan zijn."
        }
      },
      na: {
        plaat: PLAAT(37),
        tekst: [
          "Een trompet schalt door het paleis. Het Witte Konijn, in een heraut-mantel, rolt een perkament uit en leest voor:",
          "“De Koningin van Harten, zij bakte taartjes fijn, op een mooie zomerdag. Maar de Boer van Harten stal ze — en nam ze mee, zo schijnt.”",
          "“De rechtszaak begint!” roept iemand.",
          "En iedereen rent naar de grote zaal."
        ]
      }
    },
    {
      nr: 9,
      plek: "De rechtszaak",
      leerdoel: "Alles samen: naamgeving (ketens, vertakkingen, ringen, karakteristieke groepen), isomerie en H-atomen tellen in de hoekpuntnotatie — door elkaar",
      plaat: PLAAT(38),
      scene: [
        "In de grote zaal zit de Koning als rechter, met de kroon over zijn pruik. Naast hem de Koningin, met een gezicht als een donderwolk. Op een tafel in het midden: de taartjes. Voor de rechter staat de Boer van Harten — in ketenen.",
        "De jury bestaat uit twaalf dieren, die ijverig op leitjes schrijven. Niemand weet precies wat.",
        "“Lees de beschuldiging voor!” roept de Koning.",
        "Dan draait de Koning zich om naar Alice. “Jij, meisje. Jij hebt alles gezien. Jij moet de bewijsstukken ontcijferen.”"
      ],
      deur: {
        intro: "Vier bewijsstukken, uit vier verschillende hoeken van Wonderland. Bedenk bij elk stuk eerst wélke regel je nodig hebt. Elk antwoord is één getal van de code.",
        vragen: [
          {
            tekst: "Bewijsstuk A — een kruimel op de mouw van de Boer bevat:",
            formule: "2-methylbutaan-1-ol",
            vraag: "Teken de structuur. Hoeveel H-atomen heeft het molecuul?",
            hash: "d70a4c9265afa8dd0fb3d47c934eb8b820e0d3dcc7d88de493b78df4a1d92325",
            hints: {
              "11": "Vergeet de H van de OH-groep niet.",
              "14": "Een alkanol heeft evenveel H-atomen als het alkaan met dezelfde keten.",
              "10": "Vergeet de H-atomen aan de methylgroep niet."
            },
            hint: "Teken de keten van 4 C-atomen, zet de OH op C-atoom 1 en de methylgroep op C-atoom 2, en vul aan met H."
          },
          {
            tekst: "Bewijsstuk B — een tekening in hoekpuntnotatie:",
            skelet: { soort: "ring", n: 6, takken: [{ bij: 0, lengte: 1, hoek: -35 }, { bij: 0, lengte: 1, hoek: 35 }] },
            animatie: { type: "toonH", uitleg: "Het C-atoom met twee methylgroepen heeft al vier bindingen naar C: er past geen enkele H meer bij." },
            formule: "",
            vraag: "Hoeveel H-atomen zitten er aan het ring-C-atoom met de twee methylgroepen?",
            hash: "8c0c77b52d74a58bbf5b2b7bf89d5543ebc0ba04981fbba962fdc609fe3ec552",
            hints: {
              "1": "Dit C-atoom heeft al vier bindingen naar andere C-atomen: twee in de ring en twee naar de methylgroepen.",
              "2": "Tel de bindingen van dit ene C-atoom. Hoeveel plek is er nog voor H?",
              "3": "Dat is het aantal H aan één methylgroep. De vraag gaat over het ring-C-atoom."
            },
            hint: "Tel de bindingen van dat ene C-atoom en vul aan tot 4."
          },
          {
            tekst: "Bewijsstuk C — de jury heeft vijf stoffen op haar leitjes geschreven:",
            formule: "ethylethanoaat · butanal · methylpropanoaat · butaan-1-ol · 2-methylpropaanzuur",
            vraag: "Hoeveel van deze stoffen zijn isomeren van butaanzuur?",
            hash: "e5b748762ae27a3a4a7d1d87bd19a3439face4a3ef3d13f6ba59a52d53a8e0d8",
            hints: {
              "2": "Vergelijk de molecuulformules. Esters en carbonzuren kunnen isomeren van elkaar zijn.",
              "4": "Controleer het aantal O-atomen.",
              "5": "Controleer het aantal O-atomen."
            },
            hint: "Geef van butaanzuur en van elke stof de molecuulformule en vergelijk."
          },
          {
            tekst: "Bewijsstuk D — gevonden in de zak van de Boer (zonder H-atomen):",
            structuur: { atomen: ["C", "C", "C", "C", "C"], bindingen: [1, 2, 1, 1], takken: [{ bij: 2, n: 1, r: -1 }] },
            formule: "",
            vraag: "Geef de naam. Welk plaatsnummer heeft de dubbele binding?",
            hash: "478cb85108dc416e8b14e3966771329133ee3156d0683ec9f954a34f6530241a",
            hints: {
              "3": "Nummer vanaf de kant die het dichtst bij de dubbele binding zit.",
              "4": "Nummer vanaf de kant die het dichtst bij de dubbele binding zit."
            },
            hint: "De dubbele binding krijgt een zo laag mogelijk plaatsnummer — die gaat vóór de methylgroep."
          }
        ],
        geheim: {
          tekst: "De Koningin eist nog één laatste bewijs:",
          formule: "C₂H₄O₂ — carbonzuren en esters",
          vraag: "Hoeveel stoffen met deze formule zijn een carbonzuur of een ester?",
          hash: "669f5fd06a1589af20424c2bba7061b106e66f0c20c49a730589d3eb0e0cef83",
          hint: "Een carbonzuur met 2 C-atomen, en een ester waarvan zuur-deel + alkanol-deel samen 2 C-atomen hebben."
        }
      },
      na: {
        plaat: PLAAT(42),
        tekst: [
          "“Eerst de straf — dan pas het vonnis!” krijst de Koningin.",
          "“Onzin!” zegt Alice luid. Ze groeit, en groeit, tot ze hoger is dan de rechtersstoel. “Wie maalt er om jullie? Jullie zijn niets anders dan een pak kaarten!”",
          "En de hele stapel kaarten vliegt op en dwarrelt op haar neer…",
          "Alice opent haar ogen. Ze ligt aan de oever van de rivier, met haar hoofd in de schoot van haar zus, die zachtjes wat dode bladeren van haar gezicht veegt. “Wat een vreemde droom,” fluistert Alice.",
          "Maar toen ze naar huis liep, rook ze appeltaart. En ze wist precies welke ester dat was."
        ]
      }
    }
  ]
};

// Tekent een structuurformule zonder H-atomen als SVG.
// atomen: ["C","C",...] (hoofdketen), bindingen: [1|2|3,...] tussen opeenvolgende atomen,
// takken (optioneel): [{ bij: index, n: aantal atomen in de zijtak, r: -1 (omhoog) of 1 (omlaag), label: bv. "OH" of "O" voor het laatste atoom, orde: 2 voor een dubbele binding naar de zijtak }]
window.wlKetenSVG = function ({ atomen, bindingen, takken = [] }, kleur = "#3b2a17") {
  const dx = 96, dy = 74, gat = 20, x0 = 30, marge = 32;
  const boven = Math.max(0, ...takken.filter(t => t.r < 0).map(t => t.n));
  const onder = Math.max(0, ...takken.filter(t => t.r > 0).map(t => t.n));
  const y = marge + boven * dy;
  const h = y + onder * dy + marge;
  const breedte = x0 * 2 + dx * (atomen.length - 1);
  let lijnen = "", letters = "";
  bindingen.forEach((orde, i) => {
    const xa = x0 + dx * i + gat, xb = x0 + dx * (i + 1) - gat;
    const offs = orde === 1 ? [0] : orde === 2 ? [-4, 4] : [-6.5, 0, 6.5];
    offs.forEach(o => { lijnen += `<line x1="${xa}" y1="${y + o}" x2="${xb}" y2="${y + o}"/>`; });
  });
  atomen.forEach((a, i) => { letters += `<text x="${x0 + dx * i}" y="${y}">${a}</text>`; });
  takken.forEach((t, ti) => {
    const x = x0 + dx * t.bij;
    for (let k = 1; k <= t.n; k++) {
      const ya = y + t.r * (dy * (k - 1) + gat), yb = y + t.r * (dy * k - gat);
      const offs = (k === 1 && t.orde === 2) ? [-4, 4] : [0];
      offs.forEach(o => { lijnen += `<line class="tak-${ti}" x1="${x + o}" y1="${ya}" x2="${x + o}" y2="${yb}"/>`; });
      letters += `<text class="tak-${ti}" x="${x}" y="${y + t.r * dy * k}">${k === t.n && t.label ? t.label : "C"}</text>`;
    }
  });
  return `<svg class="structuur" viewBox="0 0 ${breedte} ${h}" width="${breedte}" height="${h}" role="img" aria-label="structuurformule">
    <g stroke="${kleur}" stroke-width="2.6" stroke-linecap="round">${lijnen}</g>
    <g fill="${kleur}" font-family="Arial, Helvetica, sans-serif" font-size="30" text-anchor="middle" dominant-baseline="central">${letters}</g>
  </svg>`;
};

// Hoekpuntnotatie (skeletformule) voor ringen: alleen lijnen, C-atomen op de hoekpunten.
// spec: { soort: "ring", n, dubbel: [randindex,...], cirkel: bool, takken: [{ bij, lengte, hoek (graden, optioneel) }] }
//    of { soort: "naftaleen" }
window.wlSkeletSVG = function (spec, kleur = "#3b2a17") {
  const R = 46, L = 46;
  let pts = [], bonds = [], centra = [], cirkels = [];
  const ring = (cx, cy, n) => Array.from({ length: n }, (_, i) => {
    const a = (-90 + i * 360 / n) * Math.PI / 180; return [cx + R * Math.cos(a), cy + R * Math.sin(a)];
  });
  if (spec.soort === "naftaleen") {
    const a = ring(0, 0, 6), dx = R * Math.sqrt(3), b = ring(dx, 0, 6);
    pts = [...a, b[0], b[1], b[2], b[3]]; // 0..5 ring 1; 6..9 = w0..w3
    centra = [[0, 0], [dx, 0]];
    bonds = [[0,1,1,0],[1,2,2,0],[2,3,1,0],[3,4,2,0],[4,5,1,0],[5,0,2,0],
             [1,6,1,1],[6,7,2,1],[7,8,1,1],[8,9,2,1],[9,2,1,1]];
  } else {
    const n = spec.n; pts = ring(0, 0, n); centra = [[0, 0]];
    for (let i = 0; i < n; i++) bonds.push([i, (i + 1) % n, (spec.dubbel || []).includes(i) ? 2 : 1, 0]);
    if (spec.cirkel) cirkels.push([0, 0, R * 0.58]);
    (spec.takken || []).forEach(t => {
      const [x, y] = pts[t.bij], len = Math.hypot(x, y), ux = x / len, uy = y / len;
      let vorige = t.bij, px = x, py = y;
      for (let k = 0; k < t.lengte; k++) {
        const extra = (t.hoek || 0) * Math.PI / 180;
        const hoek = extra + (k === 0 ? 0 : (k % 2 ? 1 : -1) * Math.PI / 3);
        const dxk = ux * Math.cos(hoek) - uy * Math.sin(hoek), dyk = ux * Math.sin(hoek) + uy * Math.cos(hoek);
        px += L * dxk; py += L * dyk; pts.push([px, py]);
        bonds.push([vorige, pts.length - 1, 1, -1]); vorige = pts.length - 1;
      }
    });
  }
  // Aantal H per hoekpunt (voor de animatie "de kat komt terug")
  const buren = pts.map(() => []), som = pts.map(() => 0);
  bonds.forEach(([i, j, orde]) => { buren[i].push(j); buren[j].push(i); som[i] += orde; som[j] += orde; });
  if (cirkels.length) for (let i = 0; i < spec.n; i++) som[i] += 1;
  let hlabels = "";
  pts.forEach(([x, y], i) => {
    const nH = 4 - som[i];
    if (nH <= 0) return;
    // plaats de H in de grootste open ruimte tussen de bindingen
    const hoeken = buren[i].map(j => Math.atan2(pts[j][1] - y, pts[j][0] - x)).sort((a, b) => a - b);
    // bij gelijke openingen: liever naar buiten (weg van het midden van de ring)
    const uit = Math.atan2(y, x);
    let beste = 0, score = -1e9;
    hoeken.forEach((a, k) => {
      const volgende = k === hoeken.length - 1 ? hoeken[0] + 2 * Math.PI : hoeken[k + 1];
      const gat = volgende - a, mid = a + gat / 2, sc = gat + 0.4 * Math.cos(mid - uit);
      if (sc > score) { score = sc; beste = mid; }
    });
    const afstand = buren[i].length === 1 ? 24 : 21;
    const hx = x + Math.cos(beste) * afstand, hy = y + Math.sin(beste) * afstand;
    hlabels += `<text class="hl" x="${hx}" y="${hy}">H${nH > 1 ? ["", "", "₂", "₃", "₄"][nH] : ""}</text>`;
  });
  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]), m = 30;
  const x0 = Math.min(...xs) - m, y0 = Math.min(...ys) - m;
  const w = Math.max(...xs) - x0 + m, h = Math.max(...ys) - y0 + m;
  let lijnen = "";
  bonds.forEach(([i, j, orde, c]) => {
    const [x1, y1] = pts[i], [x2, y2] = pts[j];
    lijnen += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
    if (orde === 2 && c >= 0) {
      const [cx, cy] = centra[c], mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      const d = Math.hypot(cx - mx, cy - my), ox = (cx - mx) / d * 7, oy = (cy - my) / d * 7, f = 0.17;
      const ax = x1 + (x2 - x1) * f + ox, ay = y1 + (y2 - y1) * f + oy, bx = x2 - (x2 - x1) * f + ox, by = y2 - (y2 - y1) * f + oy;
      lijnen += `<line x1="${ax}" y1="${ay}" x2="${bx}" y2="${by}"/>`;
    }
  });
  cirkels.forEach(([cx, cy, r]) => { lijnen += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none"/>`; });
  return `<svg class="structuur" viewBox="${x0} ${y0} ${w} ${h}" width="${w * 1.05}" height="${h * 1.05}" role="img" aria-label="structuurformule">
    <g stroke="${kleur}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${lijnen}</g>
    <g fill="#c8374f" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="700" text-anchor="middle" dominant-baseline="central">${hlabels}</g></svg>`;
};

// Volledige structuurformule (alle H getekend) van een onvertakt alkaan met n C-atomen.
// H-atomen hebben class "h-<i>-boven" / "h-<i>-onder" (en "h-eind-l"/"h-eind-r") voor animaties.
window.wlVolledigSVG = function (n, kleur = "#3b2a17") {
  const dx = 70, dy = 52, gat = 15, x0 = 70, y = 70;
  const breedte = x0 * 2 + dx * (n - 1), h = y * 2;
  let lijnen = "", letters = "";
  for (let i = 0; i < n; i++) {
    const x = x0 + dx * i;
    letters += `<text x="${x}" y="${y}">C</text>`;
    if (i < n - 1) lijnen += `<line x1="${x + gat}" y1="${y}" x2="${x + dx - gat}" y2="${y}"/>`;
    lijnen += `<line x1="${x}" y1="${y - gat}" x2="${x}" y2="${y - dy + gat}"/><line x1="${x}" y1="${y + gat}" x2="${x}" y2="${y + dy - gat}"/>`;
    letters += `<text class="h-${i}-boven" x="${x}" y="${y - dy}">H</text><text class="h-${i}-onder" x="${x}" y="${y + dy}">H</text>`;
  }
  const xe = x0 + dx * (n - 1);
  lijnen += `<line x1="${x0 - gat}" y1="${y}" x2="${x0 - dx + gat + 10}" y2="${y}"/><line x1="${xe + gat}" y1="${y}" x2="${xe + dx - gat - 10}" y2="${y}"/>`;
  letters += `<text class="h-eind-l" x="${x0 - dx + 10}" y="${y}">H</text><text class="h-eind-r" x="${xe + dx - 10}" y="${y}">H</text>`;
  return `<svg class="structuur" viewBox="0 0 ${breedte} ${h}" width="${breedte}" height="${h}" role="img" aria-label="structuurformule">
    <g stroke="${kleur}" stroke-width="2.2" stroke-linecap="round">${lijnen}</g>
    <g fill="${kleur}" font-family="Arial, Helvetica, sans-serif" font-size="24" text-anchor="middle" dominant-baseline="central">${letters}</g>
  </svg>`;
};

// Hash-helper (gedeeld)
window.wlHash = async function (les, idx, waarde) {
  const data = new TextEncoder().encode(`wl|${les}|${idx}|${waarde}`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
};

// ─────────────────────────────────────────────────────────────
//  Opslaglaag: Firebase (echt) of demo-modus (?demo, via localStorage
//  tussen tabbladen op één computer — handig om thuis te testen).
// ─────────────────────────────────────────────────────────────
window.WL_FIREBASE = {
  apiKey: "AIzaSyCmCeuVZr888XzPkfX5MrQ8xxZ96ttaIsQ",
  authDomain: "brain-chemistry.firebaseapp.com",
  databaseURL: "https://brain-chemistry-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "brain-chemistry",
  storageBucket: "brain-chemistry.firebasestorage.app",
  messagingSenderId: "359983668951",
  appId: "1:359983668951:web:8c3504c9d5734219a31a92"
};
window.WL_DOCENT_EMAIL = "docent@brainchemistry.local";
window.WL_DEMO = new URLSearchParams(location.search).has("demo");

window.wlStore = async function (rol) {
  if (WL_DEMO) {
    // Eenvoudige nep-database in localStorage
    const KEY = "wl-demo-db";
    const lees = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
    const schrijf = d => { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} };
    const pad = (obj, p) => p.split("/").filter(Boolean).reduce((o, k) => (o == null ? undefined : o[k]), obj);
    const zet = (obj, p, v) => {
      const ks = p.split("/").filter(Boolean); let o = obj;
      ks.slice(0, -1).forEach(k => { if (typeof o[k] !== "object" || o[k] === null) o[k] = {}; o = o[k]; });
      if (v === null) delete o[ks[ks.length - 1]]; else o[ks[ks.length - 1]] = v;
    };
    const luisteraars = [];
    const meld = () => { const d = lees(); luisteraars.forEach(([p, f]) => f(pad(d, p) ?? null)); };
    addEventListener("storage", e => { if (e.key === KEY) meld(); });
    let uid = sessionStorage.getItem("wl-demo-uid");
    if (!uid) { uid = "demo" + Math.random().toString(36).slice(2, 8); sessionStorage.setItem("wl-demo-uid", uid); }
    return {
      uid, demo: true,
      async login() { return true; },
      luister(p, f) { luisteraars.push([p, f]); f(pad(lees(), p) ?? null); },
      async lees(p) { return pad(lees(), p) ?? null; },
      async zet(p, v) { const d = lees(); zet(d, p, v); schrijf(d); meld(); },
      async werkBij(p, obj) { const d = lees(); Object.entries(obj).forEach(([k, v]) => zet(d, p + "/" + k, v)); schrijf(d); meld(); },
      async plusEen(p) { const d = lees(); zet(d, p, (pad(d, p) || 0) + 1); schrijf(d); meld(); }
    };
  }

  const V = "12.15.0";
  const { initializeApp } = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`);
  const { getDatabase, ref, onValue, get, set, update, runTransaction } =
    await import(`https://www.gstatic.com/firebasejs/${V}/firebase-database.js`);
  const authMod = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-auth.js`);
  const app = initializeApp(WL_FIREBASE, "wonderland");
  const db = getDatabase(app);
  const auth = authMod.getAuth(app);
  const basis = p => ref(db, "wonderland/" + p);

  const store = {
    uid: null, demo: false,
    async login(wachtwoord) {
      if (rol === "docent") {
        await authMod.signInWithEmailAndPassword(auth, WL_DOCENT_EMAIL, wachtwoord);
      } else {
        await authMod.setPersistence(auth, authMod.browserSessionPersistence);
        await authMod.signInAnonymously(auth);
      }
      store.uid = auth.currentUser.uid;
      return true;
    },
    wachtOpDocent(cb) {
      authMod.onAuthStateChanged(auth, u => {
        if (u && u.email === WL_DOCENT_EMAIL) { store.uid = u.uid; cb(true); } else cb(false);
      });
    },
    luister(p, f) { onValue(basis(p), s => f(s.exists() ? s.val() : null)); },
    async lees(p) { const s = await get(basis(p)); return s.exists() ? s.val() : null; },
    async zet(p, v) { await set(basis(p), v); },
    async werkBij(p, obj) { await update(basis(p), obj); },
    async plusEen(p) { await runTransaction(basis(p), v => (v || 0) + 1); }
  };
  return store;
};

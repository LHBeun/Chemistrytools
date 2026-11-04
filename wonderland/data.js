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
    { nr: 5, plek: "De tuinmannen van de Koningin", leerdoel: "Halogeensubstituenten, hydroxylgroep, ethers", plaat: PLAAT(28) },
    { nr: 6, plek: "Het theekransje", leerdoel: "Aldehyde en keton", plaat: PLAAT(25) },
    { nr: 7, plek: "De keuken van de Hertogin", leerdoel: "Carbonzuur en amine", plaat: PLAAT(21) },
    { nr: 8, plek: "De taartjes van de Koningin", leerdoel: "Esters", plaat: PLAAT(1) },
    { nr: 9, plek: "De rechtszaak", leerdoel: "Alles samen", plaat: PLAAT(38) }
  ]
};

// Tekent een structuurformule zonder H-atomen als SVG.
// atomen: ["C","C",...] (hoofdketen), bindingen: [1|2|3,...] tussen opeenvolgende atomen,
// takken (optioneel): [{ bij: index, n: aantal C in de zijtak, r: -1 (omhoog) of 1 (omlaag) }]
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
  takken.forEach(t => {
    const x = x0 + dx * t.bij;
    for (let k = 1; k <= t.n; k++) {
      const ya = y + t.r * (dy * (k - 1) + gat), yb = y + t.r * (dy * k - gat);
      lijnen += `<line x1="${x}" y1="${ya}" x2="${x}" y2="${yb}"/>`;
      letters += `<text x="${x}" y="${y + t.r * dy * k}">C</text>`;
    }
  });
  return `<svg class="structuur" viewBox="0 0 ${breedte} ${h}" width="${breedte}" height="${h}" role="img" aria-label="structuurformule">
    <g stroke="${kleur}" stroke-width="2.6" stroke-linecap="round">${lijnen}</g>
    <g fill="${kleur}" font-family="Arial, Helvetica, sans-serif" font-size="30" text-anchor="middle" dominant-baseline="central">${letters}</g>
  </svg>`;
};

// Hoekpuntnotatie (skeletformule) voor ringen: alleen lijnen, C-atomen op de hoekpunten.
// spec: { soort: "ring", n, dubbel: [randindex,...], cirkel: bool, takken: [{ bij, lengte }] }
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
        const hoek = k === 0 ? 0 : (k % 2 ? 1 : -1) * Math.PI / 3;
        const dxk = ux * Math.cos(hoek) - uy * Math.sin(hoek), dyk = ux * Math.sin(hoek) + uy * Math.cos(hoek);
        px += L * dxk; py += L * dyk; pts.push([px, py]);
        bonds.push([vorige, pts.length - 1, 1, -1]); vorige = pts.length - 1;
      }
    });
  }
  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]), m = 14;
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
    <g stroke="${kleur}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${lijnen}</g></svg>`;
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

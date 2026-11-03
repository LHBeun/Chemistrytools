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
    { nr: 3, plek: "De Rups", leerdoel: "Isomerie", plaat: PLAAT(15) },
    { nr: 4, plek: "De Cheshire Kat", leerdoel: "Ringen en benzeen; C-atomen op de hoekpunten", plaat: PLAAT(24) },
    { nr: 5, plek: "De tuinmannen van de Koningin", leerdoel: "Halogeensubstituenten, hydroxylgroep, ethers", plaat: PLAAT(28) },
    { nr: 6, plek: "Het theekransje", leerdoel: "Aldehyde en keton", plaat: PLAAT(25) },
    { nr: 7, plek: "De keuken van de Hertogin", leerdoel: "Carbonzuur en amine", plaat: PLAAT(21) },
    { nr: 8, plek: "De taartjes van de Koningin", leerdoel: "Esters", plaat: PLAAT(1) },
    { nr: 9, plek: "De rechtszaak", leerdoel: "Alles samen", plaat: PLAAT(38) }
  ]
};

// Tekent een rechte keten als nette structuurformule (SVG).
// atomen: ["C","C",...], bindingen: [1|2|3, ...] tussen opeenvolgende atomen.
window.wlKetenSVG = function ({ atomen, bindingen }, kleur = "#3b2a17") {
  const dx = 96, gat = 20, h = 64, y = h / 2, x0 = 30;
  const breedte = x0 * 2 + dx * (atomen.length - 1);
  let lijnen = "";
  bindingen.forEach((orde, i) => {
    const xa = x0 + dx * i + gat, xb = x0 + dx * (i + 1) - gat;
    const offs = orde === 1 ? [0] : orde === 2 ? [-4, 4] : [-6.5, 0, 6.5];
    offs.forEach(o => { lijnen += `<line x1="${xa}" y1="${y + o}" x2="${xb}" y2="${y + o}"/>`; });
  });
  const letters = atomen.map((a, i) => `<text x="${x0 + dx * i}" y="${y}">${a}</text>`).join("");
  return `<svg class="structuur" viewBox="0 0 ${breedte} ${h}" width="${breedte}" height="${h}" role="img" aria-label="${atomen.join("")}">
    <g stroke="${kleur}" stroke-width="2.6" stroke-linecap="round">${lijnen}</g>
    <g fill="${kleur}" font-family="Arial, Helvetica, sans-serif" font-size="30" text-anchor="middle" dominant-baseline="central">${letters}</g>
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

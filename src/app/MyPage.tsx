"use client";
/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";

const categories1 = [
  {
    name: "Documente, Istoric, Proprietari, Întreținere, Accidente & Garanții",
    items: [
      {
        aspect: "Istoric de service complet",
        details:
          "Solicitați facturi, înregistrări, carnet de service cu toate reviziile efectuate, de preferat la service-uri autorizate.",
      },
      {
        aspect: "Conformitate VIN",
        details:
          "Verificați că VIN-ul din documente corespunde cu cel de pe caroserie (bord, stâlp ușă, compartiment motor).",
      },
      {
        aspect: "Situație juridică & financiară",
        details:
          "Confirmați că mașina nu este sub leasing, gaj sau datorii și documentele de proprietate sunt în regulă.",
      },
      {
        aspect: "Istoric accidente & daune",
        details:
          "Consultați rapoarte (ex: Carfax) pentru daune majore, reparații notabile sau daune totale anterioare.",
      },
      {
        aspect: "Garanții & asigurări",
        details:
          "Există garanție de fabrică rămasă, garanție extinsă sau asigurări CASCO transferabile?",
      },
      {
        aspect: "Intervale de întreținere",
        details:
          "Au fost respectate intervalele la schimb ulei, filtre, lichid de frână și alte consumabile?",
      },
      {
        aspect: "Kilometraj & Parcurs",
        details:
          "Kilometrajul este real și confirmat? Mașina a fost condusă preponderent urban, extraurban sau pe autostradă?",
      },
      {
        aspect: "Număr de proprietari",
        details: "Câți proprietari a avut mașina și pentru cât timp fiecare?",
      },
      {
        aspect: "Tip de utilizare",
        details:
          "A fost folosită personal, în flotă, taxi, ride-sharing sau alt regim intens?",
      },
      {
        aspect: "Accidente anterioare detaliate",
        details:
          "A suferit accidente? Ce tip de daune și cum au fost reparate? Există poze sau rapoarte?",
      },
      {
        aspect: "Documentație reparații",
        details:
          "Există facturi, rapoarte foto sau documente oficiale ale reparațiilor efectuate?",
      },
      {
        aspect: "Plan de service",
        details:
          "Există pachete de service preplătite sau întreținere programată care pot fi transferate?",
      },
    ],
  },
  {
    name: "Exterior & Elemente Aerodinamice",
    items: [
      {
        aspect: "Caroserie & vopsea",
        details:
          "Verificați alinierea panourilor, absența reparațiilor neprofesioniste sau diferențelor de culoare.",
      },
      {
        aspect: "Rugină & coroziune",
        details:
          "Inspectați pragurile, pasajele roților, șasiul pentru urme de rugină sau coroziune.",
      },
      {
        aspect: "Geamuri, parbriz, oglinzi",
        details:
          "Fără crăpături, ciobituri; oglinzi și dezaburire funcționale.",
      },
      {
        aspect: "Luminile exterioare",
        details:
          "Faruri, stopuri, semnalizări, lumini de ceață/adaptive să funcționeze corect, fără pâlpâiri.",
      },
      {
        aspect: "Elemente aerodinamice & protecții",
        details:
          "Panouri inferioare, spoilere, apărători intacte, fără piese lipsă.",
      },
    ],
  },
  {
    name: "Anvelope & Jante",
    items: [
      {
        aspect: "Stare anvelope",
        details:
          "Profil uniform, aceeași marcă/model, fără crăpături, data de fabricație rezonabilă.",
      },
      {
        aspect: "Seturi suplimentare",
        details:
          "Există anvelope de iarnă/vară suplimentare, jante de rezervă?",
      },
      {
        aspect: "Jante",
        details:
          "Fără lovituri, fisuri, zgârieturi adânci sau deformări; dacă au fost reparate, cum?",
      },
    ],
  },
  {
    name: "Interior",
    items: [
      {
        aspect: "Tapițerie & materiale",
        details:
          "Fără rupturi, pete excesive, uzură nejustificată la scaune, bord, uși.",
      },
      {
        aspect: "Scaune & reglaje",
        details:
          "Funcții electrice, memorii, suport lombar, încălzire/răcire, toate operaționale.",
      },
      {
        aspect: "Volan, schimbător, pedale",
        details:
          "Volan fără uzură excesivă, schimbător precis, pedale fără uzură anormală.",
      },
      {
        aspect: "Climă & încălzire",
        details:
          "AC funcțional, zone climatice multiple, încălzire scaune/volan dacă există.",
      },
      {
        aspect: "Infotainment & audio",
        details:
          "Sistem rapid, navigație actuală, Bluetooth, CarPlay/Android Auto, sistem audio clar.",
      },
      {
        aspect: "Funcții speciale interioare",
        details:
          "Trapă panoramică, iluminare ambientală, Head-Up Display, masaj scaune – testate și funcționale.",
      },
    ],
  },
  {
    name: "Motor & Componente Mecanice (incl. DPF, AdBlue, EGR)",
    items: [
      {
        aspect: "Compartiment motor",
        details:
          "Fără scurgeri de ulei, lichid răcire, combustibil; furtunuri/curele în stare bună.",
      },
      {
        aspect: "Ulei & lichide",
        details:
          "Ulei motor la nivel corect, lichid de răcire, frână, servodirecție în parametri normali.",
      },
      {
        aspect: "Sistem diesel (DPF, AdBlue, EGR)",
        details:
          "Fără avertizări DPF, regenerări forțate? Completări AdBlue regulate? EGR curățat?",
      },
      {
        aspect: "Baterie & electric",
        details:
          "Pornire ușoară, baterie sub ~5 ani, fără martori de eroare electrice.",
      },
      {
        aspect: "Răcire & intercooler",
        details:
          "Radiator, intercooler, furtunuri fără scurgeri fine, fisuri sau urme de deteriorare.",
      },
    ],
  },
  {
    name: "Transmisie & Tracțiune",
    items: [
      {
        aspect: "Cutie de viteze",
        details:
          "Schimbări line, fără smucituri. La automată (ZF 8HP), posibil schimb ulei la 80-100k km.",
      },
      {
        aspect: "xDrive/4x4",
        details:
          "Fără zgomote suspecte în viraje strânse, anvelope uzate uniform.",
      },
      {
        aspect: "Ambreiaj (manual)",
        details:
          "Fără patinare, punct de cuplare corect, trepte schimbate ușor.",
      },
    ],
  },
  {
    name: "Frâne & Suspensie",
    items: [
      {
        aspect: "Plăcuțe, discuri, etriere",
        details:
          "Fără uzură excesivă, vibrații la frânare sau discuri deformate.",
      },
      {
        aspect: "Suspensie & direcție",
        details: "Fără scârțâituri, bătăi la denivelări, mașina merge drept.",
      },
      {
        aspect: "Suspensie adaptivă",
        details:
          "Modurile Sport/Comfort schimbă clar rigiditatea și comportamentul.",
      },
      {
        aspect: "Bucșe, bielete, brațe",
        details:
          "Fără jocuri mari, uzură excesivă sau zgomote metalice la suspensie.",
      },
    ],
  },
  {
    name: "Sisteme de Siguranță & Asistență la Conducere",
    items: [
      {
        aspect: "Airbaguri & centuri",
        details:
          "Fără martori aprinși, centuri funcționale, fără semne de declanșare anterioară.",
      },
      {
        aspect: "Asistență la condus",
        details:
          "ABS, ESP, Lane Assist, Blind Spot, Pilot adaptiv – testați funcționalitatea.",
      },
      {
        aspect: "Camere & senzori parcare",
        details:
          "Imagine clară, senzori fără erori, 360° funcțional dacă există.",
      },
      {
        aspect: "Afișaj head-up",
        details:
          "Vizibilitate bună, afișare corectă a vitezei, navigație, avertismente.",
      },
    ],
  },
  {
    name: "Software, Recall-uri & Electronică",
    items: [
      {
        aspect: "Actualizări software",
        details:
          "Infotainment, hărți, ECU/TCU la zi, fără probleme de firmware.",
      },
      {
        aspect: "Recall-uri nerezolvate",
        details:
          "Verificați dacă există campanii de rechemare neefectuate și rezolvați-le.",
      },
      {
        aspect: "Servicii Connected",
        details:
          "BMW ConnectedDrive, Remote Start, Parking Assistant – disponibile sau reînnoibile?",
      },
    ],
  },
  {
    name: "Test de Drum",
    items: [
      {
        aspect: "Pornire la rece",
        details:
          "Motorul pornește prompt, fără fum excesiv, zgomote ciudate sau ezitări.",
      },
      {
        aspect: "Accelerare & putere",
        details:
          "Răspuns bun, cuplu adecvat, fără întreruperi sau goluri de putere.",
      },
      {
        aspect: "Zgomot & vibrații",
        details:
          "Fără zgomote aerodinamice excesive, vibrații în volan la viteze mari.",
      },
      {
        aspect: "Consum combustibil",
        details:
          "Verificați consumul, să fie în parametri normali pentru modelul respectiv.",
      },
    ],
  },
  {
    name: "Verificarea Pachetului Full Option",
    items: [
      {
        aspect: "Decodor VIN (opțiuni)",
        details:
          "Comparați opțiunile din fabrică cu echiparea actuală a mașinii.",
      },
      {
        aspect: "Dotări suplimentare",
        details:
          "HUD, audio premium, iluminare ambientală, scaune ventilate – verificați funcționalitatea.",
      },
      {
        aspect: "Echipări interioare & exterioare top",
        details:
          "Calitatea finisajelor, ornamente, electronice, tehnologii prezente conform descrierii.",
      },
    ],
  },
  {
    name: "Preț & Motivul Vânzării",
    items: [
      {
        aspect: "Preț comparativ",
        details:
          "Analizați ofertele similare (an, km, opțiuni) pentru evaluare corectă.",
      },
      {
        aspect: "Costuri imediate",
        details:
          "Luați în calcul reparații/întreținere apropiate (ulei, filtre, plăcuțe frână, anvelope).",
      },
      {
        aspect: "Motivul vânzării",
        details: "Care este motivul real al vânzării mașinii?",
      },
      {
        aspect: "Preț negociabil",
        details:
          "Există loc de negociere după o eventuală inspecție la service?",
      },
    ],
  },
  {
    name: "Considerații după Cumpărare",
    items: [
      {
        aspect: "Transfer planuri de întreținere",
        details:
          "Garanții extinse, pachete service preplătite pot fi transferate noului proprietar?",
      },
      {
        aspect: "Proxime revizii",
        details:
          "Ce revizii urmează la 80.000-100.000 km? (schimb ulei transmisie, lichid frână, filtre)",
      },
      {
        aspect: "Accesorii suplimentare",
        details:
          "Sunt incluse covorașe, kit scule, roată de rezervă, plase portbagaj etc.?",
      },
    ],
  },
  {
    name: "Verificări Suplimentare (~60.000 - 100.000 km)",
    items: [
      {
        aspect: "Transmisie & diferențiale",
        details:
          "Planificați schimbul uleiului în cutia de viteze și diferențiale conform recomandărilor.",
      },
      {
        aspect: "EGR, DPF, intercooler",
        details:
          "Verificați starea EGR, DPF și intercooler, eventuale recall-uri sau curățări necesare.",
      },
      {
        aspect: "Suspensii & bucșe",
        details:
          "Uzuri normale la acest rulaj, verificați eventuale zgomote subtile sau jocuri mici.",
      },
      {
        aspect: "Test la service specializat (PPI)",
        details:
          "Un Pre-Purchase Inspection la un service autorizat BMW pentru siguranță maximă.",
      },
    ],
  },
  {
    name: "Chei & Accesorii",
    items: [
      {
        aspect: "Chei & dubluri",
        details:
          "Există toate cheile originale (cheie principală, secundară, digital key) funcționale?",
      },
      {
        aspect: "Accesorii incluse",
        details:
          "Covorașe originale, kit pană, cric, trusă prim-ajutor, triunghi reflectorizant, manuale, hărți – toate prezente?",
      },
    ],
  },
];

const MyPage = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [openCategories, setOpenCategories] = useState({});

  useEffect(() => {
    // Load checked state from localStorage
    const saved = localStorage.getItem("checkedItems");
    const savedOpen = localStorage.getItem("openCategories");
    if (saved) setCheckedItems(JSON.parse(saved));
    if (savedOpen) setOpenCategories(JSON.parse(savedOpen));
  }, []);

  useEffect(() => {
    // Save checked state to localStorage
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
    localStorage.setItem("openCategories", JSON.stringify(openCategories));
  }, [checkedItems, openCategories]);

  const toggleCheck = (categoryName: string, index: number) => {
    const key = `${categoryName}-${index}`;
    setCheckedItems((prev: any) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCategory = (categoryName: string) => {
    setOpenCategories((prev: any) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Checklist BMW G20 320d xDrive</h1>
      {categories1.map((cat, catIndex) => {
        const isOpen =
          openCategories[cat.name as keyof typeof openCategories] || false;
        return (
          <div key={catIndex} className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleCategory(cat.name)}
              className="w-full text-left px-4 py-2 bg-gray-200 text-black font-semibold flex justify-between items-center"
            >
              <span>{cat.name}</span>
              <span>{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && (
              <div className="p-4 space-y-4 bg-white">
                {cat.items.map((item, index) => {
                  const key = `${cat.name}-${index}`;
                  return (
                    <div key={index} className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        checked={
                          !!checkedItems[key as keyof typeof checkedItems]
                        }
                        onChange={() => toggleCheck(cat.name, index)}
                        className="mt-1"
                      />
                      <div>
                        <div className="font-medium text-black">
                          {item.aspect}
                        </div>
                        <div className="text-gray-700">{item.details}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default MyPage;

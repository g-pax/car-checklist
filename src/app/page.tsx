"use client";
/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";

// const categories = [
//   {
//     name: "Documente & Istoric Vehicul",
//     items: [
//       {
//         aspect: "Istoric de service complet",
//         details:
//           "Verificați existența unui istoric de service complet, cu revizii regulate efectuate, ideal la service-uri autorizate BMW.",
//       },
//       {
//         aspect: "Întreținere la intervale corecte",
//         details:
//           "Asigurați-vă că s-au respectat intervalele de schimbare ulei, filtre, lichid de frână și alte consumabile.",
//       },
//       {
//         aspect: "Conformitate VIN",
//         details:
//           "Verificați că VIN-ul de pe documente corespunde cu cel de pe bord, stâlpul ușii și din compartimentul motor.",
//       },
//       {
//         aspect: "Lipsa datorii/garanții",
//         details:
//           "Confirmați că mașina nu este sub gaj sau leasing, și că documentele de proprietate sunt clare.",
//       },
//       {
//         aspect: "Istoric accidente/asigurări",
//         details:
//           "Consultați rapoarte tip Carfax sau echivalent (verificați daune majore, reparații notabile).",
//       },
//       {
//         aspect: "Garanție existentă sau extinsă",
//         details:
//           "Verificați dacă mai există garanție de fabrică sau un plan de garanție extins transferabil.",
//       },
//     ],
//   },
//   {
//     name: "Exterior",
//     items: [
//       {
//         aspect: "Alinierea panourilor caroseriei",
//         details:
//           "Asigurați-vă că există spații egale între panouri, fără semne de reparații defectuoase sau accidente anterioare.",
//       },
//       {
//         aspect: "Calitatea și uniformitatea vopselei",
//         details:
//           "Căutați diferențe de culoare, supra-vopsiri, urme de lac în exces sau semne de reparații neprofesioniste.",
//       },
//       {
//         aspect: "Urme de rugină și coroziune",
//         details:
//           "Inspectați pasajele roților, pragurile, șasiul și zonele ascunse pentru urme de rugină sau coroziune.",
//       },
//       {
//         aspect: "Starea geamurilor și oglinzilor",
//         details:
//           "Verificați crăpături, ciobituri, zgârieturi; asigurați-vă că oglinzile, sistemul de rabatare și dezaburire funcționează.",
//       },
//       {
//         aspect: "Funcționalitatea luminilor (LED)",
//         details:
//           "Faruri, stopuri, semnalizări, lumini de ceață, lumini adaptive – toate trebuie să funcționeze corect, fără pâlpâiri.",
//       },
//     ],
//   },
//   {
//     name: "Roți & Anvelope",
//     items: [
//       {
//         aspect: "Starea jantelor",
//         details:
//           "Verificați dacă există lovituri, zgârieturi, deformări sau fisuri.",
//       },
//       {
//         aspect: "Anvelope de marcă și uzură uniformă",
//         details:
//           "Profil uniform, același brand/model pe toate roțile (important pentru xDrive).",
//       },
//       {
//         aspect: "Data fabricării anvelopelor",
//         details:
//           "Verificați data producției și starea generală (fără crăpături).",
//       },
//     ],
//   },
//   {
//     name: "Interior",
//     items: [
//       {
//         aspect: "Tapițerie și materiale",
//         details:
//           "Examinați uzura scaunelor, volanului, schimbătorului, bordului și fețelor de uși.",
//       },
//       {
//         aspect: "Funcțiile scaunelor și memorii",
//         details:
//           "Testați reglajele electrice, suportul lombar, încălzire/răcire scaune, memorii poziție.",
//       },
//       {
//         aspect: "Sistem infotainment (iDrive)",
//         details:
//           "Testați Bluetooth, CarPlay/Android Auto, hărți GPS, control gesturi.",
//       },
//       {
//         aspect: "Sistem audio (Harman/Kardon)",
//         details:
//           "Verificați boxele, subwoofer, calitatea sunetului, comenzile audio.",
//       },
//       {
//         aspect: "Climă și încălzire",
//         details:
//           "Testați AC, încălzire, ventilație scaune, încălzire volan, zone climatice multiple.",
//       },
//       {
//         aspect: "Trapă/Panoramic",
//         details:
//           "Deschideți/închideți, verificați etanșeitatea și funcționarea perdelei.",
//       },
//     ],
//   },
//   {
//     name: "Motor & Componente Mecanice",
//     items: [
//       {
//         aspect: "Verificarea compartimentului motor",
//         details:
//           "Căutați scurgeri de ulei, lichid răcire, combustibil. Inspectați furtunuri/garnituri.",
//       },
//       {
//         aspect: "Ulei și lichide",
//         details: "Nivel corect, fără impurități metalice.",
//       },
//       {
//         aspect: "DPF și AdBlue (diesel)",
//         details:
//           "Întrebați despre regenerare DPF, completări AdBlue, absența fumului excesiv.",
//       },
//       {
//         aspect: "Curele și furtunuri",
//         details: "Curele fără crăpături, furtunuri flexibile.",
//       },
//       {
//         aspect: "Baterie și sistem electric",
//         details: "Pornire ușoară, fără martori, verificați starea bateriei.",
//       },
//     ],
//   },
//   {
//     name: "Transmisie & xDrive",
//     items: [
//       {
//         aspect: "Schimbările de viteză line și rapide",
//         details: "Fără smucituri sau întârzieri la test drive.",
//       },
//       {
//         aspect: "Sunete anormale la xDrive",
//         details: "Fără clicuri/pocnituri în viraje strânse.",
//       },
//       {
//         aspect: "Modurile de condus (Sport/Comfort/Eco)",
//         details:
//           "Modificările trebuie să schimbe clar caracteristicile de condus.",
//       },
//     ],
//   },
//   {
//     name: "Frâne & Suspensie",
//     items: [
//       {
//         aspect: "Starea plăcuțelor și discurilor de frână",
//         details: "Fără uzură excesivă, deformări sau rugină.",
//       },
//       {
//         aspect: "Test de frânare",
//         details: "Fără vibrații, zgomote, tragere într-o parte.",
//       },
//       {
//         aspect: "Suspensie și direcție",
//         details: "Fără zgomote la denivelări, mașina merge drept.",
//       },
//       {
//         aspect: "Suspensie adaptivă (dacă există)",
//         details: "Modurile schimbă clar rigiditatea suspensiei.",
//       },
//     ],
//   },
//   {
//     name: "Sisteme de Siguranță & Asistență",
//     items: [
//       {
//         aspect: "Cameră marșarier și 360°",
//         details: "Imagine clară, senzori funcționali.",
//       },
//       {
//         aspect: "Pilot automat adaptiv, păstrarea benzii etc.",
//         details: "Testați funcțiile asistenței la condus.",
//       },
//       {
//         aspect: "Afișaj head-up (HUD)",
//         details: "Vizibil, afișează viteza, navigație, alerte.",
//       },
//       {
//         aspect: "Airbaguri și centuri",
//         details: "Fără martori aprinși, centuri în stare bună.",
//       },
//     ],
//   },
//   {
//     name: "Software & Electronică",
//     items: [
//       {
//         aspect: "Servicii BMW ConnectedDrive",
//         details: "Verificați dacă sunt active sau reînnoibile.",
//       },
//       { aspect: "Actualizări software", details: "Hărți, infotainment la zi." },
//       {
//         aspect: "Chei și acces confort",
//         details:
//           "Testați toate cheile, acces fără cheie, integrarea smartphone.",
//       },
//     ],
//   },
//   {
//     name: "Test de Drum",
//     items: [
//       {
//         aspect: "Pornire la rece",
//         details: "Motorul pornește ușor, fără erori.",
//       },
//       {
//         aspect: "Accelerare și livrare de putere",
//         details: "Cuplu bun, fără ezitări.",
//       },
//       {
//         aspect: "Zgomot și vibrații",
//         details: "Fără zgomote anormale, vibrații excesive.",
//       },
//       {
//         aspect: "Consum de combustibil",
//         details:
//           "Consumul în parametri normali pentru 320d xDrive, Start-Stop lin.",
//       },
//     ],
//   },
//   {
//     name: "Verificarea Pachetului Full Option",
//     items: [
//       {
//         aspect: "Codurile opțiunilor din fabrică",
//         details: "Folositi decodor VIN pentru confirmarea opțiunilor.",
//       },
//       {
//         aspect: "Dotări suplimentare (HUD, audio premium etc.)",
//         details: "Asigurați-vă că toate funcționează conform descrierii.",
//       },
//       {
//         aspect: "Echipări interioare și exterioare top",
//         details: "Calitatea finisajelor, ornamente, electronice, tehnologii.",
//       },
//     ],
//   },
//   {
//     name: "Stabilirea Prețului & Comparare",
//     items: [
//       {
//         aspect: "Preț comparat cu modele similare",
//         details: "Evaluare corectă față de piață.",
//       },
//       {
//         aspect: "Costuri de reparații imediate",
//         details: "Luați în considerare eventualele cheltuieli.",
//       },
//     ],
//   },
//   {
//     name: "Considerații după Cumpărare",
//     items: [
//       {
//         aspect: "Transferul planurilor de întreținere",
//         details:
//           "Există planuri de întreținere sau garanții extinse transferabile?",
//       },
//       {
//         aspect: "Programul următor de întreținere",
//         details: "Ce revizii urmează la 80.000-100.000 km?",
//       },
//       {
//         aspect: "Accesorii suplimentare",
//         details: "Anvelope iarnă, covorașe, kit de scule?",
//       },
//     ],
//   },

//   // Additional checks for ~70,000 km
//   {
//     name: "Verificări Suplimentare (aprox. 70.000 km)",
//     items: [
//       {
//         aspect: "Starea supapei EGR și răcitor EGR",
//         details: "Verificați depuneri de carbon, eventuale recall-uri.",
//       },
//       {
//         aspect: "Depuneri carbon pe admisie",
//         details: "Inspectați galeria de admisie.",
//       },
//       {
//         aspect: "Regenerări DPF corespunzătoare",
//         details: "Tip de parcurs, fără avertizări DPF.",
//       },
//       {
//         aspect: "Istoric avertizări DPF",
//         details: "Fără probleme nerezolvate DPF.",
//       },
//       {
//         aspect: "Schimb ulei cutie viteze (ZF 8HP)",
//         details: "Planificați schimbul ~80.000-100.000 km.",
//       },
//       {
//         aspect: "Ulei în diferențiale / cutia transfer xDrive",
//         details: "Asigurați-vă că lichidele au fost sau vor fi schimbate.",
//       },
//       {
//         aspect: "Panouri inferioare, elemente aerodinamice",
//         details: "Fără piese lipsă sau slăbite sub mașină.",
//       },
//       {
//         aspect: "Bucșe, bielete, brațe suspensie",
//         details: "Semne de uzură: scârțâituri, uzură inegală anvelope.",
//       },
//       {
//         aspect: "Răspuns direcție (EPS)",
//         details: "Fără “loc mort” sau mișcări sacadate.",
//       },
//       {
//         aspect: "Actualizări iDrive, hărți, ECU, recall-uri",
//         details: "Software la zi, fără recall-uri nerezolvate.",
//       },
//       {
//         aspect: "Starea bateriei",
//         details: "Test la ~4-5 ani, posibilă înlocuire.",
//       },
//       {
//         aspect: "Senzori, conexiuni electrice",
//         details: "ABS, TPS, camere, senzori parcare funcționali.",
//       },
//       {
//         aspect: "Radiatoare, intercooler, furtunuri admisie",
//         details: "Fără scurgeri fine sau fisuri.",
//       },
//       {
//         aspect: "Butoane și funcții rare",
//         details: "Testați toate funcțiile rare, iluminarea ambientală.",
//       },
//       {
//         aspect: "Zgomote minore, vibrații subtile (NVH)",
//         details: "Identificați scârțâituri interioare, vibrații ușoare.",
//       },
//       {
//         aspect: "Plan viitoare revizii (80.000-100.000 km)",
//         details: "Schimb lichid transmisie, lichid frână, filtre.",
//       },
//       {
//         aspect: "Opțiuni ConnectedDrive & abonamente",
//         details: "Discutați costuri, upgradări (ex: Remote Start).",
//       },
//       {
//         aspect: "Condiții garanție extinsă",
//         details: "Verificați ce acoperă.",
//       },
//       {
//         aspect: "Test la service specializat BMW",
//         details: "Un control amănunțit pentru siguranță.",
//       },
//     ],
//   },
// ];

const categories1 = [
  {
    name: "Documente & Istoric Vehicul",
    items: [
      {
        aspect: "Istoric de service complet",
        details:
          "Verificați existența unui istoric de service complet, cu revizii regulate (ideal la service autorizat).",
      },
      {
        aspect: "Conformitate VIN",
        details:
          "Asigurați-vă că VIN-ul din documente corespunde cu cel de pe mașină (bord, stâlp ușă, compartiment motor).",
      },
      {
        aspect: "Situație juridică & financiară",
        details:
          "Confirmați că mașina nu este sub leasing, gaj sau datorii și că documentele sunt clare.",
      },
      {
        aspect: "Istoric accidente & daune",
        details:
          "Verificați rapoarte tip Carfax pentru daune majore, reparații notabile sau daună totală.",
      },
      {
        aspect: "Garanții & asigurări",
        details:
          "Verificați dacă există garanție de fabrică rămasă, garanție extinsă sau asigurări relevante.",
      },
    ],
  },
  {
    name: "Exterior",
    items: [
      {
        aspect: "Caroserie & vopsea",
        details:
          "Verificați panourile pentru aliniere corectă, fără diferențe de culoare sau reparații neprofesioniste.",
      },
      {
        aspect: "Rugină & coroziune",
        details:
          "Inspectați pragurile, pasajele roților, șasiul pentru urme de rugină sau coroziune.",
      },
      {
        aspect: "Geamuri, parbriz, oglinzi",
        details:
          "Fără crăpături, ciobituri; oglinzile și dezaburirea să funcționeze.",
      },
      {
        aspect: "Luminile exterioare",
        details:
          "Faruri, stopuri, semnalizări, lumini de ceață și adaptive să funcționeze corect, fără pâlpâiri.",
      },
      {
        aspect: "Elemente aerodinamice & protecții",
        details:
          "Panouri inferioare, spoilere, apărători intacte, fără piese lipsă.",
      },
    ],
  },
  {
    name: "Roți & Anvelope",
    items: [
      {
        aspect: "Jante",
        details: "Fără lovituri, fisuri, zgârieturi adânci sau deformări.",
      },
      {
        aspect: "Anvelope",
        details:
          "Profil uniform, aceeași marcă/model, fără crăpături, data de fabricație rezonabilă.",
      },
      {
        aspect: "Seturi suplimentare",
        details:
          "Întrebați de anvelope de iarnă/vară suplimentare, jante de rezervă.",
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
          "iDrive (sau sistem echivalent) rapid, navigație actuală, Bluetooth, CarPlay/Android Auto, sistem audio funcțional.",
      },
      {
        aspect: "Funcții speciale interioare",
        details:
          "Trapă panoramică, iluminare ambientală, HUD, masaj scaune – toate funcționale.",
      },
    ],
  },
  {
    name: "Motor & Componente Mecanice",
    items: [
      {
        aspect: "Compartiment motor",
        details:
          "Fără scurgeri de ulei, lichid răcire, combustibil; furtunuri și curele în stare bună.",
      },
      {
        aspect: "Ulei & lichide",
        details:
          "Ulei motor la nivel corect, lichid răcire, frână, servodirecție (dacă există) în parametri normali.",
      },
      {
        aspect: "Sistem diesel (DPF, AdBlue, EGR)",
        details:
          "Fără avertizări DPF, regenerări regulate, completări AdBlue, EGR curat sau verificat.",
      },
      {
        aspect: "Baterie & electric",
        details:
          "Pornire ușoară, baterie sub 5 ani preferabil, fără martori de eroare electrice.",
      },
      {
        aspect: "Răcire & intercooler",
        details:
          "Radiator, intercooler, furtunuri fără scurgeri fine sau fisuri.",
      },
    ],
  },
  {
    name: "Transmisie & Tracțiune",
    items: [
      {
        aspect: "Cutie de viteze",
        details:
          "Schimbări line, fără smucituri. La automată (ZF 8HP), luați în calcul schimb de ulei la 80-100k km.",
      },
      {
        aspect: "xDrive sau 4x4",
        details:
          "Fără zgomote suspecte în viraje strânse, anvelope cu uzură uniformă.",
      },
      {
        aspect: "Ambreiaj (manual)",
        details:
          "Fără patinare, punct de cuplare corect, schimb ușor al treptelor.",
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
          "Modurile Sport/Comfort trebuie să schimbe clar rigiditatea suspensiei.",
      },
      {
        aspect: "Bucșe, bielete, brațe",
        details: "Fără jocuri mari, uzură excesivă sau zgomote metalice.",
      },
    ],
  },
  {
    name: "Sisteme de Siguranță & Asistență la Conducere",
    items: [
      {
        aspect: "Airbaguri & centuri",
        details:
          "Fără martori aprinși, centuri care se fixează și rulează corect.",
      },
      {
        aspect: "Asistență la condus",
        details:
          "ABS, ESP, Lane Assist, Blind Spot, Pilot adaptiv – toate funcționale.",
      },
      {
        aspect: "Camere & senzori parcare",
        details:
          "Imagine clară, senzori fără erori, 360° funcțional dacă există.",
      },
      {
        aspect: "Afișaj head-up",
        details:
          "Vizibilitate bună, afișare corectă a vitezei, navigație, alerte.",
      },
    ],
  },
  {
    name: "Software & Electronică",
    items: [
      {
        aspect: "Actualizări software",
        details:
          "Infotainment, hărți, ECU/TCU la zi. Fără recall-uri nerezolvate.",
      },
      {
        aspect: "Servicii Connected (BMW ConnectedDrive)",
        details:
          "Funcții active sau reînnoibile (Remote Start, Parking Assistant etc.).",
      },
      {
        aspect: "Chei & acces confort",
        details:
          "Toate cheile prezente, keyless entry, integrare smartphone, funcționale.",
      },
    ],
  },
  {
    name: "Test de Drum",
    items: [
      {
        aspect: "Pornire la rece",
        details: "Motorul pornește prompt, fără fum excesiv sau ezitări.",
      },
      {
        aspect: "Accelerare & putere",
        details: "Răspuns bun, cuplu adecvat, fără întreruperi.",
      },
      {
        aspect: "Zgomot & vibrații",
        details:
          "Fără zgomote aerodinamice excesive, vibrații în volan la viteze mari.",
      },
      {
        aspect: "Consum combustibil",
        details:
          "Verificați consumul, să fie în parametri normali pentru model.",
      },
    ],
  },
  {
    name: "Verificarea Pachetului Full Option",
    items: [
      {
        aspect: "Decodor VIN",
        details: "Comparați lista de opțiuni din fabrică cu echiparea actuală.",
      },
      {
        aspect: "Dotări suplimentare (HUD, audio premium etc.)",
        details: "Asigurați-vă că toate funcționează conform descrierii.",
      },
      {
        aspect: "Echipări interioare & exterioare top",
        details:
          "Calitatea finisajelor, ornamente, electronice, tehnologii prezente și funcționale.",
      },
    ],
  },
  {
    name: "Stabilirea Prețului & Compararea cu Piața",
    items: [
      {
        aspect: "Preț comparativ",
        details:
          "Analizați oferte similare (an, km, opțiuni) pentru o evaluare corectă.",
      },
      {
        aspect: "Costuri imediate",
        details:
          "Luați în calcul reparații/întreținere apropiate (ulei, filtre, plăcuțe frână, anvelope).",
      },
    ],
  },
  {
    name: "Considerații după Cumpărare",
    items: [
      {
        aspect: "Transfer planuri de întreținere",
        details: "Garanții extinse, pachete service preplătite transferabile?",
      },
      {
        aspect: "Proxime revizii",
        details:
          "Ce revizii urmează la 80.000-100.000 km? (ulei transmisie, lichid frână, filtre).",
      },
      {
        aspect: "Accesorii suplimentare",
        details: "Covorașe, kit scule, roată de rezervă, etc. incluse?",
      },
    ],
  },
  {
    name: "Verificări Suplimentare (~60.000 - 100.000 km)",
    items: [
      {
        aspect: "Transmisie & diferențiale",
        details: "Planificați schimb ulei cutie, diferențiale, transfer case.",
      },
      {
        aspect: "EGR, DPF, intercooler",
        details:
          "Verificați EGR (recall?), starea DPF, intercooler fără probleme.",
      },
      {
        aspect: "Suspensii & bucșe",
        details: "Uzuri normale la acest rulaj, verificați bătăi subtile.",
      },
      {
        aspect: "Test la service specializat",
        details: "Un PPI (Pre-Purchase Inspection) pentru siguranță maximă.",
      },
    ],
  },
];

export default function HomePage() {
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
    <main className="p-4 max-w-md mx-auto space-y-4 text-sm">
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
    </main>
  );
}

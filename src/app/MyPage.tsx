"use client";
/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";

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
    <div>
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
    </div>
  );
};

export default MyPage;

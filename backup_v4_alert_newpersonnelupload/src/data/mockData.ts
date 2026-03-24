
export interface Personnel { id: string; name: string; role: string; skills: string[]; allowedCountries: string[]; unavailableDates: string[]; workload: number; certifications?: Record<string, string>; }
export interface Project { id: string; name: string; customer: string; country: string; state: string; city: string; coordinates: [number, number]; category: string; quantity: number; status: 'planning' | 'ongoing' | 'completed' | 'on-hold' | 'delay'; assignedPersonnel: string[]; startDate: string; deadline: string; partNumber?: string; }
export const mockPersonnel: Personnel[] = [];
export const mockProjects: Project[] = [
  {
    "id": "xl-0",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      139.965459299183,
      36.227157407101984
    ]
  },
  {
    "id": "xl-1",
    "customer": "Coreweave",
    "name": "Coreweave (North Bergen)",
    "country": "US",
    "state": "NJ",
    "city": "North Bergen",
    "category": "CDU",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      -74.26044069591791,
      40.7878203150432
    ]
  },
  {
    "id": "xl-2",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      139.93062686836177,
      35.664609668400125
    ]
  },
  {
    "id": "xl-3",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      -98.6258328070704,
      29.715636538945187
    ]
  },
  {
    "id": "xl-4",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      -98.37537700818892,
      29.524890714457687
    ]
  },
  {
    "id": "xl-5",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      -98.5051885516497,
      29.132436292055374
    ]
  },
  {
    "id": "xl-6",
    "customer": "Coreweave",
    "name": "Coreweave (Kenilworth)",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "CDU",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      -73.9741348894719,
      41.05904745377338
    ]
  },
  {
    "id": "xl-7",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      -84.39170815359823,
      33.39471453597709
    ]
  },
  {
    "id": "xl-8",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      -96.82339942747423,
      32.96751792505587
    ]
  },
  {
    "id": "xl-9",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      -95.26183019985596,
      38.97924616037251
    ]
  },
  {
    "id": "xl-10",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      -95.10882805747573,
      38.93275979843033
    ]
  },
  {
    "id": "xl-11",
    "customer": "QTS",
    "name": "QTS (Price)",
    "country": "US",
    "state": "UT",
    "city": "Price",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      -110.64131493028748,
      39.63454710054498
    ]
  },
  {
    "id": "xl-12",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      -98.87094022537438,
      29.40683318751628
    ]
  },
  {
    "id": "xl-13",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      139.5008410055401,
      35.69267625673546
    ]
  },
  {
    "id": "xl-14",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "delay",
    "assignedPersonnel": [],
    "startDate": "2026-01-15",
    "deadline": "2026-03-01",
    "coordinates": [
      -96.43750634068547,
      32.58270875880995
    ]
  },
  {
    "id": "xl-15",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -97.17927138160813,
      32.46373458419199
    ]
  },
  {
    "id": "xl-16",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.41840358207091,
      33.631758141943436
    ]
  },
  {
    "id": "xl-17",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -84.72891320049746,
      33.865738678927244
    ]
  },
  {
    "id": "xl-18",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.44039077131625,
      32.670857670963265
    ]
  },
  {
    "id": "xl-19",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.14428736631233,
      33.2426850288008
    ]
  },
  {
    "id": "xl-20",
    "customer": "Equinix",
    "name": "Equinix (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-16",
    "deadline": "2026-07-16",
    "coordinates": [
      -96.75937737734272,
      33.07599740482357
    ]
  },
  {
    "id": "xl-21",
    "customer": "STACK",
    "name": "STACK (Melbourne)",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-21",
    "deadline": "2026-07-21",
    "coordinates": [
      145.20991165692794,
      -37.80435513620561
    ]
  },
  {
    "id": "xl-22",
    "customer": "Coreweave",
    "name": "Coreweave (Ellendale)",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-08-31",
    "deadline": "2026-10-31",
    "coordinates": [
      -98.7357158778785,
      46.33081716293221
    ]
  },
  {
    "id": "xl-23",
    "customer": "Coreweave",
    "name": "Coreweave (Orangeburg)",
    "country": "US",
    "state": "NY",
    "city": "Orangeburg",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -73.98362706484481,
      41.13075107646034
    ]
  },
  {
    "id": "xl-24",
    "customer": "Coreweave",
    "name": "Coreweave (Weehawken)",
    "country": "US",
    "state": "NJ",
    "city": "Weehawken",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -73.69445615291386,
      40.81985440419239
    ]
  },
  {
    "id": "xl-25",
    "customer": "Coreweave",
    "name": "Coreweave (Atlanta)",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -84.04484044916232,
      34.1231525336906
    ]
  },
  {
    "id": "xl-26",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-03",
    "deadline": "2026-05-03",
    "coordinates": [
      139.4782057539686,
      35.94239080197985
    ]
  },
  {
    "id": "xl-27",
    "customer": "Coreweave",
    "name": "Coreweave (North Bergen)",
    "country": "US",
    "state": "NJ",
    "city": "North Bergen",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-23",
    "deadline": "2026-05-23",
    "coordinates": [
      -73.8015943219341,
      41.1493509994841
    ]
  },
  {
    "id": "xl-28",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-06",
    "deadline": "2026-06-06",
    "coordinates": [
      139.72006751509832,
      35.82929655092686
    ]
  },
  {
    "id": "xl-29",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-18",
    "deadline": "2026-06-18",
    "coordinates": [
      -98.36515914132615,
      29.692448542319244
    ]
  },
  {
    "id": "xl-30",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-25",
    "deadline": "2026-06-25",
    "coordinates": [
      -98.69766760805865,
      29.585867173564775
    ]
  },
  {
    "id": "xl-31",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-02",
    "deadline": "2026-07-02",
    "coordinates": [
      -98.28446971067623,
      29.7631807134413
    ]
  },
  {
    "id": "xl-32",
    "customer": "Coreweave",
    "name": "Coreweave (Kenilworth)",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-04",
    "deadline": "2026-07-04",
    "coordinates": [
      -74.68960646546292,
      40.81427932819699
    ]
  },
  {
    "id": "xl-33",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -84.89113958058417,
      33.893477542195676
    ]
  },
  {
    "id": "xl-34",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -96.76894693117352,
      32.42824322116064
    ]
  },
  {
    "id": "xl-35",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -94.71671335808111,
      38.72050475820012
    ]
  },
  {
    "id": "xl-36",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -94.73590717327393,
      38.44868193101007
    ]
  },
  {
    "id": "xl-37",
    "customer": "QTS",
    "name": "QTS (Price)",
    "country": "US",
    "state": "UT",
    "city": "Price",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -110.81990812602854,
      39.3548151271236
    ]
  },
  {
    "id": "xl-38",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -98.278314956841,
      29.62296661360803
    ]
  },
  {
    "id": "xl-39",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-11",
    "deadline": "2026-07-11",
    "coordinates": [
      139.88117944776562,
      35.72466563695433
    ]
  },
  {
    "id": "xl-40",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -97.01349790263797,
      32.874847221552734
    ]
  },
  {
    "id": "xl-41",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.4922285197874,
      32.63577483854505
    ]
  },
  {
    "id": "xl-42",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -111.99276461896109,
      33.56990267232097
    ]
  },
  {
    "id": "xl-43",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -84.50485530101037,
      33.54285528194238
    ]
  },
  {
    "id": "xl-44",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.98464466624651,
      32.85497759647858
    ]
  },
  {
    "id": "xl-45",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.03388011467314,
      33.59618113275225
    ]
  },
  {
    "id": "xl-46",
    "customer": "Equinix",
    "name": "Equinix (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-16",
    "deadline": "2026-07-16",
    "coordinates": [
      -96.97423595359551,
      33.098356175828584
    ]
  },
  {
    "id": "xl-47",
    "customer": "STACK",
    "name": "STACK (Melbourne)",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-21",
    "deadline": "2026-07-21",
    "coordinates": [
      144.78128590749125,
      -37.92847973250082
    ]
  },
  {
    "id": "xl-48",
    "customer": "Coreweave",
    "name": "Coreweave (Ellendale)",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-08-31",
    "deadline": "2026-10-31",
    "coordinates": [
      -98.41507187741885,
      46.01071493890344
    ]
  },
  {
    "id": "xl-49",
    "customer": "Coreweave",
    "name": "Coreweave (Orangeburg)",
    "country": "US",
    "state": "NY",
    "city": "Orangeburg",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -73.56682816462104,
      41.41105384442864
    ]
  },
  {
    "id": "xl-50",
    "customer": "Coreweave",
    "name": "Coreweave (Weehawken)",
    "country": "US",
    "state": "NJ",
    "city": "Weehawken",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -74.10448924739462,
      40.88861292300581
    ]
  },
  {
    "id": "xl-51",
    "customer": "Coreweave",
    "name": "Coreweave (Atlanta)",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -84.16281907528347,
      33.43137472562408
    ]
  },
  {
    "id": "xl-52",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-03",
    "deadline": "2026-05-03",
    "coordinates": [
      139.9111777741156,
      35.99822616627523
    ]
  },
  {
    "id": "xl-53",
    "customer": "Coreweave",
    "name": "Coreweave (North Bergen)",
    "country": "US",
    "state": "NJ",
    "city": "North Bergen",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-23",
    "deadline": "2026-05-23",
    "coordinates": [
      -74.4235738112955,
      40.489512510064515
    ]
  },
  {
    "id": "xl-54",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-06",
    "deadline": "2026-06-06",
    "coordinates": [
      139.95939105712552,
      35.648332250277825
    ]
  },
  {
    "id": "xl-55",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-18",
    "deadline": "2026-06-18",
    "coordinates": [
      -98.52726018131216,
      29.539632428185865
    ]
  },
  {
    "id": "xl-56",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-25",
    "deadline": "2026-06-25",
    "coordinates": [
      -98.44421530120486,
      29.401718666398363
    ]
  },
  {
    "id": "xl-57",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-02",
    "deadline": "2026-07-02",
    "coordinates": [
      -98.40182475957339,
      29.567141102335512
    ]
  },
  {
    "id": "xl-58",
    "customer": "Coreweave",
    "name": "Coreweave (Kenilworth)",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-04",
    "deadline": "2026-07-04",
    "coordinates": [
      -74.21617295803878,
      40.85796143706416
    ]
  },
  {
    "id": "xl-59",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -84.62280350631896,
      33.71053459539147
    ]
  },
  {
    "id": "xl-60",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -96.83033529783772,
      32.56244402918222
    ]
  },
  {
    "id": "xl-61",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -95.00655024729164,
      38.78852417692501
    ]
  },
  {
    "id": "xl-62",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -94.7355191022852,
      38.98717199757156
    ]
  },
  {
    "id": "xl-63",
    "customer": "QTS",
    "name": "QTS (Price)",
    "country": "US",
    "state": "UT",
    "city": "Price",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -110.71200838025948,
      39.54577143359974
    ]
  },
  {
    "id": "xl-64",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -98.31640017617558,
      29.81800854810039
    ]
  },
  {
    "id": "xl-65",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-11",
    "deadline": "2026-07-11",
    "coordinates": [
      139.61502891452153,
      35.83690095892972
    ]
  },
  {
    "id": "xl-66",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.40140203597012,
      32.88404782561116
    ]
  },
  {
    "id": "xl-67",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -97.16868992128838,
      32.54838855822731
    ]
  },
  {
    "id": "xl-68",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.38008420109443,
      33.80787439992544
    ]
  },
  {
    "id": "xl-69",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -84.48499502089231,
      33.82495084071551
    ]
  },
  {
    "id": "xl-70",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -97.18945398575397,
      32.843999247654175
    ]
  },
  {
    "id": "xl-71",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.67471002951903,
      33.25427714644246
    ]
  },
  {
    "id": "xl-72",
    "customer": "Equinix",
    "name": "Equinix (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-16",
    "deadline": "2026-07-16",
    "coordinates": [
      -96.80117121543125,
      32.569625536467974
    ]
  },
  {
    "id": "xl-73",
    "customer": "STACK",
    "name": "STACK (Melbourne)",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-21",
    "deadline": "2026-07-21",
    "coordinates": [
      145.03940081167787,
      -38.12935045746024
    ]
  },
  {
    "id": "xl-74",
    "customer": "Coreweave",
    "name": "Coreweave (Ellendale)",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-08-31",
    "deadline": "2026-10-31",
    "coordinates": [
      -98.69742573088952,
      45.98408977058765
    ]
  },
  {
    "id": "xl-75",
    "customer": "Coreweave",
    "name": "Coreweave (Orangeburg)",
    "country": "US",
    "state": "NY",
    "city": "Orangeburg",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -74.1581592546584,
      40.65679899801268
    ]
  },
  {
    "id": "xl-76",
    "customer": "Coreweave",
    "name": "Coreweave (Weehawken)",
    "country": "US",
    "state": "NJ",
    "city": "Weehawken",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -74.26428732982346,
      40.9228500580269
    ]
  },
  {
    "id": "xl-77",
    "customer": "Coreweave",
    "name": "Coreweave (Atlanta)",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -84.63661194646026,
      33.540811371854524
    ]
  },
  {
    "id": "xl-78",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-03",
    "deadline": "2026-05-03",
    "coordinates": [
      139.7892545852015,
      35.63840870268384
    ]
  },
  {
    "id": "xl-79",
    "customer": "Coreweave",
    "name": "Coreweave (North Bergen)",
    "country": "US",
    "state": "NJ",
    "city": "North Bergen",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-23",
    "deadline": "2026-05-23",
    "coordinates": [
      -73.87112814515346,
      40.82909088230017
    ]
  },
  {
    "id": "xl-80",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-06",
    "deadline": "2026-06-06",
    "coordinates": [
      139.26768823626364,
      35.981696868309214
    ]
  },
  {
    "id": "xl-81",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-18",
    "deadline": "2026-06-18",
    "coordinates": [
      -98.19463471984064,
      29.70083502116356
    ]
  },
  {
    "id": "xl-82",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-25",
    "deadline": "2026-06-25",
    "coordinates": [
      -98.74227602417601,
      29.38568646565865
    ]
  },
  {
    "id": "xl-83",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-02",
    "deadline": "2026-07-02",
    "coordinates": [
      -98.78897837859593,
      29.10986008524629
    ]
  },
  {
    "id": "xl-84",
    "customer": "Coreweave",
    "name": "Coreweave (Kenilworth)",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-04",
    "deadline": "2026-07-04",
    "coordinates": [
      -74.06791109252214,
      40.57826537365451
    ]
  },
  {
    "id": "xl-85",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -84.14629087974025,
      33.577759997870245
    ]
  },
  {
    "id": "xl-86",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -96.83160776730293,
      32.72534300667163
    ]
  },
  {
    "id": "xl-87",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -94.75860307116471,
      38.454035569938576
    ]
  },
  {
    "id": "xl-88",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -95.16391743336226,
      39.137340257461254
    ]
  },
  {
    "id": "xl-89",
    "customer": "QTS",
    "name": "QTS (Price)",
    "country": "US",
    "state": "UT",
    "city": "Price",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -110.69541246298805,
      39.32505172831532
    ]
  },
  {
    "id": "xl-90",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -98.80614393350606,
      29.51968621031014
    ]
  },
  {
    "id": "xl-91",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-11",
    "deadline": "2026-07-11",
    "coordinates": [
      139.29732847132482,
      36.05437610639306
    ]
  },
  {
    "id": "xl-92",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.96304020941403,
      32.94065765860023
    ]
  },
  {
    "id": "xl-93",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.73289441835915,
      32.374072394070495
    ]
  },
  {
    "id": "xl-94",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.40638046302112,
      33.11763837739007
    ]
  },
  {
    "id": "xl-95",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -84.7255594509461,
      33.800363477901
    ]
  },
  {
    "id": "xl-96",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.58676670001168,
      32.75155959462964
    ]
  },
  {
    "id": "xl-97",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.63885788004683,
      33.19075831179228
    ]
  },
  {
    "id": "xl-98",
    "customer": "Equinix",
    "name": "Equinix (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-16",
    "deadline": "2026-07-16",
    "coordinates": [
      -97.15074332627293,
      33.153479770283575
    ]
  },
  {
    "id": "xl-99",
    "customer": "STACK",
    "name": "STACK (Melbourne)",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-21",
    "deadline": "2026-07-21",
    "coordinates": [
      145.08377579869142,
      -37.818387076671534
    ]
  },
  {
    "id": "xl-100",
    "customer": "Coreweave",
    "name": "Coreweave (Ellendale)",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-08-31",
    "deadline": "2026-10-31",
    "coordinates": [
      -98.71765238729341,
      45.824920466223105
    ]
  },
  {
    "id": "xl-101",
    "customer": "Coreweave",
    "name": "Coreweave (Orangeburg)",
    "country": "US",
    "state": "NY",
    "city": "Orangeburg",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -73.97936028952452,
      41.01579501015504
    ]
  },
  {
    "id": "xl-102",
    "customer": "Coreweave",
    "name": "Coreweave (Weehawken)",
    "country": "US",
    "state": "NJ",
    "city": "Weehawken",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -73.92908973781427,
      40.83239555960968
    ]
  },
  {
    "id": "xl-103",
    "customer": "Coreweave",
    "name": "Coreweave (Atlanta)",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -84.36511805159846,
      33.79817055756466
    ]
  },
  {
    "id": "xl-104",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-03",
    "deadline": "2026-05-03",
    "coordinates": [
      139.41643596461836,
      35.62417976557455
    ]
  },
  {
    "id": "xl-105",
    "customer": "Coreweave",
    "name": "Coreweave (North Bergen)",
    "country": "US",
    "state": "NJ",
    "city": "North Bergen",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-23",
    "deadline": "2026-05-23",
    "coordinates": [
      -74.08187774762442,
      40.419936405702416
    ]
  },
  {
    "id": "xl-106",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-06",
    "deadline": "2026-06-06",
    "coordinates": [
      139.55637611844725,
      36.06549885132203
    ]
  },
  {
    "id": "xl-107",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-18",
    "deadline": "2026-06-18",
    "coordinates": [
      -98.59144987275332,
      29.56093534474149
    ]
  },
  {
    "id": "xl-108",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-25",
    "deadline": "2026-06-25",
    "coordinates": [
      -98.34070778230705,
      29.306646017952282
    ]
  },
  {
    "id": "xl-109",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-02",
    "deadline": "2026-07-02",
    "coordinates": [
      -98.16245835189785,
      29.300014220975356
    ]
  },
  {
    "id": "xl-110",
    "customer": "Coreweave",
    "name": "Coreweave (Kenilworth)",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-04",
    "deadline": "2026-07-04",
    "coordinates": [
      -74.11923555078499,
      40.62850855019921
    ]
  },
  {
    "id": "xl-111",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -84.30057948749338,
      33.721600234591044
    ]
  },
  {
    "id": "xl-112",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -96.85015176286038,
      32.53511678298925
    ]
  },
  {
    "id": "xl-113",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -95.00949157646532,
      38.49353167331692
    ]
  },
  {
    "id": "xl-114",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -94.62854821997384,
      38.45107488671714
    ]
  },
  {
    "id": "xl-115",
    "customer": "QTS",
    "name": "QTS (Price)",
    "country": "US",
    "state": "UT",
    "city": "Price",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -110.53716226090386,
      39.80920792680303
    ]
  },
  {
    "id": "xl-116",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -98.606851109582,
      29.732885235421872
    ]
  },
  {
    "id": "xl-117",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-11",
    "deadline": "2026-07-11",
    "coordinates": [
      139.6202276399574,
      36.20689831238079
    ]
  },
  {
    "id": "xl-118",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.99157359472572,
      32.9078941045592
    ]
  },
  {
    "id": "xl-119",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.44675044114456,
      32.64236252680974
    ]
  },
  {
    "id": "xl-120",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.05516115253322,
      33.76908614284858
    ]
  },
  {
    "id": "xl-121",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -84.59119272152402,
      33.29880613000278
    ]
  },
  {
    "id": "xl-122",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.90596554983564,
      32.973100560648106
    ]
  },
  {
    "id": "xl-123",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.26069183105496,
      33.12472169319516
    ]
  },
  {
    "id": "xl-124",
    "customer": "Equinix",
    "name": "Equinix (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-16",
    "deadline": "2026-07-16",
    "coordinates": [
      -97.0076174469921,
      32.68052144248581
    ]
  },
  {
    "id": "xl-125",
    "customer": "STACK",
    "name": "STACK (Melbourne)",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-21",
    "deadline": "2026-07-21",
    "coordinates": [
      144.83708110871535,
      -37.99906894008258
    ]
  },
  {
    "id": "xl-126",
    "customer": "Coreweave",
    "name": "Coreweave (Ellendale)",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-08-31",
    "deadline": "2026-10-31",
    "coordinates": [
      -98.52012369130092,
      46.049673050771496
    ]
  },
  {
    "id": "xl-127",
    "customer": "Coreweave",
    "name": "Coreweave (Orangeburg)",
    "country": "US",
    "state": "NY",
    "city": "Orangeburg",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -73.58460559554665,
      40.908197744658146
    ]
  },
  {
    "id": "xl-128",
    "customer": "Coreweave",
    "name": "Coreweave (Weehawken)",
    "country": "US",
    "state": "NJ",
    "city": "Weehawken",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -73.76945989740838,
      40.43833908335944
    ]
  },
  {
    "id": "xl-129",
    "customer": "Coreweave",
    "name": "Coreweave (Atlanta)",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -84.03795934475745,
      33.977270378902375
    ]
  },
  {
    "id": "xl-130",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-03",
    "deadline": "2026-05-03",
    "coordinates": [
      139.55756031625017,
      36.21122836757117
    ]
  },
  {
    "id": "xl-131",
    "customer": "Coreweave",
    "name": "Coreweave (North Bergen)",
    "country": "US",
    "state": "NJ",
    "city": "North Bergen",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-23",
    "deadline": "2026-05-23",
    "coordinates": [
      -73.79453748992141,
      40.98379941058439
    ]
  },
  {
    "id": "xl-132",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-06",
    "deadline": "2026-06-06",
    "coordinates": [
      139.75825550361324,
      35.72549971548679
    ]
  },
  {
    "id": "xl-133",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-18",
    "deadline": "2026-06-18",
    "coordinates": [
      -98.71510692818684,
      29.81259191700777
    ]
  },
  {
    "id": "xl-134",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-25",
    "deadline": "2026-06-25",
    "coordinates": [
      -98.63268335401852,
      29.44958117965808
    ]
  },
  {
    "id": "xl-135",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-02",
    "deadline": "2026-07-02",
    "coordinates": [
      -98.558052988835,
      29.346774935376704
    ]
  },
  {
    "id": "xl-136",
    "customer": "Coreweave",
    "name": "Coreweave (Kenilworth)",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-04",
    "deadline": "2026-07-04",
    "coordinates": [
      -74.26254910082453,
      41.039887837029674
    ]
  },
  {
    "id": "xl-137",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -84.30271183882576,
      33.60422482760732
    ]
  },
  {
    "id": "xl-138",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -96.9806509344188,
      32.87433458252653
    ]
  },
  {
    "id": "xl-139",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -94.60483009127027,
      39.01161699095779
    ]
  },
  {
    "id": "xl-140",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -94.80103973597063,
      39.16217889768993
    ]
  },
  {
    "id": "xl-141",
    "customer": "QTS",
    "name": "QTS (Price)",
    "country": "US",
    "state": "UT",
    "city": "Price",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -110.43956814486363,
      39.73911139646444
    ]
  },
  {
    "id": "xl-142",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -98.39795194824245,
      29.450797550143903
    ]
  },
  {
    "id": "xl-143",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-11",
    "deadline": "2026-07-11",
    "coordinates": [
      139.33349766122925,
      35.59504350149189
    ]
  },
  {
    "id": "xl-144",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.91009854938946,
      32.91616764649028
    ]
  },
  {
    "id": "xl-145",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.91345946462336,
      33.12756349743442
    ]
  },
  {
    "id": "xl-146",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.72813056226228,
      33.882061809406544
    ]
  },
  {
    "id": "xl-147",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -84.16558364407967,
      33.883139679001026
    ]
  },
  {
    "id": "xl-148",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.743472462223,
      32.62748302844522
    ]
  },
  {
    "id": "xl-149",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.28266236445246,
      33.83808408340051
    ]
  },
  {
    "id": "xl-150",
    "customer": "Equinix",
    "name": "Equinix (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-16",
    "deadline": "2026-07-16",
    "coordinates": [
      -96.46782329396609,
      33.16458436602712
    ]
  },
  {
    "id": "xl-151",
    "customer": "STACK",
    "name": "STACK (Melbourne)",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-21",
    "deadline": "2026-07-21",
    "coordinates": [
      144.91512794590463,
      -37.72003817798097
    ]
  },
  {
    "id": "xl-152",
    "customer": "Coreweave",
    "name": "Coreweave (Ellendale)",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-08-31",
    "deadline": "2026-10-31",
    "coordinates": [
      -98.20115666757319,
      45.961611466730886
    ]
  },
  {
    "id": "xl-153",
    "customer": "Coreweave",
    "name": "Coreweave (Orangeburg)",
    "country": "US",
    "state": "NY",
    "city": "Orangeburg",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -74.16480201105529,
      40.977389100719265
    ]
  },
  {
    "id": "xl-154",
    "customer": "Coreweave",
    "name": "Coreweave (Weehawken)",
    "country": "US",
    "state": "NJ",
    "city": "Weehawken",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -74.15995021794204,
      41.14525264289495
    ]
  },
  {
    "id": "xl-155",
    "customer": "Coreweave",
    "name": "Coreweave (Atlanta)",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -84.27460582324208,
      33.40955445287719
    ]
  },
  {
    "id": "xl-156",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-03",
    "deadline": "2026-05-03",
    "coordinates": [
      139.97199704802452,
      36.09479177630296
    ]
  },
  {
    "id": "xl-157",
    "customer": "Coreweave",
    "name": "Coreweave (North Bergen)",
    "country": "US",
    "state": "NJ",
    "city": "North Bergen",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-23",
    "deadline": "2026-05-23",
    "coordinates": [
      -73.9321027809755,
      40.44442685629293
    ]
  },
  {
    "id": "xl-158",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-06",
    "deadline": "2026-06-06",
    "coordinates": [
      139.57500127581616,
      36.114188223304055
    ]
  },
  {
    "id": "xl-159",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-18",
    "deadline": "2026-06-18",
    "coordinates": [
      -98.32660497137263,
      29.7663001772042
    ]
  },
  {
    "id": "xl-160",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-25",
    "deadline": "2026-06-25",
    "coordinates": [
      -98.21593590242777,
      29.80934046090686
    ]
  },
  {
    "id": "xl-161",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-02",
    "deadline": "2026-07-02",
    "coordinates": [
      -98.4529171725474,
      29.20255427372927
    ]
  },
  {
    "id": "xl-162",
    "customer": "Coreweave",
    "name": "Coreweave (Kenilworth)",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-04",
    "deadline": "2026-07-04",
    "coordinates": [
      -74.34874129663466,
      40.88216493425541
    ]
  },
  {
    "id": "xl-163",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -84.54421153886447,
      33.539733849157486
    ]
  },
  {
    "id": "xl-164",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -96.88907794671587,
      32.88764475962201
    ]
  },
  {
    "id": "xl-165",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -94.5004135299968,
      39.218893895248826
    ]
  },
  {
    "id": "xl-166",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -94.93227414672582,
      38.977519078153136
    ]
  },
  {
    "id": "xl-167",
    "customer": "QTS",
    "name": "QTS (Price)",
    "country": "US",
    "state": "UT",
    "city": "Price",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -110.7724971106193,
      39.58181564967601
    ]
  },
  {
    "id": "xl-168",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -98.4048947309386,
      29.2088085236755
    ]
  },
  {
    "id": "xl-169",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-11",
    "deadline": "2026-07-11",
    "coordinates": [
      139.58408119071095,
      36.03505549581939
    ]
  },
  {
    "id": "xl-170",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.44496318621057,
      32.71546606275453
    ]
  },
  {
    "id": "xl-171",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -97.09534042168985,
      32.42931810224062
    ]
  },
  {
    "id": "xl-172",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.5483266546496,
      33.422372018755276
    ]
  },
  {
    "id": "xl-173",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -84.82702744880523,
      33.58898931496356
    ]
  },
  {
    "id": "xl-174",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.40501776055777,
      32.90350599535212
    ]
  },
  {
    "id": "xl-175",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.64109597678733,
      33.287949763844246
    ]
  },
  {
    "id": "xl-176",
    "customer": "Equinix",
    "name": "Equinix (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-16",
    "deadline": "2026-07-16",
    "coordinates": [
      -96.79290647649594,
      32.470869309924
    ]
  },
  {
    "id": "xl-177",
    "customer": "STACK",
    "name": "STACK (Melbourne)",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-21",
    "deadline": "2026-07-21",
    "coordinates": [
      144.7705256185063,
      -38.127110302440286
    ]
  },
  {
    "id": "xl-178",
    "customer": "Coreweave",
    "name": "Coreweave (Ellendale)",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-08-31",
    "deadline": "2026-10-31",
    "coordinates": [
      -98.65771022446853,
      45.825870705574516
    ]
  },
  {
    "id": "xl-179",
    "customer": "Coreweave",
    "name": "Coreweave (Orangeburg)",
    "country": "US",
    "state": "NY",
    "city": "Orangeburg",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -73.73933221266319,
      40.955482515042306
    ]
  },
  {
    "id": "xl-180",
    "customer": "Coreweave",
    "name": "Coreweave (Weehawken)",
    "country": "US",
    "state": "NJ",
    "city": "Weehawken",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -73.87046390115056,
      40.90806055098873
    ]
  },
  {
    "id": "xl-181",
    "customer": "Coreweave",
    "name": "Coreweave (Atlanta)",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -84.6133925997494,
      33.373832127185715
    ]
  },
  {
    "id": "xl-182",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-03",
    "deadline": "2026-05-03",
    "coordinates": [
      139.27315994334344,
      35.64881676053306
    ]
  },
  {
    "id": "xl-183",
    "customer": "Coreweave",
    "name": "Coreweave (North Bergen)",
    "country": "US",
    "state": "NJ",
    "city": "North Bergen",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-23",
    "deadline": "2026-05-23",
    "coordinates": [
      -74.18915627632298,
      40.968747689024546
    ]
  },
  {
    "id": "xl-184",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-06",
    "deadline": "2026-06-06",
    "coordinates": [
      139.32872927596517,
      35.561598599963276
    ]
  },
  {
    "id": "xl-185",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-18",
    "deadline": "2026-06-18",
    "coordinates": [
      -98.48354431667815,
      29.295936697002585
    ]
  },
  {
    "id": "xl-186",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-04-25",
    "deadline": "2026-06-25",
    "coordinates": [
      -98.78172420763354,
      29.555463697347378
    ]
  },
  {
    "id": "xl-187",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-02",
    "deadline": "2026-07-02",
    "coordinates": [
      -98.30049831309445,
      29.68378018989054
    ]
  },
  {
    "id": "xl-188",
    "customer": "Coreweave",
    "name": "Coreweave (Kenilworth)",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "CDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-04",
    "deadline": "2026-07-04",
    "coordinates": [
      -74.41737395764767,
      40.34831340817861
    ]
  },
  {
    "id": "xl-189",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -84.73984330600405,
      33.46122320212185
    ]
  },
  {
    "id": "xl-190",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -97.11934789083261,
      32.47839800156217
    ]
  },
  {
    "id": "xl-191",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -95.27763740369977,
      38.43968404318884
    ]
  },
  {
    "id": "xl-192",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -94.71433675919779,
      39.101769284447926
    ]
  },
  {
    "id": "xl-193",
    "customer": "QTS",
    "name": "QTS (Price)",
    "country": "US",
    "state": "UT",
    "city": "Price",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -110.65135944214761,
      39.99984422590691
    ]
  },
  {
    "id": "xl-194",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-09",
    "deadline": "2026-07-09",
    "coordinates": [
      -98.7028197227299,
      29.078460220187583
    ]
  },
  {
    "id": "xl-195",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-11",
    "deadline": "2026-07-11",
    "coordinates": [
      140.01394188604303,
      36.14508245875978
    ]
  },
  {
    "id": "xl-196",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -97.12029792500121,
      32.5240914521484
    ]
  },
  {
    "id": "xl-197",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.57364669001686,
      33.0205237714825
    ]
  },
  {
    "id": "xl-198",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -112.07476016990414,
      33.70366870865307
    ]
  },
  {
    "id": "xl-199",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -84.88715890413404,
      33.321565988204796
    ]
  },
  {
    "id": "xl-200",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-05-12",
    "deadline": "2026-07-12",
    "coordinates": [
      -96.7485960683959,
      32.53460986914807
    ]
  },
  {
    "id": "xl-201",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -111.98568293562913,
      33.2383834204322
    ]
  },
  {
    "id": "xl-202",
    "customer": "Equinix",
    "name": "Equinix (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -96.64040774785195,
      32.62401361656479
    ]
  },
  {
    "id": "xl-203",
    "customer": "STACK",
    "name": "STACK (Melbourne)",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      145.0075683635783,
      -37.9114890186628
    ]
  },
  {
    "id": "xl-204",
    "customer": "Coreweave",
    "name": "Coreweave (Ellendale)",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -98.50041411143276,
      46.02111495522341
    ]
  },
  {
    "id": "xl-205",
    "customer": "Coreweave",
    "name": "Coreweave (Orangeburg)",
    "country": "US",
    "state": "NY",
    "city": "Orangeburg",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -73.65526048112375,
      41.11583959133531
    ]
  },
  {
    "id": "xl-206",
    "customer": "Coreweave",
    "name": "Coreweave (Weehawken)",
    "country": "US",
    "state": "NJ",
    "city": "Weehawken",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -74.25174066011118,
      40.37819111674885
    ]
  },
  {
    "id": "xl-207",
    "customer": "Coreweave",
    "name": "Coreweave (Atlanta)",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -84.18720533923153,
      33.96336430516129
    ]
  },
  {
    "id": "xl-208",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      139.2631622210281,
      35.64217296389708
    ]
  },
  {
    "id": "xl-209",
    "customer": "Coreweave",
    "name": "Coreweave (North Bergen)",
    "country": "US",
    "state": "NJ",
    "city": "North Bergen",
    "category": "CDU",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -73.9568877348751,
      41.081855627567045
    ]
  },
  {
    "id": "xl-210",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      139.8560978825564,
      35.48972403413997
    ]
  },
  {
    "id": "xl-211",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -98.88754116072248,
      29.09492858122815
    ]
  },
  {
    "id": "xl-212",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -98.31192137844474,
      29.135560393031003
    ]
  },
  {
    "id": "xl-213",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -98.1246827116329,
      29.429402782886637
    ]
  },
  {
    "id": "xl-214",
    "customer": "Coreweave",
    "name": "Coreweave (Kenilworth)",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "CDU",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -74.27850985009638,
      40.63586947058535
    ]
  },
  {
    "id": "xl-215",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -84.78636079982861,
      33.90641941766849
    ]
  },
  {
    "id": "xl-216",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -97.05726112844225,
      33.13621687085961
    ]
  },
  {
    "id": "xl-217",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -95.20206047407191,
      39.08182367610245
    ]
  },
  {
    "id": "xl-218",
    "customer": "QTS",
    "name": "QTS (New Century)",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -95.1459468381279,
      39.03207611488274
    ]
  },
  {
    "id": "xl-219",
    "customer": "QTS",
    "name": "QTS (Price)",
    "country": "US",
    "state": "UT",
    "city": "Price",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -110.46003318703868,
      39.87064504427129
    ]
  },
  {
    "id": "xl-220",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -98.26222462239849,
      29.605236515568947
    ]
  },
  {
    "id": "xl-221",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      139.3563085306326,
      35.54268571049666
    ]
  },
  {
    "id": "xl-222",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -96.65173710097208,
      32.91070750299941
    ]
  },
  {
    "id": "xl-223",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -97.16740535512234,
      32.80287383344926
    ]
  },
  {
    "id": "xl-224",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "Li-ion Battery",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -112.1519203393883,
      33.25213361036383
    ]
  },
  {
    "id": "xl-225",
    "customer": "QTS",
    "name": "QTS (Union City)",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -84.57711281097984,
      33.35922501513451
    ]
  },
  {
    "id": "xl-226",
    "customer": "QTS",
    "name": "QTS (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -97.04021129747149,
      32.761774122385724
    ]
  },
  {
    "id": "xl-227",
    "customer": "QTS",
    "name": "QTS (Litchfield Park)",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -112.71942049433467,
      33.48762335258168
    ]
  },
  {
    "id": "xl-228",
    "customer": "Equinix",
    "name": "Equinix (Dallas)",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -97.13767976764932,
      32.85924712652291
    ]
  },
  {
    "id": "xl-229",
    "customer": "STACK",
    "name": "STACK (Melbourne)",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      145.06579435151872,
      -37.953913037831896
    ]
  },
  {
    "id": "xl-230",
    "customer": "Coreweave",
    "name": "Coreweave (Ellendale)",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -98.15049177053007,
      46.01535293089933
    ]
  },
  {
    "id": "xl-231",
    "customer": "Coreweave",
    "name": "Coreweave (Orangeburg)",
    "country": "US",
    "state": "NY",
    "city": "Orangeburg",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -74.22479530574691,
      41.0043108220501
    ]
  },
  {
    "id": "xl-232",
    "customer": "Coreweave",
    "name": "Coreweave (Weehawken)",
    "country": "US",
    "state": "NJ",
    "city": "Weehawken",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -73.96261594516189,
      40.775785645950656
    ]
  },
  {
    "id": "xl-233",
    "customer": "Coreweave",
    "name": "Coreweave (Atlanta)",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "Valve",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -84.45513890943955,
      33.36471569965339
    ]
  },
  {
    "id": "xl-234",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      139.54187339802124,
      35.78482423801032
    ]
  },
  {
    "id": "xl-235",
    "customer": "Coreweave",
    "name": "Coreweave (North Bergen)",
    "country": "US",
    "state": "NJ",
    "city": "North Bergen",
    "category": "CDU",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -74.04353154302979,
      40.73201965928005
    ]
  },
  {
    "id": "xl-236",
    "customer": "PDG",
    "name": "PDG (Saitama)",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      139.82599335330204,
      36.17274988267041
    ]
  },
  {
    "id": "xl-237",
    "customer": "Vantage",
    "name": "Vantage (San Antonio)",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 50,
    "status": "planning",
    "assignedPersonnel": [],
    "startDate": "2026-04-15",
    "deadline": "2026-06-15",
    "coordinates": [
      -98.77233189798251,
      29.405146115179562
    ]
  }
] as Project[];

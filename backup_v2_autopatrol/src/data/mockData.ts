
export interface Personnel {
  id: string;
  name: string;
  role: string;
  workload: number;
  avatar?: string;
}

export interface Project {
  id: string;
  name: string;
  customer: string;
  country: string;
  state: string;
  city: string;
  coordinates: [number, number];
  category: string;
  quantity: number;
  status: 'ongoing' | 'delay';
  assignedPersonnel: string[];
  startDate: string;
  deadline: string;
}

export const mockPersonnel: Personnel[] = [
  { "id": "ysong.han", "name": "ysong.han", "role": "Service Engineer", "workload": 0 },
  { "id": "Jade Yue", "name": "Jade Yue", "role": "Service Engineer", "workload": 0 },
  { "id": "Tom Lee", "name": "Tom Lee", "role": "Service Engineer", "workload": 0 },
  { "id": "Fred Li", "name": "Fred Li", "role": "Service Engineer", "workload": 0 },
  { "id": "Bojan Z.", "name": "Bojan Z.", "role": "Service Engineer", "workload": 0 },
  { "id": "Ysong", "name": "Ysong", "role": "Service Engineer", "workload": 0 }
];

export const mockProjects: Project[] = [
  {
    "id": "xl-0",
    "name": "PDG - UPS (Saitama)",
    "customer": "PDG",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 30,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-03",
    "deadline": "2026-02-15",
    "coordinates": [
      139.6503,
      35.6762
    ]
  },
  {
    "id": "xl-201",
    "name": "Coreweave - Valve (Orangeburg)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NY",
    "city": "Orangeburg",
    "category": "Valve",
    "quantity": 231,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -74.2179,
      43.2994
    ]
  },
  {
    "id": "xl-202",
    "name": "Coreweave - Valve (Weehawken)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NJ",
    "city": "Weehawken",
    "category": "Valve",
    "quantity": 232,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -74.4057,
      40.0583
    ]
  },
  {
    "id": "xl-203",
    "name": "Coreweave - Valve (Kansas)",
    "customer": "Coreweave",
    "country": "US",
    "state": "KS",
    "city": "Kansas",
    "category": "Valve",
    "quantity": 233,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-204",
    "name": "Coreweave - Valve (Warren)",
    "customer": "Coreweave",
    "country": "US",
    "state": "OH",
    "city": "Warren",
    "category": "Valve",
    "quantity": 234,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -82.9071,
      40.4173
    ]
  },
  {
    "id": "xl-205",
    "name": "Coreweave - Valve (McCarran)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NV",
    "city": "McCarran",
    "category": "Valve",
    "quantity": 235,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -116.4194,
      38.8026
    ]
  },
  {
    "id": "xl-206",
    "name": "Coreweave - Valve (Cheyenne)",
    "customer": "Coreweave",
    "country": "US",
    "state": "WY",
    "city": "Cheyenne",
    "category": "Valve",
    "quantity": 236,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -107.2903,
      43.076
    ]
  },
  {
    "id": "xl-207",
    "name": "Coreweave - Valve (Austin)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Austin",
    "category": "Valve",
    "quantity": 237,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-208",
    "name": "Coreweave - Valve (Phoenix)",
    "customer": "Coreweave",
    "country": "US",
    "state": "AZ",
    "city": "Phoenix",
    "category": "Valve",
    "quantity": 238,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -111.0937,
      34.0489
    ]
  },
  {
    "id": "xl-209",
    "name": "Coreweave - Valve (Chester)",
    "customer": "Coreweave",
    "country": "US",
    "state": "VA",
    "city": "Chester",
    "category": "Valve",
    "quantity": 239,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-210",
    "name": "Coreweave - Valve (Chester)",
    "customer": "Coreweave",
    "country": "US",
    "state": "VA",
    "city": "Chester",
    "category": "Valve",
    "quantity": 240,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-211",
    "name": "Coreweave - Valve (Chester)",
    "customer": "Coreweave",
    "country": "US",
    "state": "VA",
    "city": "Chester",
    "category": "Valve",
    "quantity": 241,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-212",
    "name": "Coreweave - Valve (Chester)",
    "customer": "Coreweave",
    "country": "US",
    "state": "VA",
    "city": "Chester",
    "category": "Valve",
    "quantity": 242,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-213",
    "name": "Coreweave - Valve (Chester)",
    "customer": "Coreweave",
    "country": "US",
    "state": "VA",
    "city": "Chester",
    "category": "Valve",
    "quantity": 243,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-214",
    "name": "Coreweave - Valve (Kenilworth)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "Valve",
    "quantity": 244,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -74.4057,
      40.0583
    ]
  },
  {
    "id": "xl-215",
    "name": "Coreweave - Valve (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "Valve",
    "quantity": 245,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -101.002,
      47.5502
    ]
  },
  {
    "id": "xl-216",
    "name": "Coreweave - Valve (Lubbock)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Lubbock",
    "category": "Valve",
    "quantity": 246,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-217",
    "name": "Coreweave - Valve (Cheyenne)",
    "customer": "Coreweave",
    "country": "US",
    "state": "WY",
    "city": "Cheyenne",
    "category": "Valve",
    "quantity": 247,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -107.2903,
      43.076
    ]
  },
  {
    "id": "xl-218",
    "name": "Coreweave - Valve (Elk Grove)",
    "customer": "Coreweave",
    "country": "US",
    "state": "IL",
    "city": "Elk Grove",
    "category": "Valve",
    "quantity": 248,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-219",
    "name": "Coreweave - Valve (Elk Grove)",
    "customer": "Coreweave",
    "country": "US",
    "state": "IL",
    "city": "Elk Grove",
    "category": "Valve",
    "quantity": 249,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-220",
    "name": "Coreweave - Valve (Elk Grove)",
    "customer": "Coreweave",
    "country": "US",
    "state": "IL",
    "city": "Elk Grove",
    "category": "Valve",
    "quantity": 250,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-221",
    "name": "Coreweave - Valve (Lubbock)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Lubbock",
    "category": "Valve",
    "quantity": 251,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-222",
    "name": "Coreweave - Valve (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "Valve",
    "quantity": 252,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -101.002,
      47.5502
    ]
  },
  {
    "id": "xl-223",
    "name": "Coreweave - Valve (Kouvola)",
    "customer": "Coreweave",
    "country": "FI",
    "state": "Kymenlaakso",
    "city": "Kouvola",
    "category": "Valve",
    "quantity": 253,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      25.7482,
      61.9241
    ]
  },
  {
    "id": "xl-224",
    "name": "Coreweave - Valve (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "Valve",
    "quantity": 254,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -101.002,
      47.5502
    ]
  },
  {
    "id": "xl-225",
    "name": "Coreweave - Valve (Denver)",
    "customer": "Coreweave",
    "country": "US",
    "state": "CO",
    "city": "Denver",
    "category": "Valve",
    "quantity": 255,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -105.7821,
      39.5501
    ]
  },
  {
    "id": "xl-226",
    "name": "Coreweave - Valve (Plano)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Plano",
    "category": "Valve",
    "quantity": 256,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-227",
    "name": "Coreweave - Valve (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "Valve",
    "quantity": 257,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -101.002,
      47.5502
    ]
  },
  {
    "id": "xl-228",
    "name": "Coreweave - Valve (Fort Stockton)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Fort Stockton",
    "category": "Valve",
    "quantity": 258,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-229",
    "name": "Coreweave - Valve (Ellenwood)",
    "customer": "Coreweave",
    "country": "US",
    "state": "GA",
    "city": "Ellenwood",
    "category": "Valve",
    "quantity": 259,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-230",
    "name": "Coreweave - Valve (Kouvola)",
    "customer": "Coreweave",
    "country": "FI",
    "state": "Kymenlaakso",
    "city": "Kouvola",
    "category": "Valve",
    "quantity": 260,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      25.7482,
      61.9241
    ]
  },
  {
    "id": "xl-231",
    "name": "Coreweave - Valve (Lubbock)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Lubbock",
    "category": "Valve",
    "quantity": 261,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-232",
    "name": "Coreweave - Valve (McCarran)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NV",
    "city": "McCarran",
    "category": "Valve",
    "quantity": 262,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -116.4194,
      38.8026
    ]
  },
  {
    "id": "xl-233",
    "name": "Coreweave - Valve (Atlanta)",
    "customer": "Coreweave",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "Valve",
    "quantity": 263,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-234",
    "name": "Coreweave - Valve (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "Valve",
    "quantity": 264,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -101.002,
      47.5502
    ]
  },
  {
    "id": "xl-235",
    "name": "Coreweave - Valve (Aurora)",
    "customer": "Coreweave",
    "country": "US",
    "state": "IL",
    "city": "Aurora",
    "category": "Valve",
    "quantity": 265,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-236",
    "name": "Coreweave - Valve (Lubbock)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Lubbock",
    "category": "Valve",
    "quantity": 266,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-237",
    "name": "Coreweave - Valve (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "Valve",
    "quantity": 267,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-02-01",
    "deadline": "2026-04-01",
    "coordinates": [
      -101.002,
      47.5502
    ]
  }
];

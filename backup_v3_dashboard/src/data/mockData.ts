
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
  status: 'planning' | 'ongoing' | 'completed' | 'on-hold' | 'delay';
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
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      139.6503,
      35.6762
    ]
  },
  {
    "id": "xl-1",
    "name": "Coreweave - CDU (North Bergen)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NJ",
    "city": "North Bergen",
    "category": "CDU",
    "quantity": 31,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -74.4057,
      40.0583
    ]
  },
  {
    "id": "xl-2",
    "name": "PDG - UPS (Saitama)",
    "customer": "PDG",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 32,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      139.6503,
      35.6762
    ]
  },
  {
    "id": "xl-3",
    "name": "Vantage - UPS (San Antonio)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 33,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-4",
    "name": "Vantage - UPS (San Antonio)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 34,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-5",
    "name": "Vantage - UPS (San Antonio)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 35,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-6",
    "name": "Coreweave - CDU (Kenilworth)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "CDU",
    "quantity": 36,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -74.4057,
      40.0583
    ]
  },
  {
    "id": "xl-7",
    "name": "QTS - UPS (Union City)",
    "customer": "QTS",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 37,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-8",
    "name": "QTS - UPS (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 38,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-9",
    "name": "QTS - UPS (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 39,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-10",
    "name": "QTS - UPS (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 40,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-11",
    "name": "QTS - Li-ion Battery (Price)",
    "customer": "QTS",
    "country": "US",
    "state": "UT",
    "city": "Price",
    "category": "Li-ion Battery",
    "quantity": 41,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -111.0937,
      39.321
    ]
  },
  {
    "id": "xl-12",
    "name": "Vantage - UPS (San Antonio)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 42,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-13",
    "name": "PDG - UPS (Saitama)",
    "customer": "PDG",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 43,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      139.6503,
      35.6762
    ]
  },
  {
    "id": "xl-14",
    "name": "QTS - Li-ion Battery (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 44,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-15",
    "name": "QTS - Li-ion Battery (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 45,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-16",
    "name": "QTS - Li-ion Battery (Litchfield Park)",
    "customer": "QTS",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "Li-ion Battery",
    "quantity": 46,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -111.0937,
      34.0489
    ]
  },
  {
    "id": "xl-17",
    "name": "QTS - UPS (Union City)",
    "customer": "QTS",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 47,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-18",
    "name": "QTS - UPS (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 48,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-19",
    "name": "QTS - UPS (Litchfield Park)",
    "customer": "QTS",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "UPS",
    "quantity": 49,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -111.0937,
      34.0489
    ]
  },
  {
    "id": "xl-20",
    "name": "Equinix - PDU (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
    "quantity": 50,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-21",
    "name": "Equinix - PDU (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
    "quantity": 51,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-22",
    "name": "Equinix - PDU (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
    "quantity": 52,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-23",
    "name": "Vantage - UPS (San Antonio)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 53,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-24",
    "name": "STACK - CDU (Melbourne)",
    "customer": "STACK",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 54,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      144.9631,
      -37.8136
    ]
  },
  {
    "id": "xl-25",
    "name": "QTS - Li-ion Battery (Union City)",
    "customer": "QTS",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "Li-ion Battery",
    "quantity": 55,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-26",
    "name": "QTS - Li-ion Battery (Union City)",
    "customer": "QTS",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "Li-ion Battery",
    "quantity": 56,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-27",
    "name": "Vantage - UPS (San Antonio)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 57,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-28",
    "name": "Vantage - UPS (Shackelford County)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "Shackelford County",
    "category": "UPS",
    "quantity": 58,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-29",
    "name": "QTS - UPS (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 59,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-30",
    "name": "QTS - UPS (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 60,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-31",
    "name": "QTS - PDU (Union City)",
    "customer": "QTS",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "PDU",
    "quantity": 61,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-32",
    "name": "Equinix - STS (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "STS",
    "quantity": 62,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-33",
    "name": "QTS - Li-ion Battery (Minden)",
    "customer": "QTS",
    "country": "US",
    "state": "LA",
    "city": "Minden",
    "category": "Li-ion Battery",
    "quantity": 63,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -91.9623,
      30.9843
    ]
  },
  {
    "id": "xl-34",
    "name": "Equinix - PDU (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
    "quantity": 64,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-35",
    "name": "QTS - PDU (Standston)",
    "customer": "QTS",
    "country": "US",
    "state": "VA",
    "city": "Standston",
    "category": "PDU",
    "quantity": 65,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-36",
    "name": "Coreweave - CDU (Weehawken)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NJ",
    "city": "Weehawken",
    "category": "CDU",
    "quantity": 66,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -74.4057,
      40.0583
    ]
  },
  {
    "id": "xl-37",
    "name": "Coreweave - CDU (Kenilworth)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "CDU",
    "quantity": 67,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -74.4057,
      40.0583
    ]
  },
  {
    "id": "xl-38",
    "name": "QTS - Li-ion Battery (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "Li-ion Battery",
    "quantity": 68,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-39",
    "name": "QTS - Li-ion Battery (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "Li-ion Battery",
    "quantity": 69,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-40",
    "name": "QTS - Li-ion Battery (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 70,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-41",
    "name": "QTS - Li-ion Battery (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 71,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-42",
    "name": "Equinix - PDU (Torrance)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "Torrance",
    "category": "PDU",
    "quantity": 72,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-43",
    "name": "Equinix - PDU (Torrance)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "Torrance",
    "category": "PDU",
    "quantity": 73,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-44",
    "name": "QTS - PDU (Litchfield Park)",
    "customer": "QTS",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "PDU",
    "quantity": 74,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -111.0937,
      34.0489
    ]
  },
  {
    "id": "xl-45",
    "name": "Vantage - UPS (San Antonio)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 75,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-46",
    "name": "Vantage - UPS (San Antonio)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 76,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-47",
    "name": "Vantage - UPS (Shackelford County)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "Shackelford County",
    "category": "UPS",
    "quantity": 77,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-48",
    "name": "QTS - STS (Standston)",
    "customer": "QTS",
    "country": "US",
    "state": "VA",
    "city": "Standston",
    "category": "STS",
    "quantity": 78,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-49",
    "name": "Equinix - PDU (Torrance)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "Torrance",
    "category": "PDU",
    "quantity": 79,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-50",
    "name": "Equinix - Cooling (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "Cooling",
    "quantity": 80,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-51",
    "name": "Equinix - Cooling (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "Cooling",
    "quantity": 81,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-52",
    "name": "Equinix - STS (Chicago)",
    "customer": "Equinix",
    "country": "US",
    "state": "IL",
    "city": "Chicago",
    "category": "STS",
    "quantity": 82,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-53",
    "name": "QTS - PDU (Litchfield Park)",
    "customer": "QTS",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "PDU",
    "quantity": 83,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -111.0937,
      34.0489
    ]
  },
  {
    "id": "xl-54",
    "name": "QTS - UPS (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 84,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-55",
    "name": "Vantage - UPS (San Antonio)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 85,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-56",
    "name": "Vantage - UPS (Shackelford County)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "Shackelford County",
    "category": "UPS",
    "quantity": 86,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-57",
    "name": "QTS - UPS (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 87,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-58",
    "name": "QTS - UPS (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 88,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-59",
    "name": "QTS - PDU (Litchfield Park)",
    "customer": "QTS",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "PDU",
    "quantity": 89,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -111.0937,
      34.0489
    ]
  },
  {
    "id": "xl-60",
    "name": "QTS - UPS (Litchfield Park)",
    "customer": "QTS",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "UPS",
    "quantity": 90,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -111.0937,
      34.0489
    ]
  },
  {
    "id": "xl-61",
    "name": "QTS - Li-ion Battery (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 91,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-62",
    "name": "QTS - Li-ion Battery (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 92,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-63",
    "name": "QTS - Li-ion Battery (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "Li-ion Battery",
    "quantity": 93,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-64",
    "name": "QTS - Li-ion Battery (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "Li-ion Battery",
    "quantity": 94,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-65",
    "name": "QTS - UPS (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 95,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-66",
    "name": "QTS - UPS (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 96,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-67",
    "name": "QTS - STS (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "STS",
    "quantity": 97,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-68",
    "name": "QTS - STS (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "STS",
    "quantity": 98,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-69",
    "name": "Vantage - UPS (Shackelford County)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "Shackelford County",
    "category": "UPS",
    "quantity": 99,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-70",
    "name": "Coreweave - CDU (Warren)",
    "customer": "Coreweave",
    "country": "US",
    "state": "OH",
    "city": "Warren",
    "category": "CDU",
    "quantity": 100,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -82.9071,
      40.4173
    ]
  },
  {
    "id": "xl-71",
    "name": "Equinix - UPS (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "UPS",
    "quantity": 101,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-72",
    "name": "Equinix - UPS (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "UPS",
    "quantity": 102,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-73",
    "name": "Equinix - UPS (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "UPS",
    "quantity": 103,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-74",
    "name": "Equinix - UPS (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "UPS",
    "quantity": 104,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-75",
    "name": "Equinix - UPS (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "UPS",
    "quantity": 105,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-76",
    "name": "Equinix - STS (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "STS",
    "quantity": 106,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-77",
    "name": "Equinix - STS (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "STS",
    "quantity": 107,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-78",
    "name": "Equinix - STS (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "STS",
    "quantity": 108,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-79",
    "name": "Equinix - STS (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "STS",
    "quantity": 109,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-80",
    "name": "QTS - UPS (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 110,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-81",
    "name": "QTS - UPS (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 111,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-82",
    "name": "QTS - UPS (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 112,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-83",
    "name": "QTS - UPS (Union City)",
    "customer": "QTS",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 113,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-84",
    "name": "QTS - Li-ion Battery (Union City)",
    "customer": "QTS",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "Li-ion Battery",
    "quantity": 114,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-85",
    "name": "STACK - CDU (Melbourne)",
    "customer": "STACK",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 115,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      144.9631,
      -37.8136
    ]
  },
  {
    "id": "xl-86",
    "name": "Equinix - Cooling (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "Cooling",
    "quantity": 116,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-87",
    "name": "Equinix - Cooling (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "Cooling",
    "quantity": 117,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-88",
    "name": "Equinix - Cooling (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "Cooling",
    "quantity": 118,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-89",
    "name": "Equinix - Cooling (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "Cooling",
    "quantity": 119,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-90",
    "name": "Equinix - Cooling (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "Cooling",
    "quantity": 120,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-91",
    "name": "Equinix - Cooling (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "Cooling",
    "quantity": 121,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-92",
    "name": "Equinix - Li-ion Battery (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "Li-ion Battery",
    "quantity": 122,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-93",
    "name": "Equinix - Li-ion Battery (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "Li-ion Battery",
    "quantity": 123,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-94",
    "name": "Equinix - Li-ion Battery (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "Li-ion Battery",
    "quantity": 124,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-95",
    "name": "Equinix - Li-ion Battery (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "Li-ion Battery",
    "quantity": 125,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-96",
    "name": "Vantage - UPS (Shackelford County)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "Shackelford County",
    "category": "UPS",
    "quantity": 126,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-97",
    "name": "Vantage - UPS (Shackelford County)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "Shackelford County",
    "category": "UPS",
    "quantity": 127,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-98",
    "name": "Equinix - STS (Chicago)",
    "customer": "Equinix",
    "country": "US",
    "state": "IL",
    "city": "Chicago",
    "category": "STS",
    "quantity": 128,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-99",
    "name": "Equinix - STS (Chicago)",
    "customer": "Equinix",
    "country": "US",
    "state": "IL",
    "city": "Chicago",
    "category": "STS",
    "quantity": 129,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-100",
    "name": "Equinix - STS (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "STS",
    "quantity": 130,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-101",
    "name": "Equinix - STS (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "STS",
    "quantity": 131,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-102",
    "name": "Equinix - STS (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "STS",
    "quantity": 132,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-103",
    "name": "Equinix - STS (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "STS",
    "quantity": 133,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-104",
    "name": "Equinix - STS (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "STS",
    "quantity": 134,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-105",
    "name": "Equinix - STS (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "STS",
    "quantity": 135,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-106",
    "name": "Equinix - STS (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "STS",
    "quantity": 136,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-107",
    "name": "Equinix - STS (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "STS",
    "quantity": 137,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-108",
    "name": "Equinix - STS (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "STS",
    "quantity": 138,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-109",
    "name": "Equinix - PDU (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "PDU",
    "quantity": 139,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-110",
    "name": "Equinix - PDU (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "PDU",
    "quantity": 140,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-111",
    "name": "Equinix - PDU (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "PDU",
    "quantity": 141,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-112",
    "name": "Equinix - PDU (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "PDU",
    "quantity": 142,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-113",
    "name": "Equinix - PDU (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "PDU",
    "quantity": 143,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-114",
    "name": "Equinix - PDU (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "PDU",
    "quantity": 144,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-115",
    "name": "Equinix - PDU (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "PDU",
    "quantity": 145,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-116",
    "name": "Equinix - PDU (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "PDU",
    "quantity": 146,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-117",
    "name": "Equinix - STS (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "STS",
    "quantity": 147,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -119.4179,
      36.7783
    ]
  },
  {
    "id": "xl-118",
    "name": "Equinix - STS (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "STS",
    "quantity": 148,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-119",
    "name": "Equinix - STS (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "STS",
    "quantity": 149,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-120",
    "name": "Equinix - STS (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "STS",
    "quantity": 150,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-121",
    "name": "QTS - UPS (Litchfield Park)",
    "customer": "QTS",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "UPS",
    "quantity": 151,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -111.0937,
      34.0489
    ]
  },
  {
    "id": "xl-122",
    "name": "QTS - Li-ion Battery (Litchfield Park)",
    "customer": "QTS",
    "country": "US",
    "state": "AZ",
    "city": "Litchfield Park",
    "category": "Li-ion Battery",
    "quantity": 152,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -111.0937,
      34.0489
    ]
  },
  {
    "id": "xl-123",
    "name": "QTS - UPS (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 153,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-124",
    "name": "QTS - PDU (Union City)",
    "customer": "QTS",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "PDU",
    "quantity": 154,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-125",
    "name": "QTS - PDU (Union City)",
    "customer": "QTS",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "PDU",
    "quantity": 155,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-126",
    "name": "Coreweave - CDU (Cheyenne)",
    "customer": "Coreweave",
    "country": "US",
    "state": "WY",
    "city": "Cheyenne",
    "category": "CDU",
    "quantity": 156,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -107.2903,
      43.076
    ]
  },
  {
    "id": "xl-127",
    "name": "QTS - Li-ion Battery (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "Li-ion Battery",
    "quantity": 157,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-128",
    "name": "QTS - Li-ion Battery (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "Li-ion Battery",
    "quantity": 158,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-129",
    "name": "QTS - UPS (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 159,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-130",
    "name": "QTS - UPS (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 160,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-131",
    "name": "Edged Energy - UPS (New Albany)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "OH",
    "city": "New Albany",
    "category": "UPS",
    "quantity": 161,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -82.9071,
      40.4173
    ]
  },
  {
    "id": "xl-132",
    "name": "Edged Energy - UPS (New Albany)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "OH",
    "city": "New Albany",
    "category": "UPS",
    "quantity": 162,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -82.9071,
      40.4173
    ]
  },
  {
    "id": "xl-133",
    "name": "Edged Energy - Li-ion Battery (New Albany)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "OH",
    "city": "New Albany",
    "category": "Li-ion Battery",
    "quantity": 163,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -82.9071,
      40.4173
    ]
  },
  {
    "id": "xl-134",
    "name": "Edged Energy - Li-ion Battery (New Albany)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "OH",
    "city": "New Albany",
    "category": "Li-ion Battery",
    "quantity": 164,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -82.9071,
      40.4173
    ]
  },
  {
    "id": "xl-135",
    "name": "Equinix - STS (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "STS",
    "quantity": 165,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-136",
    "name": "Equinix - STS (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "STS",
    "quantity": 166,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-137",
    "name": "Equinix - STS (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "STS",
    "quantity": 167,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-138",
    "name": "QTS - Li-ion Battery (Union City)",
    "customer": "QTS",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "Li-ion Battery",
    "quantity": 168,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-139",
    "name": "QTS - UPS (Union City)",
    "customer": "QTS",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "UPS",
    "quantity": 169,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-140",
    "name": "QTS - Li-ion Battery (Union City)",
    "customer": "QTS",
    "country": "US",
    "state": "GA",
    "city": "Union City",
    "category": "Li-ion Battery",
    "quantity": 170,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-141",
    "name": "Edged Energy - UPS (Irving)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "TX",
    "city": "Irving",
    "category": "UPS",
    "quantity": 171,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-142",
    "name": "Edged Energy - UPS (Irving)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "TX",
    "city": "Irving",
    "category": "UPS",
    "quantity": 172,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-143",
    "name": "Vantage - UPS (Shackelford County)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "Shackelford County",
    "category": "UPS",
    "quantity": 173,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-144",
    "name": "Vantage - UPS (Shackelford County)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "Shackelford County",
    "category": "UPS",
    "quantity": 174,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-145",
    "name": "Coreweave - CDU (McCarran)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NV",
    "city": "McCarran",
    "category": "CDU",
    "quantity": 175,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -116.4194,
      38.8026
    ]
  },
  {
    "id": "xl-146",
    "name": "Coreweave - CDU (Kansas)",
    "customer": "Coreweave",
    "country": "US",
    "state": "KS",
    "city": "Kansas",
    "category": "CDU",
    "quantity": 176,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -98.4842,
      38.4988
    ]
  },
  {
    "id": "xl-147",
    "name": "Coreweave - CDU (Austin)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Austin",
    "category": "CDU",
    "quantity": 177,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-148",
    "name": "STACK - CDU (Melbourne)",
    "customer": "STACK",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 178,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      144.9631,
      -37.8136
    ]
  },
  {
    "id": "xl-149",
    "name": "Coreweave - CDU (Phoenix)",
    "customer": "Coreweave",
    "country": "US",
    "state": "AZ",
    "city": "Phoenix",
    "category": "CDU",
    "quantity": 179,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -111.0937,
      34.0489
    ]
  },
  {
    "id": "xl-150",
    "name": "Coreweave - CDU (Chester)",
    "customer": "Coreweave",
    "country": "US",
    "state": "VA",
    "city": "Chester",
    "category": "CDU",
    "quantity": 180,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-151",
    "name": "Coreweave - CDU (Chester)",
    "customer": "Coreweave",
    "country": "US",
    "state": "VA",
    "city": "Chester",
    "category": "CDU",
    "quantity": 181,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-152",
    "name": "Coreweave - CDU (Chester)",
    "customer": "Coreweave",
    "country": "US",
    "state": "VA",
    "city": "Chester",
    "category": "CDU",
    "quantity": 182,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-153",
    "name": "Coreweave - CDU (Chester)",
    "customer": "Coreweave",
    "country": "US",
    "state": "VA",
    "city": "Chester",
    "category": "CDU",
    "quantity": 183,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-154",
    "name": "Coreweave - CDU (Chester)",
    "customer": "Coreweave",
    "country": "US",
    "state": "VA",
    "city": "Chester",
    "category": "CDU",
    "quantity": 184,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -78.6569,
      37.4316
    ]
  },
  {
    "id": "xl-155",
    "name": "Coreweave - CDU (Kenilworth)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "CDU",
    "quantity": 185,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -74.4057,
      40.0583
    ]
  },
  {
    "id": "xl-156",
    "name": "Edged Energy - UPS (Atlanta)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "UPS",
    "quantity": 186,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-157",
    "name": "Edged Energy - UPS (Atlanta)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "UPS",
    "quantity": 187,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-158",
    "name": "Coreweave - CDU (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 188,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -101.002,
      47.5502
    ]
  },
  {
    "id": "xl-159",
    "name": "Galaxy Digital - UPS (Afton)",
    "customer": "Galaxy Digital",
    "country": "US",
    "state": "TX",
    "city": "Afton",
    "category": "UPS",
    "quantity": 189,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-160",
    "name": "Galaxy Digital - UPS (Afton)",
    "customer": "Galaxy Digital",
    "country": "US",
    "state": "TX",
    "city": "Afton",
    "category": "UPS",
    "quantity": 190,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-161",
    "name": "Coreweave - CDU (Lubbock)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Lubbock",
    "category": "CDU",
    "quantity": 191,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-162",
    "name": "Coreweave - CDU (Cheyenne)",
    "customer": "Coreweave",
    "country": "US",
    "state": "WY",
    "city": "Cheyenne",
    "category": "CDU",
    "quantity": 192,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -107.2903,
      43.076
    ]
  },
  {
    "id": "xl-163",
    "name": "Galaxy Digital - UPS (Afton)",
    "customer": "Galaxy Digital",
    "country": "US",
    "state": "TX",
    "city": "Afton",
    "category": "UPS",
    "quantity": 193,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-164",
    "name": "Galaxy Digital - UPS (Afton)",
    "customer": "Galaxy Digital",
    "country": "US",
    "state": "TX",
    "city": "Afton",
    "category": "UPS",
    "quantity": 194,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-165",
    "name": "Galaxy Digital - Li-ion Battery (Afton)",
    "customer": "Galaxy Digital",
    "country": "US",
    "state": "TX",
    "city": "Afton",
    "category": "Li-ion Battery",
    "quantity": 195,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-166",
    "name": "STACK - CDU (Melbourne)",
    "customer": "STACK",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 196,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      144.9631,
      -37.8136
    ]
  },
  {
    "id": "xl-167",
    "name": "Coreweave - CDU (Elk Grove)",
    "customer": "Coreweave",
    "country": "US",
    "state": "IL",
    "city": "Elk Grove",
    "category": "CDU",
    "quantity": 197,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-168",
    "name": "Edged Energy - UPS (Atlanta)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "UPS",
    "quantity": 198,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-169",
    "name": "Edged Energy - UPS (Atlanta)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "UPS",
    "quantity": 199,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-170",
    "name": "Coreweave - CDU (Elk Grove)",
    "customer": "Coreweave",
    "country": "US",
    "state": "IL",
    "city": "Elk Grove",
    "category": "CDU",
    "quantity": 200,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-171",
    "name": "Edged Energy - UPS (Atlanta)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "UPS",
    "quantity": 201,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-172",
    "name": "Edged Energy - UPS (Aurora)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "IL",
    "city": "Aurora",
    "category": "UPS",
    "quantity": 202,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-173",
    "name": "Edged Energy - UPS (Atlanta)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "UPS",
    "quantity": 203,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-174",
    "name": "Edged Energy - UPS (Aurora)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "IL",
    "city": "Aurora",
    "category": "UPS",
    "quantity": 204,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-175",
    "name": "Coreweave - CDU (Elk Grove)",
    "customer": "Coreweave",
    "country": "US",
    "state": "IL",
    "city": "Elk Grove",
    "category": "CDU",
    "quantity": 205,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-176",
    "name": "Coreweave - CDU (Lubbock)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Lubbock",
    "category": "CDU",
    "quantity": 206,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-177",
    "name": "Coreweave - CDU (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 207,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -101.002,
      47.5502
    ]
  },
  {
    "id": "xl-178",
    "name": "STACK - CDU (Melbourne)",
    "customer": "STACK",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 208,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      144.9631,
      -37.8136
    ]
  },
  {
    "id": "xl-179",
    "name": "Coreweave - CDU (Kouvola)",
    "customer": "Coreweave",
    "country": "FI",
    "state": "Kymenlaakso",
    "city": "Kouvola",
    "category": "CDU",
    "quantity": 209,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      25.7482,
      61.9241
    ]
  },
  {
    "id": "xl-180",
    "name": "Coreweave - CDU (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 210,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -101.002,
      47.5502
    ]
  },
  {
    "id": "xl-181",
    "name": "Coreweave - CDU (Denver)",
    "customer": "Coreweave",
    "country": "US",
    "state": "CO",
    "city": "Denver",
    "category": "CDU",
    "quantity": 211,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -105.7821,
      39.5501
    ]
  },
  {
    "id": "xl-182",
    "name": "Coreweave - CDU (Plano)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Plano",
    "category": "CDU",
    "quantity": 212,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-183",
    "name": "Coreweave - CDU (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 213,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -101.002,
      47.5502
    ]
  },
  {
    "id": "xl-184",
    "name": "Coreweave - CDU (Fort Stockton)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Fort Stockton",
    "category": "CDU",
    "quantity": 214,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-185",
    "name": "PDG - UPS (Saitama)",
    "customer": "PDG",
    "country": "JP",
    "state": "Tokyo",
    "city": "Saitama",
    "category": "UPS",
    "quantity": 215,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      139.6503,
      35.6762
    ]
  },
  {
    "id": "xl-186",
    "name": "Coreweave - CDU (Ellenwood)",
    "customer": "Coreweave",
    "country": "US",
    "state": "GA",
    "city": "Ellenwood",
    "category": "CDU",
    "quantity": 216,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-187",
    "name": "Coreweave - CDU (Kouvola)",
    "customer": "Coreweave",
    "country": "FI",
    "state": "Kymenlaakso",
    "city": "Kouvola",
    "category": "CDU",
    "quantity": 217,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      25.7482,
      61.9241
    ]
  },
  {
    "id": "xl-188",
    "name": "Coreweave - CDU (Lubbock)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Lubbock",
    "category": "CDU",
    "quantity": 218,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-189",
    "name": "Coreweave - CDU (McCarran)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NV",
    "city": "McCarran",
    "category": "CDU",
    "quantity": 219,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -116.4194,
      38.8026
    ]
  },
  {
    "id": "xl-190",
    "name": "Coreweave - CDU (Atlanta)",
    "customer": "Coreweave",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "CDU",
    "quantity": 220,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -83.222,
      32.1656
    ]
  },
  {
    "id": "xl-191",
    "name": "Coreweave - CDU (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 221,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -101.002,
      47.5502
    ]
  },
  {
    "id": "xl-192",
    "name": "Edged Energy - UPS (Aurora)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "IL",
    "city": "Aurora",
    "category": "UPS",
    "quantity": 222,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-193",
    "name": "Edged Energy - UPS (Aurora)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "IL",
    "city": "Aurora",
    "category": "UPS",
    "quantity": 223,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-194",
    "name": "Coreweave - CDU (Aurora)",
    "customer": "Coreweave",
    "country": "US",
    "state": "IL",
    "city": "Aurora",
    "category": "CDU",
    "quantity": 224,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-195",
    "name": "Coreweave - CDU (Lubbock)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Lubbock",
    "category": "CDU",
    "quantity": 225,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -99.9018,
      31.9686
    ]
  },
  {
    "id": "xl-196",
    "name": "Coreweave - CDU (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 226,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-02-15",
    "coordinates": [
      -101.002,
      47.5502
    ]
  },
  {
    "id": "xl-197",
    "name": "Edged Energy - UPS (Aurora)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "IL",
    "city": "Aurora",
    "category": "UPS",
    "quantity": 227,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-198",
    "name": "Edged Energy - UPS (Aurora)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "IL",
    "city": "Aurora",
    "category": "UPS",
    "quantity": 228,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-199",
    "name": "Edged Energy - UPS (Aurora)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "IL",
    "city": "Aurora",
    "category": "UPS",
    "quantity": 229,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -89.3985,
      40.6331
    ]
  },
  {
    "id": "xl-200",
    "name": "Edged Energy - UPS (Aurora)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "IL",
    "city": "Aurora",
    "category": "UPS",
    "quantity": 230,
    "status": "ongoing",
    "assignedPersonnel": [],
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -89.3985,
      40.6331
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
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
    "startDate": "2026-03-01",
    "deadline": "2026-05-01",
    "coordinates": [
      -101.002,
      47.5502
    ]
  }
];

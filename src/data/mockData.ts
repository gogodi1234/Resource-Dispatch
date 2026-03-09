
export interface SkillCapacity {
  category: string;
  dailyCapacity: number;
}

export interface Personnel {
  id: string;
  name: string;
  role: string;
  skillCapacities: SkillCapacity[];
  allowedRegions: string[];
  unavailableDates: string[];
  workload: number;
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
  {
    "id": "p1",
    "name": "ysong.han",
    "role": "Sr. Service Engineer",
    "skillCapacities": [
      {
        "category": "UPS",
        "dailyCapacity": 10
      },
      {
        "category": "Cooling",
        "dailyCapacity": 8
      }
    ],
    "allowedRegions": [
      "APAC",
      "Americas"
    ],
    "unavailableDates": [],
    "workload": 0
  },
  {
    "id": "p2",
    "name": "Jade Yue",
    "role": "Service Engineer",
    "skillCapacities": [
      {
        "category": "Valve",
        "dailyCapacity": 12
      },
      {
        "category": "Other",
        "dailyCapacity": 5
      }
    ],
    "allowedRegions": [
      "APAC"
    ],
    "unavailableDates": [
      "2026-03-10",
      "2026-03-11"
    ],
    "workload": 0
  },
  {
    "id": "p3",
    "name": "Tom Lee",
    "role": "Maintenance Tech",
    "skillCapacities": [
      {
        "category": "Battery",
        "dailyCapacity": 15
      },
      {
        "category": "Other",
        "dailyCapacity": 10
      }
    ],
    "allowedRegions": [
      "Americas",
      "EMEA"
    ],
    "unavailableDates": [],
    "workload": 0
  },
  {
    "id": "p4",
    "name": "Fred Li",
    "role": "Field Engineer",
    "skillCapacities": [
      {
        "category": "CDU",
        "dailyCapacity": 12
      },
      {
        "category": "UPS",
        "dailyCapacity": 6
      }
    ],
    "allowedRegions": [
      "EMEA",
      "APAC"
    ],
    "unavailableDates": [
      "2026-04-05"
    ],
    "workload": 0
  },
  {
    "id": "p5",
    "name": "Bojan Z.",
    "role": "Sr. Technician",
    "skillCapacities": [
      {
        "category": "UPS",
        "dailyCapacity": 9
      },
      {
        "category": "Valve",
        "dailyCapacity": 15
      }
    ],
    "allowedRegions": [
      "EMEA"
    ],
    "unavailableDates": [],
    "workload": 0
  },
  {
    "id": "p6",
    "name": "Ysong",
    "role": "Service Manager",
    "skillCapacities": [
      {
        "category": "Other",
        "dailyCapacity": 5
      },
      {
        "category": "CDU",
        "dailyCapacity": 5
      }
    ],
    "allowedRegions": [
      "Americas",
      "APAC",
      "EMEA"
    ],
    "unavailableDates": [],
    "workload": 0
  }
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
    "quantity": 29,
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
    "quantity": 20,
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
    "quantity": 17,
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
    "quantity": 17,
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
    "quantity": 10,
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
    "quantity": 35,
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
    "quantity": 18,
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
    "id": "xl-8",
    "name": "QTS - UPS (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 12,
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
    "quantity": 27,
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
    "quantity": 10,
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
    "quantity": 99,
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
    "quantity": 23,
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
    "quantity": 29,
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
    "id": "xl-15",
    "name": "QTS - Li-ion Battery (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 81,
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
    "quantity": 84,
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
    "quantity": 20,
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
    "quantity": 18,
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
    "quantity": 28,
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
    "quantity": 88,
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
    "quantity": 88,
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
    "id": "xl-22",
    "name": "Equinix - PDU (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "PDU",
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
    "id": "xl-23",
    "name": "Vantage - UPS (San Antonio)",
    "customer": "Vantage",
    "country": "US",
    "state": "TX",
    "city": "San Antonio",
    "category": "UPS",
    "quantity": 30,
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
    "quantity": 48,
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
    "quantity": 79,
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
    "quantity": 91,
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
    "quantity": 30,
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
    "quantity": 25,
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
    "id": "xl-29",
    "name": "QTS - UPS (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "UPS",
    "quantity": 17,
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
    "quantity": 29,
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
    "quantity": 94,
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
    "id": "xl-33",
    "name": "QTS - Li-ion Battery (Minden)",
    "customer": "QTS",
    "country": "US",
    "state": "LA",
    "city": "Minden",
    "category": "Li-ion Battery",
    "quantity": 75,
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
    "id": "xl-35",
    "name": "QTS - PDU (Standston)",
    "customer": "QTS",
    "country": "US",
    "state": "VA",
    "city": "Standston",
    "category": "PDU",
    "quantity": 51,
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
    "id": "xl-36",
    "name": "Coreweave - CDU (Weehawken)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NJ",
    "city": "Weehawken",
    "category": "CDU",
    "quantity": 22,
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
    "quantity": 21,
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
    "quantity": 57,
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
    "quantity": 63,
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
    "id": "xl-41",
    "name": "QTS - Li-ion Battery (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "Li-ion Battery",
    "quantity": 61,
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
    "quantity": 59,
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
    "id": "xl-43",
    "name": "Equinix - PDU (Torrance)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "Torrance",
    "category": "PDU",
    "quantity": 50,
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
    "quantity": 54,
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
    "quantity": 26,
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
    "quantity": 19,
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
    "quantity": 23,
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
    "quantity": 57,
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
    "quantity": 69,
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
    "id": "xl-50",
    "name": "Equinix - Cooling (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "Cooling",
    "quantity": 27,
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
    "quantity": 39,
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
    "quantity": 52,
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
    "quantity": 70,
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
    "quantity": 10,
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
    "quantity": 28,
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
    "quantity": 23,
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
    "id": "xl-57",
    "name": "QTS - UPS (Dallas)",
    "customer": "QTS",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "UPS",
    "quantity": 24,
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
    "quantity": 15,
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
    "quantity": 59,
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
    "quantity": 13,
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
    "quantity": 96,
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
    "quantity": 86,
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
    "quantity": 62,
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
    "id": "xl-64",
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
    "quantity": 25,
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
    "quantity": 13,
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
    "quantity": 63,
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
    "quantity": 73,
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
    "quantity": 15,
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
    "quantity": 23,
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
    "id": "xl-71",
    "name": "Equinix - UPS (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "UPS",
    "quantity": 15,
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
    "quantity": 30,
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
    "quantity": 25,
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
    "quantity": 19,
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
    "quantity": 11,
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
    "quantity": 65,
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
    "quantity": 59,
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
    "id": "xl-78",
    "name": "Equinix - STS (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "STS",
    "quantity": 54,
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
    "quantity": 60,
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
    "quantity": 18,
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
    "quantity": 13,
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
    "quantity": 20,
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
    "quantity": 17,
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
    "quantity": 85,
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
    "id": "xl-85",
    "name": "STACK - CDU (Melbourne)",
    "customer": "STACK",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 41,
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
    "quantity": 22,
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
    "quantity": 49,
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
    "quantity": 43,
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
    "quantity": 46,
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
    "quantity": 49,
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
    "quantity": 33,
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
    "id": "xl-92",
    "name": "Equinix - Li-ion Battery (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "Li-ion Battery",
    "quantity": 62,
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
    "quantity": 99,
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
    "quantity": 59,
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
    "quantity": 58,
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
    "quantity": 14,
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
    "quantity": 20,
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
    "quantity": 99,
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
    "id": "xl-99",
    "name": "Equinix - STS (Chicago)",
    "customer": "Equinix",
    "country": "US",
    "state": "IL",
    "city": "Chicago",
    "category": "STS",
    "quantity": 57,
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
    "quantity": 98,
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
    "quantity": 63,
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
    "id": "xl-103",
    "name": "Equinix - STS (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "STS",
    "quantity": 81,
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
    "quantity": 61,
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
    "id": "xl-106",
    "name": "Equinix - STS (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "STS",
    "quantity": 54,
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
    "id": "xl-108",
    "name": "Equinix - STS (Dallas)",
    "customer": "Equinix",
    "country": "US",
    "state": "TX",
    "city": "Dallas",
    "category": "STS",
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
    "id": "xl-109",
    "name": "Equinix - PDU (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "PDU",
    "quantity": 91,
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
    "quantity": 92,
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
    "quantity": 55,
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
    "quantity": 89,
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
    "id": "xl-113",
    "name": "Equinix - PDU (San Jose)",
    "customer": "Equinix",
    "country": "US",
    "state": "CA",
    "city": "San Jose",
    "category": "PDU",
    "quantity": 66,
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
    "quantity": 82,
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
    "quantity": 51,
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
    "quantity": 100,
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
    "quantity": 81,
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
    "quantity": 66,
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
    "quantity": 56,
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
    "id": "xl-120",
    "name": "Equinix - STS (Ashburn)",
    "customer": "Equinix",
    "country": "US",
    "state": "VA",
    "city": "Ashburn",
    "category": "STS",
    "quantity": 54,
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
    "quantity": 15,
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
    "quantity": 84,
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
    "quantity": 19,
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
    "quantity": 83,
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
    "quantity": 71,
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
    "quantity": 36,
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
    "id": "xl-127",
    "name": "QTS - Li-ion Battery (New Century)",
    "customer": "QTS",
    "country": "US",
    "state": "KS",
    "city": "New Century",
    "category": "Li-ion Battery",
    "quantity": 61,
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
    "quantity": 73,
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
    "quantity": 22,
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
    "quantity": 19,
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
    "quantity": 28,
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
    "quantity": 25,
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
    "quantity": 64,
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
    "id": "xl-134",
    "name": "Edged Energy - Li-ion Battery (New Albany)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "OH",
    "city": "New Albany",
    "category": "Li-ion Battery",
    "quantity": 61,
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
    "quantity": 50,
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
    "quantity": 73,
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
    "quantity": 100,
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
    "quantity": 53,
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
    "quantity": 18,
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
    "quantity": 100,
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
    "id": "xl-141",
    "name": "Edged Energy - UPS (Irving)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "TX",
    "city": "Irving",
    "category": "UPS",
    "quantity": 20,
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
    "quantity": 29,
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
    "quantity": 20,
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
    "quantity": 27,
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
    "quantity": 36,
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
    "quantity": 45,
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
    "quantity": 27,
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
    "id": "xl-148",
    "name": "STACK - CDU (Melbourne)",
    "customer": "STACK",
    "country": "AU",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "CDU",
    "quantity": 50,
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
    "quantity": 41,
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
    "quantity": 21,
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
    "quantity": 28,
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
    "quantity": 34,
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
    "quantity": 50,
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
    "quantity": 49,
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
    "id": "xl-155",
    "name": "Coreweave - CDU (Kenilworth)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NJ",
    "city": "Kenilworth",
    "category": "CDU",
    "quantity": 24,
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
    "quantity": 28,
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
    "quantity": 14,
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
    "quantity": 41,
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
    "quantity": 22,
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
    "quantity": 21,
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
    "quantity": 23,
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
    "id": "xl-162",
    "name": "Coreweave - CDU (Cheyenne)",
    "customer": "Coreweave",
    "country": "US",
    "state": "WY",
    "city": "Cheyenne",
    "category": "CDU",
    "quantity": 34,
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
    "quantity": 16,
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
    "quantity": 16,
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
    "quantity": 86,
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
    "quantity": 42,
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
    "quantity": 45,
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
    "quantity": 21,
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
    "id": "xl-169",
    "name": "Edged Energy - UPS (Atlanta)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "UPS",
    "quantity": 12,
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
    "quantity": 34,
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
    "quantity": 28,
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
    "quantity": 19,
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
    "quantity": 25,
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
    "quantity": 23,
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
    "quantity": 25,
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
    "id": "xl-176",
    "name": "Coreweave - CDU (Lubbock)",
    "customer": "Coreweave",
    "country": "US",
    "state": "TX",
    "city": "Lubbock",
    "category": "CDU",
    "quantity": 30,
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
    "quantity": 48,
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
    "quantity": 36,
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
    "quantity": 50,
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
    "quantity": 48,
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
    "quantity": 20,
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
    "quantity": 20,
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
    "id": "xl-183",
    "name": "Coreweave - CDU (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 49,
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
    "quantity": 32,
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
    "quantity": 29,
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
    "quantity": 44,
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
    "quantity": 36,
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
    "quantity": 28,
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
    "quantity": 42,
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
    "id": "xl-190",
    "name": "Coreweave - CDU (Atlanta)",
    "customer": "Coreweave",
    "country": "US",
    "state": "GA",
    "city": "Atlanta",
    "category": "CDU",
    "quantity": 45,
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
    "quantity": 22,
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
    "quantity": 10,
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
    "quantity": 21,
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
    "quantity": 41,
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
    "id": "xl-196",
    "name": "Coreweave - CDU (Ellendale)",
    "customer": "Coreweave",
    "country": "US",
    "state": "ND",
    "city": "Ellendale",
    "category": "CDU",
    "quantity": 20,
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
    "id": "xl-197",
    "name": "Edged Energy - UPS (Aurora)",
    "customer": "Edged Energy",
    "country": "US",
    "state": "IL",
    "city": "Aurora",
    "category": "UPS",
    "quantity": 30,
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
    "quantity": 12,
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
    "quantity": 22,
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
    "quantity": 24,
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
    "quantity": 132,
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
    "quantity": 167,
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
    "quantity": 259,
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
    "id": "xl-204",
    "name": "Coreweave - Valve (Warren)",
    "customer": "Coreweave",
    "country": "US",
    "state": "OH",
    "city": "Warren",
    "category": "Valve",
    "quantity": 288,
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
    "quantity": 253,
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
    "quantity": 299,
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
    "quantity": 155,
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
    "quantity": 175,
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
    "quantity": 116,
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
    "quantity": 214,
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
    "id": "xl-211",
    "name": "Coreweave - Valve (Chester)",
    "customer": "Coreweave",
    "country": "US",
    "state": "VA",
    "city": "Chester",
    "category": "Valve",
    "quantity": 184,
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
    "quantity": 112,
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
    "quantity": 213,
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
    "quantity": 282,
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
    "quantity": 238,
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
    "quantity": 177,
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
    "quantity": 230,
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
    "id": "xl-218",
    "name": "Coreweave - Valve (Elk Grove)",
    "customer": "Coreweave",
    "country": "US",
    "state": "IL",
    "city": "Elk Grove",
    "category": "Valve",
    "quantity": 276,
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
    "id": "xl-220",
    "name": "Coreweave - Valve (Elk Grove)",
    "customer": "Coreweave",
    "country": "US",
    "state": "IL",
    "city": "Elk Grove",
    "category": "Valve",
    "quantity": 111,
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
    "quantity": 204,
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
    "quantity": 105,
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
    "quantity": 109,
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
    "quantity": 147,
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
    "id": "xl-225",
    "name": "Coreweave - Valve (Denver)",
    "customer": "Coreweave",
    "country": "US",
    "state": "CO",
    "city": "Denver",
    "category": "Valve",
    "quantity": 124,
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
    "quantity": 141,
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
    "quantity": 265,
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
    "quantity": 172,
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
    "quantity": 129,
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
    "id": "xl-232",
    "name": "Coreweave - Valve (McCarran)",
    "customer": "Coreweave",
    "country": "US",
    "state": "NV",
    "city": "McCarran",
    "category": "Valve",
    "quantity": 123,
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
    "quantity": 102,
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
    "quantity": 148,
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
    "quantity": 236,
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
    "quantity": 205,
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
    "quantity": 235,
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

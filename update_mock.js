import pkg from 'xlsx';
const { readFile, utils } = pkg;
import * as fs from 'fs';

const countryCoords = {
  'JP': [138.2529, 36.2048], 'US': [-95.7129, 37.0902], 'AU': [133.7751, -25.2744], 'FI': [25.7482, 61.9241],
  'TW': [120.9605, 23.6978], 'CN': [104.1954, 35.8617], 'DE': [10.4515, 51.1657], 'UK': [-3.4360, 55.3781]
};

const stateCoords = {
  'AL': [-86.9023, 32.3182], 'AK': [-154.4931, 63.5888], 'AZ': [-111.0937, 34.0489], 'AR': [-92.1999, 34.9697],
  'CA': [-119.4179, 36.7783], 'CO': [-105.7821, 39.5501], 'CT': [-72.7273, 41.6032], 'DE': [-75.5277, 38.9108],
  'FL': [-81.5158, 27.6648], 'GA': [-83.2220, 32.1656], 'HI': [-155.5828, 19.8968], 'ID': [-114.7420, 44.0682],
  'IL': [-89.3985, 40.6331], 'IN': [-86.1349, 40.2672], 'IA': [-93.0977, 41.8780], 'KS': [-98.4842, 38.4988],
  'KY': [-84.2700, 37.8393], 'LA': [-91.9623, 30.9843], 'ME': [-69.4455, 45.2538], 'MD': [-76.6413, 39.0458],
  'MA': [-71.3824, 42.4072], 'MI': [-84.5361, 43.3266], 'MN': [-94.6859, 46.7296], 'MS': [-89.3985, 32.3547],
  'MO': [-91.8318, 37.9643], 'MT': [-110.3626, 46.8797], 'NE': [-99.9018, 41.4925], 'NV': [-116.4194, 38.8026],
  'NH': [-71.5724, 43.1939], 'NJ': [-74.4057, 40.0583], 'NM': [-105.8701, 34.5199], 'NY': [-74.2179, 43.2994],
  'NC': [-79.0193, 35.7596], 'ND': [-101.0020, 47.5502], 'OH': [-82.9071, 40.4173], 'OK': [-97.0929, 35.0078],
  'OR': [-120.5542, 43.8041], 'PA': [-77.1945, 41.2033], 'RI': [-71.4774, 41.5801], 'SC': [-80.9450, 33.8361],
  'SD': [-99.9018, 44.3683], 'TN': [-86.5804, 35.5175], 'TX': [-99.9018, 31.9686], 'UT': [-111.0937, 39.3210],
  'VT': [-72.5778, 44.0459], 'VA': [-78.6569, 37.4316], 'WA': [-120.7401, 47.7511], 'WV': [-80.4549, 38.5976],
  'WI': [-89.6165, 43.7844], 'WY': [-107.2903, 43.0760],
  'Tokyo': [139.6503, 35.6762], 'Saitama': [139.6489, 35.8616], 'Victoria': [144.9631, -37.8136], 'NSW': [151.2093, -33.8688]
};

function excelDateToISO(serial) {
  if (!serial || isNaN(serial)) return '2026-06-01';
  const date = new Date((serial - 25569) * 86400 * 1000);
  return date.toISOString().split('T')[0];
}

try {
  const workbook = readFile('Deployment_data.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rawData = utils.sheet_to_json(sheet);

  const projects = rawData.map((row, i) => {
    const getVal = (key) => {
      const found = Object.keys(row).find(k => k.trim().toLowerCase() === key.toLowerCase());
      return found ? row[found] : undefined;
    };

    const country = String(getVal('Country') || '').trim();
    const state = String(getVal('State') || '').trim();
    const city = String(getVal('City') || '').trim();
    const deadline = excelDateToISO(getVal('Expected Startup/Cx\r\nDate'));
    
    // Calculate a start date (3 months before deadline)
    const d = new Date(deadline);
    d.setMonth(d.getMonth() - 3);
    const startDate = d.toISOString().split('T')[0];

    return {
      id: `xl-${i}`,
      name: `${getVal('Customer')} - ${getVal('Product Category')} (${city})`,
      customer: getVal('Customer') || 'Unknown',
      country, state, city,
      category: getVal('Product Category') || 'Other',
      quantity: parseInt(getVal('Planning  Qty')) || 0,
      status: 'planning', // Will be re-calculated by App.tsx
      assignedPersonnel: [],
      startDate, deadline,
      coordinates: stateCoords[state] || countryCoords[country] || [0, 0]
    };
  });

  const output = `
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
  status: 'planning' | 'ongoing' | 'completed' | 'on-hold';
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

export const mockProjects: Project[] = ${JSON.stringify(projects, null, 2)};
`;

  fs.writeFileSync('src/data/mockData.ts', output);
  console.log('Successfully written data to mockData.ts');
} catch (e) {
  console.error(e);
}

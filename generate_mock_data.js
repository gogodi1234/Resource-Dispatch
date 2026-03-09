import pkg from 'xlsx';
const { readFile, utils } = pkg;
import * as fs from 'fs';

const countryCoords = {
  'JP': [138.2529, 36.2048],
  'US': [-95.7129, 37.0902],
  'AU': [133.7751, -25.2744],
  'FI': [25.7482, 61.9241]
};

const stateCoords = {
  'Tokyo': [139.6503, 35.6762],
  'NJ': [-74.4057, 40.0583],
  'TX': [-99.9018, 31.9686],
  'GA': [-83.2220, 32.1656],
  'KS': [-98.4842, 38.4988],
  'UT': [-111.0937, 39.3210],
  'AZ': [-111.0937, 34.0489],
  'Victoria': [144.9631, -37.8136],
  'LA': [-91.9623, 30.9843],
  'VA': [-78.6569, 37.4316],
  'CA': [-119.4179, 36.7783],
  'IL': [-89.3985, 40.6331],
  'OH': [-82.9071, 40.4173],
  'WY': [-107.2903, 43.0760],
  'NV': [-116.4194, 38.8026],
  'ND': [-101.0020, 47.5502],
  'Kymenlaakso': [26.9458, 60.7384],
  'CO': [-105.7821, 39.5501],
  'NY': [-74.2179, 43.2994]
};

function excelDateToISO(serial) {
  if (!serial || isNaN(serial)) return '2026-12-31';
  const date = new Date((serial - 25569) * 86400 * 1000);
  return date.toISOString().split('T')[0];
}

function getStartDate(deadlineISO) {
  const d = new Date(deadlineISO);
  d.setMonth(d.getMonth() - 3); // 預設專案週期為 3 個月
  return d.toISOString().split('T')[0];
}

try {
  const workbook = readFile('Deployment_data.xlsx');
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const rawData = utils.sheet_to_json(worksheet);

  const personnelSet = new Set();
  const projects = rawData.map((row, index) => {
    const country = row['Country'];
    const state = row['State ']?.trim() || '';
    const city = row['City'] || '';
    const coords = stateCoords[state] || countryCoords[country] || [0, 0];
    
    const personnelStr = row[' Service Personnel'] || '';
    const assigned = personnelStr.split(',').map(p => p.trim()).filter(p => p);
    assigned.forEach(p => personnelSet.add(p));

    const deadline = excelDateToISO(row['Expected Startup/Cx\r\nDate']);
    const startDate = getStartDate(deadline);

    return {
      id: `xl-${index}`,
      name: `${row['Customer']} - ${row['Product Category']} (${row['Location Code'] || city})`,
      customer: row['Customer'],
      country: country,
      state: state,
      city: city,
      coordinates: coords,
      category: row['Product Category'],
      quantity: row['Planning  Qty'] || 0,
      status: 'ongoing',
      assignedPersonnel: assigned,
      startDate: startDate,
      deadline: deadline
    };
  });

  const personnel = Array.from(personnelSet).map((name) => ({
    id: name,
    name: name,
    role: 'Service Engineer',
    skills: ['Maintenance', 'Startup'],
    workload: 0 // 將由前端動態計算
  }));

  const output = `
export interface Personnel {
  id: string;
  name: string;
  role: string;
  skills: string[];
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

export const mockPersonnel: Personnel[] = ${JSON.stringify(personnel, null, 2)};

export const mockProjects: Project[] = ${JSON.stringify(projects, null, 2)};
`;

  fs.writeFileSync('src/data/mockData.ts', output);
  console.log('Successfully updated src/data/mockData.ts with city/state and dates');
} catch (error) {
  console.error('Error:', error);
}

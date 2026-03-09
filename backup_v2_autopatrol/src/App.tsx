import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import WorldMap from './components/WorldMap'
import ProjectDetails from './components/ProjectDetails'
import FilterBar from './components/FilterBar'
import AddModal from './components/AddModal'
import ProjectTable from './components/ProjectTable'
import { mockPersonnel } from './data/mockData'
import type { Project, Personnel } from './data/mockData'
import { List, Map as MapIcon, Box, Activity, AlertTriangle, Radio } from 'lucide-react'
import { isAfter, parseISO } from 'date-fns'
import * as XLSX from 'xlsx'

const countryCoords: Record<string, [number, number]> = {
  'JP': [138.2529, 36.2048], 'US': [-95.7129, 37.0902], 'AU': [133.7751, -25.2744], 'FI': [25.7482, 61.9241],
  'TW': [120.9605, 23.6978], 'CN': [104.1954, 35.8617], 'DE': [10.4515, 51.1657], 'UK': [-3.4360, 55.3781]
};

const stateCoords: Record<string, [number, number]> = {
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

function App() {
  const today = new Date(2026, 2, 5);

  const calculateStatus = useCallback((deadline: string): 'ongoing' | 'delay' => {
    const end = parseISO(deadline);
    if (isAfter(today, end)) return 'delay';
    return 'ongoing';
  }, [today]);

  const [projects, setProjects] = useState<Project[]>([]);
  const [personnel] = useState<Personnel[]>(mockPersonnel)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [viewMode, setViewMode] = useState<'map' | 'table'>('map')
  
  const [mapPosition, setMapPosition] = useState({ coordinates: [20, 10] as [number, number], zoom: 1 });
  const [isPatrolling, setIsPatrolling] = useState(true);
  const patrolIndexRef = useRef(0);
  const lastInteractionRef = useRef(Date.now());

  const [filters, setFilters] = useState({
    countries: [] as string[], categories: [] as string[], statuses: [] as string[]
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalInitialData, setModalInitialData] = useState<Project | null>(null)

  useEffect(() => {
    import('./data/mockData').then(m => {
      const withStatus = m.mockProjects.map(prj => ({ ...prj, status: calculateStatus(prj.deadline) }));
      setProjects(withStatus);
    });
  }, [calculateStatus]);

  useEffect(() => {
    const activeCountries = Array.from(new Set(projects.map(p => p.country))).filter(c => countryCoords[c]);
    if (activeCountries.length === 0 || !isPatrolling) return;

    const interval = setInterval(() => {
      if (Date.now() - lastInteractionRef.current < 30000) return;
      const nextCountry = activeCountries[patrolIndexRef.current % activeCountries.length];
      const coords = countryCoords[nextCountry];
      setMapPosition({ coordinates: coords, zoom: 2.5 });
      patrolIndexRef.current++;
    }, 15000);

    return () => clearInterval(interval);
  }, [projects, isPatrolling]);

  const handleInteraction = () => { lastInteractionRef.current = Date.now(); };

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchCountry = filters.countries.length === 0 || filters.countries.includes(project.country);
      const matchCategory = filters.categories.length === 0 || filters.categories.includes(project.category);
      const matchStatus = filters.statuses.length === 0 || filters.statuses.includes(project.status);
      return matchCountry && matchCategory && matchStatus;
    });
  }, [projects, filters]);

  const stats = useMemo(() => ({
    total: projects.length, active: projects.filter(p => p.status === 'ongoing').length,
    delayed: projects.filter(p => p.status === 'delay').length,
  }), [projects]);

  const runAutoAssign = useCallback((projectList: Project[], currentAllProjects: Project[]): Project[] => {
    return projectList.map(project => {
      if (project.assignedPersonnel.length > 0) return project;
      const scored = mockPersonnel.map(p => {
        const pProjects = currentAllProjects.filter(prj => prj.assignedPersonnel.includes(p.name));
        let score = 100 - Math.min(pProjects.length * 20, 100);
        if (pProjects.some(prj => prj.country === project.country)) score += 40;
        return { name: p.name, score };
      }).sort((a, b) => b.score - a.score);
      return { ...project, assignedPersonnel: [scored[0].name, scored[1].name] };
    });
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target?.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) as any[];
      const uploaded: Project[] = data.map((row, i) => {
        const getVal = (obj: any, key: string) => {
          const found = Object.keys(obj).find(k => k.trim().toLowerCase() === key.toLowerCase());
          return found ? obj[found] : undefined;
        };
        const startDate = getVal(row, 'StartDate') || '2026-01-01';
        const deadline = getVal(row, 'Deadline') || '2026-04-01';
        const country = getVal(row, 'Country') || 'US';
        const state = getVal(row, 'State') || '';
        return {
          id: `upload-${Date.now()}-${i}`,
          name: `${getVal(row, 'Customer')} - ${getVal(row, 'Category')} (${getVal(row, 'City') || ''})`,
          customer: getVal(row, 'Customer') || 'Unknown',
          country, state, city: getVal(row, 'City') || '',
          category: getVal(row, 'Category') || 'Other',
          quantity: parseInt(getVal(row, 'Quantity')) || 0,
          status: calculateStatus(deadline),
          assignedPersonnel: [],
          startDate, deadline,
          coordinates: stateCoords[state] || countryCoords[country] || [0, 0]
        };
      });
      const assigned = runAutoAssign(uploaded, [...uploaded, ...projects]);
      setProjects(prev => [...assigned, ...prev]);
    };
    reader.readAsBinaryString(file);
  };

  const handleAddOrUpdateProject = (project: Project) => {
    setProjects(prev => {
      const exists = prev.find(p => p.id === project.id);
      const withStatus = { ...project, status: calculateStatus(project.deadline) };
      const finalProject = exists ? withStatus : runAutoAssign([withStatus], [withStatus, ...prev])[0];
      if (exists) return prev.map(p => p.id === project.id ? finalProject : p);
      return [finalProject, ...prev];
    });
  };

  const handleMarkComplete = (projectId: string) => {
    setProjects(prev => prev.filter(p => p.id !== projectId));
    if (selectedProject?.id === projectId) setSelectedProject(null);
  };

  const BigStat = ({ icon: Icon, value, color, label }: any) => (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', padding: '1.25rem', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      <Icon size={28} color={color} style={{ marginBottom: '0.5rem' }} />
      <span style={{ fontSize: '2rem', fontWeight: 800, color: '#1e293b', lineHeight: 1 }}>{value}</span>
      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginTop: '0.5rem', letterSpacing: '0.05em' }}>{label}</span>
    </div>
  );

  return (
    <div className="app-container" style={{ height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ padding: '1.25rem 2rem', display: 'flex', alignItems: 'stretch', gap: '1.5rem', zIndex: 50, borderBottom: '1px solid #e2e8f0', backgroundColor: '#fff' }}>
        <div style={{ display: 'flex', gap: '1.25rem', width: '550px' }}>
          <BigStat icon={Box} value={stats.total} color="#4F46E5" label="Total Project" />
          <BigStat icon={Activity} value={stats.active} color="#10B981" label="Ongoing Project" />
          <BigStat icon={AlertTriangle} value={stats.delayed} color="#EF4444" label="Delay Project" />
        </div>
        
        <div style={{ flex: 1, backgroundColor: '#f8fafc', padding: '0.75rem 1.25rem', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center' }}>
          <FilterBar 
            countryOptions={useMemo(() => Array.from(new Set(projects.map(p => p.country))).sort(), [projects])}
            categoryOptions={useMemo(() => Array.from(new Set(projects.map(p => p.category))).sort(), [projects])}
            statusOptions={['ongoing', 'delay']}
            filters={filters} setFilters={setFilters}
            onFileUpload={handleFileUpload}
          />
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', position: 'relative', overflow: 'hidden' }}>
        <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', padding: '1rem' }} onMouseMove={handleInteraction} onWheel={handleInteraction}>
          <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', overflow: 'hidden', position: 'relative', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', zIndex: 30, display: 'flex', gap: '0.75rem' }}>
              <div style={{ display: 'flex', backgroundColor: 'rgba(255,255,255,0.95)', padding: '4px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', backdropFilter: 'blur(8px)' }}>
                <button onClick={() => setViewMode('map')} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '10px', border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'map' ? '#4F46E5' : 'transparent', color: viewMode === 'map' ? '#fff' : '#64748b', fontSize: '13px', fontWeight: 700 }}>
                  <MapIcon size={16} /> Map
                </button>
                <button onClick={() => setViewMode('table')} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '10px', border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'table' ? '#4F46E5' : 'transparent', color: viewMode === 'table' ? '#fff' : '#64748b', fontSize: '13px', fontWeight: 700 }}>
                  <List size={16} /> List
                </button>
              </div>
              <button onClick={() => setIsPatrolling(!isPatrolling)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '12px', border: 'none', cursor: 'pointer', backgroundColor: isPatrolling ? '#ecfdf5' : '#f1f5f9', color: isPatrolling ? '#059669' : '#64748b', fontSize: '13px', fontWeight: 700, boxShadow: '0 4px 6px rgba(0,0,0,0.05)', backdropFilter: 'blur(8px)' }}>
                <Radio size={16} /> {isPatrolling ? 'LIVE PATROL ON' : 'PATROL PAUSED'}
              </button>
            </div>
            {viewMode === 'map' ? <WorldMap projects={filteredProjects} onMarkerClick={setSelectedProject} position={mapPosition} setPosition={setMapPosition} /> : <div style={{ height: '100%', overflowY: 'auto' }}><ProjectTable projects={filteredProjects} onProjectClick={setSelectedProject} /></div>}
          </div>
        </div>
        <div style={{ width: '420px', padding: '1rem 1rem 1rem 0', display: 'flex', flexDirection: 'column' }}>
          {selectedProject ? <div style={{ height: '100%', overflowY: 'auto', paddingRight: '4px' }}><ProjectDetails project={selectedProject} personnel={personnel} onClose={() => setSelectedProject(null)} onEdit={(p) => { setModalInitialData(p); setIsModalOpen(true); }} onDelete={(id) => { if(confirm('Delete?')) setProjects(projects.filter(p => p.id !== id)); setSelectedProject(null); }} onMarkComplete={handleMarkComplete} /></div> : <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center', color: '#94a3b8' }}><div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '50%', marginBottom: '1.5rem', border: '1px solid #f1f5f9' }}><MapIcon size={48} color="#cbd5e1" /></div><h3 style={{ color: '#475569', margin: '0 0 0.5rem 0' }}>Global Intelligence</h3><p style={{ fontSize: '0.875rem' }}>Select a project marker or wait for auto-patrol to cycle through global deployments.</p></div>}
        </div>
      </div>
      <AddModal isOpen={isModalOpen} type="project" initialData={modalInitialData} onClose={() => setIsModalOpen(false)} onAddProject={handleAddOrUpdateProject} onAddPersonnel={() => {}} />
    </div>
  )
}

export default App

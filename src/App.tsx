import { useState, useMemo, useCallback } from 'react'
import WorldMap from './components/WorldMap'
import ProjectDetails from './components/ProjectDetails'
import PersonnelDetails from './components/PersonnelDetails'
import FilterBar from './components/FilterBar'
import AddModal from './components/AddModal'
import ProjectTable from './components/ProjectTable'
import PersonnelTable from './components/PersonnelTable'
import SchedulingWorkbench from './components/SchedulingWorkbench'
import { mockPersonnel as initialPersonnel, mockProjects as initialProjects } from './data/mockData'
import type { Project, Personnel } from './data/mockData'
import { Box, Activity, AlertTriangle, Users } from 'lucide-react'
import { isBefore, isAfter, parseISO } from 'date-fns'
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

  const calculateStatus = useCallback((startDate: string, deadline: string, currentStatus?: Project['status']): Project['status'] => {
    if (currentStatus === 'completed' || currentStatus === 'on-hold' || currentStatus === 'delay') return currentStatus;
    const end = parseISO(deadline);
    if (isAfter(today, end)) return 'delay';
    const start = parseISO(startDate);
    if (isBefore(today, start)) return 'planning';
    return 'ongoing';
  }, [today]);

  const [personnel, setPersonnel] = useState<Personnel[]>(initialPersonnel)
  const [projects, setProjects] = useState<Project[]>(() => 
    initialProjects.map(p => ({ ...p, status: calculateStatus(p.startDate, p.deadline) }))
  )
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedPersonnel, setSelectedPersonnel] = useState<Personnel | null>(null)
  const [viewMode, setViewMode] = useState<'map' | 'table' | 'personnel'>('map')
  const [mapPosition, setMapPosition] = useState({ coordinates: [20, 10] as [number, number], zoom: 1 });
  
  const [filters, setFilters] = useState({
    personnel: [] as string[], countries: [] as string[], categories: [] as string[], statuses: [] as string[]
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'project' | 'personnel'>('project')
  const [modalInitialData, setModalInitialData] = useState<Project | Personnel | null>(null)

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      if (project.status === 'completed') return false;
      const matchPersonnel = filters.personnel.length === 0 || project.assignedPersonnel.some(pName => filters.personnel.includes(pName));
      const matchCountry = filters.countries.length === 0 || filters.countries.includes(project.country);
      const matchCategory = filters.categories.length === 0 || filters.categories.includes(project.category);
      const matchStatus = filters.statuses.length === 0 || filters.statuses.includes(project.status);
      return matchPersonnel && matchCountry && matchCategory && matchStatus;
    });
  }, [projects, filters]);

  const stats = useMemo(() => ({
    total: projects.filter(p => p.status !== 'completed').length,
    active: projects.filter(p => p.status === 'ongoing').length,
    delayed: projects.filter(p => p.status === 'delay').length,
  }), [projects]);

  const handleAssign = (projectId: string, personnelName: string) => {
    setProjects(prev => prev.map(p => p.id === projectId ? { ...p, assignedPersonnel: [...p.assignedPersonnel, personnelName] } : p));
    if (selectedProject?.id === projectId) setSelectedProject(prev => prev ? ({ ...prev, assignedPersonnel: [...prev.assignedPersonnel, personnelName] }) : null);
  };

  const handleUnassign = (projectId: string, personnelName: string) => {
    setProjects(prev => prev.map(p => p.id === projectId ? { ...p, assignedPersonnel: p.assignedPersonnel.filter(n => n !== personnelName) } : p));
    if (selectedProject?.id === projectId) setSelectedProject(prev => prev ? ({ ...prev, assignedPersonnel: prev.assignedPersonnel.filter(n => n !== personnelName) }) : null);
  };

  const handleUpdateStatus = (projectId: string, newStatus: Project['status']) => {
    setProjects(prev => prev.map(p => p.id === projectId ? { ...p, status: newStatus } : p));
    if (selectedProject?.id === projectId) setSelectedProject(prev => prev ? ({ ...prev, status: newStatus }) : null);
  };

  const handleToggleOnHold = (projectId: string) => {
    setProjects(prev => prev.map(p => {
      if (p.id !== projectId) return p;
      const status = p.status !== 'on-hold' ? 'on-hold' : calculateStatus(p.startDate, p.deadline);
      const updated = { ...p, status: status as any };
      if (selectedProject?.id === projectId) setSelectedProject(updated);
      return updated;
    }));
  };

  const handleAddOrUpdateProject = (project: Project) => {
    setProjects(prev => {
      const exists = prev.find(p => p.id === project.id);
      const withStatus = { ...project, status: calculateStatus(project.startDate, project.deadline, project.status) };
      return exists ? prev.map(p => p.id === project.id ? withStatus : p) : [withStatus, ...prev];
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target?.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(ws) as any[];
      const uploaded: Project[] = data.map((row, i) => {
        const getVal = (obj: any, key: string) => {
          const found = Object.keys(obj).find(k => k.trim().toLowerCase() === key.toLowerCase());
          return found ? obj[found] : undefined;
        };
        const startDate = getVal(row, 'StartDate') || '2026-03-01';
        const deadline = getVal(row, 'Deadline') || '2026-05-01';
        return {
          id: `upload-${Date.now()}-${i}`,
          name: `${getVal(row, 'Customer')} - ${getVal(row, 'Category') || 'Other'} (${getVal(row, 'City') || ''})`,
          customer: getVal(row, 'Customer') || 'Unknown',
          country: getVal(row, 'Country') || 'US', state: getVal(row, 'State') || '', city: getVal(row, 'City') || '',
          category: getVal(row, 'Category') || 'Other',
          quantity: parseInt(getVal(row, 'Quantity')) || 50,
          status: calculateStatus(startDate, deadline),
          assignedPersonnel: [],
          startDate, deadline,
          coordinates: stateCoords[getVal(row, 'State')] || countryCoords[getVal(row, 'Country')] || [0, 0]
        };
      });
      setProjects(prev => [...uploaded, ...prev]);
    };
    reader.readAsBinaryString(file);
  };

  const handleSelectPersonnel = (p: Personnel) => {
    setSelectedPersonnel(p);
    setSelectedProject(null);
  };

  const handleSelectProject = (p: Project) => {
    setSelectedProject(p);
    setSelectedPersonnel(null);
  };

  const BigStat = ({ icon: Icon, value, color, label }: any) => (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <Icon size={20} color={color} style={{ marginBottom: '0.25rem' }} />
      <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b' }}>{value}</span>
      <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>{label}</span>
    </div>
  );

  return (
    <div className="app-container" style={{ height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Top Header & Filters */}
      <div style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', zIndex: 50, borderBottom: '1px solid #e2e8f0', backgroundColor: '#fff' }}>
        <div style={{ display: 'flex', gap: '0.75rem', width: '400px' }}>
          <BigStat icon={Box} value={stats.total} color="#4F46E5" label="Total" />
          <BigStat icon={Activity} value={stats.active} color="#10B981" label="Ongoing" />
          <BigStat icon={AlertTriangle} value={stats.delayed} color="#EF4444" label="Delay" />
        </div>
        <div style={{ flex: 1 }}>
          <FilterBar 
            personnelOptions={useMemo(() => personnel.map(p => p.name).sort(), [personnel])}
            countryOptions={useMemo(() => Array.from(new Set(projects.map(p => p.country))).sort(), [projects])}
            categoryOptions={useMemo(() => Array.from(new Set(projects.map(p => p.category))).sort(), [projects])}
            statusOptions={['planning', 'ongoing', 'delay', 'on-hold']}
            filters={filters} setFilters={setFilters}
            onAddProject={() => { setModalType('project'); setModalInitialData(null); setIsModalOpen(true); }}
            onFileUpload={handleFileUpload}
          />
        </div>
        <button onClick={() => { setModalType('personnel'); setModalInitialData(null); setIsModalOpen(true); }} style={{ backgroundColor: '#fff', border: '1px solid #4F46E5', color: '#4F46E5', padding: '0.6rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>+ New Member</button>
      </div>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1rem', overflow: 'hidden' }}>
          
          {/* Visual Area */}
          <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 30, display: 'flex', backgroundColor: 'rgba(255,255,255,0.9)', padding: '4px', borderRadius: '8px', backdropFilter: 'blur(4px)' }}>
              <button onClick={() => setViewMode('map')} style={{ padding: '6px 12px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'map' ? '#4F46E5' : '#transparent', color: viewMode === 'map' ? '#fff' : '#64748b', fontSize: '12px', fontWeight: 700 }}>Map</button>
              <button onClick={() => setViewMode('table')} style={{ padding: '6px 12px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'table' ? '#4F46E5' : '#transparent', color: viewMode === 'table' ? '#fff' : '#64748b', fontSize: '12px', fontWeight: 700 }}>List</button>
              <button onClick={() => setViewMode('personnel')} style={{ padding: '6px 12px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'personnel' ? '#4F46E5' : '#transparent', color: viewMode === 'personnel' ? '#fff' : '#64748b', fontSize: '12px', fontWeight: 700 }}>Personnel</button>
            </div>
            
            {viewMode === 'map' ? (
              <WorldMap projects={filteredProjects} onMarkerClick={handleSelectProject} position={mapPosition} setPosition={setMapPosition} selectedProjectId={selectedProject?.id} />
            ) : viewMode === 'table' ? (
              <div style={{ height: '100%', overflowY: 'auto' }}>
                <ProjectTable projects={filteredProjects} onProjectClick={handleSelectProject} selectedProjectId={selectedProject?.id} />
              </div>
            ) : (
              <div style={{ height: '100%', overflowY: 'auto' }}>
                <PersonnelTable personnel={personnel} projects={projects} onPersonnelClick={handleSelectPersonnel} selectedPersonnelId={selectedPersonnel?.id} />
              </div>
            )}
          </div>

          {/* Workbench */}
          <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1rem', overflow: 'hidden' }}>
            <SchedulingWorkbench 
              projects={filteredProjects} personnel={personnel} 
              onAssign={handleAssign} onUnassign={handleUnassign} 
              selectedProjectId={selectedProject?.id} onSelectProject={handleSelectProject}
              onSelectPersonnel={handleSelectPersonnel}
            />
          </div>
        </div>

        {/* Dynamic Sidebar (Project or Personnel) */}
        <div style={{ width: '400px', padding: '1rem 1rem 1rem 0', display: 'flex', flexDirection: 'column' }}>
          {selectedProject ? (
            <div style={{ height: '100%', overflowY: 'auto' }}>
              <ProjectDetails 
                project={selectedProject} personnel={personnel} onClose={() => setSelectedProject(null)} 
                onEdit={(p) => { setModalType('project'); setModalInitialData(p); setIsModalOpen(true); }}
                onDelete={(id) => { setProjects(projects.filter(p => p.id !== id)); setSelectedProject(null); }} 
                onMarkComplete={(id) => handleUpdateStatus(id, 'completed')}
                onMarkDelay={(id) => handleUpdateStatus(id, 'delay')}
                onToggleOnHold={handleToggleOnHold}
              />
            </div>
          ) : selectedPersonnel ? (
            <div style={{ height: '100%', overflowY: 'auto' }}>
              <PersonnelDetails 
                person={selectedPersonnel} projects={projects} onClose={() => setSelectedPersonnel(null)} 
                onEdit={(p) => { setModalType('personnel'); setModalInitialData(p); setIsModalOpen(true); }}
                onUnassign={handleUnassign}
              />
            </div>
          ) : (
            <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', textAlign: 'center', padding: '2rem' }}>
              <Users size={48} style={{ marginBottom: '1rem' }} />
              <p style={{ fontSize: '0.85rem' }}>Select a project or team member to view detailed management options</p>
            </div>
          )}
        </div>
      </div>

      <AddModal 
        isOpen={isModalOpen} type={modalType} initialData={modalInitialData}
        onClose={() => setIsModalOpen(false)} 
        onAddProject={handleAddOrUpdateProject} 
        onAddPersonnel={(p) => {
          setPersonnel(prev => {
            const exists = prev.find(x => x.id === p.id);
            return exists ? prev.map(x => x.id === p.id ? p : x) : [p, ...prev];
          });
        }} 
      />
    </div>
  )
}

export default App

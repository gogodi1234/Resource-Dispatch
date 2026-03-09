import { useState, useMemo, useCallback } from 'react'
import WorldMap from './components/WorldMap'
import PersonnelList from './components/PersonnelList'
import ProjectDetails from './components/ProjectDetails'
import FilterBar from './components/FilterBar'
import AddModal from './components/AddModal'
import TimelineView from './components/TimelineView'
import ProjectTable from './components/ProjectTable'
import { mockPersonnel as initialPersonnel, mockProjects as initialProjects } from './data/mockData'
import type { Project, Personnel } from './data/mockData'
import { List, Map as MapIcon, Box, Activity, AlertCircle } from 'lucide-react'
import { isBefore, isAfter, parseISO } from 'date-fns'
import * as XLSX from 'xlsx'

const countryCoords: Record<string, [number, number]> = {
  'JP': [138.2529, 36.2048], 'US': [-95.7129, 37.0902], 'AU': [133.7751, -25.2744], 'FI': [25.7482, 61.9241]
};

const stateCoords: Record<string, [number, number]> = {
  'Tokyo': [139.6503, 35.6762], 'NJ': [-74.4057, 40.0583], 'TX': [-99.9018, 31.9686], 'GA': [-83.2220, 32.1656],
  'KS': [-98.4842, 38.4988], 'UT': [-111.0937, 39.3210], 'AZ': [-111.0937, 34.0489], 'Victoria': [144.9631, -37.8136],
  'LA': [-91.9623, 30.9843], 'VA': [-78.6569, 37.4316], 'CA': [-119.4179, 36.7783], 'IL': [-89.3985, 40.6331],
  'OH': [-82.9071, 40.4173], 'WY': [-107.2903, 43.0760], 'NV': [-116.4194, 38.8026], 'ND': [-101.0020, 47.5502],
  'Kymenlaakso': [26.9458, 60.7384], 'CO': [-105.7821, 39.5501], 'NY': [-74.2179, 43.2994]
};

function App() {
  const today = new Date(2026, 2, 5);

  const calculateStatus = useCallback((startDate: string, deadline: string, currentStatus?: Project['status']): Project['status'] => {
    // Manual overrides
    if (currentStatus === 'completed' || currentStatus === 'on-hold' || currentStatus === 'delay') {
      return currentStatus;
    }

    const end = parseISO(deadline);
    if (isAfter(today, end)) return 'delay';
    
    const start = parseISO(startDate);
    if (isBefore(today, start)) return 'planning';
    
    return 'ongoing';
  }, [today]);

  const initialProjectsWithStatus: Project[] = useMemo(() => {
    return initialProjects.map(prj => ({ ...prj, status: calculateStatus(prj.startDate, prj.deadline) }));
  }, [calculateStatus]);

  const [projects, setProjects] = useState<Project[]>(initialProjectsWithStatus)
  const [personnel, setPersonnel] = useState<Personnel[]>(initialPersonnel)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [viewMode, setViewMode] = useState<'map' | 'table'>('map')
  const [searchQuery, setSearchQuery] = useState('')
  
  const [filters, setFilters] = useState({
    personnel: [] as string[], countries: [] as string[], categories: [] as string[], statuses: [] as string[]
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'project' | 'personnel'>('project')
  const [modalInitialData, setModalInitialData] = useState<Project | Personnel | null>(null)

  const personnelWithWorkload = useMemo(() => {
    return personnel.map(p => {
      const activeProjects = projects.filter(prj => prj.assignedPersonnel.includes(p.name) && prj.status === 'ongoing');
      return { ...p, workload: Math.min(activeProjects.length * 20, 100) };
    });
  }, [personnel, projects]);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return projects.filter(project => {
      // Logic: Hide completed from main view
      if (project.status === 'completed') return false;

      const matchPersonnel = filters.personnel.length === 0 || project.assignedPersonnel.some(pName => filters.personnel.includes(pName));
      const matchCountry = filters.countries.length === 0 || filters.countries.includes(project.country);
      const matchCategory = filters.categories.length === 0 || filters.categories.includes(project.category);
      const matchStatus = filters.statuses.length === 0 || filters.statuses.includes(project.status);
      const matchSearch = !query || project.customer.toLowerCase().includes(query) || project.city.toLowerCase().includes(query) || project.name.toLowerCase().includes(query);
      return matchPersonnel && matchCountry && matchCategory && matchStatus && matchSearch;
    });
  }, [projects, filters, searchQuery]);

  const filteredPersonnel = useMemo(() => {
    if (filters.personnel.length === 0 && filters.countries.length === 0 && filters.categories.length === 0 && filters.statuses.length === 0 && !searchQuery) return personnelWithWorkload;
    const activeNames = new Set(filteredProjects.flatMap(p => p.assignedPersonnel));
    return personnelWithWorkload.filter(p => activeNames.has(p.name) || filters.personnel.includes(p.name));
  }, [personnelWithWorkload, filteredProjects, filters, searchQuery]);

  const stats = useMemo(() => ({
    total: projects.filter(p => p.status !== 'completed').length,
    active: projects.filter(p => p.status === 'ongoing').length,
    delayed: projects.filter(p => p.status === 'delay').length,
  }), [projects]);

  const handleUpdateStatus = (projectId: string, newStatus: Project['status']) => {
    setProjects(prev => prev.map(p => {
      if (p.id !== projectId) return p;
      const updated = { ...p, status: newStatus };
      if (selectedProject?.id === projectId) setSelectedProject(updated);
      return updated;
    }));
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
      const newUploadedProjects: Project[] = data.map((row, i) => {
        const startDate = row.StartDate || '2026-01-01';
        const deadline = row.Deadline || '2026-04-01';
        return {
          id: `upload-${Date.now()}-${i}`,
          name: `${row.Customer} - ${row.Category} (${row.City || ''})`,
          customer: row.Customer || 'Unknown',
          country: row.Country || 'US', state: row.State || '', city: row.City || '',
          category: row.Category || 'Other',
          quantity: parseInt(row.Quantity) || 0,
          status: calculateStatus(startDate, deadline),
          assignedPersonnel: [],
          startDate, deadline,
          coordinates: stateCoords[row.State] || countryCoords[row.Country] || [0, 0]
        };
      });
      setProjects(prev => [...newUploadedProjects, ...prev]);
    };
    reader.readAsBinaryString(file);
  };

  const handleAddOrUpdateProject = (project: Project) => {
    setProjects(prev => {
      const exists = prev.find(p => p.id === project.id);
      const withStatus = { ...project, status: calculateStatus(project.startDate, project.deadline, project.status) };
      if (exists) return prev.map(p => p.id === project.id ? withStatus : p);
      return [withStatus, ...prev];
    });
  };

  const handleToggleOnHold = (projectId: string) => {
    setProjects(prev => prev.map(p => {
      if (p.id !== projectId) return p;
      const status = p.status !== 'on-hold' ? 'on-hold' : calculateStatus(p.startDate, p.deadline);
      const updated = { ...p, status };
      if (selectedProject?.id === projectId) setSelectedProject(updated);
      return updated;
    }));
  };

  const handleAddOrUpdatePersonnel = (person: Personnel) => {
    setPersonnel(prev => {
      const exists = prev.find(p => p.id === person.id);
      if (exists) return prev.map(p => p.id === person.id ? person : p);
      return [person, ...prev];
    });
  };

  const handleDeleteProject = (projectId: string) => {
    setProjects(prev => prev.filter(p => p.id !== projectId));
    if (selectedProject?.id === projectId) setSelectedProject(null);
  };

  const handleAutoAssign = () => {
    const unassigned = projects.filter(p => p.assignedPersonnel.length === 0);
    if (unassigned.length === 0) { alert("No unassigned projects."); return; }
    const newProjects = [...projects];
    unassigned.forEach(project => {
      const target = newProjects.find(p => p.id === project.id);
      if (!target) return;
      const scored = personnel.map(p => {
        const pProjects = newProjects.filter(prj => prj.assignedPersonnel.includes(p.name));
        let score = 100 - Math.min(pProjects.length * 20, 100);
        if (pProjects.some(prj => prj.country === project.country)) score += 40;
        return { name: p.name, score };
      }).sort((a, b) => b.score - a.score);
      target.assignedPersonnel = [scored[0].name, scored[1].name];
    });
    setProjects(newProjects);
  }

  const StatCard = ({ icon: Icon, label, value, color }: any) => (
    <div style={{ backgroundColor: '#fff', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
      <div style={{ backgroundColor: `${color}10`, padding: '0.75rem', borderRadius: '10px' }}><Icon size={24} color={color} /></div>
      <div>
        <div style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase' }}>{label}</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>{value}</div>
      </div>
    </div>
  );

  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <main style={{ padding: '1.5rem 2rem', maxWidth: '1800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <StatCard icon={Box} label="Total Project" value={stats.total} color="#4F46E5" />
          <StatCard icon={Activity} label="Ongoing Project" value={stats.active} color="#10B981" />
          <StatCard icon={AlertCircle} label="Delay Project" value={stats.delayed} color="#EF4444" />
        </div>

        <FilterBar 
          personnelOptions={useMemo(() => personnel.map(p => p.name).sort(), [personnel])}
          countryOptions={useMemo(() => Array.from(new Set(projects.map(p => p.country))).sort(), [projects])}
          categoryOptions={useMemo(() => Array.from(new Set(projects.map(p => p.category))).sort(), [projects])}
          statusOptions={['planning', 'ongoing', 'delay', 'on-hold']}
          searchQuery={searchQuery} setSearchQuery={setSearchQuery}
          filters={filters} setFilters={setFilters}
          onAddProject={() => { setModalType('project'); setModalInitialData(null); setIsModalOpen(true); }}
          onAddPersonnel={() => { setModalType('personnel'); setModalInitialData(null); setIsModalOpen(true); }}
          onAutoAssign={handleAutoAssign}
          onFileUpload={handleFileUpload}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '1.5rem', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#fff', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>Project Explorer ({filteredProjects.length})</h2>
                <div style={{ display: 'flex', backgroundColor: '#f1f5f9', padding: '3px', borderRadius: '8px' }}>
                  <button onClick={() => setViewMode('map')} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'map' ? '#fff' : 'transparent', boxShadow: viewMode === 'map' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none', fontSize: '13px', fontWeight: 600 }}><MapIcon size={14} /> Map</button>
                  <button onClick={() => setViewMode('table')} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'table' ? '#fff' : 'transparent', boxShadow: viewMode === 'table' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none', fontSize: '13px', fontWeight: 600 }}><List size={14} /> List</button>
                </div>
              </div>
              {viewMode === 'map' ? (
                <WorldMap 
                  projects={filteredProjects} 
                  onMarkerClick={setSelectedProject} 
                  selectedProjectId={selectedProject?.id}
                />
              ) : (
                <ProjectTable 
                  projects={filteredProjects} 
                  onProjectClick={setSelectedProject} 
                  selectedProjectId={selectedProject?.id}
                />
              )}
            </div>
            <TimelineView projects={filteredProjects} personnel={filteredPersonnel} />
          </div>

          <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'sticky', top: '1.5rem' }}>
            {selectedProject ? (
              <ProjectDetails 
                project={selectedProject} personnel={personnel} onClose={() => setSelectedProject(null)} 
                onEdit={(p) => { setModalType('project'); setModalInitialData(p); setIsModalOpen(true); }}
                onDelete={handleDeleteProject}
                onMarkComplete={(id) => handleUpdateStatus(id, 'completed')}
                onMarkDelay={(id) => handleUpdateStatus(id, 'delay')}
                onToggleOnHold={handleToggleOnHold}
              />
            ) : (
              <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#fff', borderRadius: '12px', border: '1px dashed #cbd5e1', color: '#94a3b8', fontSize: '0.875rem' }}>Select a project to view details</div>
            )}
            <PersonnelList personnel={filteredPersonnel} />
          </aside>
        </div>
      </main>

      <AddModal 
        isOpen={isModalOpen} type={modalType} initialData={modalInitialData}
        onClose={() => setIsModalOpen(false)} onAddProject={handleAddOrUpdateProject} onAddPersonnel={handleAddOrUpdatePersonnel} 
      />
    </div>
  )
}

export default App

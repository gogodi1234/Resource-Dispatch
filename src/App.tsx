import { useState, useMemo, useCallback } from 'react'
import WorldMap from './components/WorldMap'
import ProjectDetails from './components/ProjectDetails'
import PersonnelDetails from './components/PersonnelDetails'
import FilterBar from './components/FilterBar'
import AddModal from './components/AddModal'
import ProjectTable from './components/ProjectTable'
import PersonnelTable from './components/PersonnelTable'
import SchedulingWorkbench from './components/SchedulingWorkbench'
import TimelineView from './components/TimelineView'
import { mockPersonnel as initialPersonnel, mockProjects as initialProjects } from './data/mockData'
import type { Project, Personnel } from './data/mockData'
import { Box, Activity, AlertTriangle, Plus, UploadCloud, Zap, Map as MapIcon, List, UserCircle, Layout } from 'lucide-react'
import { isBefore, isAfter, parseISO, areIntervalsOverlapping, startOfDay } from 'date-fns'
import * as XLSX from 'xlsx'

const THEME = {
  navy: '#4C8CE4',       
  darkNavy: '#002B7F',   
  royal: '#1E40AF',      
  vividOrange: '#FF9900', 
  bodyBg: '#F1F5F9',     
  workAreaBg: '#F8FAFC', 
  border: 'rgba(76, 140, 228, 0.2)', 
  ongoing: '#10B981',
  delay: '#EF4444',
  planning: '#8B5CF6',
  surface: '#FFFFFF'
};

function App() {
  const today = new Date(2026, 2, 10);

  const calculateStatus = useCallback((startDate: string, deadline: string, currentStatus?: Project['status']): Project['status'] => {
    if (currentStatus === 'completed' || currentStatus === 'on-hold' || currentStatus === 'delay') return currentStatus;
    const end = parseISO(deadline);
    if (isAfter(today, end)) return 'delay';
    const start = parseISO(startDate);
    if (isBefore(today, start)) return 'planning';
    return 'ongoing';
  }, [today]);

  const [personnel, setPersonnel] = useState<Personnel[]>(initialPersonnel)
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedPersonnel, setSelectedPersonnel] = useState<Personnel | null>(null)
  const [viewMode, setViewMode] = useState<'map' | 'table' | 'personnel'>('map')
  const [mapPosition, setMapPosition] = useState({ coordinates: [20, 10] as [number, number], zoom: 0.8 });
  
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

  const uniqueCountries = useMemo(() => {
    return Array.from(new Set(projects.map(p => p.country))).sort();
  }, [projects]);

  const filteredPersonnel = useMemo(() => {
    const activeNames = new Set(filteredProjects.flatMap(p => p.assignedPersonnel));
    if (filters.personnel.length === 0 && filters.countries.length === 0 && filters.categories.length === 0 && filters.statuses.length === 0) return personnel;
    return personnel.filter(p => activeNames.has(p.name) || filters.personnel.includes(p.name));
  }, [personnel, filteredProjects, filters]);

  const stats = useMemo(() => ({
    total: projects.filter(p => p.status !== 'completed').length,
    active: projects.filter(p => p.status === 'ongoing').length,
    delayed: projects.filter(p => p.status === 'delay').length,
  }), [projects]);

  const handleSelectPersonnel = (p: Personnel) => {
    setSelectedPersonnel(p);
    setSelectedProject(null);
  };

  const handleSelectProject = (p: Project) => {
    setSelectedProject(p);
    setSelectedPersonnel(null);
  };

  const handleAssign = (projectId: string, personnelName: string) => {
    setProjects(prev => {
      const updated = prev.map(p => p.id === projectId ? { ...p, assignedPersonnel: [...p.assignedPersonnel, personnelName] } : p);
      const target = updated.find(p => p.id === projectId);
      if (selectedProject?.id === projectId && target) setSelectedProject(target);
      return updated;
    });
  };

  const handleUnassign = (projectId: string, personnelName: string) => {
    setProjects(prev => {
      const updated = prev.map(p => p.id === projectId ? { ...p, assignedPersonnel: p.assignedPersonnel.filter(n => n !== personnelName) } : p);
      const target = updated.find(p => p.id === projectId);
      if (selectedProject?.id === projectId && target) setSelectedProject(target);
      return updated;
    });
  };

  const handleAutoAssign = () => {
    let updatedProjects = [...projects];
    const sortedProjects = [...projects].sort((a, b) => {
      const priority = { 'delay': 0, 'ongoing': 1, 'planning': 2 };
      return (priority[a.status as keyof typeof priority] || 9) - (priority[b.status as keyof typeof priority] || 9);
    });

    sortedProjects.forEach(project => {
      if (project.assignedPersonnel.length > 0) return;
      const candidates = personnel.filter(p => {
        const skillMatch = p.skills.includes('All') || p.skills.includes(project.category);
        const countryMatch = p.allowedCountries.includes('GLOBAL') || p.allowedCountries.includes(project.country);
        const isCurrentlyWorking = updatedProjects.some(otherP => 
          otherP.assignedPersonnel.includes(p.name) &&
          areIntervalsOverlapping(
            { start: startOfDay(parseISO(project.startDate)), end: startOfDay(parseISO(project.deadline)) },
            { start: startOfDay(parseISO(otherP.startDate)), end: startOfDay(parseISO(otherP.deadline)) }
          )
        );
        const hasLeaveConflict = p.unavailableDates.some(date => {
          const leaveDate = startOfDay(parseISO(date));
          return leaveDate >= startOfDay(parseISO(project.startDate)) && leaveDate <= startOfDay(parseISO(project.deadline));
        });
        return skillMatch && countryMatch && !isCurrentlyWorking && !hasLeaveConflict;
      });

      if (candidates.length > 0) {
        const chosenOne = candidates[0];
        updatedProjects = updatedProjects.map(p => p.id === project.id ? { ...p, assignedPersonnel: [chosenOne.name] } : p);
      }
    });
    setProjects(updatedProjects);
    if (selectedProject) {
      const updatedSelected = updatedProjects.find(p => p.id === selectedProject.id);
      if (updatedSelected) setSelectedProject(updatedSelected);
    }
    alert("Auto-assignment complete!");
  };

  const handleUpdateStatus = (projectId: string, newStatus: Project['status']) => {
    setProjects(prev => {
      const updated = prev.map(p => p.id === projectId ? { ...p, status: newStatus } : p);
      const target = updated.find(p => p.id === projectId);
      if (newStatus === 'completed') setSelectedProject(null);
      else if (selectedProject?.id === projectId && target) setSelectedProject(target);
      return updated;
    });
  };

  const handleToggleOnHold = (projectId: string) => {
    setProjects(prev => {
      const updated = prev.map(p => {
        if (p.id !== projectId) return p;
        const status = p.status !== 'on-hold' ? 'on-hold' : calculateStatus(p.startDate, p.deadline);
        return { ...p, status: status as any };
      });
      const target = updated.find(p => p.id === projectId);
      if (selectedProject?.id === projectId && target) setSelectedProject(target);
      return updated;
    });
  };

  const handleDeleteProject = (projectId: string) => {
    if (confirm('Delete this project?')) {
      setProjects(prev => prev.filter(p => p.id !== projectId));
      if (selectedProject?.id === projectId) setSelectedProject(null);
    }
  };

  const handleAddOrUpdateProject = (project: Project) => {
    setProjects(prev => {
      const exists = prev.find(p => p.id === project.id);
      const withStatus = { ...project, status: calculateStatus(project.startDate, project.deadline, project.status) };
      const nextProjects = exists ? prev.map(p => p.id === project.id ? withStatus : p) : [withStatus, ...prev];
      if (selectedProject?.id === project.id) setSelectedProject(withStatus);
      return nextProjects;
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
        const sd = '2026-03-01';
        return {
          id: `upload-${Date.now()}-${i}`,
          name: `${getVal(row, 'Customer')} - ${getVal(row, 'Category') || 'Other'} (${getVal(row, 'City') || ''})`,
          customer: getVal(row, 'Customer') || 'Unknown',
          country: getVal(row, 'Country') || 'US', state: getVal(row, 'State ') || '', city: getVal(row, 'City') || '',
          category: getVal(row, 'Product Category') || 'Other',
          quantity: 50, status: calculateStatus(sd, '2026-05-01'), assignedPersonnel: [],
          startDate: sd, deadline: '2026-05-01',
          coordinates: [-95.71, 37.09]
        };
      });
      setProjects(prev => [...uploaded, ...prev]);
    };
    reader.readAsBinaryString(file);
  };

  const handlePersonnelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target?.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(ws) as any[];
      const uploaded: Personnel[] = data
        .filter(row => row['Personnel'] || row['Name'])
        .map((row, i) => {
          const rawCountries = row['Country'] || '';
          const rawSkills = row['Skills'] || '';
          return {
            id: `p-up-${Date.now()}-${i}`,
            name: (row['Personnel'] || row['Name']).toString().trim(),
            role: 'Field Engineer',
            skills: rawSkills.toString().split(',').map((s: string) => s.trim()).filter((s: string) => s),
            allowedCountries: rawCountries.toString().split(',').map((s: string) => s.trim().toUpperCase()).filter((s: string) => s),
            unavailableDates: [], workload: 0
          };
        });
      setPersonnel(prev => {
        const existing = new Set(prev.map(p => p.name));
        return [...uploaded.filter(p => !existing.has(p.name)), ...prev];
      });
    };
    reader.readAsBinaryString(file);
  };

  // REFINED HIGH-VISIBILITY HEADER METRIC (With White Edges)
  const HeaderMetric = ({ icon: Icon, value, label, statusColor }: any) => (
    <div style={{ 
      display: 'flex', alignItems: 'center', gap: '0.65rem', 
      backgroundColor: statusColor ? `${statusColor}40` : 'rgba(255,255,255,0.15)', // Saturated bg
      padding: '0.5rem 1rem', borderRadius: '12px', minWidth: '105px',
      border: '1.5px solid #FFFFFF' // SHARP WHITE BORDER
    }}>
      <div style={{ 
        backgroundColor: statusColor ? statusColor : '#fff', 
        padding: '0.3rem', borderRadius: '8px', display: 'flex' 
      }}>
        <Icon size={14} color={statusColor ? "#fff" : THEME.navy} />
      </div>
      <div>
        <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: '0.55rem', color: '#fff', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '0.02em' }}>{label}</div>
      </div>
    </div>
  );

  // GHOST BUTTON STYLE FOR IMPORT ACTIONS
  const btnGhost = { 
    backgroundColor: 'transparent', 
    border: '1.5px solid #FFFFFF', 
    color: '#fff', 
    padding: '0.5rem 1rem', 
    borderRadius: '10px', 
    fontSize: '0.75rem', 
    fontWeight: 800, 
    cursor: 'pointer', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '6px', 
    transition: 'all 0.2s', 
    whiteSpace: 'nowrap' as const 
  };

  const btnPrimary = { backgroundColor: THEME.vividOrange, color: '#fff', border: '1.5px solid #FFFFFF', padding: '0.5rem 1.25rem', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'all 0.2s', whiteSpace: 'nowrap' as const };

  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: THEME.bodyBg, display: 'flex', flexDirection: 'column', fontFamily: 'Inter, system-ui, sans-serif', paddingBottom: '5rem' }}>
      
      {/* 1. Header (Contrast Optimized) */}
      <div style={{ padding: '0.75rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', zIndex: 100, backgroundColor: THEME.navy, position: 'sticky', top: 0, minHeight: '85px', height: 'auto', boxSizing: 'border-box', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'flex', gap: '0.65rem', flexShrink: 0 }}>
          <HeaderMetric icon={Box} value={stats.total} label="Total" />
          <HeaderMetric icon={Activity} value={stats.active} label="Ongoing" statusColor={THEME.ongoing} />
          <HeaderMetric icon={AlertTriangle} value={stats.delayed} label="Delay" statusColor={THEME.delay} />
        </div>
        
        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', minWidth: '300px' }}>
          <FilterBar personnelOptions={useMemo(() => personnel.map(p => p.name).sort(), [personnel])} countryOptions={useMemo(() => uniqueCountries, [uniqueCountries])} categoryOptions={useMemo(() => Array.from(new Set(projects.map(p => p.category))).sort(), [projects])} statusOptions={['planning', 'ongoing', 'delay', 'on-hold']} filters={filters} setFilters={setFilters} />
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <button onClick={handleAutoAssign} style={btnPrimary}><Zap size={18} /> Auto Assign</button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <label style={btnGhost}><UploadCloud size={18} color="#fff" /> Project<input type="file" accept=".csv,.xlsx" style={{ display: 'none' }} onChange={handleFileUpload} /></label>
            <label style={btnGhost}><UploadCloud size={18} color="#fff" /> Member<input type="file" accept=".csv,.xlsx" style={{ display: 'none' }} onChange={handlePersonnelUpload} /></label>
          </div>
          <button onClick={() => { setModalType('personnel'); setModalInitialData(null); setIsModalOpen(true); }} style={{ ...btnGhost, backgroundColor: '#fff', color: THEME.navy, border: 'none' }}>
            <Plus size={18} /> New Member
          </button>
        </div>
      </div>

      <div style={{ width: '100%', padding: '2rem', display: 'flex', gap: '2rem', boxSizing: 'border-box', position: 'relative' }}>
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ backgroundColor: THEME.navy, borderRadius: '20px', border: `1px solid ${THEME.navy}`, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '0.75rem 1.25rem', backgroundColor: THEME.navy, display: 'flex', gap: '0.75rem', zIndex: 10 }}>
              <button onClick={() => setViewMode('map')} style={{ padding: '8px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'map' ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.15)', color: viewMode === 'map' ? THEME.navy : '#fff', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}><MapIcon size={16} /> Map View</button>
              <button onClick={() => setViewMode('table')} style={{ padding: '8px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'table' ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.15)', color: viewMode === 'table' ? THEME.navy : '#fff', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}><List size={16} /> Project List</button>
              <button onClick={() => setViewMode('personnel')} style={{ padding: '8px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer', backgroundColor: viewMode === 'personnel' ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.15)', color: viewMode === 'personnel' ? THEME.navy : '#fff', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}><UserCircle size={16} /> Personnel</button>
            </div>
            <div style={{ height: '650px', position: 'relative', backgroundColor: THEME.surface, borderTop: `1px solid ${THEME.border}` }}>
              {viewMode === 'map' ? <WorldMap projects={filteredProjects} onMarkerClick={handleSelectProject} position={mapPosition} setPosition={setMapPosition} selectedProjectId={selectedProject?.id} /> : viewMode === 'table' ? <div style={{ height: '100%', overflowY: 'auto' }}><ProjectTable projects={filteredProjects} onProjectClick={handleSelectProject} selectedProjectId={selectedProject?.id} /></div> : <div style={{ height: '100%', overflowY: 'auto' }}><PersonnelTable personnel={personnel} projects={projects} onPersonnelClick={handleSelectPersonnel} selectedPersonnelId={selectedPersonnel?.id} /></div>}
            </div>
          </div>

          <div style={{ backgroundColor: THEME.workAreaBg, borderRadius: '20px', border: `1px solid ${THEME.border}`, padding: '2.5rem', borderTop: `6px solid ${THEME.navy}` }}>
            <SchedulingWorkbench projects={filteredProjects} personnel={personnel} onAssign={handleAssign} onUnassign={handleUnassign} selectedProjectId={selectedProject?.id} onSelectProject={handleSelectProject} onSelectPersonnel={handleSelectPersonnel} />
          </div>

          <div style={{ height: '550px', backgroundColor: THEME.workAreaBg, borderRadius: '20px', border: `1px solid ${THEME.border}`, overflow: 'hidden', display: 'flex', flexDirection: 'column', borderTop: `6px solid ${THEME.navy}` }}>
            <TimelineView projects={filteredProjects} personnel={filteredPersonnel} selectedProjectId={selectedProject?.id} selectedPersonnelId={selectedPersonnel?.id} />
          </div>
        </div>

        <div style={{ width: '420px', flexShrink: 0, alignSelf: 'flex-start' }}>
          <div style={{ position: 'sticky', top: '100px' }}>
            {selectedProject ? (
              <ProjectDetails project={selectedProject} personnel={personnel} onClose={() => setSelectedProject(null)} onEdit={(p) => { setModalType('project'); setModalInitialData(p); setIsModalOpen(true); }} onDelete={handleDeleteProject} onMarkComplete={(id) => handleUpdateStatus(id, 'completed')} onMarkDelay={(id) => handleUpdateStatus(id, 'delay')} onToggleOnHold={handleToggleOnHold} />
            ) : selectedPersonnel ? (
              <PersonnelDetails person={selectedPersonnel} projects={projects} onClose={() => setSelectedPersonnel(null)} onEdit={() => { setModalType('personnel'); setModalInitialData(null); setIsModalOpen(true); }} onUnassign={handleUnassign} />
            ) : (
              <div style={{ 
                borderRadius: '20px', 
                backgroundColor: '#F5F9FF', // Unified Ice Blue for Empty State
                border: '1px solid rgba(76, 140, 228, 0.2)',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: THEME.navy, 
                textAlign: 'center', 
                padding: '5rem 3rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ height: '4px', backgroundColor: THEME.navy, width: '100%', position: 'absolute', top: 0 }} />
                <Layout size={80} style={{ marginBottom: '2rem', opacity: 0.15 }} />
                <p style={{ fontSize: '1.1rem', fontWeight: 700, opacity: 0.8, lineHeight: 1.5 }}>Select a project or team member to manage.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <AddModal isOpen={isModalOpen} type={modalType} initialData={modalInitialData} onClose={() => setIsModalOpen(false)} onAddProject={handleAddOrUpdateProject} onAddPersonnel={(p) => setPersonnel(prev => { const exists = prev.find(x => x.id === p.id); return exists ? prev.map(x => x.id === p.id ? p : x) : [p, ...prev]; })} availableCountries={uniqueCountries} />
    </div>
  )
}

export default App

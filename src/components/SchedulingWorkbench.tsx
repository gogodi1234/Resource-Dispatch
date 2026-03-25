import React, { useMemo, useState } from 'react';
import type { Project, Personnel } from '../data/mockData';
import { AlertTriangle, Globe, Wrench, BarChart3, CheckCircle2, Search } from 'lucide-react';
import { isWithinInterval, parseISO, startOfDay, areIntervalsOverlapping, isAfter } from 'date-fns';

interface SchedulingWorkbenchProps {
  projects: Project[]; // This is the filtered backlog
  allProjects: Project[]; // Use this for overlap checks
  personnel: Personnel[];
  onAssign: (projectId: string, personnelName: string) => void;
  onUnassign: (projectId: string, personnelName: string) => void;
  selectedProjectId?: string;
  onSelectProject: (project: Project) => void;
  onSelectPersonnel?: (person: Personnel) => void;
  today: Date;
}

const SchedulingWorkbench: React.FC<SchedulingWorkbenchProps> = ({ 
  projects, allProjects, personnel, onAssign, onUnassign, selectedProjectId, onSelectProject, onSelectPersonnel, today
}) => {
  const [projectSearchTerm, setProjectSearchTerm] = useState('');
  const [personnelSearchTerm, setPersonnelSearchTerm] = useState('');

  const selectedProject = useMemo(() => 
    allProjects.find(p => p.id === selectedProjectId), 
    [allProjects, selectedProjectId]
  );

  const filteredProjects = useMemo(() => {
    if (!projectSearchTerm.trim()) return projects;
    const term = projectSearchTerm.toLowerCase().trim();
    return projects.filter(p => 
      p.customer.toLowerCase().includes(term) ||
      p.country.toLowerCase().includes(term) ||
      (p.state || '').toLowerCase().includes(term) ||
      (p.city || '').toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      (p.partNumber || '').toLowerCase().includes(term)
    );
  }, [projects, projectSearchTerm]);

  const filteredPersonnel = useMemo(() => {
    if (!personnelSearchTerm.trim()) return personnel;
    const term = personnelSearchTerm.toLowerCase().trim();
    return personnel.filter(p => 
      p.name.toLowerCase().includes(term) ||
      p.role.toLowerCase().includes(term) ||
      p.skills.some(s => s.toLowerCase().includes(term)) ||
      p.allowedCountries.some(c => c.toLowerCase().includes(term))
    );
  }, [personnel, personnelSearchTerm]);

  const handleAssignClick = (projectId: string, person: Personnel) => {
    const project = allProjects.find(p => p.id === projectId);
    if (!project) return;

    const newStart = startOfDay(parseISO(project.startDate));
    const newEnd = startOfDay(parseISO(project.deadline));

    // 1. Check for overlapping projects against ALL projects (not just filtered)
    const overlappingProjects = allProjects.filter(prj => {
      if (prj.id === projectId) return false;
      if (prj.status === 'completed') return false;
      if (!prj.assignedPersonnel.includes(person.name)) return false;

      const prjStart = startOfDay(parseISO(prj.startDate));
      let prjEnd = startOfDay(parseISO(prj.deadline));

      // If delayed, it's still active today
      if (prj.status === 'delay' && isAfter(today, prjEnd)) {
        prjEnd = startOfDay(today);
      }

      return areIntervalsOverlapping(
        { start: newStart, end: newEnd },
        { start: prjStart, end: prjEnd },
        { inclusive: true }
      );
    });

    // 2. Check for overlapping leave dates
    const overlappingLeaveDates = person.unavailableDates.filter(date => {
      const leaveDate = startOfDay(parseISO(date));
      return isWithinInterval(leaveDate, { start: newStart, end: newEnd });
    });

    const countryMatch = person.allowedCountries.includes('GLOBAL') || person.allowedCountries.includes(project.country);
    const skillMatch = person.skills.includes('All') || person.skills.includes(project.category);

    let warnings = [];
    if (!countryMatch) warnings.push(`not authorized for ${project.country}`);
    if (!skillMatch) warnings.push(`missing ${project.category} skill`);
    
    if (overlappingProjects.length > 0) {
      const conflictDetails = overlappingProjects.map(p => `${p.customer} (${p.startDate} to ${p.deadline})`).join(', ');
      warnings.push(`already assigned to overlapping projects: ${conflictDetails}`);
    }
    
    if (overlappingLeaveDates.length > 0) {
      warnings.push(`has registered leave during this project period (${overlappingLeaveDates.join(', ')})`);
    }

    if (warnings.length > 0) {
      const confirmMsg = `Assignment Warning for ${person.name}:\n\n` + 
        warnings.map(w => `• ${w}`).join('\n') + 
        `\n\nForce assign anyway?`;
      if (window.confirm(confirmMsg)) {
        onAssign(projectId, person.name);
      }
    } else {
      onAssign(projectId, person.name);
    }
  };

  const getStatusStyle = (status: Project['status']) => {
    const base = { fontSize: '0.55rem', fontWeight: 900, padding: '2px 6px', borderRadius: '4px', textTransform: 'uppercase' as const, marginLeft: '6px' };
    switch (status) {
      case 'ongoing': return { ...base, backgroundColor: '#ECFDF5', color: '#10B981' };
      case 'delay': return { ...base, backgroundColor: '#FEE2E2', color: '#EF4444' };
      case 'on-hold': return { ...base, backgroundColor: '#FEF3C7', color: '#D97706' };
      default: return null;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '400px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e5e7eb', marginBottom: '1rem' }}>
        <BarChart3 size={20} color="#4F46E5" />
        <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>Scheduling Workbench</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', flex: 1, minHeight: 0 }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Project Backlog</div>
            <div style={{ position: 'relative', width: '160px' }}>
              <Search size={12} color="#94a3b8" style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                placeholder="Search projects..." 
                value={projectSearchTerm}
                onChange={(e) => setProjectSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '4px 8px 4px 24px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.7rem', outline: 'none' }}
              />
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {filteredProjects.length > 0 ? filteredProjects.map(p => {
              const isSel = p.id === selectedProjectId;
              const statusStyle = getStatusStyle(p.status);
              return (
                <div key={p.id} onClick={() => onSelectProject(p)} style={{ padding: '0.75rem', borderRadius: '12px', border: '1px solid', borderColor: isSel ? '#4F46E5' : 'rgba(76, 140, 228, 0.2)', backgroundColor: isSel ? '#f5f3ff' : '#fff', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{p.customer}</div>
                        {statusStyle && (
                          <span style={statusStyle}>{p.status}</span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{p.category} | {p.country}</div>
                      {p.partNumber && <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '2px' }}>PN: {p.partNumber}</div>}
                    </div>
                    {p.assignedPersonnel.length > 0 && <CheckCircle2 size={16} color="#10B981" />}
                  </div>
                  <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                    {p.assignedPersonnel.map(name => (
                      <span key={name} style={{ fontSize: '0.65rem', padding: '2px 6px', backgroundColor: '#EEF2FF', color: '#4F46E5', borderRadius: '4px', border: '1px solid #E0E7FF' }}>{name}</span>
                    ))}
                  </div>
                </div>
              );
            }) : (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8', fontSize: '0.8rem', border: '1px dashed #e2e8f0', borderRadius: '12px' }}>
                No projects found.
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Personnel Pool</div>
            <div style={{ position: 'relative', width: '160px' }}>
              <Search size={12} color="#94a3b8" style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                placeholder="Search members..." 
                value={personnelSearchTerm}
                onChange={(e) => setPersonnelSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '4px 8px 4px 24px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.7rem', outline: 'none' }}
              />
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {!selectedProject ? (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#94a3b8', fontSize: '0.8rem', border: '1px dashed #e2e8f0', borderRadius: '12px' }}>Select a project to assign members</div>
            ) : (
              filteredPersonnel.length > 0 ? filteredPersonnel.map(person => {
                const countryMatch = person.allowedCountries.includes('GLOBAL') || person.allowedCountries.includes(selectedProject.country);
                const skillMatch = person.skills.includes('All') || person.skills.includes(selectedProject.category);
                const isAssigned = selectedProject.assignedPersonnel.includes(person.name);
                const hasWarning = !countryMatch || !skillMatch;

                return (
                  <div 
                    key={person.id} 
                    draggable={true}
                    onDragStart={(e) => {
                      e.dataTransfer.setData('personnelName', person.name);
                      e.currentTarget.style.opacity = '0.5';
                    }}
                    onDragEnd={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                    style={{ padding: '0.75rem', borderRadius: '12px', border: '1px solid rgba(76, 140, 228, 0.2)', backgroundColor: isAssigned ? '#ecfdf5' : '#fff', cursor: 'grab' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div onClick={() => onSelectPersonnel?.(person)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1e293b' }}>{person.name}</div>
                        {hasWarning && (
                          <div title={`${!countryMatch ? 'Country mismatch' : ''} ${!skillMatch ? 'Skill mismatch' : ''}`.trim()}>
                            <AlertTriangle size={14} color="#F59E0B" />
                          </div>
                        )}
                      </div>
                      <button 
                        onClick={() => isAssigned ? onUnassign(selectedProject.id, person.name) : handleAssignClick(selectedProject.id, person)} 
                        style={{ border: 'none', background: isAssigned ? '#10B981' : '#4F46E5', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer' }}
                      >
                        {isAssigned ? 'Remove' : 'Assign'}
                      </button>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.6rem', color: countryMatch ? '#059669' : '#dc2626' }}>
                        <Globe size={10} /> {person.allowedCountries.includes('GLOBAL') ? 'GLOBAL' : person.allowedCountries.join(', ')}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.6rem', color: skillMatch ? '#059669' : '#dc2626' }}>
                        <Wrench size={10} /> {person.skills.includes('All') ? 'ALL' : person.skills.join(', ')}
                      </div>
                    </div>
                  </div>
                );
              }) : (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8', fontSize: '0.8rem', border: '1px dashed #e2e8f0', borderRadius: '12px' }}>
                  No members found.
                </div>
              )
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SchedulingWorkbench;

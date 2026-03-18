import React, { useMemo } from 'react';
import type { Project, Personnel } from '../data/mockData';
import { AlertTriangle, Globe, Wrench, BarChart3, CheckCircle2 } from 'lucide-react';

interface SchedulingWorkbenchProps {
  projects: Project[];
  personnel: Personnel[];
  onAssign: (projectId: string, personnelName: string) => void;
  onUnassign: (projectId: string, personnelName: string) => void;
  selectedProjectId?: string;
  onSelectProject: (project: Project) => void;
  onSelectPersonnel?: (person: Personnel) => void;
}

const SchedulingWorkbench: React.FC<SchedulingWorkbenchProps> = ({ 
  projects, personnel, onAssign, onUnassign, selectedProjectId, onSelectProject, onSelectPersonnel
}) => {

  const selectedProject = useMemo(() => 
    projects.find(p => p.id === selectedProjectId), 
    [projects, selectedProjectId]
  );

  const handleAssignClick = (projectId: string, person: Personnel) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const countryMatch = person.allowedCountries.includes('GLOBAL') || person.allowedCountries.includes(project.country);
    const skillMatch = person.skills.includes('All') || person.skills.includes(project.category);

    if (!countryMatch || !skillMatch) {
      let reasons = [];
      if (!countryMatch) reasons.push(`not authorized for ${project.country}`);
      if (!skillMatch) reasons.push(`missing ${project.category} skill`);
      
      const confirmMsg = `Warning: This member is ${reasons.join(' and ')}. \n\nForce assign anyway?`;
      if (window.confirm(confirmMsg)) {
        onAssign(projectId, person.name);
      }
    } else {
      onAssign(projectId, person.name);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '450px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e5e7eb', marginBottom: '1rem' }}>
        <BarChart3 size={20} color="#4F46E5" />
        <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>Scheduling Workbench</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', flex: 1, minHeight: 0 }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Project Backlog</div>
          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {projects.map(p => {
              const isSel = p.id === selectedProjectId;
              return (
                <div key={p.id} onClick={() => onSelectProject(p)} style={{ padding: '0.75rem', borderRadius: '12px', border: '1px solid', borderColor: isSel ? '#4F46E5' : 'rgba(76, 140, 228, 0.2)', backgroundColor: isSel ? '#f5f3ff' : '#fff', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{p.customer}</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{p.category} | {p.country}</div>
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
            })}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Personnel Pool</div>
          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {!selectedProject ? (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#94a3b8', fontSize: '0.8rem', border: '1px dashed #e2e8f0', borderRadius: '12px' }}>Select a project to assign members</div>
            ) : (
              personnel.map(person => {
                const countryMatch = person.allowedCountries.includes('GLOBAL') || person.allowedCountries.includes(selectedProject.country);
                const skillMatch = person.skills.includes('All') || person.skills.includes(selectedProject.category);
                const isAssigned = selectedProject.assignedPersonnel.includes(person.name);
                const hasWarning = !countryMatch || !skillMatch;

                return (
                  <div key={person.id} style={{ padding: '0.75rem', borderRadius: '12px', border: '1px solid rgba(76, 140, 228, 0.2)', backgroundColor: isAssigned ? '#ecfdf5' : '#fff' }}>
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
                      {/* FIXED: Show the person's actual allowed countries instead of project country */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.6rem', color: countryMatch ? '#059669' : '#dc2626' }}>
                        <Globe size={10} /> {person.allowedCountries.includes('GLOBAL') ? 'GLOBAL' : person.allowedCountries.join(', ')}
                      </div>
                      {/* Show the person's skills relative to project requirements */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.6rem', color: skillMatch ? '#059669' : '#dc2626' }}>
                        <Wrench size={10} /> {person.skills.includes('All') ? 'ALL' : person.skills.join(', ')}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SchedulingWorkbench;

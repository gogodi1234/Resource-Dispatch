import React, { useMemo } from 'react';
import type { Project, Personnel } from '../data/mockData';
import { AlertCircle, Globe, Wrench, BarChart3 } from 'lucide-react';
import { parseISO, areIntervalsOverlapping, eachDayOfInterval, format } from 'date-fns';

const countryToRegion: Record<string, string> = {
  'JP': 'APAC', 'TW': 'APAC', 'CN': 'APAC', 'AU': 'APAC',
  'US': 'Americas', 'CA': 'Americas',
  'DE': 'EMEA', 'UK': 'EMEA', 'FI': 'EMEA'
};

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

  const projectCoverage = useMemo(() => {
    return projects.map(p => {
      let totalCapacity = 0;

      p.assignedPersonnel.forEach(name => {
        const person = personnel.find(per => per.name === name);
        if (!person) return;

        const skillCap = person.skillCapacities.find(sc => sc.category === p.category)?.dailyCapacity || 0;
        const personRegion = countryToRegion[p.country] || 'Unknown';
        const overlappingProjects = projects.filter(otherP => 
          otherP.assignedPersonnel.includes(name) &&
          (countryToRegion[otherP.country] === personRegion) &&
          areIntervalsOverlapping(
            { start: parseISO(p.startDate), end: parseISO(p.deadline) },
            { start: parseISO(otherP.startDate), end: parseISO(otherP.deadline) }
          )
        );

        const dilutionFactor = Math.max(1, overlappingProjects.length);
        const daysInProject = eachDayOfInterval({ start: parseISO(p.startDate), end: parseISO(p.deadline) });
        const availableDays = daysInProject.filter(d => !person.unavailableDates.includes(format(d, 'yyyy-MM-dd'))).length;

        totalCapacity += (skillCap / dilutionFactor) * availableDays;
      });

      const percentage = Math.min(100, Math.round((totalCapacity / p.quantity) * 100));
      return { id: p.id, percentage, current: Math.round(totalCapacity), target: p.quantity };
    });
  }, [projects, personnel]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>
        <BarChart3 size={20} color="#4F46E5" />
        <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>Scheduling Workbench</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', flex: 1, minHeight: 0 }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto', paddingRight: '0.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Project Backlog</div>
          {projects.map(p => {
            const cov = projectCoverage.find(c => c.id === p.id);
            const isSel = p.id === selectedProjectId;
            return (
              <div key={p.id} onClick={() => onSelectProject(p)} style={{ padding: '0.75rem', borderRadius: '12px', border: '1px solid', borderColor: isSel ? '#4F46E5' : '#e5e7eb', backgroundColor: isSel ? '#f5f3ff' : '#fff', cursor: 'pointer' }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>{p.customer}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#64748b', marginBottom: '0.4rem' }}>
                  <span>{p.category} | {p.quantity} Units</span>
                  <span>{cov?.percentage}% Coverage</span>
                </div>
                <div style={{ height: '6px', backgroundColor: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${cov?.percentage}%`, height: '100%', backgroundColor: (cov?.percentage || 0) >= 100 ? '#10B981' : '#F59E0B', transition: 'width 0.5s ease' }}></div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto', paddingRight: '0.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Personnel Pool</div>
          {!selectedProject ? (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#94a3b8', fontSize: '0.8rem', padding: '2rem' }}>Select a project to assign members</div>
          ) : (
            personnel.map(person => {
              const regionMatch = person.allowedRegions.includes(countryToRegion[selectedProject.country] || '');
              const skillObj = person.skillCapacities.find(sc => sc.category === selectedProject.category);
              const skillMatch = !!skillObj;
              const isAssigned = selectedProject.assignedPersonnel.includes(person.name);
              const isEligible = regionMatch && skillMatch;

              return (
                <div key={person.id} style={{ padding: '0.75rem', borderRadius: '12px', border: '1px solid #e5e7eb', backgroundColor: isEligible ? (isAssigned ? '#ecfdf5' : '#fff') : '#f8fafc', opacity: isEligible ? 1 : 0.5 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div onClick={() => onSelectPersonnel?.(person)} style={{ cursor: 'pointer' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#4F46E5', textDecoration: 'underline' }}>{person.name}</div>
                      <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Cap: {skillObj?.dailyCapacity || 0}/day</div>
                    </div>
                    {isEligible && (
                      <button onClick={() => isAssigned ? onUnassign(selectedProject.id, person.name) : onAssign(selectedProject.id, person.name)} style={{ border: 'none', background: isAssigned ? '#10B981' : '#4F46E5', color: '#fff', padding: '4px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer' }}>
                        {isAssigned ? 'Remove' : 'Assign'}
                      </button>
                    )}
                    {!isEligible && <AlertCircle size={18} color="#fca5a5" />}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.6rem', color: regionMatch ? '#059669' : '#dc2626' }}>
                      <Globe size={10} /> {countryToRegion[selectedProject.country]}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.6rem', color: skillMatch ? '#059669' : '#dc2626' }}>
                      <Wrench size={10} /> {selectedProject.category}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default SchedulingWorkbench;

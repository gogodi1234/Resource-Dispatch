import React from 'react';
import type { Personnel, Project } from '../data/mockData';
import { User, ExternalLink } from 'lucide-react';
import { format, isWithinInterval, parseISO, startOfDay } from 'date-fns';

interface PersonnelTableProps {
  personnel: Personnel[];
  projects: Project[];
  onPersonnelClick: (person: Personnel) => void;
  selectedPersonnelId?: string;
}

const PersonnelTable: React.FC<PersonnelTableProps> = ({ personnel, projects, onPersonnelClick, selectedPersonnelId }) => {
  const today = startOfDay(new Date(2026, 2, 10));
  const todayStr = format(today, 'yyyy-MM-dd');

  const getPersonnelStatus = (p: Personnel) => {
    if (p.unavailableDates.includes(todayStr)) {
      return { label: 'On Leave', color: '#F59E0B' };
    }
    const activeAssignments = projects.filter(prj => {
      const isAssigned = prj.assignedPersonnel.includes(p.name);
      if (!isAssigned) return false;

      const isTodayWithinProject = isWithinInterval(today, { 
        start: startOfDay(parseISO(prj.startDate)), 
        end: startOfDay(parseISO(prj.deadline)) 
      });

      // BUSY if: project is 'delay' OR (it is 'ongoing' AND active today)
      return prj.status === 'delay' || (prj.status === 'ongoing' && isTodayWithinProject);
    });

    if (activeAssignments.length > 0) {
      return { label: 'Busy', color: '#EF4444' };
    }
    return { label: 'Available', color: '#10B981' };
  };
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
        <thead>
          <tr style={{ backgroundColor: '#f9fafb', textAlign: 'left' }}>
            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#64748b', fontWeight: 700, borderBottom: '2px solid #f1f5f9' }}>NAME / ROLE</th>
            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#64748b', fontWeight: 700, borderBottom: '2px solid #f1f5f9' }}>SKILLS</th>
            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#64748b', fontWeight: 700, borderBottom: '2px solid #f1f5f9' }}>COUNTRIES</th>
            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#64748b', fontWeight: 700, borderBottom: '2px solid #f1f5f9' }}>ACTIVE PROJECTS</th>
            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#64748b', fontWeight: 700, borderBottom: '2px solid #f1f5f9' }}>STATUS</th>
            <th style={{ borderBottom: '2px solid #f1f5f9' }}></th>
          </tr>
        </thead>
        <tbody>
          {personnel.map(p => {
            const assignedCount = projects.filter(prj => prj.assignedPersonnel.includes(p.name) && prj.status !== 'completed').length;
            const isSelected = p.id === selectedPersonnelId;
            const status = getPersonnelStatus(p);

            return (
              <tr 
                key={p.id}
                onClick={() => onPersonnelClick(p)}
                style={{ 
                  borderBottom: '1px solid #f1f5f9', cursor: 'pointer',
                  backgroundColor: isSelected ? '#f5f3ff' : 'transparent',
                  boxShadow: isSelected ? 'inset 4px 0 0 #4F46E5' : 'none'
                }}
              >
                <td style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ backgroundColor: '#EEF2FF', padding: '0.5rem', borderRadius: '8px' }}>
                      <User size={18} color="#4F46E5" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>{p.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{p.role}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.skills.map(s => (
                      <span key={s} style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', backgroundColor: '#f1f5f9', borderRadius: '4px', border: '1px solid #e2e8f0' }}>{s}</span>
                    ))}
                  </div>
                </td>
                <td style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.allowedCountries.map(c => (
                      <span key={c} style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', backgroundColor: '#ecfdf5', color: '#059669', borderRadius: '4px', fontWeight: 600 }}>{c}</span>
                    ))}
                  </div>
                </td>
                <td style={{ padding: '16px', fontSize: '0.875rem', fontWeight: 600 }}>{assignedCount} Projects</td>
                <td style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: status.color }}></div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: status.color }}>{status.label}</span>
                  </div>
                </td>
                <td style={{ padding: '16px', textAlign: 'right' }}>
                  <ExternalLink size={16} color="#94a3b8" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PersonnelTable;

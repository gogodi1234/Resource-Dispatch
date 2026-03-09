import React from 'react';
import type { Personnel, Project } from '../data/mockData';
import { User, ExternalLink } from 'lucide-react';

interface PersonnelTableProps {
  personnel: Personnel[];
  projects: Project[];
  onPersonnelClick: (person: Personnel) => void;
  selectedPersonnelId?: string;
}

const PersonnelTable: React.FC<PersonnelTableProps> = ({ personnel, projects, onPersonnelClick, selectedPersonnelId }) => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
        <thead>
          <tr style={{ backgroundColor: '#f9fafb', textAlign: 'left' }}>
            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#64748b', fontWeight: 700, borderBottom: '2px solid #f1f5f9' }}>NAME / ROLE</th>
            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#64748b', fontWeight: 700, borderBottom: '2px solid #f1f5f9' }}>SKILLS & CAPACITY</th>
            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#64748b', fontWeight: 700, borderBottom: '2px solid #f1f5f9' }}>REGIONS</th>
            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#64748b', fontWeight: 700, borderBottom: '2px solid #f1f5f9' }}>ACTIVE PROJECTS</th>
            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#64748b', fontWeight: 700, borderBottom: '2px solid #f1f5f9' }}>STATUS</th>
            <th style={{ borderBottom: '2px solid #f1f5f9' }}></th>
          </tr>
        </thead>
        <tbody>
          {personnel.map(p => {
            const assignedCount = projects.filter(prj => prj.assignedPersonnel.includes(p.name)).length;
            const isSelected = p.id === selectedPersonnelId;
            return (
              <tr 
                key={p.id}
                onClick={() => onPersonnelClick(p)}
                style={{ 
                  borderBottom: '1px solid #f1f5f9', cursor: 'pointer',
                  backgroundColor: isSelected ? '#f5f3ff' : 'transparent',
                  boxShadow: isSelected ? 'inset 4px 0 0 #4F46E5' : 'none'
                }}
                onMouseEnter={(e) => !isSelected && (e.currentTarget.style.backgroundColor = '#f8fafc')}
                onMouseLeave={(e) => !isSelected && (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <td style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ backgroundColor: '#EEF2FF', padding: '0.5rem', borderRadius: '8px' }}>
                      <User size={18} color="#4F46E5" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: isSelected ? '#4F46E5' : '#1e293b' }}>{p.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{p.role}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.skillCapacities.map((sc, i) => (
                      <span key={i} style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', backgroundColor: '#f1f5f9', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                        {sc.category} ({sc.dailyCapacity})
                      </span>
                    ))}
                  </div>
                </td>
                <td style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    {p.allowedRegions.map(r => (
                      <span key={r} style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', backgroundColor: '#ecfdf5', color: '#059669', borderRadius: '4px', fontWeight: 600 }}>{r}</span>
                    ))}
                  </div>
                </td>
                <td style={{ padding: '16px', fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>
                  {assignedCount} Projects
                </td>
                <td style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: p.unavailableDates.length > 0 ? '#F59E0B' : '#10B981' }}></div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{p.unavailableDates.length > 0 ? 'Busy / Leave' : 'Available'}</span>
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

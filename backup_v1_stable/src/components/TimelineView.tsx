import React, { useMemo, useState } from 'react';
import { format, startOfMonth, addMonths, addWeeks, startOfWeek, parseISO, differenceInDays, startOfDay } from 'date-fns';
import type { Project, Personnel } from '../data/mockData';
import { Calendar as CalendarIcon, User as UserIcon, ZoomIn, ZoomOut } from 'lucide-react';

interface TimelineViewProps {
  projects: Project[];
  personnel: Personnel[];
}

type TimeScale = 'month' | 'week';

const TimelineView: React.FC<TimelineViewProps> = ({ projects, personnel }) => {
  const [viewMode, setViewMode] = useState<'projects' | 'personnel'>('projects');
  const [scale, setScale] = useState<TimeScale>('month');

  // Base date for timeline (March 2026 based on system date)
  const baseDate = useMemo(() => new Date(2026, 2, 1), []); 
  
  const timelineConfig = useMemo(() => {
    if (scale === 'month') {
      const start = startOfMonth(addMonths(baseDate, -1)); // Show from last month
      const months = Array.from({ length: 6 }).map((_, i) => addMonths(start, i));
      const end = addMonths(start, 6);
      return { start, end, units: months, labelFormat: 'MMM yyyy', totalDays: differenceInDays(end, start) };
    } else {
      const start = startOfWeek(baseDate);
      const weeks = Array.from({ length: 8 }).map((_, i) => addWeeks(start, i));
      const end = addWeeks(start, 8);
      return { start, end, units: weeks, labelFormat: 'w, MMM d', totalDays: differenceInDays(end, start) };
    }
  }, [scale, baseDate]);

  const getPosition = (dateStr: string) => {
    const date = startOfDay(parseISO(dateStr));
    const start = startOfDay(timelineConfig.start);
    const diff = differenceInDays(date, start);
    return Math.max(0, Math.min(100, (diff / timelineConfig.totalDays) * 100));
  };

  const getWidth = (startStr: string, endStr: string) => {
    const start = startOfDay(parseISO(startStr));
    const end = startOfDay(parseISO(endStr));
    const diff = differenceInDays(end, start);
    return Math.max(0.5, (diff / timelineConfig.totalDays) * 100);
  };

  const unitWidth = 100 / timelineConfig.units.length;

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '1.5rem', marginTop: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={() => setViewMode('projects')}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', border: 'none',
              backgroundColor: viewMode === 'projects' ? '#4F46E5' : 'transparent', color: viewMode === 'projects' ? '#fff' : '#64748b', fontWeight: 600, fontSize: '0.875rem'
            }}
          >
            <CalendarIcon size={16} /> Projects
          </button>
          <button 
            onClick={() => setViewMode('personnel')}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', border: 'none',
              backgroundColor: viewMode === 'personnel' ? '#4F46E5' : 'transparent', color: viewMode === 'personnel' ? '#fff' : '#64748b', fontWeight: 600, fontSize: '0.875rem'
            }}
          >
            <UserIcon size={16} /> Personnel
          </button>
        </div>

        <div style={{ display: 'flex', backgroundColor: '#f1f5f9', padding: '3px', borderRadius: '8px' }}>
          <button 
            onClick={() => setScale('month')}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer',
              backgroundColor: scale === 'month' ? '#fff' : 'transparent', boxShadow: scale === 'month' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
              fontSize: '12px', fontWeight: 600, color: scale === 'month' ? '#1e293b' : '#64748b'
            }}
          >
            <ZoomOut size={14} /> Monthly
          </button>
          <button 
            onClick={() => setScale('week')}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer',
              backgroundColor: scale === 'week' ? '#fff' : 'transparent', boxShadow: scale === 'week' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
              fontSize: '12px', fontWeight: 600, color: scale === 'week' ? '#1e293b' : '#64748b'
            }}
          >
            <ZoomIn size={14} /> Weekly
          </button>
        </div>
      </div>

      <div style={{ position: 'relative', overflowX: 'auto' }}>
        <div style={{ minWidth: '1000px' }}>
          {/* Header Row */}
          <div style={{ display: 'flex', borderBottom: '2px solid #f1f5f9', marginBottom: '0.5rem' }}>
            <div style={{ width: '180px', flexShrink: 0, padding: '0.5rem', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
              {viewMode === 'projects' ? 'Project Name' : 'Team Member'}
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
              {timelineConfig.units.map(unit => (
                <div key={unit.toString()} style={{ 
                  width: `${unitWidth}%`, fontSize: '0.7rem', fontWeight: 700, color: '#64748b', textAlign: 'center', 
                  borderLeft: '1px solid #f1f5f9', padding: '0.5rem 0'
                }}>
                  {scale === 'week' ? `Week ${format(unit, 'w')}` : format(unit, 'MMM yyyy')}
                  {scale === 'week' && <div style={{ fontSize: '0.6rem', fontWeight: 400, color: '#94a3b8' }}>{format(unit, 'MMM d')}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Rows Content */}
          <div style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '4px' }}>
            {viewMode === 'projects' ? (
              projects.map(project => (
                <div key={project.id} style={{ display: 'flex', alignItems: 'center', height: '44px', borderBottom: '1px solid #f8fafc' }}>
                  <div style={{ width: '180px', flexShrink: 0, fontSize: '0.75rem', fontWeight: 600, color: '#334155', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: '12px' }}>
                    {project.name}
                  </div>
                  <div style={{ flex: 1, position: 'relative', height: '28px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
                    <div 
                      style={{
                        position: 'absolute', left: `${getPosition(project.startDate)}%`, width: `${getWidth(project.startDate, project.deadline)}%`,
                        height: '100%', backgroundColor: '#818CF8', borderRadius: '6px', display: 'flex', alignItems: 'center', padding: '0 8px',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)', overflow: 'hidden'
                      }}
                      title={`${project.name}: ${project.startDate} to ${project.deadline}`}
                    >
                      <span style={{ fontSize: '10px', color: '#fff', fontWeight: 700, whiteSpace: 'nowrap' }}>{project.customer}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              personnel.map(person => {
                const personProjects = projects.filter(p => p.assignedPersonnel.includes(person.name));
                return (
                  <div key={person.id} style={{ display: 'flex', alignItems: 'center', height: '52px', borderBottom: '1px solid #f8fafc' }}>
                    <div style={{ width: '180px', flexShrink: 0, paddingRight: '12px' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1e293b' }}>{person.name}</div>
                      <div style={{ fontSize: '0.65rem', color: '#64748b' }}>{person.role}</div>
                    </div>
                    <div style={{ flex: 1, position: 'relative', height: '32px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
                      {personProjects.map(p => (
                        <div 
                          key={p.id}
                          style={{
                            position: 'absolute', left: `${getPosition(p.startDate)}%`, width: `${getWidth(p.startDate, p.deadline)}%`,
                            height: '100%', backgroundColor: '#10B981', borderRadius: '6px', opacity: 0.85, border: '1px solid #fff',
                            display: 'flex', alignItems: 'center', padding: '0 8px', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                          }}
                          title={`${p.customer} (${p.category}): ${p.startDate} to ${p.deadline}`}
                        >
                          <span style={{ 
                            fontSize: '10px', color: '#fff', fontWeight: 800, whiteSpace: 'nowrap', 
                            textOverflow: 'ellipsis', overflow: 'hidden' 
                          }}>
                            {p.customer} - {p.category}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem', fontSize: '0.7rem', color: '#64748b' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#10B981', borderRadius: '3px' }}></div>
          <span>Green = Assigned Project (Darker color indicates schedule overlap)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#818CF8', borderRadius: '3px' }}></div>
          <span>Blue = Project Duration</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineView;

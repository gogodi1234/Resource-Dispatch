import React, { useMemo, useState } from 'react';
import { format, startOfMonth, addMonths, addWeeks, startOfWeek, parseISO, differenceInDays, startOfDay, isAfter } from 'date-fns';
import type { Project, Personnel } from '../data/mockData';
import { Calendar as CalendarIcon, User as UserIcon, ZoomIn, ZoomOut, AlertCircle } from 'lucide-react';

interface TimelineViewProps {
  projects: Project[];
  personnel: Personnel[];
  selectedProjectId?: string;
  selectedPersonnelId?: string;
}

type TimeScale = 'month' | 'week';

const TimelineView: React.FC<TimelineViewProps> = ({ projects, personnel, selectedProjectId, selectedPersonnelId }) => {
  const [viewMode, setViewMode] = useState<'projects' | 'personnel'>('projects');
  const [scale, setScale] = useState<TimeScale>('month');

  const today = useMemo(() => new Date(2026, 2, 10), []); 
  const baseDate = useMemo(() => new Date(2026, 2, 1), []); 
  
  const timelineConfig = useMemo(() => {
    if (scale === 'month') {
      const start = startOfMonth(addMonths(baseDate, -1));
      const months = Array.from({ length: 6 }).map((_, i) => addMonths(start, i));
      const end = addMonths(start, 6);
      return { start, end, units: months, labelFormat: 'MMM yyyy', totalDays: differenceInDays(end, start) };
    } else {
      const start = startOfWeek(baseDate);
      const weeks = Array.from({ length: 10 }).map((_, i) => addWeeks(start, i));
      const end = addWeeks(start, 10);
      return { start, end, units: weeks, labelFormat: 'w, MMM d', totalDays: differenceInDays(end, start) };
    }
  }, [scale, baseDate]);

  const getPosition = (dateStr: string) => {
    const date = startOfDay(parseISO(dateStr));
    const start = startOfDay(timelineConfig.start);
    const diff = differenceInDays(date, start);
    return Math.max(0, Math.min(100, (diff / timelineConfig.totalDays) * 100));
  };

  const getWidth = (startStr: string, endStr: string, status?: string) => {
    const start = startOfDay(parseISO(startStr));
    let end = startOfDay(parseISO(endStr));
    if (status === 'delay' && isAfter(today, end)) end = today;
    const diff = differenceInDays(end, start);
    return Math.max(0.5, (diff / timelineConfig.totalDays) * 100);
  };

  const unitWidth = 100 / timelineConfig.units.length;

  // UNIFIED COLORS (Matching App THEME)
  const getBarColor = (status: string, isSelected: boolean) => {
    switch (status) {
      case 'delay': return isSelected ? '#EF4444' : '#FCA5A5';
      case 'ongoing': return isSelected ? '#10B981' : '#6EE7B7';
      case 'planning': return isSelected ? '#8B5CF6' : '#C4B5FD';
      case 'on-hold': return isSelected ? '#64748B' : '#94A3B8';
      default: return isSelected ? '#4F46E5' : '#818CF8';
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid rgba(76, 140, 228, 0.2)', padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '400px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={() => setViewMode('projects')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', border: 'none', backgroundColor: viewMode === 'projects' ? '#4F46E5' : 'transparent', color: viewMode === 'projects' ? '#fff' : '#64748b', fontWeight: 700, fontSize: '0.8rem' }}>
            <CalendarIcon size={14} /> Project Timeline
          </button>
          <button onClick={() => setViewMode('personnel')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', border: 'none', backgroundColor: viewMode === 'personnel' ? '#4F46E5' : 'transparent', color: viewMode === 'personnel' ? '#fff' : '#64748b', fontWeight: 700, fontSize: '0.8rem' }}>
            <UserIcon size={14} /> Personnel Schedule
          </button>
        </div>

        <div style={{ display: 'flex', backgroundColor: '#f1f5f9', padding: '3px', borderRadius: '8px' }}>
          <button onClick={() => setScale('month')} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '6px', border: scale === 'month' ? '1px solid rgba(76, 140, 228, 0.2)' : '1px solid transparent', cursor: 'pointer', backgroundColor: scale === 'month' ? '#fff' : 'transparent', fontSize: '11px', fontWeight: 700, color: scale === 'month' ? '#1e293b' : '#64748b' }}>
            <ZoomOut size={12} /> Monthly
          </button>
          <button onClick={() => setScale('week')} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '6px', border: scale === 'week' ? '1px solid rgba(76, 140, 228, 0.2)' : '1px solid transparent', cursor: 'pointer', backgroundColor: scale === 'week' ? '#fff' : 'transparent', fontSize: '11px', fontWeight: 700, color: scale === 'week' ? '#1e293b' : '#64748b' }}>
            <ZoomIn size={12} /> Weekly
          </button>
        </div>
      </div>

      <div style={{ flex: 1, overflowX: 'auto', position: 'relative', overflowY: 'auto' }}>
        <div style={{ minWidth: '1000px', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', borderBottom: '2px solid #f1f5f9', marginBottom: '0.5rem', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 10 }}>
            <div style={{ width: '180px', flexShrink: 0, padding: '0.5rem', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8' }}>
              {viewMode === 'projects' ? 'PROJECT / CUSTOMER' : 'TEAM MEMBER'}
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
              {timelineConfig.units.map(unit => (
                <div key={unit.toString()} style={{ width: `${unitWidth}%`, fontSize: '0.65rem', fontWeight: 700, color: '#64748b', textAlign: 'center', borderLeft: '1px solid #f1f5f9', padding: '0.5rem 0' }}>
                  {scale === 'week' ? `Week ${format(unit, 'w')}` : format(unit, 'MMM yyyy')}
                  {scale === 'week' && <div style={{ fontSize: '0.55rem', fontWeight: 400 }}>{format(unit, 'MMM d')}</div>}
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1 }}>
            {viewMode === 'projects' ? (
              projects.map(project => {
                const isSelected = project.id === selectedProjectId;
                const isDelayed = project.status === 'delay';
                const tooltipText = `Start: ${project.startDate}\nEnd: ${project.deadline}${isDelayed ? ' (Delayed)' : ''}`;
                
                return (
                  <div key={project.id} style={{ display: 'flex', alignItems: 'center', height: '40px', borderBottom: '1px solid #f8fafc', backgroundColor: isSelected ? '#f5f3ff' : 'transparent' }}>
                    <div style={{ width: '180px', flexShrink: 0, fontSize: '0.7rem', fontWeight: isSelected ? 800 : 600, color: isSelected ? '#4F46E5' : '#334155', padding: '0 10px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {isDelayed && <AlertCircle size={12} color="#EF4444" />}
                      {project.customer}
                    </div>
                    <div style={{ flex: 1, position: 'relative', height: '24px', backgroundColor: '#f8fafc', borderRadius: '4px' }}>
                      <div 
                        title={tooltipText}
                        style={{
                          position: 'absolute', left: `${getPosition(project.startDate)}%`, width: `${getWidth(project.startDate, project.deadline, project.status)}%`,
                          height: '100%', backgroundColor: getBarColor(project.status, isSelected), borderRadius: '4px', opacity: 0.8,
                          display: 'flex', alignItems: 'center', padding: '0 6px', overflow: 'hidden', border: isDelayed ? '1px solid #EF4444' : 'none', cursor: 'help'
                        }}
                      >
                        <span style={{ fontSize: '9px', color: '#fff', fontWeight: 700, whiteSpace: 'nowrap' }}>{project.customer} {isDelayed ? '(DELAYED)' : ''}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              personnel.map(person => {
                const isSelected = person.id === selectedPersonnelId;
                const personProjects = projects.filter(p => p.assignedPersonnel.includes(person.name));
                return (
                  <div key={person.id} style={{ display: 'flex', alignItems: 'center', height: '48px', borderBottom: '1px solid #f8fafc', backgroundColor: isSelected ? '#f5f3ff' : 'transparent' }}>
                    <div style={{ width: '180px', flexShrink: 0, padding: '0 10px' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: isSelected ? '#4F46E5' : '#1e293b' }}>{person.name}</div>
                      <div style={{ fontSize: '0.6rem', color: '#64748b' }}>{person.role}</div>
                    </div>
                    <div style={{ flex: 1, position: 'relative', height: '28px', backgroundColor: '#f8fafc', borderRadius: '4px' }}>
                      {personProjects.map(p => (
                        <div 
                          key={p.id}
                          title={`${p.customer} (${p.category})\nStart: ${p.startDate}\nEnd: ${p.deadline}`}
                          style={{
                            position: 'absolute', left: `${getPosition(p.startDate)}%`, width: `${getWidth(p.startDate, p.deadline, p.status)}%`,
                            height: '100%', backgroundColor: getBarColor(p.status, false), borderRadius: '4px', opacity: 0.7, border: '1px solid #fff',
                            display: 'flex', alignItems: 'center', padding: '0 6px', overflow: 'hidden', cursor: 'help'
                          }}
                        >
                          <span style={{ fontSize: '9px', color: '#fff', fontWeight: 700, whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{p.customer}</span>
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
    </div>
  );
};

export default TimelineView;

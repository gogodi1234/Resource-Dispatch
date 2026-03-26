import React, { useState, useMemo } from "react";
import type { Project, Personnel } from "../data/mockData";
import { X, MapPin, Calendar, Users, Trash2, CheckCircle, AlertTriangle, PlayCircle, PauseCircle, Pencil, UserPlus, Search, Globe, Wrench } from "lucide-react";
import { parseISO, startOfDay, areIntervalsOverlapping, isAfter, isWithinInterval } from 'date-fns';

interface ProjectDetailsProps {
  project: Project;
  personnel: Personnel[];
  allProjects: Project[];
  onClose: () => void;
  onEdit: (project: Project) => void;
  onDelete: (projectId: string) => void;
  onMarkComplete: (projectId: string) => void;
  onMarkDelay: (projectId: string) => void;
  onUpdateStatus: (projectId: string, status: Project['status']) => void;
  onToggleOnHold: (projectId: string) => void;
  onAssign: (projectId: string, personnelName: string) => void;
  onUnassign: (projectId: string, personnelName: string) => void;
  onUnassignAll: (projectId: string) => void;
  today: Date;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ 
  project, personnel, allProjects, onClose, onEdit, onDelete, onMarkComplete, onMarkDelay, onToggleOnHold, onAssign, onUnassign, today
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isPoolDragOver, setIsPoolDragOver] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const assignedTeam = personnel.filter(p => project.assignedPersonnel.includes(p.name));

  const filteredPersonnelPool = useMemo(() => {
    let pool = personnel.filter(p => !project.assignedPersonnel.includes(p.name));
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      pool = pool.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.role.toLowerCase().includes(term) ||
        p.skills.some(s => s.toLowerCase().includes(term))
      );
    }
    return pool;
  }, [personnel, project.assignedPersonnel, searchTerm]);

  const handleAssignAttempt = (person: Personnel) => {
    const newStart = startOfDay(parseISO(project.startDate));
    const newEnd = startOfDay(parseISO(project.deadline));

    // Overlap checks
    const overlappingProjects = allProjects.filter(prj => {
      if (prj.id === project.id) return false;
      if (prj.status === 'completed') return false;
      if (!prj.assignedPersonnel.includes(person.name)) return false;

      const prjStart = startOfDay(parseISO(prj.startDate));
      let prjEnd = startOfDay(parseISO(prj.deadline));
      if (prj.status === 'delay' && isAfter(today, prjEnd)) prjEnd = startOfDay(today);

      return areIntervalsOverlapping(
        { start: newStart, end: newEnd },
        { start: prjStart, end: prjEnd },
        { inclusive: true }
      );
    });

    const countryMatch = person.allowedCountries.includes('GLOBAL') || person.allowedCountries.includes(project.country);
    const skillMatch = person.skills.includes('All') || person.skills.includes(project.category);

    // Leave date checks
    const overlappingLeaveDates = person.unavailableDates.filter(date => {
      const leaveDate = startOfDay(parseISO(date));
      return isWithinInterval(leaveDate, { start: newStart, end: newEnd });
    });

    let warnings = [];
    if (!countryMatch) warnings.push(`not authorized for ${project.country}`);
    if (!skillMatch) warnings.push(`missing ${project.category} skill`);
    if (overlappingProjects.length > 0) warnings.push(`overlapping projects: ${overlappingProjects.map(p => p.customer).join(', ')}`);
    if (overlappingLeaveDates.length > 0) warnings.push(`has registered leave during this project period (${overlappingLeaveDates.join(', ')})`);

    if (warnings.length > 0) {
      if (window.confirm(`Assignment Warning for ${person.name}:\n\n${warnings.map(w => `• ${w}`).join('\n')}\n\nForce assign?`)) {
        onAssign(project.id, person.name);
      }
    } else {
      onAssign(project.id, person.name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const personnelName = e.dataTransfer.getData('personnelName');
    const source = e.dataTransfer.getData('source');
    
    // Only assign if dragged from pool/outside, not if dragging within Team section
    if (source !== 'assigned-team') {
      const person = personnel.find(p => p.name === personnelName);
      if (person && !project.assignedPersonnel.includes(personnelName)) {
        handleAssignAttempt(person);
      }
    }
  };

  const handlePoolDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPoolDragOver(true);
  };

  const handlePoolDragLeave = () => {
    setIsPoolDragOver(false);
  };

  const handlePoolDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPoolDragOver(false);
    const personnelName = e.dataTransfer.getData('personnelName');
    const source = e.dataTransfer.getData('source');

    if (source === 'assigned-team' && personnelName) {
      if (window.confirm(`Unassign ${personnelName} from this project?`)) {
        onUnassign(project.id, personnelName);
      }
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'delay': return { bg: '#FEE2E2', text: '#EF4444' };
      case 'ongoing': return { bg: '#ECFDF5', text: '#10B981' };
      case 'planning': return { bg: '#F5F3FF', text: '#8B5CF6' };
      case 'on-hold': return { bg: '#F1F5F9', text: '#64748b' };
      default: return { bg: '#F3F4F6', text: '#374151' };
    }
  };

  const colors = getStatusStyle(project.status);

  return (
    <div 
      className="project-details" 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{ 
        borderRadius: '16px', 
        backgroundColor: isDragOver ? '#E0F2FE' : '#F5F9FF',
        overflow: 'hidden',
        border: isDragOver ? '2px dashed #4C8CE4' : '1px solid rgba(76, 140, 228, 0.2)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.2s ease',
        height: 'calc(100vh - 140px)', // Fixed height for scrollability
        maxHeight: '850px'
      }}
    >
      {isDragOver && !isPoolDragOver && (
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(76, 140, 228, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 20, pointerEvents: 'none' }}>
          <UserPlus size={48} color="#4C8CE4" style={{ marginBottom: '1rem' }} />
          <span style={{ fontWeight: 800, color: '#4C8CE4', fontSize: '1.2rem' }}>Drop to Assign</span>
        </div>
      )}
      
      <div style={{ height: '4px', backgroundColor: '#4C8CE4', width: '100%', flexShrink: 0 }} />

      <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
        <button onClick={() => onEdit(project)} style={{ border: 'none', background: 'rgba(255,255,255,0.8)', borderRadius: '50%', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}><Pencil size={16} color="#4C8CE4" /></button>
        <button onClick={onClose} style={{ border: 'none', background: 'rgba(255,255,255,0.8)', borderRadius: '50%', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}><X size={16} color="#64748b" /></button>
      </div>

      <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
        {/* Header Section */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 900, padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase', backgroundColor: colors.bg, color: colors.text }}>{project.status}</span>
            <span style={{ fontSize: '0.65rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px', backgroundColor: '#fff', color: '#475569', border: '1px solid #E2E8F0' }}>{project.category}</span>
          </div>
          <h2 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 900, color: '#1e293b', lineHeight: 1.2 }}>{project.customer}</h2>
          <p style={{ margin: '0.4rem 0 0 0', color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>{project.name}</p>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(76, 140, 228, 0.1)', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569' }}><div style={{ backgroundColor: '#F0F7FF', padding: '6px', borderRadius: '8px' }}><MapPin size={16} color="#4C8CE4" /></div><span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{project.city}, {project.country}</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569' }}><div style={{ backgroundColor: '#F0F7FF', padding: '6px', borderRadius: '8px' }}><Calendar size={16} color="#4C8CE4" /></div><span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{project.startDate} to {project.deadline}</span></div>
        </div>

        {/* Assigned Team */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.025em' }}><Users size={14} /> Team Members ({assignedTeam.length})</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {assignedTeam.length > 0 ? assignedTeam.map(p => (
              <div 
                key={p.id} 
                draggable={true}
                onDragStart={(e) => {
                  e.dataTransfer.setData('personnelName', p.name);
                  e.dataTransfer.setData('source', 'assigned-team');
                  e.currentTarget.style.opacity = '0.5';
                }}
                onDragEnd={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                style={{ padding: '0.4rem 0.8rem', backgroundColor: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, color: '#1e293b', cursor: 'grab' }}
              >
                {p.name}
              </div>
            )) : (
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic', backgroundColor: 'rgba(255,255,255,0.5)', width: '100%', padding: '1rem', borderRadius: '10px', textAlign: 'center', border: '1px dashed #cbd5e1' }}>No personnel assigned.</div>
            )}
          </div>
        </div>

        {/* NEW: Personnel Pool Section */}
        <div 
          style={{ marginBottom: '1.5rem', position: 'relative' }}
          onDragOver={handlePoolDragOver}
          onDragLeave={handlePoolDragLeave}
          onDrop={handlePoolDrop}
        >
          {isPoolDragOver && (
            <div style={{
              position: 'absolute', inset: '-8px', backgroundColor: 'rgba(239, 68, 68, 0.1)',
              borderRadius: '12px', border: '2px dashed #EF4444', zIndex: 30, pointerEvents: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <span style={{ color: '#EF4444', fontWeight: 800, fontSize: '0.9rem' }}>Drop to Unassign</span>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Personnel Pool</div>
            <div style={{ position: 'relative', width: '150px' }}>
              <Search size={12} color="#94a3b8" style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="text" placeholder="Search pool..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: '100%', padding: '4px 8px 4px 24px', borderRadius: '6px', border: '1px solid #E2E8F0', fontSize: '0.7rem', outline: 'none' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '300px', overflowY: 'auto', paddingRight: '4px' }}>
            {filteredPersonnelPool.length > 0 ? filteredPersonnelPool.map(person => {
              const countryMatch = person.allowedCountries.includes('GLOBAL') || person.allowedCountries.includes(project.country);
              const skillMatch = person.skills.includes('All') || person.skills.includes(project.category);
              return (
                <div 
                  key={person.id}
                  draggable={true}
                  onDragStart={(e) => { e.dataTransfer.setData('personnelName', person.name); e.dataTransfer.setData('source', 'pool'); e.currentTarget.style.opacity = '0.5'; }}
                  onDragEnd={(e) => { e.currentTarget.style.opacity = '1'; }}
                  style={{ padding: '0.75rem', backgroundColor: '#fff', border: '1px solid #E2E8F0', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'grab' }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1e293b' }}>{person.name}</span>
                      {(!countryMatch || !skillMatch) && <AlertTriangle size={12} color="#F59E0B" />}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '2px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '0.6rem', color: countryMatch ? '#059669' : '#dc2626' }}><Globe size={10} /> {person.allowedCountries[0]}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '0.6rem', color: skillMatch ? '#059669' : '#dc2626' }}><Wrench size={10} /> {person.skills[0]}</div>
                    </div>
                  </div>
                  <button onClick={() => handleAssignAttempt(person)} style={{ border: 'none', background: '#4C8CE4', color: '#fff', padding: '3px 8px', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 700, cursor: 'pointer' }}>Assign</button>
                </div>
              );
            }) : <div style={{ textAlign: 'center', padding: '1rem', color: '#94a3b8', fontSize: '0.75rem', border: '1px dashed #E2E8F0', borderRadius: '10px' }}>No available personnel found.</div>}
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#F1F5F9', padding: '1.5rem', borderTop: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Status Change</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <button onClick={() => onToggleOnHold(project.id)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.7rem', borderRadius: '10px', border: '1px solid #E2E8F0', backgroundColor: '#fff', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>{project.status === 'on-hold' ? <PlayCircle size={16} color="#10B981" /> : <PauseCircle size={16} color="#F59E0B" />}{project.status === 'on-hold' ? 'Resume' : 'On-hold'}</button>
          <button onClick={() => { if(confirm('Are you sure you want to mark this project as complete?')) onMarkComplete(project.id); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.7rem', borderRadius: '10px', border: 'none', backgroundColor: '#10B981', color: '#fff', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700 }}><CheckCircle size={16} /> Mark complete</button>
        </div>
        <div style={{ height: '1px', backgroundColor: '#E2E8F0', margin: '0.5rem 0' }} />
        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Other Operation</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <button onClick={() => onMarkDelay(project.id)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.7rem', borderRadius: '10px', border: '1px solid #E2E8F0', backgroundColor: '#fff', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}><AlertTriangle size={16} color="#EF4444" /> Flag Delay</button>
          <button onClick={() => onDelete(project.id)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.7rem', borderRadius: '10px', border: '1px solid #FEE2E2', backgroundColor: '#fff', color: '#FF0000', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700 }}><Trash2 size={16} /> Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

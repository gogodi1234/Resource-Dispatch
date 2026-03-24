import React from "react";
import type { Project, Personnel } from "../data/mockData";
import { X, MapPin, Calendar, Users, Trash2, CheckCircle, AlertTriangle, PlayCircle, PauseCircle, Pencil } from "lucide-react";

interface ProjectDetailsProps {
  project: Project;
  personnel: Personnel[];
  onClose: () => void;
  onEdit: (project: Project) => void;
  onDelete: (projectId: string) => void;
  onMarkComplete: (projectId: string) => void;
  onMarkDelay: (projectId: string) => void;
  onToggleOnHold: (projectId: string) => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ 
  project, personnel, onClose, onEdit, onDelete, onMarkComplete, onMarkDelay, onToggleOnHold 
}) => {
  const assignedTeam = personnel.filter(p => project.assignedPersonnel.includes(p.name));

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
    <div className="project-details" style={{ 
      borderRadius: '16px', 
      backgroundColor: '#F5F9FF', // Subtle Ice Blue Background
      overflow: 'hidden',
      border: '1px solid rgba(76, 140, 228, 0.2)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Premium Top Bar */}
      <div style={{ height: '4px', backgroundColor: '#4C8CE4', width: '100%' }} />

      <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
        <button 
          onClick={() => onEdit(project)} 
          title="Edit project details" 
          style={{ border: 'none', background: 'rgba(255,255,255,0.8)', borderRadius: '50%', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
        >
          <Pencil size={16} color="#4C8CE4" />
        </button>
        <button 
          onClick={onClose} 
          title="Close details"
          style={{ border: 'none', background: 'rgba(255,255,255,0.8)', borderRadius: '50%', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
        >
          <X size={16} color="#64748b" />
        </button>
      </div>

      <div style={{ padding: '1.5rem' }}>
        {/* Header Section */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 900, padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase', backgroundColor: colors.bg, color: colors.text }}>
              {project.status}
            </span>
            <span style={{ fontSize: '0.65rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px', backgroundColor: '#fff', color: '#475569', border: '1px solid #E2E8F0' }}>
              {project.category}
            </span>
          </div>
          <h2 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 900, color: '#1e293b', lineHeight: 1.2 }}>{project.customer}</h2>
          <p style={{ margin: '0.4rem 0 0 0', color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>{project.name}</p>
        </div>

        {/* Info Card (White Container) */}
        <div style={{ 
          backgroundColor: '#FFFFFF', 
          borderRadius: '12px', 
          padding: '1.25rem', 
          border: '1px solid rgba(76, 140, 228, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569' }}>
            <div style={{ backgroundColor: '#F0F7FF', padding: '6px', borderRadius: '8px' }}><MapPin size={16} color="#4C8CE4" /></div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{project.city}, {project.country}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569' }}>
            <div style={{ backgroundColor: '#F0F7FF', padding: '6px', borderRadius: '8px' }}><Calendar size={16} color="#4C8CE4" /></div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{project.startDate} to {project.deadline}</span>
          </div>
        </div>

        {/* Team Section (Nested Layout) */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.025em' }}>
            <Users size={14} /> Team Members ({assignedTeam.length})
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {assignedTeam.length > 0 ? assignedTeam.map(p => (
              <div key={p.id} style={{ padding: '0.4rem 0.8rem', backgroundColor: '#fff', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, color: '#1e293b' }}>
                {p.name}
              </div>
            )) : (
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic', backgroundColor: 'rgba(255,255,255,0.5)', width: '100%', padding: '1rem', borderRadius: '10px', textAlign: 'center', border: '1px dashed #cbd5e1' }}>No personnel assigned yet.</div>
            )}
          </div>
        </div>
      </div>

      {/* Action Tray (Darker base) */}
      <div style={{ 
        backgroundColor: '#F1F5F9', 
        padding: '1.5rem', 
        borderTop: '1px solid #E2E8F0',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
          Status Change
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <button 
            onClick={() => onToggleOnHold(project.id)}
            title={project.status === 'on-hold' ? 'Resume project' : 'Put project on hold'}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.7rem', borderRadius: '10px', border: '1px solid #E2E8F0', backgroundColor: '#fff', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}
          >
            {project.status === 'on-hold' ? <PlayCircle size={16} color="#10B981" /> : <PauseCircle size={16} color="#F59E0B" />}
            {project.status === 'on-hold' ? 'Resume' : 'On-hold'}
          </button>
          <button 
            onClick={() => onMarkComplete(project.id)}
            title="Mark this project as complete"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.7rem', borderRadius: '10px', border: 'none', backgroundColor: '#10B981', color: '#fff', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700 }}
          >
            <CheckCircle size={16} /> Mark complete
          </button>
        </div>

        <div style={{ height: '1px', backgroundColor: '#E2E8F0', margin: '0.5rem 0' }} />

        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
          Other Operations
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <button 
            onClick={() => onMarkDelay(project.id)}
            title="Flag this project as delayed"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.7rem', borderRadius: '10px', border: '1px solid #E2E8F0', backgroundColor: '#fff', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}
          >
            <AlertTriangle size={16} color="#EF4444" /> Flag Delay
          </button>
          <button 
            onClick={() => onDelete(project.id)}
            title="Delete this project permanently"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.7rem', borderRadius: '10px', border: '1px solid #FEE2E2', backgroundColor: '#fff', color: '#FF0000', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700 }}
          >
            <Trash2 size={16} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

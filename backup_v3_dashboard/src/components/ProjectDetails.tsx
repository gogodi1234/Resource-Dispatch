import React from "react";
import type { Project, Personnel } from "../data/mockData";
import { X, Calendar, MapPin, Activity, Edit2, Trash2, CheckCircle, PauseCircle, AlertCircle, PlayCircle } from "lucide-react";

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

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, personnel, onClose, onEdit, onDelete, onMarkComplete, onMarkDelay, onToggleOnHold }) => {
  const assignedTeam = personnel.filter(p => project.assignedPersonnel.includes(p.name));

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'ongoing': return '#10b981';
      case 'delay': return '#ef4444';
      case 'on-hold': return '#f59e0b';
      case 'planning': return '#4F46E5';
      default: return '#6b7280';
    }
  };

  const isOnHold = project.status === 'on-hold';
  const isDelayed = project.status === 'delay';

  return (
    <div className="project-details" style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '12px', backgroundColor: '#fff', position: 'relative', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
      <button 
        onClick={onClose}
        style={{ position: 'absolute', top: '1rem', right: '1rem', border: 'none', background: 'none', cursor: 'pointer' }}
      >
        <X size={20} color="#6b7280" />
      </button>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingRight: '1.5rem' }}>
          <h2 style={{ margin: '0 0 0.25rem 0', color: '#111827', fontSize: '1.25rem', fontWeight: 700 }}>{project.name}</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={() => onEdit(project)} style={{ padding: '6px', borderRadius: '6px', border: '1px solid #e5e7eb', backgroundColor: '#fff', cursor: 'pointer' }} title="Edit Project">
              <Edit2 size={14} color="#4b5563" />
            </button>
            <button 
              onClick={() => { if(confirm('Are you sure you want to delete this project?')) onDelete(project.id); }}
              style={{ padding: '6px', borderRadius: '6px', border: '1px solid #fee2e2', backgroundColor: '#fff', cursor: 'pointer' }}
              title="Delete Project"
            >
              <Trash2 size={14} color="#ef4444" />
            </button>
          </div>
        </div>
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Customer: {project.customer}</span>
      </div>

      {/* Status Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <button
          onClick={() => { if(confirm('Complete this project? It will be hidden from dashboard.')) onMarkComplete(project.id); }}
          style={{
            width: '100%', padding: '0.625rem', borderRadius: '8px', border: 'none',
            backgroundColor: '#ecfdf5', color: '#059669', fontWeight: 700, fontSize: '0.875rem',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
          }}
        >
          <CheckCircle size={18} /> Mark as Completed
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <button
            onClick={() => onToggleOnHold(project.id)}
            style={{
              padding: '0.625rem', borderRadius: '8px', border: '1px solid #f59e0b30',
              backgroundColor: isOnHold ? '#fff7ed' : '#fff', color: '#d97706', fontWeight: 600, fontSize: '0.8125rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem'
            }}
          >
            {isOnHold ? <PlayCircle size={16} /> : <PauseCircle size={16} />}
            {isOnHold ? 'Resume' : 'On-hold'}
          </button>

          <button
            onClick={() => onMarkDelay(project.id)}
            style={{
              padding: '0.625rem', borderRadius: '8px', border: '1px solid #ef444430',
              backgroundColor: isDelayed ? '#fef2f2' : '#fff', color: '#dc2626', fontWeight: 600, fontSize: '0.8125rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem'
            }}
          >
            <AlertCircle size={16} /> {isDelayed ? 'Flagged Delay' : 'Flag Delay'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={16} color="#6b7280" />
          <span style={{ fontSize: '0.875rem' }}>{project.city}, {project.country}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={16} color={getStatusColor(project.status)} />
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: getStatusColor(project.status) }}>{project.status.toUpperCase()}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', gridColumn: 'span 2' }}>
          <Calendar size={16} color="#6b7280" />
          <span style={{ fontSize: '0.875rem' }}>{project.startDate} to {project.deadline}</span>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <Activity size={18} color="#4F46E5" />
          <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>Assigned Team</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {assignedTeam.length > 0 ? assignedTeam.map(p => (
            <div key={p.id} style={{ padding: '0.375rem 0.75rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', fontSize: '0.75rem', fontWeight: 600, color: '#334155' }}>
              {p.name}
            </div>
          )) : (
            <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontStyle: 'italic' }}>No personnel assigned.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

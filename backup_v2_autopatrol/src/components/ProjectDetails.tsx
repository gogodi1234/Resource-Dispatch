import React from "react";
import type { Project, Personnel } from "../data/mockData";
import { X, Calendar, MapPin, Activity, Edit2, Trash2, CheckCircle } from "lucide-react";

interface ProjectDetailsProps {
  project: Project;
  personnel: Personnel[];
  onClose: () => void;
  onEdit: (project: Project) => void;
  onDelete: (projectId: string) => void;
  onMarkComplete: (projectId: string) => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose, onEdit, onDelete, onMarkComplete }) => {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'ongoing': return '#10b981';
      case 'delay': return '#ef4444';
      default: return '#4F46E5';
    }
  };

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
            <button onClick={() => onDelete(project.id)} style={{ padding: '6px', borderRadius: '6px', border: '1px solid #fee2e2', backgroundColor: '#fff', cursor: 'pointer' }} title="Delete Record">
              <Trash2 size={14} color="#ef4444" />
            </button>
          </div>
        </div>
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Customer: {project.customer}</span>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <button
          onClick={() => { if(confirm('Mark this project as completed and remove from view?')) onMarkComplete(project.id); }}
          style={{
            width: '100%', padding: '0.75rem', borderRadius: '8px', border: 'none',
            backgroundColor: isDelayed ? '#fee2e2' : '#ecfdf5',
            color: isDelayed ? '#991b1b' : '#059669',
            fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            boxShadow: 'inset 0 0 0 1px ' + (isDelayed ? '#ef444430' : '#10b98130')
          }}
        >
          <CheckCircle size={18} />
          {isDelayed ? 'Complete Delayed Project' : 'Mark as Completed'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={16} color="#6b7280" />
          <span style={{ fontSize: '0.8125rem', color: '#4b5563' }}>{project.city}, {project.country}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={16} color={getStatusColor(project.status)} />
          <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: getStatusColor(project.status), textTransform: 'uppercase' }}>{project.status}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', gridColumn: 'span 2' }}>
          <Calendar size={16} color="#6b7280" />
          <span style={{ fontSize: '0.8125rem', color: '#4b5563' }}>{project.startDate} to {project.deadline}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

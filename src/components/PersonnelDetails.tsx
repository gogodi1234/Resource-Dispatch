import React from "react";
import type { Project, Personnel } from "../data/mockData";
import { X, User, Shield, Globe, Calendar, ExternalLink, Briefcase } from "lucide-react";

interface PersonnelDetailsProps {
  person: Personnel;
  projects: Project[];
  onClose: () => void;
  onEdit: (person: Personnel) => void;
  onUnassign: (projectId: string, personnelName: string) => void;
}

const PersonnelDetails: React.FC<PersonnelDetailsProps> = ({ person, projects, onClose, onEdit, onUnassign }) => {
  const assignedProjects = projects.filter(p => p.assignedPersonnel.includes(person.name));

  return (
    <div className="personnel-details" style={{ 
      borderRadius: '16px', 
      backgroundColor: '#F5F9FF', // Unified Ice Blue
      overflow: 'hidden',
      border: '1px solid rgba(76, 140, 228, 0.2)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Premium Top Bar */}
      <div style={{ height: '4px', backgroundColor: '#4C8CE4', width: '100%' }} />

      <button onClick={onClose} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', border: 'none', background: 'rgba(255,255,255,0.8)', borderRadius: '50%', padding: '4px', cursor: 'pointer', zIndex: 10 }}>
        <X size={18} color="#64748b" />
      </button>

      <div style={{ padding: '1.5rem' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: '#4C8CE4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <User size={32} />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900, color: '#1e293b' }}>{person.name}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748b', fontSize: '0.85rem', fontWeight: 600 }}>
              <Shield size={14} /> {person.role}
            </div>
          </div>
        </div>

        {/* Credentials Card (White Container) */}
        <div style={{ 
          backgroundColor: '#FFFFFF', 
          borderRadius: '12px', 
          padding: '1.25rem', 
          border: '1px solid rgba(76, 140, 228, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', fontWeight: 800, color: '#64748b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              <Briefcase size={12} /> Skills
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {person.skills.map(s => (
                <span key={s} style={{ padding: '3px 8px', backgroundColor: '#F0F7FF', color: '#4C8CE4', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}>{s}</span>
              ))}
            </div>
          </div>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', fontWeight: 800, color: '#64748b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              <Globe size={12} /> Authorized Regions
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {person.allowedCountries.map(c => (
                <span key={c} style={{ padding: '3px 8px', backgroundColor: '#ECFDF5', color: '#10B981', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Assignments Section */}
        <div style={{ marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.025em' }}>
            <Calendar size={14} /> Current Assignments ({assignedProjects.length})
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {assignedProjects.length > 0 ? assignedProjects.map(p => (
              <div key={p.id} style={{ padding: '0.75rem 1rem', backgroundColor: '#fff', border: '1px solid #E2E8F0', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1e293b' }}>{p.customer}</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{p.startDate} - {p.deadline}</div>
                </div>
                <button 
                  onClick={() => onUnassign(p.id, person.name)}
                  style={{ border: 'none', background: '#FEE2E2', color: '#EF4444', padding: '4px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer' }}
                >
                  Unassign
                </button>
              </div>
            )) : (
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic', backgroundColor: 'rgba(255,255,255,0.5)', width: '100%', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '1px dashed #cbd5e1' }}>
                No active projects.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Action Tray */}
      <div style={{ 
        backgroundColor: '#F1F5F9', 
        padding: '1.25rem', 
        borderTop: '1px solid #E2E8F0',
        marginTop: 'auto'
      }}>
        <button 
          onClick={() => onEdit(person)}
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '0.75rem', borderRadius: '10px', border: '1px solid #4C8CE4', color: '#4C8CE4', backgroundColor: '#fff', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 800 }}
        >
          <ExternalLink size={16} /> Edit Profile
        </button>
      </div>
    </div>
  );
};

export default PersonnelDetails;

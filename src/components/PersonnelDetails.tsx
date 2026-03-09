import React from "react";
import type { Project, Personnel } from "../data/mockData";
import { X, User, MapPin, Wrench, Calendar, MinusCircle, AlertTriangle } from "lucide-react";

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
    <div className="personnel-details" style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '16px', backgroundColor: '#fff', position: 'relative', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
      <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', border: 'none', background: 'none', cursor: 'pointer' }}>
        <X size={20} color="#6b7280" />
      </button>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div style={{ backgroundColor: '#EEF2FF', padding: '0.5rem', borderRadius: '10px' }}>
            <User size={24} color="#4F46E5" />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>{person.name}</h2>
            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{person.role}</span>
          </div>
        </div>
        <button onClick={() => onEdit(person)} style={{ fontSize: '0.75rem', color: '#4F46E5', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontWeight: 600 }}>Edit Profile</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>
            <Wrench size={14} /> SKILLS & CAPACITY
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {person.skillCapacities.map((sc, i) => (
              <div key={i} style={{ padding: '0.25rem 0.6rem', backgroundColor: '#f1f5f9', borderRadius: '6px', fontSize: '0.7rem' }}>
                {sc.category}: <strong>{sc.dailyCapacity}</strong>/day
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>
            <MapPin size={14} /> ALLOWED REGIONS
          </div>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {person.allowedRegions.map(r => (
              <span key={r} style={{ padding: '0.2rem 0.5rem', backgroundColor: '#ecfdf5', color: '#059669', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>{r}</span>
            ))}
          </div>
        </div>

        {person.unavailableDates.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: 700, color: '#dc2626' }}>
              <AlertTriangle size={14} /> UNAVAILABLE DATES
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {person.unavailableDates.map(d => (
                <span key={d} style={{ fontSize: '0.7rem', color: '#6b7280' }}>{d}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Calendar size={18} color="#4F46E5" />
          <h3 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700 }}>Current Assignments</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {assignedProjects.length > 0 ? assignedProjects.map(p => (
            <div key={p.id} style={{ padding: '0.75rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>{p.customer}</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{p.category} | {p.country}</div>
              </div>
              <button 
                onClick={() => onUnassign(p.id, person.name)}
                style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#ef4444' }}
                title="Unassign from project"
              >
                <MinusCircle size={18} />
              </button>
            </div>
          )) : (
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontStyle: 'italic', textAlign: 'center', padding: '1rem' }}>No projects assigned.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonnelDetails;

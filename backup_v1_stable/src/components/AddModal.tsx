import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { Project, Personnel } from '../data/mockData';

const countryCoords: Record<string, [number, number]> = {
  'JP': [138.2529, 36.2048], 'US': [-95.7129, 37.0902], 'AU': [133.7751, -25.2744], 'FI': [25.7482, 61.9241]
};

const stateCoords: Record<string, [number, number]> = {
  'Tokyo': [139.6503, 35.6762], 'NJ': [-74.4057, 40.0583], 'TX': [-99.9018, 31.9686], 'GA': [-83.2220, 32.1656],
  'KS': [-98.4842, 38.4988], 'UT': [-111.0937, 39.3210], 'AZ': [-111.0937, 34.0489], 'Victoria': [144.9631, -37.8136],
  'LA': [-91.9623, 30.9843], 'VA': [-78.6569, 37.4316], 'CA': [-119.4179, 36.7783], 'IL': [-89.3985, 40.6331],
  'OH': [-82.9071, 40.4173], 'WY': [-107.2903, 43.0760], 'NV': [-116.4194, 38.8026], 'ND': [-101.0020, 47.5502],
  'Kymenlaakso': [26.9458, 60.7384], 'CO': [-105.7821, 39.5501], 'NY': [-74.2179, 43.2994]
};

interface AddModalProps {
  isOpen: boolean;
  type: 'project' | 'personnel';
  initialData?: Project | Personnel | null;
  onClose: () => void;
  onAddProject: (project: Project) => void;
  onAddPersonnel: (person: Personnel) => void;
}

const AddModal: React.FC<AddModalProps> = ({ isOpen, type, initialData, onClose, onAddProject, onAddPersonnel }) => {
  const [projectData, setProjectData] = useState<Partial<Project>>({
    status: 'planning', assignedPersonnel: [], country: '', state: '', city: '', startDate: '', deadline: '', category: '', name: '', customer: ''
  });

  const [personnelData, setPersonnelData] = useState<Partial<Personnel>>({
    workload: 0, name: '', role: ''
  });

  useEffect(() => {
    if (isOpen) {
      if (type === 'project' && initialData) {
        setProjectData(initialData as Project);
      } else if (type === 'personnel' && initialData) {
        setPersonnelData(initialData as Personnel);
      } else {
        setProjectData({ status: 'planning', assignedPersonnel: [], country: '', state: '', city: '', startDate: '', deadline: '', category: '', name: '', customer: '' });
        setPersonnelData({ workload: 0, name: '', role: '' });
      }
    }
  }, [isOpen, initialData, type]);

  if (!isOpen) return null;

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const coords = stateCoords[projectData.state || ''] || countryCoords[projectData.country || ''] || [0, 0];
    const finalProject = {
      ...projectData,
      id: (initialData as Project)?.id || `prj-${Date.now()}`,
      coordinates: coords
    } as Project;
    onAddProject(finalProject);
    onClose();
  };

  const handlePersonnelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalPerson = {
      ...personnelData,
      id: (initialData as Personnel)?.id || personnelData.name || `p-${Date.now()}`,
    } as Personnel;
    onAddPersonnel(finalPerson);
    onClose();
  };

  const inputStyle = { width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', marginTop: '0.25rem', marginBottom: '1rem', fontSize: '0.875rem' };
  const labelStyle = { fontSize: '0.875rem', fontWeight: 600, color: '#374151' };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '500px', maxWidth: '90%', position: 'relative', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', border: 'none', background: 'none', cursor: 'pointer' }}>
          <X size={20} color="#6b7280" />
        </button>

        <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.5rem' }}>
          {initialData ? 'Edit' : 'Add New'} {type === 'project' ? 'Project' : 'Personnel'}
        </h2>

        {type === 'project' ? (
          <form onSubmit={handleProjectSubmit}>
            <label style={labelStyle}>Project Name</label>
            <input required value={projectData.name || ''} style={inputStyle} onChange={e => setProjectData({...projectData, name: e.target.value})} />
            
            <label style={labelStyle}>Customer</label>
            <input required value={projectData.customer || ''} style={inputStyle} onChange={e => setProjectData({...projectData, customer: e.target.value})} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Country (ISO)</label>
                <input required placeholder="US, JP..." value={projectData.country || ''} style={inputStyle} onChange={e => setProjectData({...projectData, country: e.target.value})} />
              </div>
              <div>
                <label style={labelStyle}>State</label>
                <input value={projectData.state || ''} style={inputStyle} onChange={e => setProjectData({...projectData, state: e.target.value})} />
              </div>
              <div>
                <label style={labelStyle}>City</label>
                <input required value={projectData.city || ''} style={inputStyle} onChange={e => setProjectData({...projectData, city: e.target.value})} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Category</label>
                <input required value={projectData.category || ''} style={inputStyle} onChange={e => setProjectData({...projectData, category: e.target.value})} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Start Date <span style={{ fontSize: '0.7rem', fontWeight: 400, color: '#94a3b8' }}>(YYYY-MM-DD)</span></label>
                <input required type="date" lang="en" value={projectData.startDate || ''} style={inputStyle} onChange={e => setProjectData({...projectData, startDate: e.target.value})} />
              </div>
              <div>
                <label style={labelStyle}>Deadline <span style={{ fontSize: '0.7rem', fontWeight: 400, color: '#94a3b8' }}>(YYYY-MM-DD)</span></label>
                <input required type="date" lang="en" value={projectData.deadline || ''} style={inputStyle} onChange={e => setProjectData({...projectData, deadline: e.target.value})} />
              </div>
            </div>

            <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#4F46E5', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', marginTop: '0.5rem' }}>
              {initialData ? 'Update' : 'Create'} Project
            </button>
          </form>
        ) : (
          <form onSubmit={handlePersonnelSubmit}>
            <label style={labelStyle}>Full Name</label>
            <input required value={personnelData.name || ''} style={inputStyle} onChange={e => setPersonnelData({...personnelData, name: e.target.value})} />
            
            <label style={labelStyle}>Role</label>
            <input required value={personnelData.role || ''} style={inputStyle} onChange={e => setPersonnelData({...personnelData, role: e.target.value})} />
            
            <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#4F46E5', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', marginTop: '0.5rem' }}>
              {initialData ? 'Update' : 'Add'} Team Member
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddModal;

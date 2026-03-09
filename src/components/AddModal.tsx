import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import type { Project, Personnel, SkillCapacity } from '../data/mockData';

const countryCoords: Record<string, [number, number]> = {
  'JP': [138.2529, 36.2048], 'US': [-95.7129, 37.0902], 'AU': [133.7751, -25.2744], 'FI': [25.7482, 61.9241]
};

const stateCoords: Record<string, [number, number]> = {
  'AL': [-86.9023, 32.3182], 'AK': [-154.4931, 63.5888], 'AZ': [-111.0937, 34.0489], 'AR': [-92.1999, 34.9697],
  'CA': [-119.4179, 36.7783], 'CO': [-105.7821, 39.5501], 'CT': [-72.7273, 41.6032], 'DE': [-75.5277, 38.9108],
  'FL': [-81.5158, 27.6648], 'GA': [-83.2220, 32.1656], 'HI': [-155.5828, 19.8968], 'ID': [-114.7420, 44.0682],
  'IL': [-89.3985, 40.6331], 'IN': [-86.1349, 40.2672], 'IA': [-93.0977, 41.8780], 'KS': [-98.4842, 38.4988],
  'KY': [-84.2700, 37.8393], 'LA': [-91.9623, 30.9843], 'ME': [-69.4455, 45.2538], 'MD': [-76.6413, 39.0458],
  'MA': [-71.3824, 42.4072], 'MI': [-84.5361, 43.3266], 'MN': [-94.6859, 46.7296], 'MS': [-89.3985, 32.3547],
  'MO': [-91.8318, 37.9643], 'MT': [-110.3626, 46.8797], 'NE': [-99.9018, 41.4925], 'NV': [-116.4194, 38.8026],
  'NH': [-71.5724, 43.1939], 'NJ': [-74.4057, 40.0583], 'NM': [-105.8701, 34.5199], 'NY': [-74.2179, 43.2994],
  'NC': [-79.0193, 35.7596], 'ND': [-101.0020, 47.5502], 'OH': [-82.9071, 40.4173], 'OK': [-97.0929, 35.0078],
  'OR': [-120.5542, 43.8041], 'PA': [-77.1945, 41.2033], 'RI': [-71.4774, 41.5801], 'SC': [-80.9450, 33.8361],
  'SD': [-99.9018, 44.3683], 'TN': [-86.5804, 35.5175], 'TX': [-99.9018, 31.9686], 'UT': [-111.0937, 39.3210],
  'VT': [-72.5778, 44.0459], 'VA': [-78.6569, 37.4316], 'WA': [-120.7401, 47.7511], 'WV': [-80.4549, 38.5976],
  'WI': [-89.6165, 43.7844], 'WY': [-107.2903, 43.0760]
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
    status: 'ongoing', assignedPersonnel: [], country: '', state: '', city: '', startDate: '', deadline: '', category: '', name: '', customer: ''
  });

  const [personnelData, setPersonnelData] = useState<Partial<Personnel>>({
    name: '', role: '', skillCapacities: [], allowedRegions: [], unavailableDates: []
  });

  useEffect(() => {
    if (isOpen) {
      if (type === 'project' && initialData) {
        setProjectData(initialData as Project);
      } else if (type === 'personnel' && initialData) {
        setPersonnelData(initialData as Personnel);
      } else {
        setProjectData({ status: 'ongoing', assignedPersonnel: [], country: '', state: '', city: '', startDate: '', deadline: '', category: '', name: '', customer: '' });
        setPersonnelData({ name: '', role: '', skillCapacities: [{category: 'UPS', dailyCapacity: 5}], allowedRegions: ['APAC'], unavailableDates: [] });
      }
    }
  }, [isOpen, initialData, type]);

  if (!isOpen) return null;

  const handlePersonnelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPersonnel({
      ...personnelData,
      id: (initialData as Personnel)?.id || `p-${Date.now()}`,
      workload: 0
    } as Personnel);
    onClose();
  };

  const addSkillRow = () => {
    setPersonnelData(prev => ({
      ...prev,
      skillCapacities: [...(prev.skillCapacities || []), { category: 'UPS', dailyCapacity: 5 }]
    }));
  };

  const removeSkillRow = (index: number) => {
    setPersonnelData(prev => ({
      ...prev,
      skillCapacities: prev.skillCapacities?.filter((_, i) => i !== index)
    }));
  };

  const updateSkill = (index: number, field: keyof SkillCapacity, value: any) => {
    const newSkills = [...(personnelData.skillCapacities || [])];
    newSkills[index] = { ...newSkills[index], [field]: value };
    setPersonnelData(prev => ({ ...prev, skillCapacities: newSkills }));
  };

  const inputStyle = { width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', marginTop: '0.25rem', marginBottom: '1rem', fontSize: '0.875rem' };
  const labelStyle = { fontSize: '0.875rem', fontWeight: 600, color: '#374151' };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', width: '550px', maxWidth: '95%', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', border: 'none', background: 'none', cursor: 'pointer' }}>
          <X size={20} color="#6b7280" />
        </button>

        <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.5rem' }}>
          {initialData ? 'Edit' : 'Add New'} {type === 'project' ? 'Project' : 'Team Member'}
        </h2>

        {type === 'personnel' ? (
          <form onSubmit={handlePersonnelSubmit}>
            <label style={labelStyle}>Full Name</label>
            <input required value={personnelData.name || ''} style={inputStyle} onChange={e => setPersonnelData({...personnelData, name: e.target.value})} />
            
            <label style={labelStyle}>Role</label>
            <input required value={personnelData.role || ''} style={inputStyle} onChange={e => setPersonnelData({...personnelData, role: e.target.value})} />

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <label style={labelStyle}>Skills & Daily Capacity</label>
                <button type="button" onClick={addSkillRow} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#4F46E5', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
                  <Plus size={14} /> Add Skill
                </button>
              </div>
              {personnelData.skillCapacities?.map((skill, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <select 
                    style={{ ...inputStyle, flex: 2, marginBottom: 0 }}
                    value={skill.category}
                    onChange={e => updateSkill(idx, 'category', e.target.value)}
                  >
                    <option value="UPS">UPS</option>
                    <option value="CDU">CDU</option>
                    <option value="Cooling">Cooling</option>
                    <option value="Valve">Valve</option>
                    <option value="Battery">Battery</option>
                    <option value="Other">Other</option>
                  </select>
                  <input 
                    type="number" placeholder="Qty/Day" style={{ ...inputStyle, flex: 1, marginBottom: 0 }}
                    value={skill.dailyCapacity}
                    onChange={e => updateSkill(idx, 'dailyCapacity', parseInt(e.target.value) || 0)}
                  />
                  <button type="button" onClick={() => removeSkillRow(idx)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#ef4444' }}>
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <label style={labelStyle}>Allowed Regions (Comma separated: APAC, Americas, EMEA)</label>
            <input 
              placeholder="e.g. APAC, EMEA" style={inputStyle}
              value={personnelData.allowedRegions?.join(', ')}
              onChange={e => setPersonnelData({...personnelData, allowedRegions: e.target.value.split(',').map(s => s.trim()).filter(s => s)})}
            />

            <label style={labelStyle}>Unavailable Dates (YYYY-MM-DD, comma separated)</label>
            <input 
              placeholder="e.g. 2026-03-10, 2026-03-15" style={inputStyle}
              value={personnelData.unavailableDates?.join(', ')}
              onChange={e => setPersonnelData({...personnelData, unavailableDates: e.target.value.split(',').map(s => s.trim()).filter(s => s)})}
            />

            <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#4F46E5', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', marginTop: '1rem' }}>
              {initialData ? 'Update' : 'Register'} Member
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => {
            e.preventDefault();
            const coords = stateCoords[projectData.state || ''] || countryCoords[projectData.country || ''] || [0, 0];
            onAddProject({
              ...projectData,
              id: (initialData as Project)?.id || `prj-${Date.now()}`,
              coordinates: coords
            } as Project);
            onClose();
          }}>
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
                <label style={labelStyle}>Start Date</label>
                <input required type="date" value={projectData.startDate || ''} style={inputStyle} onChange={e => setProjectData({...projectData, startDate: e.target.value})} />
              </div>
              <div>
                <label style={labelStyle}>Deadline</label>
                <input required type="date" value={projectData.deadline || ''} style={inputStyle} onChange={e => setProjectData({...projectData, deadline: e.target.value})} />
              </div>
            </div>

            <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#4F46E5', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', marginTop: '0.5rem' }}>
              {initialData ? 'Update' : 'Create'} Project
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddModal;

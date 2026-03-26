import React, { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { eachDayOfInterval, format, parseISO } from 'date-fns';
import type { Project, Personnel } from '../data/mockData';

const countryCoords: Record<string, [number, number]> = {
  'JP': [138.2529, 36.2048], 'US': [-95.7129, 37.0902], 'AU': [133.7751, -25.2744], 'FI': [25.7482, 61.9241]
};

interface AddModalProps {
  isOpen: boolean;
  type: 'project' | 'personnel';
  initialData?: Project | Personnel | null;
  onClose: () => void;
  onAddProject: (project: Project) => void;
  onAddPersonnel: (person: Personnel) => void;
  availableCountries: string[];
  availableCategories: string[];
}

const AddModal: React.FC<AddModalProps> = ({ isOpen, type, initialData, onClose, onAddProject, onAddPersonnel, availableCountries, availableCategories }) => {
  const [projectData, setProjectData] = useState<Partial<Project>>({
    status: 'ongoing', assignedPersonnel: [], country: '', state: '', city: '', startDate: '', deadline: '', category: '', name: '', customer: ''
  });

  const [personnelData, setPersonnelData] = useState<Partial<Personnel>>({
    name: '', role: '', skills: [], allowedCountries: [], unavailableDates: []
  });

  const [otherSkill, setOtherSkill] = useState('');
  const [otherCountry, setOtherCountry] = useState('');
  const [showOtherSkill, setShowOtherSkill] = useState(false);
  const [showOtherCountry, setShowOtherCountry] = useState(false);

  const [leaveRange, setLeaveRange] = useState({ start: '', end: '' });

  useEffect(() => {
    if (isOpen) {
      setOtherSkill('');
      setOtherCountry('');
      setShowOtherSkill(false);
      setShowOtherCountry(false);

      if (type === 'project' && initialData) {
        setProjectData(initialData as Project);
      } else if (type === 'personnel' && initialData) {
        setPersonnelData(initialData as Personnel);
      } else {
        setProjectData({ status: 'ongoing', assignedPersonnel: [], country: '', state: '', city: '', startDate: '', deadline: '', category: '', name: '', customer: '' });
        setPersonnelData({ name: '', role: '', skills: ['UPS'], allowedCountries: ['JP'], unavailableDates: [] });
      }
      setLeaveRange({ start: '', end: '' });
    }
  }, [isOpen, initialData, type]);

  if (!isOpen) return null;

  const handlePersonnelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalSkills = [...(personnelData.skills || [])];
    if (showOtherSkill && otherSkill.trim()) {
      finalSkills.push(otherSkill.trim());
    }

    const finalCountries = [...(personnelData.allowedCountries || [])];
    if (showOtherCountry && otherCountry.trim()) {
      finalCountries.push(otherCountry.trim().toUpperCase());
    }

    onAddPersonnel({
      ...personnelData,
      skills: Array.from(new Set(finalSkills)),
      allowedCountries: Array.from(new Set(finalCountries)),
      id: (initialData as Personnel)?.id || `p-${Date.now()}`,
      workload: 0
    } as Personnel);
    onClose();
  };

  const addLeaveRange = () => {
    if (!leaveRange.start || !leaveRange.end) return;
    try {
      const days = eachDayOfInterval({ start: parseISO(leaveRange.start), end: parseISO(leaveRange.end) });
      const formattedDays = days.map(d => format(d, 'yyyy-MM-dd'));
      const current = new Set(personnelData.unavailableDates || []);
      formattedDays.forEach(d => current.add(d));
      setPersonnelData({ ...personnelData, unavailableDates: Array.from(current).sort() });
      setLeaveRange({ start: '', end: '' });
    } catch (err) { alert("Invalid date range"); }
  };

  const toggleSkill = (skill: string) => {
    const current = personnelData.skills || [];
    if (skill === 'All') {
      setPersonnelData({ ...personnelData, skills: ['All'] });
    } else {
      let nextSkills = current.filter(s => s !== 'All');
      if (nextSkills.includes(skill)) {
        nextSkills = nextSkills.filter(s => s !== skill);
      } else {
        nextSkills.push(skill);
      }
      setPersonnelData({ ...personnelData, skills: nextSkills });
    }
  };

  const toggleCountry = (country: string) => {
    const current = personnelData.allowedCountries || [];
    if (country === 'GLOBAL') {
      setPersonnelData({ ...personnelData, allowedCountries: ['GLOBAL'] });
    } else {
      let nextCountries = current.filter(c => c !== 'GLOBAL');
      if (nextCountries.includes(country)) {
        nextCountries = nextCountries.filter(c => c !== country);
      } else {
        nextCountries.push(country);
      }
      setPersonnelData({ ...personnelData, allowedCountries: nextCountries });
    }
  };

  const inputStyle = { width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', marginTop: '0.25rem', marginBottom: '1rem', fontSize: '0.875rem' };
  const labelStyle = { fontSize: '0.875rem', fontWeight: 600, color: '#374151' };

  const categories = ["All", ...availableCategories];
  const countries = ["GLOBAL", ...availableCountries];

  const powerProducts = [
    "DPM G1 UL", "DPM G2 UL", "DPH G2 UL", "DPH LV UL", 
    "STS UL", "PDU UL", "DPM G2 CE", "DPH G2 CE", 
    "DPS G2 CE", "STS CE", "DPH G3 CE", "RP240"
  ];
  const coolingProducts = ["GoCool", "AALC", "IRHX"];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
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
              <label style={labelStyle}>Skills (Select 'All' or specific skills)</label>
              
              <div style={{ marginTop: '0.75rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 800, color: '#1E40AF', marginBottom: '0.5rem' }}>
                  <input type="checkbox" checked={personnelData.skills?.includes('All')} onChange={() => toggleSkill('All')} />
                  ALL SKILLS
                </label>

                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem', marginTop: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '2px' }}>Power Products</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                  {powerProducts.map(cat => (
                    <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', cursor: 'pointer' }}>
                      <input type="checkbox" checked={personnelData.skills?.includes(cat)} onChange={() => toggleSkill(cat)} />
                      {cat}
                    </label>
                  ))}
                </div>

                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem', marginTop: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '2px' }}>Cooling Products</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                  {coolingProducts.map(cat => (
                    <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', cursor: 'pointer' }}>
                      <input type="checkbox" checked={personnelData.skills?.includes(cat)} onChange={() => toggleSkill(cat)} />
                      {cat}
                    </label>
                  ))}
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', cursor: 'pointer' }}>
                    <input type="checkbox" checked={showOtherSkill} onChange={e => setShowOtherSkill(e.target.checked)} />
                    Other
                  </label>
                </div>
              </div>

              {showOtherSkill && (
                <input 
                  placeholder="Type new skill..." 
                  style={{ ...inputStyle, marginTop: '0.5rem', marginBottom: 0 }} 
                  value={otherSkill} 
                  onChange={e => setOtherSkill(e.target.value)} 
                />
              )}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle}>Allowed Countries (Select 'GLOBAL' or specific countries)</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', marginTop: '0.5rem', maxHeight: '120px', overflowY: 'auto', padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
                {countries.map(c => (
                  <label key={c} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', cursor: 'pointer', fontWeight: c === 'GLOBAL' ? 700 : 400 }}>
                    <input type="checkbox" checked={personnelData.allowedCountries?.includes(c)} onChange={() => toggleCountry(c)} />
                    {c}
                  </label>
                ))}
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', cursor: 'pointer' }}>
                  <input type="checkbox" checked={showOtherCountry} onChange={e => setShowOtherCountry(e.target.checked)} />
                  Other
                </label>
              </div>
              {showOtherCountry && (
                <input 
                  placeholder="Type new country (e.g. KR, UK)..." 
                  style={{ ...inputStyle, marginTop: '0.5rem', marginBottom: 0 }} 
                  value={otherCountry} 
                  onChange={e => setOtherCountry(e.target.value)} 
                />
              )}
            </div>

            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.75rem' }}>
                <Calendar size={16} color="#4F46E5" /> Add Unavailable / Leave Range
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}>From</span>
                  <input type="date" style={{ ...inputStyle, marginBottom: 0 }} value={leaveRange.start} onChange={e => setLeaveRange({ ...leaveRange, start: e.target.value })} />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}>To</span>
                  <input type="date" style={{ ...inputStyle, marginBottom: 0 }} value={leaveRange.end} onChange={e => setLeaveRange({ ...leaveRange, end: e.target.value })} />
                </div>
                <button type="button" onClick={addLeaveRange} style={{ padding: '0.625rem 1rem', backgroundColor: '#4F46E5', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}>Add</button>
              </div>
              
              {personnelData.unavailableDates && personnelData.unavailableDates.length > 0 && (
                <div style={{ marginTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569' }}>Registered Dates ({personnelData.unavailableDates.length})</span>
                    <button type="button" onClick={() => setPersonnelData({...personnelData, unavailableDates: []})} style={{ fontSize: '0.7rem', color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Clear All</button>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', maxHeight: '100px', overflowY: 'auto', padding: '0.5rem', backgroundColor: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
                    {personnelData.unavailableDates.map(d => (
                      <span key={d} style={{ fontSize: '0.7rem', padding: '0.2rem 0.4rem', backgroundColor: '#f1f5f9', borderRadius: '4px' }}>{d}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#4F46E5', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
              {initialData ? 'Update' : 'Register'} Member
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => {
            e.preventDefault();
            const coords = countryCoords[projectData.country || ''] || [0, 0];
            onAddProject({ ...projectData, id: (initialData as Project)?.id || `prj-${Date.now()}`, coordinates: coords } as Project);
            onClose();
          }}>
            <label style={labelStyle}>Project Name</label>
            <input required value={projectData.name || ''} style={inputStyle} onChange={e => setProjectData({...projectData, name: e.target.value})} />
            
            <label style={labelStyle}>Customer</label>
            <input required value={projectData.customer || ''} style={inputStyle} onChange={e => setProjectData({...projectData, customer: e.target.value})} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div><label style={labelStyle}>Country (ISO)</label><input required placeholder="US, JP..." value={projectData.country || ''} style={inputStyle} onChange={e => setProjectData({...projectData, country: e.target.value.toUpperCase()})} /></div>
              <div><label style={labelStyle}>State</label><input value={projectData.state || ''} style={inputStyle} onChange={e => setProjectData({...projectData, state: e.target.value})} /></div>
              <div><label style={labelStyle}>City</label><input required value={projectData.city || ''} style={inputStyle} onChange={e => setProjectData({...projectData, city: e.target.value})} /></div>
            </div>

            <label style={labelStyle}>Category</label>
            <select required style={inputStyle} value={projectData.category || ''} onChange={e => setProjectData({...projectData, category: e.target.value})}>
              <option value="">Select Category</option>
              {categories.filter(c => c !== 'All').map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div><label style={labelStyle}>Start Date</label><input required type="date" value={projectData.startDate || ''} style={inputStyle} onChange={e => setProjectData({...projectData, startDate: e.target.value})} /></div>
              <div><label style={labelStyle}>Deadline</label><input required type="date" value={projectData.deadline || ''} style={inputStyle} onChange={e => setProjectData({...projectData, deadline: e.target.value})} /></div>
            </div>

            <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#4F46E5', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>{initialData ? 'Update' : 'Create Project'}</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddModal;

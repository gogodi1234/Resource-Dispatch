import React from "react";
import type { Personnel } from "../data/mockData";
import { Users } from "lucide-react";

interface PersonnelListProps {
  personnel: Personnel[];
}

const PersonnelList: React.FC<PersonnelListProps> = ({ personnel }) => {
  return (
    <div className="personnel-list" style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#fff', maxHeight: '800px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <Users size={20} color="#4F46E5" />
        <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Team Members</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto', paddingRight: '0.5rem' }}>
        {personnel.map((person) => (
          <div key={person.id} style={{ padding: '0.75rem', border: '1px solid #f3f4f6', borderRadius: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 600 }}>{person.name}</span>
              <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{person.role}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ flex: 1, height: '6px', backgroundColor: '#f3f4f6', borderRadius: '3px', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    width: `${person.workload}%`, 
                    height: '100%', 
                    backgroundColor: person.workload > 80 ? '#ef4444' : person.workload > 50 ? '#f59e0b' : '#10b981',
                    borderRadius: '3px'
                  }} 
                />
              </div>
              <span style={{ fontSize: '0.75rem', minWidth: '30px', textAlign: 'right' }}>{person.workload}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonnelList;

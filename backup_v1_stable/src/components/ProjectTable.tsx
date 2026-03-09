import React, { useState } from 'react';
import type { Project } from '../data/mockData';
import { ChevronUp, ChevronDown, ExternalLink } from 'lucide-react';

interface ProjectTableProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

type SortKey = 'customer' | 'country' | 'deadline' | 'status' | 'quantity';

const ProjectTable: React.FC<ProjectTableProps> = ({ projects, onProjectClick }) => {
  const [sortKey, setSortKey] = useState<SortKey>('deadline');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedProjects = [...projects].sort((a, b) => {
    const valA = a[sortKey];
    const valB = b[sortKey];
    if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
    if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const getStatusStyle = (status: Project['status']) => {
    const base = { padding: '4px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' as const };
    switch (status) {
      case 'ongoing': return { ...base, backgroundColor: '#d1fae5', color: '#065f46' };
      case 'planning': return { ...base, backgroundColor: '#e0e7ff', color: '#3730a3' };
      case 'completed': return { ...base, backgroundColor: '#f3f4f6', color: '#374151' };
      case 'on-hold': return { ...base, backgroundColor: '#fee2e2', color: '#991b1b' };
      default: return base;
    }
  };

  const Th = ({ label, k }: { label: string, k: SortKey }) => (
    <th 
      onClick={() => handleSort(k)}
      style={{ 
        textAlign: 'left', padding: '12px 16px', fontSize: '12px', color: '#6b7280', 
        fontWeight: 600, cursor: 'pointer', borderBottom: '2px solid #f3f4f6',
        whiteSpace: 'nowrap'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {label}
        {sortKey === k && (sortOrder === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />)}
      </div>
    </th>
  );

  return (
    <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
        <thead>
          <tr style={{ backgroundColor: '#f9fafb' }}>
            <Th label="Customer" k="customer" />
            <Th label="Country" k="country" />
            <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: '12px', color: '#6b7280', fontWeight: 600, borderBottom: '2px solid #f3f4f6' }}>Category</th>
            <Th label="Quantity" k="quantity" />
            <Th label="Deadline" k="deadline" />
            <Th label="Status" k="status" />
            <th style={{ borderBottom: '2px solid #f3f4f6' }}></th>
          </tr>
        </thead>
        <tbody>
          {sortedProjects.map(project => (
            <tr 
              key={project.id} 
              onClick={() => onProjectClick(project)}
              style={{ borderBottom: '1px solid #f3f4f6', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <td style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600 }}>{project.customer}</td>
              <td style={{ padding: '12px 16px', fontSize: '13px', color: '#4b5563' }}>{project.country}</td>
              <td style={{ padding: '12px 16px', fontSize: '13px', color: '#4b5563' }}>{project.category}</td>
              <td style={{ padding: '12px 16px', fontSize: '13px', color: '#4b5563' }}>{project.quantity}</td>
              <td style={{ padding: '12px 16px', fontSize: '13px', color: '#4b5563' }}>{project.deadline}</td>
              <td style={{ padding: '12px 16px' }}>
                <span style={getStatusStyle(project.status)}>{project.status}</span>
              </td>
              <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                <ExternalLink size={16} color="#9ca3af" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {sortedProjects.length === 0 && (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af' }}>No projects found matching the filters</div>
      )}
    </div>
  );
};

export default ProjectTable;

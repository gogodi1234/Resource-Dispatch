import React, { useState, useEffect, useRef } from 'react';
import { Filter, ChevronDown, Check, Sparkles, Search, Upload } from 'lucide-react';

interface MultiSelectProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ label, options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (option: string) => {
    const newSelected = selected.includes(option)
      ? selected.filter(item => item !== option)
      : [...selected, option];
    onChange(newSelected);
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', minWidth: '160px' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '0.625rem 1rem',
          backgroundColor: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          fontSize: '0.875rem',
          color: '#374151'
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: '8px' }}>
          {selected.length === 0 ? label : `${label} (${selected.length})`}
        </span>
        <ChevronDown size={16} color="#6b7280" />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 4px)',
          left: 0,
          width: '100%',
          backgroundColor: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          zIndex: 50,
          maxHeight: '250px',
          overflowY: 'auto',
          padding: '4px'
        }}>
          {options.map(option => (
            <div
              key={option}
              onClick={() => toggleOption(option)}
              style={{
                padding: '0.5rem 0.75rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: selected.includes(option) ? '#f3f4f6' : 'transparent',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = selected.includes(option) ? '#f3f4f6' : 'transparent')}
            >
              <span>{option}</span>
              {selected.includes(option) && <Check size={14} color="#4F46E5" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface FilterBarProps {
  personnelOptions: string[];
  countryOptions: string[];
  categoryOptions: string[];
  statusOptions: string[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: {
    personnel: string[];
    countries: string[];
    categories: string[];
    statuses: string[];
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    personnel: string[];
    countries: string[];
    categories: string[];
    statuses: string[];
  }>>;
  onAddProject: () => void;
  onAddPersonnel: () => void;
  onAutoAssign: () => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  personnelOptions, 
  countryOptions, 
  categoryOptions, 
  statusOptions,
  searchQuery,
  setSearchQuery,
  filters, 
  setFilters,
  onAddProject,
  onAddPersonnel,
  onAutoAssign,
  onFileUpload
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '0.75rem', 
      flexWrap: 'wrap',
      backgroundColor: '#fff',
      padding: '1rem 1.5rem',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      marginBottom: '1.5rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4F46E5', marginRight: '0.25rem' }}>
        <Filter size={20} />
        <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Filters:</span>
      </div>

      <div style={{ position: 'relative', minWidth: '200px' }}>
        <Search size={16} color="#9ca3af" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
        <input
          type="text"
          placeholder="Search customer, city..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '0.625rem 1rem 0.625rem 2.25rem',
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '0.875rem',
            color: '#374151',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <MultiSelect label="Personnel" options={personnelOptions} selected={filters.personnel} onChange={(val) => setFilters(prev => ({ ...prev, personnel: val }))} />
      <MultiSelect label="Country" options={countryOptions} selected={filters.countries} onChange={(val) => setFilters(prev => ({ ...prev, countries: val }))} />
      <MultiSelect label="Category" options={categoryOptions} selected={filters.categories} onChange={(val) => setFilters(prev => ({ ...prev, categories: val }))} />
      <MultiSelect label="Status" options={statusOptions} selected={filters.statuses} onChange={(val) => setFilters(prev => ({ ...prev, statuses: val }))} />

      <button
        onClick={() => { setFilters({ personnel: [], countries: [], categories: [], statuses: [] }); setSearchQuery(''); }}
        style={{ border: 'none', background: 'none', color: '#6b7280', fontSize: '0.875rem', cursor: 'pointer', textDecoration: 'underline' }}
      >
        Clear
      </button>

      <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.75rem' }}>
        <input 
          type="file" 
          accept=".csv" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          onChange={onFileUpload} 
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          style={{
            backgroundColor: '#fff',
            color: '#4b5563',
            border: '1px solid #d1d5db',
            padding: '0.625rem 1rem',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Upload size={16} /> Import CSV
        </button>
        <button
          onClick={onAutoAssign}
          style={{
            backgroundColor: '#10B981',
            color: '#fff',
            border: 'none',
            padding: '0.625rem 1.25rem',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Sparkles size={16} /> Auto Assign
        </button>
        <button
          onClick={onAddPersonnel}
          style={{
            backgroundColor: '#fff',
            color: '#4F46E5',
            border: '1px solid #4F46E5',
            padding: '0.625rem 1.25rem',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          + Team
        </button>
        <button
          onClick={onAddProject}
          style={{
            backgroundColor: '#4F46E5',
            color: '#fff',
            border: 'none',
            padding: '0.625rem 1.25rem',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          + Project
        </button>
      </div>
    </div>
  );
};

export default FilterBar;

import React, { useState, useRef, useEffect } from 'react';
import { Filter, X, ChevronDown, Check } from 'lucide-react';

interface FilterBarProps {
  personnelOptions: string[];
  countryOptions: string[];
  categoryOptions: string[];
  statusOptions: string[];
  filters: {
    personnel: string[];
    countries: string[];
    categories: string[];
    statuses: string[];
  };
  setFilters: (filters: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  personnelOptions, countryOptions, categoryOptions, statusOptions, filters, setFilters
}) => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenFilter(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFilter = (type: string, value: string) => {
    const current = [...(filters as any)[type]];
    const next = current.includes(value) 
      ? current.filter(v => v !== value)
      : [...current, value];
    setFilters({ ...filters, [type]: next });
  };

  const clearFilters = () => {
    setFilters({ personnel: [], countries: [], categories: [], statuses: [] });
    setOpenFilter(null);
  };

  const Dropdown = ({ label, type, options, selected }: { label: string, type: string, options: string[], selected: string[] }) => {
    const isOpen = openFilter === type;
    
    return (
      <div style={{ position: 'relative' }}>
        <button 
          onClick={() => setOpenFilter(isOpen ? null : type)}
          style={{
            padding: '0.5rem 0.75rem',
            borderRadius: '8px',
            border: `1px solid ${selected.length > 0 ? '#1E40AF' : '#e2e8f0'}`,
            fontSize: '0.85rem',
            backgroundColor: selected.length > 0 ? '#EFF6FF' : '#fff',
            color: selected.length > 0 ? '#1E40AF' : '#475569',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            minWidth: '130px',
            fontWeight: selected.length > 0 ? 700 : 500,
            transition: 'all 0.2s'
          }}
        >
          <span style={{ flex: 1, textAlign: 'left' }}>
            {selected.length > 0 ? `${label} (${selected.length})` : label}
          </span>
          <ChevronDown size={14} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
        </button>

        {isOpen && (
          <div style={{
            position: 'absolute', top: '110%', left: 0, width: '220px', maxHeight: '300px',
            backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', zIndex: 1000,
            overflowY: 'auto', padding: '0.5rem'
          }}>
            {options.map(opt => {
              const isChecked = selected.includes(opt);
              return (
                <div 
                  key={opt}
                  onClick={() => toggleFilter(type, opt)}
                  style={{
                    padding: '0.6rem 0.75rem', borderRadius: '6px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem',
                    backgroundColor: isChecked ? '#EFF6FF' : 'transparent',
                    color: isChecked ? '#1E40AF' : '#475569',
                    transition: 'background 0.1s'
                  }}
                >
                  <div style={{
                    width: '16px', height: '16px', borderRadius: '4px', border: '1px solid',
                    borderColor: isChecked ? '#1E40AF' : '#d1d5db',
                    backgroundColor: isChecked ? '#1E40AF' : '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {isChecked && <Check size={12} color="#fff" strokeWidth={3} />}
                  </div>
                  <span style={{ fontWeight: isChecked ? 700 : 400 }}>{opt.toUpperCase()}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const activeCount = filters.personnel.length + filters.countries.length + filters.categories.length + filters.statuses.length;

  return (
    <div ref={containerRef} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      {/* FIXED: White color for Filters label to contrast with lighter blue header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', fontWeight: 800, fontSize: '0.9rem' }}>
        <Filter size={18} color="#FFFFFF" />
        <span>Filters</span>
        {activeCount > 0 && <span style={{ backgroundColor: '#fff', color: '#4C8CE4', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '10px', fontWeight: 900 }}>{activeCount}</span>}
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <Dropdown label="Personnel" type="personnel" options={personnelOptions} selected={filters.personnel} />
        <Dropdown label="Country" type="countries" options={countryOptions} selected={filters.countries} />
        <Dropdown label="Category" type="categories" options={categoryOptions} selected={filters.categories} />
        <Dropdown label="Status" type="statuses" options={statusOptions} selected={filters.statuses} />

        {activeCount > 0 && (
          <button onClick={clearFilters} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', marginLeft: '0.5rem' }}>
            <X size={14} /> Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;

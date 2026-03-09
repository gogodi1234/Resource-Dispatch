import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import type { Project } from "../data/mockData";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface WorldMapProps {
  projects: Project[];
  onMarkerClick: (project: Project) => void;
  selectedProjectId?: string;
}

const WorldMap: React.FC<WorldMapProps> = ({ projects, onMarkerClick, selectedProjectId }) => {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const [position, setPosition] = useState({ coordinates: [20, 10] as [number, number], zoom: 1 });

  const handleMoveEnd = (position: { coordinates: [number, number]; zoom: number }) => {
    setPosition(position);
  };

  // Group projects by coordinates
  const groupedProjects = projects.reduce((acc, project) => {
    const key = `${project.coordinates[0]},${project.coordinates[1]}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  // Calculate dynamic size based on project count and zoom level
  const getMarkerRadius = (count: number, isSelected: boolean) => {
    const base = 4;
    const growth = Math.min(count * 0.6, 10);
    const selectBonus = isSelected ? 3 : 0;
    return (base + growth + selectBonus) / position.zoom;
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'ongoing': return '#10b981';
      case 'delay': return '#ef4444';
      case 'on-hold': return '#f59e0b';
      case 'planning': return '#4F46E5';
      default: return '#6b7280';
    }
  };

  const strokeWidth = 1.5 / position.zoom;
  const labelFontSize = 9 / position.zoom;
  const multiTextSize = (count: number) => Math.max(6, Math.min(10, 6 + count * 0.3)) / position.zoom;
  const multiTextYOffset = 3 / position.zoom;
  const textYOffset = -12 / position.zoom;

  return (
    <div className="map-container" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f1f5f9', position: 'relative' }}>
      <ComposableMap 
        projectionConfig={{ scale: 140, rotate: [-10, 0, 0] }}
        width={800} height={450}
      >
        <ZoomableGroup center={position.coordinates} zoom={position.zoom} onMoveEnd={handleMoveEnd}>
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey} geography={geo}
                  fill="#E2E8F0" stroke="#CBD5E1" strokeWidth={0.5 / position.zoom}
                  style={{ default: { outline: "none" }, hover: { fill: "#CBD5E1", outline: "none" }, pressed: { outline: "none" } }}
                />
              ))
            }
          </Geographies>
          {Object.entries(groupedProjects).map(([key, group]) => {
            const coordinates = key.split(',').map(Number) as [number, number];
            const count = group.length;
            const isMulti = count > 1;
            const containsSelected = group.some(p => p.id === selectedProjectId);
            
            return (
              <Marker key={key} coordinates={coordinates}>
                <circle 
                  r={getMarkerRadius(count, containsSelected)} 
                  fill={containsSelected ? "#FACC15" : (isMulti ? "#4338CA" : "#4F46E5")} 
                  stroke={containsSelected ? "#1E293B" : "#fff"} 
                  strokeWidth={containsSelected ? strokeWidth * 2 : strokeWidth} 
                  style={{ cursor: 'pointer', transition: 'all 0.3s ease', filter: containsSelected ? 'drop-shadow(0 0 4px rgba(250, 204, 21, 0.6))' : 'none' }}
                  onClick={() => {
                    if (isMulti) setActiveMarker(activeMarker === key ? null : key);
                    else {
                      onMarkerClick(group[0]);
                      setActiveMarker(null);
                    }
                  }}
                />
                {isMulti && (
                  <text
                    textAnchor="middle" y={multiTextYOffset}
                    style={{ fontFamily: "Inter, sans-serif", fill: containsSelected ? "#1E293B" : "#fff", fontSize: `${multiTextSize(count)}px`, fontWeight: 800, pointerEvents: 'none' }}
                  >
                    {count}
                  </text>
                )}
                {!isMulti && position.zoom > 1.5 && (
                  <text
                    textAnchor="middle" y={textYOffset}
                    style={{ fontFamily: "Inter, sans-serif", fill: containsSelected ? "#1E293B" : "#334155", fontSize: `${labelFontSize}px`, fontWeight: containsSelected ? 800 : 600, pointerEvents: 'none' }}
                  >
                    {group[0].customer}
                  </text>
                )}
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      {activeMarker && (
        <div onClick={() => setActiveMarker(null)} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.1)', backdropFilter: 'blur(1px)', zIndex: 9 }} />
      )}

      {activeMarker && groupedProjects[activeMarker] && (
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff', padding: '1.25rem', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0', maxHeight: '320px', overflowY: 'auto', width: '280px', zIndex: 10
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
            <div><h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800 }}>Select Project</h4></div>
            <button onClick={() => setActiveMarker(null)} style={{ border: 'none', background: '#f1f5f9', width: '24px', height: '24px', borderRadius: '12px', cursor: 'pointer' }}>✕</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {groupedProjects[activeMarker].map(p => {
              const isSelected = p.id === selectedProjectId;
              return (
                <div 
                  key={p.id} onClick={() => { onMarkerClick(p); setActiveMarker(null); }}
                  style={{ 
                    padding: '0.75rem', borderRadius: '10px', border: '1px solid',
                    borderColor: isSelected ? '#4F46E5' : '#f1f5f9',
                    backgroundColor: isSelected ? '#f5f3ff' : 'transparent',
                    cursor: 'pointer', transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => !isSelected && (e.currentTarget.style.backgroundColor = '#f8fafc')}
                  onMouseLeave={(e) => !isSelected && (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: isSelected ? '#4F46E5' : '#334155' }}>{p.customer}</div>
                  <div style={{ color: '#64748b', fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{p.category}</span>
                    <span style={{ fontWeight: 700, color: getStatusColor(p.status) }}>{p.status.toUpperCase()}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldMap;

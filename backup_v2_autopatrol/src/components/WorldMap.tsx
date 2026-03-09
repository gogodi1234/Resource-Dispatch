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
  position: { coordinates: [number, number]; zoom: number };
  setPosition: (pos: { coordinates: [number, number]; zoom: number }) => void;
}

const WorldMap: React.FC<WorldMapProps> = ({ projects, onMarkerClick, position, setPosition }) => {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  const handleMoveEnd = (newPos: { coordinates: [number, number]; zoom: number }) => {
    setPosition(newPos);
  };

  const groupedProjects = projects.reduce((acc, project) => {
    const key = `${project.coordinates[0]},${project.coordinates[1]}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  // Calculate dynamic size based on project count and zoom level
  const getMarkerRadius = (count: number) => {
    const base = 6;
    const growth = Math.min(count * 1.2, 15); // Grow with count but cap it
    return (base + growth) / position.zoom;
  };

  const strokeWidth = 2 / position.zoom;
  const multiTextSize = (count: number) => Math.max(7, Math.min(12, 7 + count * 0.5)) / position.zoom;
  const multiTextYOffset = 3 / position.zoom;

  return (
    <div className="map-container" style={{ width: '100%', height: '100%', overflow: 'hidden', backgroundColor: '#f1f5f9', position: 'relative' }}>
      <ComposableMap 
        projectionConfig={{ scale: 140, rotate: [-10, 0, 0] }}
        style={{ width: "100%", height: "100%" }}
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
            const hasDelay = group.some(p => p.status === 'delay');
            
            return (
              <Marker key={key} coordinates={coordinates}>
                <circle 
                  r={getMarkerRadius(count)} 
                  fill={hasDelay ? "#DC2626" : (isMulti ? "#4338CA" : "#4F46E5")} 
                  stroke="#fff" 
                  strokeWidth={strokeWidth} 
                  style={{ cursor: 'pointer', opacity: 0.9, transition: 'all 0.3s ease' }}
                  onClick={() => {
                    if (isMulti) setActiveMarker(activeMarker === key ? null : key);
                    else onMarkerClick(group[0]);
                  }}
                />
                {isMulti && (
                  <text
                    textAnchor="middle" y={multiTextYOffset}
                    style={{ fontFamily: "Inter, sans-serif", fill: "#fff", fontSize: `${multiTextSize(count)}px`, fontWeight: 800, pointerEvents: 'none' }}
                  >
                    {count}
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
            {groupedProjects[activeMarker].map(p => (
              <div 
                key={p.id} onClick={() => { onMarkerClick(p); setActiveMarker(null); }}
                style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid #f1f5f9', cursor: 'pointer' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{p.customer}</div>
                <div style={{ color: p.status === 'delay' ? '#DC2626' : '#64748b', fontSize: '0.75rem', fontWeight: p.status === 'delay' ? 600 : 400 }}>{p.category} - {p.status.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldMap;

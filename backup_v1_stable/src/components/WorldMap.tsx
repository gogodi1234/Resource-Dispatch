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
}

const WorldMap: React.FC<WorldMapProps> = ({ projects, onMarkerClick }) => {
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

  // Calculate dynamic sizes to counter zoom
  const markerRadius = (isMulti: boolean) => (isMulti ? 8 : 6) / position.zoom;
  const strokeWidth = 2 / position.zoom;
  const fontSize = 10 / position.zoom;
  const multiTextSize = 8 / position.zoom;
  const textYOffset = -12 / position.zoom;
  const multiTextYOffset = 3 / position.zoom;

  return (
    <div className="map-container" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f1f5f9', position: 'relative' }}>
      <ComposableMap 
        projectionConfig={{ 
          scale: 140,
          rotate: [-10, 0, 0]
        }}
        width={800}
        height={450}
      >
        <ZoomableGroup 
          center={position.coordinates} 
          zoom={position.zoom}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E2E8F0"
                  stroke="#CBD5E1"
                  strokeWidth={0.5 / position.zoom}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#CBD5E1", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {Object.entries(groupedProjects).map(([key, group]) => {
            const coordinates = key.split(',').map(Number) as [number, number];
            const isMulti = group.length > 1;
            
            return (
              <Marker 
                key={key} 
                coordinates={coordinates}
              >
                <circle 
                  r={markerRadius(isMulti)} 
                  fill={isMulti ? "#4338CA" : "#4F46E5"} 
                  stroke="#fff" 
                  strokeWidth={strokeWidth} 
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    if (isMulti) {
                      setActiveMarker(activeMarker === key ? null : key);
                    } else {
                      onMarkerClick(group[0]);
                      setActiveMarker(null);
                    }
                  }}
                />
                {isMulti && (
                  <text
                    textAnchor="middle"
                    y={multiTextYOffset}
                    style={{ 
                      fontFamily: "Inter, system-ui, sans-serif", 
                      fill: "#fff", 
                      fontSize: `${multiTextSize}px`, 
                      fontWeight: 700,
                      pointerEvents: 'none' 
                    }}
                  >
                    {group.length}
                  </text>
                )}
                {!isMulti && position.zoom > 1.5 && ( // Only show text label when zoomed in a bit
                  <text
                    textAnchor="middle"
                    y={textYOffset}
                    style={{ 
                      fontFamily: "Inter, system-ui, sans-serif", 
                      fill: "#334155", 
                      fontSize: `${fontSize}px`, 
                      fontWeight: 600,
                      pointerEvents: 'none' 
                    }}
                  >
                    {group[0].customer}
                  </text>
                )}
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      {/* Map Overlay Backdrop when multi-select is active */}
      {activeMarker && (
        <div 
          onClick={() => setActiveMarker(null)}
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.1)', backdropFilter: 'blur(1px)', zIndex: 9
          }}
        />
      )}

      {/* Selection Popover - Now centered for better visibility */}
      {activeMarker && groupedProjects[activeMarker] && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '1.25rem',
          borderRadius: '16px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          border: '1px solid #e2e8f0',
          maxHeight: '320px',
          overflowY: 'auto',
          width: '280px',
          zIndex: 10
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800, color: '#1e293b' }}>Select Project</h4>
              <p style={{ margin: 0, fontSize: '0.7rem', color: '#64748b' }}>{groupedProjects[activeMarker].length} projects at this location</p>
            </div>
            <button 
              onClick={() => setActiveMarker(null)} 
              style={{ border: 'none', background: '#f1f5f9', width: '24px', height: '24px', borderRadius: '12px', cursor: 'pointer', fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ✕
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {groupedProjects[activeMarker].map(p => (
              <div 
                key={p.id} 
                onClick={() => {
                  onMarkerClick(p);
                  setActiveMarker(null);
                }}
                style={{
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: '1px solid #f1f5f9',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#334155', marginBottom: '2px' }}>{p.customer}</div>
                <div style={{ color: '#64748b', fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{p.category}</span>
                  <span style={{ fontWeight: 600, color: '#4F46E5' }}>{p.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldMap;

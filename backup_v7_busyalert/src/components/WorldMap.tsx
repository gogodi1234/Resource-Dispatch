import React, { useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import type { Project } from "../data/mockData";
import { X } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface WorldMapProps {
  projects: Project[];
  onMarkerClick: (project: Project) => void;
  position: { coordinates: [number, number]; zoom: number };
  setPosition: (pos: { coordinates: [number, number]; zoom: number }) => void;
  selectedProjectId?: string;
}

const WorldMap: React.FC<WorldMapProps> = ({ projects, onMarkerClick, position, setPosition, selectedProjectId }) => {
  const [activeGroup, setActiveGroup] = useState<any>(null);

  // THEME COLORS (Style 1 + 2)
  const COLORS = {
    ocean: "#EDF2F7", 
    land: "#D1D5DB",  
    landHover: "#9CA3AF",
    primary: "#2E4057",
    delay: "#CA3E47",
    planning: "#807182",
    ongoing: "#66A182"
  };

  const clusteredMarkers = useMemo(() => {
    const clusters: any[] = [];
    const minPixelDistance = 25; 
    const threshold = minPixelDistance / (position.zoom * 2); 

    projects.forEach(project => {
      let foundCluster = false;
      for (const cluster of clusters) {
        const dx = project.coordinates[0] - cluster.coords[0];
        const dy = project.coordinates[1] - cluster.coords[1];
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < threshold) {
          cluster.items.push(project);
          cluster.count++;
          if (project.status === 'delay') cluster.hasDelay = true;
          foundCluster = true;
          break;
        }
      }

      if (!foundCluster) {
        clusters.push({
          id: `cluster-${project.id}`,
          coords: project.coordinates,
          items: [project],
          count: 1,
          hasDelay: project.status === 'delay'
        });
      }
    });

    return clusters;
  }, [projects, position.zoom]);

  const handleMoveEnd = (newPos: { coordinates: [number, number]; zoom: number }) => {
    setPosition(newPos);
  };

  // LARGER RADIUS LOGIC
  const getBaseRadius = (count: number) => {
    if (count <= 1) return 6.5; // Increased from 4
    return 6.5 + Math.pow(count - 1, 0.35) * 3.5; // Increased scaling
  };

  const getStatusColors = (status: string) => {
    switch (status) {
      case 'delay': return { text: COLORS.delay, bg: '#FEE2E2' };
      case 'planning': return { text: COLORS.planning, bg: '#F5F3FF' };
      case 'ongoing': return { text: COLORS.ongoing, bg: '#ECFDF5' };
      default: return { text: COLORS.ongoing, bg: '#ECFDF5' };
    }
  };

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: COLORS.ocean, position: "relative", overflow: "hidden" }}>
      <ComposableMap projection="geoMercator" style={{ width: "100%", height: "100%" }}>
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          maxZoom={40}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={COLORS.land}
                  stroke="#FFFFFF"
                  strokeWidth={0.4 / position.zoom} 
                  style={{ default: { outline: "none" }, hover: { fill: COLORS.landHover, outline: "none" } }}
                />
              ))
            }
          </Geographies>

          {clusteredMarkers.map((cluster) => {
            const isSelected = cluster.items.some((p: Project) => p.id === selectedProjectId);
            const radius = getBaseRadius(cluster.count) / position.zoom;
            
            return (
              <Marker key={cluster.id} coordinates={cluster.coords}>
                <g 
                  style={{ cursor: "pointer" }} 
                  onClick={() => {
                    if (cluster.count > 1) setActiveGroup(cluster);
                    else onMarkerClick(cluster.items[0]);
                  }}
                >
                  <circle r={radius + (0.4 / position.zoom)} fill="rgba(0,0,0,0.12)" cy={0.4 / position.zoom} />
                  <circle
                    r={radius}
                    fill={cluster.hasDelay ? COLORS.delay : COLORS.primary}
                    stroke="#FFFFFF"
                    strokeWidth={0.5 / position.zoom}
                    style={{ transition: "all 0.3s ease" }}
                  />
                  
                  {cluster.count === 1 ? (
                    <text x={radius + (4 / position.zoom)} y={1.5 / position.zoom} style={{ fontSize: `${6 / position.zoom}px`, fontWeight: 800, fill: COLORS.primary, pointerEvents: "none", fontFamily: "Inter, sans-serif" }}>
                      {cluster.items[0].customer}
                    </text>
                  ) : (
                    <text textAnchor="middle" y={(radius / 3.5)} style={{ fontSize: `${Math.max(5, getBaseRadius(cluster.count) * 0.55) / position.zoom}px`, fontWeight: 800, fill: "#FFFFFF", pointerEvents: "none", fontFamily: "Inter, sans-serif" }}>
                      {cluster.count}
                    </text>
                  )}

                  {isSelected && (
                    <circle r={radius + (3 / position.zoom)} fill="none" stroke="#F59E0B" strokeWidth={1.5 / position.zoom} strokeDasharray={`${2/position.zoom} ${1.5/position.zoom}`} />
                  )}
                </g>
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      {activeGroup && (
        <>
          <div onClick={() => setActiveGroup(null)} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(15, 23, 42, 0.4)", backdropFilter: "blur(2px)", zIndex: 999 }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "360px", maxHeight: "75%", backgroundColor: "#fff", borderRadius: "18px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", zIndex: 1000, overflow: "hidden" }}>
            <div style={{ padding: "1.25rem", borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: COLORS.primary }}>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 800, color: "#fff" }}>Region Hub</h3>
                <p style={{ margin: 0, fontSize: "0.7rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{activeGroup.count} active projects</p>
              </div>
              <button onClick={() => setActiveGroup(null)} style={{ border: "none", background: "rgba(255,255,255,0.1)", borderRadius: "50%", padding: "5px", cursor: "pointer", display: "flex" }}><X size={16} color="#fff" /></button>
            </div>
            <div style={{ overflowY: "auto", flex: 1, padding: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem", backgroundColor: "#f8fafc" }}>
              {activeGroup.items.map((p: Project) => {
                const colors = getStatusColors(p.status);
                return (
                  <div key={p.id} onClick={() => { onMarkerClick(p); setActiveGroup(null); }} style={{ padding: "1rem", borderRadius: "12px", border: "1px solid #e2e8f0", cursor: "pointer", transition: "all 0.2s", backgroundColor: p.id === selectedProjectId ? "#F5F3FF" : "#fff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.02)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "0.9rem", fontWeight: 800, color: COLORS.primary, marginBottom: "2px" }}>{p.customer}</div>
                        <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>{p.category} • {p.city}</div>
                      </div>
                      <div style={{ fontSize: "0.65rem", fontWeight: 900, color: colors.text, textTransform: 'uppercase', backgroundColor: colors.bg, padding: "3px 7px", borderRadius: "5px" }}>{p.status}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WorldMap;

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/map.css';

interface MapProps {
  source: { lat: number; lng: number; name: string };
  destination: { lat: number; lng: number; name: string };
  roadNodes: { lat: number; lng: number }[];
}

const MapController: React.FC<{ source: { lat: number; lng: number }; destination: { lat: number; lng: number } }> = ({ source, destination }) => {
  const map = useMap();

  useEffect(() => {
    if (source && destination) {
      const bounds = L.latLngBounds([source, destination]);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [source, destination, map]);

  return null;
};

const createCustomIcon = (color: string, type: 'source' | 'destination' | 'node') => {
  const size = type === 'node' ? 8 : 12;
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${color};
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        ${type !== 'node' ? `
          <div style="
            width: ${size - 4}px;
            height: ${size - 4}px;
            background-color: white;
            border-radius: 50%;
            opacity: 0.8;
          "></div>
        ` : ''}
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

const Map: React.FC<MapProps> = ({ source, destination, roadNodes }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    };
    
    checkDarkMode();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkDarkMode);
    
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', checkDarkMode);
    };
  }, []);

  const pathPositions = [
    [source.lat, source.lng],
    ...roadNodes.map(node => [node.lat, node.lng]),
    [destination.lat, destination.lng]
  ];

  return (
    <div className={`map-container ${isDarkMode ? 'dark' : ''}`} style={{ height: '100%', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
      <MapContainer
        center={[(source.lat + destination.lat) / 2, (source.lng + destination.lng) / 2]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          url={isDarkMode 
            ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
            : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <MapController source={source} destination={destination} />
        
        <Marker position={[source.lat, source.lng]} icon={createCustomIcon('#3B82F6', 'source')}>
          <Popup className="custom-popup">
            <div className="font-medium text-sm">Source: {source.name}</div>
          </Popup>
        </Marker>
        
        <Marker position={[destination.lat, destination.lng]} icon={createCustomIcon('#EF4444', 'destination')}>
          <Popup className="custom-popup">
            <div className="font-medium text-sm">Destination: {destination.name}</div>
          </Popup>
        </Marker>
        
        {roadNodes.map((node, index) => (
          <Marker
            key={index}
            position={[node.lat, node.lng]}
            icon={createCustomIcon('#6B7280', 'node')}
          />
        ))}
        
        <Polyline
          positions={pathPositions}
          color="#3B82F6"
          weight={4}
          opacity={0.8}
          className="animated-path"
        />
        
        <div className="navigation-panel absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">From</div>
              <div className="font-medium">{source.name}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 dark:text-gray-400">To</div>
              <div className="font-medium">{destination.name}</div>
            </div>
          </div>
        </div>
      </MapContainer>
    </div>
  );
};

export default Map; 
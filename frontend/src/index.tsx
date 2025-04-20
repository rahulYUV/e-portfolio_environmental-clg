import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Map from './components/Map';

// Sample data for testing
const sampleData = {
  source: {
    lat: 18.5204,
    lng: 73.8567,
    name: 'Pune Station'
  },
  destination: {
    lat: 18.5167,
    lng: 73.8563,
    name: 'Shivaji Nagar'
  },
  roadNodes: [
    { lat: 18.5190, lng: 73.8565 },
    { lat: 18.5180, lng: 73.8564 },
    { lat: 18.5175, lng: 73.8563 }
  ]
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="h-screen w-screen p-4">
      <Map 
        source={sampleData.source}
        destination={sampleData.destination}
        roadNodes={sampleData.roadNodes}
      />
    </div>
  </React.StrictMode>
); 
import { Node, Edge } from '../types';

// Intermediate nodes for roads
export const roadNodes: Node[] = [
  // Bharati Vidyapeeth to Shaniwar Wada
  { id: 'b1', lat: 18.4800, lng: 73.8600 },
  { id: 'b2', lat: 18.4900, lng: 73.8580 },
  { id: 'b3', lat: 18.5000, lng: 73.8570 },
  
  // Bharati Vidyapeeth to Aga Khan Palace
  { id: 'a1', lat: 18.4800, lng: 73.8700 },
  { id: 'a2', lat: 18.5000, lng: 73.8800 },
  { id: 'a3', lat: 18.5300, lng: 73.8900 },
  
  // Bharati Vidyapeeth to Sinhagad Fort
  { id: 's1', lat: 18.4500, lng: 73.8400 },
  { id: 's2', lat: 18.4300, lng: 73.8200 },
  { id: 's3', lat: 18.4000, lng: 73.8000 },
  
  // Bharati Vidyapeeth to Khadakwasla Dam
  { id: 'k1', lat: 18.4500, lng: 73.8500 },
  { id: 'k2', lat: 18.4400, lng: 73.8300 },
  { id: 'k3', lat: 18.4350, lng: 73.8000 },
];

// Road connections between places
export const roadEdges: Edge[] = [
  // Bharati Vidyapeeth to Shaniwar Wada
  { start: 'bharati', end: 'b1', weight: 2 },
  { start: 'b1', end: 'b2', weight: 2 },
  { start: 'b2', end: 'b3', weight: 2 },
  { start: 'b3', end: 'shaniwar', weight: 2 },
  
  // Bharati Vidyapeeth to Aga Khan Palace
  { start: 'bharati', end: 'a1', weight: 2 },
  { start: 'a1', end: 'a2', weight: 2 },
  { start: 'a2', end: 'a3', weight: 2 },
  { start: 'a3', end: 'agakhan', weight: 2 },
  
  // Bharati Vidyapeeth to Sinhagad Fort
  { start: 'bharati', end: 's1', weight: 3 },
  { start: 's1', end: 's2', weight: 3 },
  { start: 's2', end: 's3', weight: 3 },
  { start: 's3', end: 'sinhagad', weight: 3 },
  
  // Bharati Vidyapeeth to Khadakwasla Dam
  { start: 'bharati', end: 'k1', weight: 2 },
  { start: 'k1', end: 'k2', weight: 2 },
  { start: 'k2', end: 'k3', weight: 2 },
  { start: 'k3', end: 'khadakwasla', weight: 2 },
];

// Helper function to get path between two places
export const getPath = (sourceId: string, destinationId: string): Node[] => {
  const path: Node[] = [];
  
  // Find the road edges that connect source to destination
  const relevantEdges = roadEdges.filter(edge => 
    (edge.start === sourceId && edge.end === destinationId) ||
    (edge.start === destinationId && edge.end === sourceId)
  );
  
  if (relevantEdges.length > 0) {
    // Add source node
    path.push({ id: sourceId, lat: 0, lng: 0 });
    
    // Add intermediate nodes
    const intermediateNodes = roadNodes.filter(node => 
      relevantEdges.some(edge => edge.start === node.id || edge.end === node.id)
    );
    path.push(...intermediateNodes);
    
    // Add destination node
    path.push({ id: destinationId, lat: 0, lng: 0 });
  }
  
  return path;
}; 
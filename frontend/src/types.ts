export interface Node {
  id: string;
  lat: number;
  lng: number;
}

export interface Edge {
  start: string;
  end: string;
  weight: number;
}

export interface Graph {
  nodes: Node[];
  edges: Edge[];
}

export interface Location {
  name: string;
  lat: number;
  lng: number;
  id: string;
}
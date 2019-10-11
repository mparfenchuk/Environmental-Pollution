import Supercluster from 'supercluster';

let cluster: Supercluster;

export const init = (places: any) => {
  cluster = new Supercluster({
    radius: 60,
    extent: 256,
    maxZoom: 17
  }).load(places);
}

export const getClusters = (bbox: [number, number, number, number], zoom: number): any => {
  return cluster.getClusters(bbox, zoom);
}

export const getClusterExpansionZoom = (id: number): number => {
  return cluster.getClusterExpansionZoom(id)
}
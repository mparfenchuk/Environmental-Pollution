import { useRef, useEffect, useState, memo } from 'react';
import L from 'leaflet';

import usePollutedPlaces from '../../hooks/usePollutedPlaces';
import { FeatureLayer } from '../../types';
import { getClusters, getClusterExpansionZoom } from '../../utils/cluster';

import ClusterIcon from './ClusterIcon';
import TileLayer from './TileLayer';

export default memo(() => {
  const ready = usePollutedPlaces();
  const mapRef = useRef<L.Map>();
  const layerRef = useRef<L.GeoJSON>();
  const [clusterizedData, setClusterizedData] = useState();

  useEffect(() => {
    const moveendHandler = (e: L.LeafletEvent) => {
      const bounds = e.target.getBounds();
      const clusters = getClusters([
        bounds.getWest(), 
        bounds.getSouth(), 
        bounds.getEast(), 
        bounds.getNorth()
      ], e.target.getZoom());
      setClusterizedData(clusters);
    }

    mapRef.current = L.map("map", {
      center: [0, 0],
      zoom: 2,
      layers: [TileLayer]
    }).on('moveend', moveendHandler);
    mapRef.current.zoomControl.setPosition('bottomright');

    const clusterClickHandler = (e: L.LeafletEvent) => {
      const clusterE = e as L.LeafletMouseEvent & FeatureLayer;
      if (clusterE.layer.feature.properties.cluster_id && mapRef.current) {
        mapRef.current.flyTo(clusterE.latlng, 
          getClusterExpansionZoom(clusterE.layer.feature.properties.cluster_id));
      }
    }

    layerRef.current = L.geoJSON(undefined, {
      pointToLayer: ClusterIcon
    }).addTo(mapRef.current).on('click', clusterClickHandler);

    return () => {
      if(mapRef.current)
        mapRef.current.remove()
      if(layerRef.current)
        layerRef.current.remove()
    }
  }, []);

  useEffect(() => {
    if(layerRef.current && clusterizedData) {
      layerRef.current.clearLayers();
      layerRef.current.addData(clusterizedData);
    }
  }, [clusterizedData]);

  useEffect(() => {
    if(mapRef.current && ready) {
      const bounds = mapRef.current.getBounds();
      const clusters = getClusters([
        bounds.getWest(), 
        bounds.getSouth(), 
        bounds.getEast(), 
        bounds.getNorth()
      ], mapRef.current.getZoom());
      setClusterizedData(clusters);
    }
  }, [ready]);

  return <div id="map" />
});
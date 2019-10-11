import { useState, useEffect } from 'react';
import { init } from '../utils/cluster';

export default (): boolean => {
  const [ready, setReady] = useState<boolean>(false);
  const [places, setPlaces] = useState();

  useEffect(() => {
    let mounted = true
    const fetchPlaces = async () => {
      const result = await fetch('/api/geos');
      const places = await result.json();

      if (mounted) {
        setPlaces(places)
      }
    }
    
    fetchPlaces();
    return () => {
      mounted = false
    }
  }, []);

  useEffect(() => {
    if(places) {
      init(places);
      setReady(true)
    }
  }, [places]);

  return ready
};
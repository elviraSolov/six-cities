import { useState, useEffect, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from 'types/types';

const useMap = (mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null => {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null) {
      if (map) {
        map.setView({ lat: city.location.latitude, lng: city.location.longitude }, city.location.zoom);
      } else {
        const instance = new Map(mapRef.current, {
          center: {
            lat: city.location.latitude,
            lng: city.location.longitude,
          },
          zoom: city.location.zoom,
        });

        const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        });

        instance.addLayer(layer);
        setMap(instance);
      }
    }
  }, [mapRef, city]);

  return map;
};

export default useMap;

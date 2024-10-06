import { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '@const';
import { City, Location } from 'types/city';
import useMap from '@hooks/useMap';

type MapProps = {
  city: City;
  points: (Location & { id?: number })[];
  activeOffer?: number | null;
  mapClass: string;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ city, points, activeOffer, mapClass}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      points.forEach(({ id, latitude, longitude }) => {
        const marker = new Marker({
          // eslint-disable-next-line
          lat: latitude,
          // eslint-disable-next-line
          lng: longitude
        });

        marker
          .setIcon(activeOffer === id ? currentCustomIcon : defaultCustomIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [city, map, points, activeOffer]);

  return (
    <div
      className={`${mapClass}`}
      ref={mapRef}
    />
  );
}

export default Map;

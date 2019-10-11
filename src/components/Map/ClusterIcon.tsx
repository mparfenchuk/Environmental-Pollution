import Router from 'next/router';
import L from 'leaflet';

import { Feature } from '../../types';

export default (feature: Feature, latlng: L.LatLng) => {
  if (!feature.properties.cluster) {
    const icon = L.divIcon({
      html: '<div><span/></div>',
      className: 'marker-cluster-default',
      iconSize: L.point(30, 30)
    });

    const clickHandler = () => 
      Router.push('/pollution/[slug]', `/pollution/${feature.properties.slug}`);

    return L.marker(latlng, { icon })
      .bindTooltip(feature.properties.name, { 
        direction: 'left', 
        className: 'marker-tooltip'
      })
      .on('click', clickHandler)
  }

  const count = feature.properties.point_count;
  const size =
    count < 5 ? 'small' :
    count < 10 ? 'medium' : 'large';
  const pointSize =
    count < 5 ? L.point(40, 40) :
    count < 10 ? L.point(50, 50) : L.point(60, 60);
  const icon = L.divIcon({
    html: `<div><span>${  feature.properties.point_count_abbreviated  }</span></div>`,
    className: `marker-cluster-${size}`,
    iconSize: pointSize
  });

  return L.marker(latlng, { icon })
};
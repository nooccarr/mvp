import React from 'react';
import GoogleMapReact from 'google-map-react';
// import { mapAPI } from '../../utils/googleConfigDev.js';
import { mapAPI } from '../../utils/googleConfigProd.js';

const Map = ({ defaultCenter, zoom, center, cars, getClickedCar }) => {
  console.log('MAPAPI', mapAPI.slice(0, 10));
  return (<div className='mapContainer'>
    <GoogleMapReact
      bootstrapURLKeys={{ key: mapAPI, language: 'en' }}
      defaultCenter={defaultCenter}
      defaultZoom={zoom}
      center={center}
      onChildClick={(e) => getClickedCar(e)}
    >
      {cars.map((car, idx) => (
        <Car
          lat={car.latitude}
          lng={car.longitude}
          key={idx}
        />
      ))}
    </GoogleMapReact>
  </div>);
};

const Car = (props) => (
  <img className='carPositionOnMap' src='/img/car.png' />
)

export default Map;
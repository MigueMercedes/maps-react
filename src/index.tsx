import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN ?? '';

if( !navigator.geolocation ) {
  alert( 'Your navigator don\'t have option of geolocation' )
  throw new Error( 'Your navigator don\'t have option of geolocation' )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
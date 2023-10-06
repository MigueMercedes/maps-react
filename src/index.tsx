import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoibWNkLW1pZ3VlIiwiYSI6ImNsbmR0ZjhiejA3YWYya3Jpemh5dnd6MW4ifQ.T1LJsvF2ZVF5chVSckk-NQ';

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


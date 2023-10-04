import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

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


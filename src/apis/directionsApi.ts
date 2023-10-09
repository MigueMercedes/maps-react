import axios from "axios";

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    language: 'es',
    overview: 'simplified',
    steps: false,
    access_token: 'pk.eyJ1IjoibWNkLW1pZ3VlIiwiYSI6ImNsbmR0ZjhiejA3YWYya3Jpemh5dnd6MW4ifQ.T1LJsvF2ZVF5chVSckk-NQ'
  }
})

export default directionsApi
import axios from "axios";

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    language: 'es',
    overview: 'simplified',
    steps: false,
    access_token: process.env.REACT_APP_ACCESS_TOKEN
  }
})

export default directionsApi
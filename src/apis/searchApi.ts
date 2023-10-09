import axios from 'axios'

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
	params: {
		limit: 5,
		language: 'es',
		access_token: 'pk.eyJ1IjoibWNkLW1pZ3VlIiwiYSI6ImNsbmR0ZjhiejA3YWYya3Jpemh5dnd6MW4ifQ.T1LJsvF2ZVF5chVSckk-NQ'
	}
})

export default searchApi

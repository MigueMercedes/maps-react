import { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { LoadingPlaces } from './LoadingPlaces';
import { Feature } from '../interfaces/places';

export const SearchResults = () => {

  const { places, isLoadingPlaces } = useContext(PlacesContext)
  const { map } = useContext( MapContext );
  const [activeId, setActiveId] = useState('');

  if( isLoadingPlaces ) {
    return (
      <LoadingPlaces />
    );
  }

  const onPlaceClicked = ( place: Feature) => {
    setActiveId( place.id);
    const [ lgn, lat ] = place.center;

    map?.flyTo({
      zoom: 14,
      center: [ lgn, lat ]
    })
  }

  return (
    <ul className={`list-group ${places.length > 0 && 'mt-3'}`}>
      {
        places.map(place => (
          <li 
            key={place.id}
            className={`list-group-item list-group-item-action pointer ${ (activeId === place.id && 'active')}`}
            onClick={ () => onPlaceClicked( place ) }
          >
            <h6>{ place.text }</h6>
            <p className="text-muted" style={{ fontSize: '12px' }}>
              { place.place_name }
            </p>

            <button className={`btn btn-sm ${ activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary'}`}>
              addresses
            </button>
          </li>
        ))
      }
    </ul>
  )
}

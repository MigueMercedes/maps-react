import { useContext, useLayoutEffect, useRef } from "react"
import { Map } from "mapbox-gl";
import { PlacesContext, MapContext } from "../context"
import { Loading } from "./"

export const MapView = () => {
  
  const { isLoading, userLocation } = useContext( PlacesContext );
  const mapDiv = useRef<HTMLDivElement>( null );
  const { setMap } = useContext( MapContext )

  useLayoutEffect( () => {
    if( !isLoading ) {
      const map = new Map({
        container: mapDiv.current!,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: userLocation,
        zoom: 9
      })
      setMap( map )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ isLoading ])

  if( isLoading ){
    return ( <Loading />)
  }

  return (
    <div ref={ mapDiv }
      style={{
        height: '100%',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0
      }}
    >
      
    </div>
  )
}

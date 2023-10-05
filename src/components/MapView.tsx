import { useContext, useLayoutEffect, useRef } from "react"
import { PlacesContext } from "../context"
import { Loading } from "./"

// const map = new Loader({apiKey: 'AIzaSyCQV50nXqYXU1MSh87ENFLsZp48YqHoZlQ'})

export const MapView = () => {
  
  const { isLoading, userLocation } = useContext( PlacesContext );
  const mapDiv = useRef<HTMLDivElement>( null );

  // useLayoutEffect( () => {
  //   if( !isLoading ) {
      
  //     })
  //   }
  // }, [ isLoading])

  if( isLoading ){
    return ( <Loading />)
  }

  return (
    <div ref={ mapDiv }
      style={{
        height: '100vh',
        width: '100vh',
        position: 'fixed',
        top: 0,
        left: 0
      }}
    >
      { userLocation?.join(',')} 
    </div>
  )
}

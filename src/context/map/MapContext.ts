import { Map } from "mapbox-gl";
import { createContext } from "react";
import { TravelTime } from "./MapProvider";

interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  travelTime: TravelTime

  //Methods
  setMap: (map: Map) => void;
  getRouteBetweenPoints: (start: [number, number], end: [number, number]) => Promise<void>;
}




 

export const MapContext = createContext({} as MapContextProps)
import {
    geoPath,
    geoMercator,
  } from 'd3';

  export const projection = 
  geoMercator()
  .center([5, 52.5]) // GPS of location to zoom on
  .scale(8000) // This is like the zoom
  
  export const pathGenerator = geoPath().projection(projection)
import {
    geoPath,
    geoMercator,
  } from 'd3';

  export const projection = 
  geoMercator()
  .center([4, 52.8]) // GPS of location to zoom on
  .scale(10000) // This is like the zoom
  
  export const pathGenerator = geoPath().projection(projection)
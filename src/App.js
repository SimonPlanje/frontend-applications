import React, { useEffect, useState } from 'react'
import * as d3 from 'd3';
import './styles/App.css'

import Nav from './components/Nav';
import Story from './components/Story'
import WalkCounter from './components/Input'
import CreateVis from './components/Visualisation'
import Filter from './components/Filter'
import fetchData from './helper/fetchData'

function App() {
  //State
  const [geoMap, setGeoMap] = useState(null)
  const [garages, setGarages] = useState(null)
  const [routes, setRoutes] = useState(null)
  const [numberState, numberUpdate] = useState('__')


  useEffect(() => {
fetchData(setGeoMap, setGarages, setRoutes)
  }, [])

  return(
      <div className='App'>
        {/* <Nav /> */}
        <WalkCounter numberState={numberState} numberUpdate={numberUpdate} />
        <Story numberUpdate={numberUpdate} numberUpdate={numberState}  />

       <CreateVis geoMap={geoMap} garages={garages} routes={routes} />
       <Filter garages={garages} />

      </div>
  )
}

export default App

//source https://www.wandelnet.nl/kwaliteitsmonitor-wandelen-provincies

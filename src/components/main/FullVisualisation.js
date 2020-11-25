import React, { useEffect, useState } from 'react'

import CreateVis from '../Visualisation'
import Filter from '../Filter'
import fetchData from '../../helper/fetchData'

function FullVis(){

      //State
  const [geoMap, setGeoMap] = useState(null)
  const [garages, setGarages] = useState(null)
  const [routes, setRoutes] = useState(null)
  const [filterData, setFilterData] = useState(garages)


  useEffect(() => {
fetchData(setGeoMap, setGarages, setRoutes, setFilterData)
  }, [])

    return(
        <div className="SVGdiv">
          <h1>Parkeerplaatsen in Nederland en de startpunten van mooie wandelroutes</h1>
          <Filter garages={garages} setFilterData={setFilterData} />
          <CreateVis geoMap={geoMap} garages={garages} routes={routes} filterData={filterData} />
        </div>
    )
}

export default FullVis


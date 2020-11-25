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
fetchData(setGeoMap, setGarages, setRoutes)
  }, [])

    return(
        <div className="SVGdiv">
<CreateVis geoMap={geoMap} garages={garages} routes={routes} filterData={filterData} />
<Filter garages={garages} setFilterData={setFilterData} />
</div>
    )
}

export default FullVis


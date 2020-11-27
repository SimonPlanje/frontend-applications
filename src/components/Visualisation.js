import React, {useRef} from 'react'
import { projection, pathGenerator } from '../helper/d3Variables'
import { select, zoom } from 'd3';



  function CreateVis({ geoMap, garages, routes, filterData}){

    const svgEl = useRef('.group')
    const svgGroup = useRef('.group')
    const svg = select(svgEl.current)
    const group = select(svgGroup.current)

    svg.call(zoom().on('zoom', (e) => {
        group.attr('transform', e.transform)
      }))

    if(geoMap && routes && filterData){
        return(
            <div width="100%" height="100%" className='d3div'>
                <svg ref={svgEl} width="100%" height="100%">
                <g className='group' ref={svgGroup}>
                    <g className='map'>
                    <path d={pathGenerator(geoMap)} stroke="var(--bluegrey)" fill='transparent'  />
                    </g>
                    <g className='routes'>
                    {routes.map((route, index) =>(
                     <circle key={index} fill="var(--light)" r=".7" cx={projection([route.coordinates[1], route.coordinates[0]])[0]} cy={projection([route.coordinates[1], route.coordinates[0]])[1]} />
                    ))} 
                    </g>
                    
                    <g className='garages'>
                    {filterData.map((garage, index) =>(
                     <circle className={garage.id} key={index} fill='var(--pink)' r="2" cx={projection([garage.accessPointLocation[0].longitude, garage.accessPointLocation[0].latitude])[0]} cy={projection([garage.accessPointLocation[0].longitude, garage.accessPointLocation[0].latitude])[1]} />
                    ))} 
                    </g>
                </g>

            </svg>
            </div>

        )
    } else{
        return null
    }
}

export default CreateVis
import React, {useEffect, useRef} from 'react'
import { projection, pathGenerator } from '../helper/d3Variables'
import { select, zoom } from 'd3';



  function CreateVis({ geoMap, garages, routes, filterData}){
console.log(filterData)

    const svgEl = useRef('.SVGdiv')
    const svgGroup = useRef('.SVGdiv')
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
                    <path d={pathGenerator(geoMap)} stroke="cyan" fill='transparent'  />
                    </g>
                    <g className='routes'>
                    {routes.map((route, index) =>(
                     <circle key={index} fill="white" r=".7" cx={projection([route.coordinates[1], route.coordinates[0]])[0]} cy={projection([route.coordinates[1], route.coordinates[0]])[1]} />
                    ))} 
                    </g>
                    
                    <g className='garages'>
                    {filterData.map((garage, index) =>(
                     <circle class={garage.id} key={index} fill='lime' r="2" cx={projection([garage.accessPointLocation[0].longitude, garage.accessPointLocation[0].latitude])[0]} cy={projection([garage.accessPointLocation[0].longitude, garage.accessPointLocation[0].latitude])[1]} />
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
    
    
    
    
    // //----PLOTTING THE LON LAT AS CIRCLES ON THE MAP ⬇️⬇️⬇️------
    // json(
    //   'https://raw.githubusercontent.com/SimonPlanje/frontend-data/main/onlineData/longLatDisabled.json'
    // ).then(data => {
    
    //   //Bepaal kleur voor circles
    //   let color = scaleOrdinal()
    //     .domain(['both', 'disabled', 'charging'])
    //     .range(['#fc3f79'])
    //   //source: https://www.d3-graph-gallery.com/graph/bubblemap_buttonControl.html
    
    //   const colorValue = d => d.id
    
    //   // const color = d3.scaleOrdinal(d3.schemeCategory10)
    
    //   let idInput = color.domain()
    
    //   g.selectAll('circle').data(data)
    //     .enter()
    //     .append('circle')
    //     .attr('class', (d) => d.id)
    //     .attr('cx', (d) => projection([d.accessPointLocation[0].longitude, d.accessPointLocation[0].latitude])[0])
    //     .attr('cy', (d) => projection([d.accessPointLocation[0].longitude, d.accessPointLocation[0].latitude])[1])
    //     .attr('r', radius)
    //     .attr('fill', (d) => color(colorValue(d)))
    //     .attr('stroke', (d) => color(colorValue(d)))
    //     .attr('fill-opacity', 0.3)
    
    //   function updateDots(data) {
    //     const dots = g.selectAll('circle')
    //       .data(data)
    
    //     dots
    //       .attr('cx', (d) => projection([d.accessPointLocation[0].longitude, d.accessPointLocation[0].latitude])[0])
    //       .attr('cy', (d) => projection([d.accessPointLocation[0].longitude, d.accessPointLocation[0].latitude])[1])
    
    //     dots.enter()
    //       .append('circle')
    //       .attr('r', radius)
    //       .attr('class', d => d.id)
    //       .attr('fill', (d) => color(d.id))
    //       .attr('stroke', (d) => color(d.id))
    //       .attr('fill-opacity', 0.3)
    //       .attr('r', radius)
    //       .attr('cx', (d) => projection([d.accessPointLocation[0].longitude, d.accessPointLocation[0].latitude])[0])
    //       .attr('cy', (d) => projection([d.accessPointLocation[0].longitude, d.accessPointLocation[0].latitude])[1])
    
    
    //     dots.exit()
    //       .remove()
    //   }
    
    //   //reserve div for the input form
    //   const form = select('form')
    //     .selectAll('div')
    //     .data(idInput)
    //     .enter()
    //     .append('div')
    //     .attr('class', 'radio')
    
    
    //   // Make radiobuttons inside the input form
    //   form.append('input')
    //     .attr('type', 'radio')
    //     .attr('name', 'radio')
    //     .on('change', (d, i) => {
    //       if (i === 'disabled') {
    //         i = ['disabled', 'both']
    //       } else if (i === 'charging') {
    //         i = ['charging', 'both']
    //       } else if (i === 'both') {
    //         i = ['charging', 'both', 'none', 'disabled']
    //       } else if (i === 'none') {
    //         i = ['none']
    //       }
    //       update(i); // Call function to reassing dots
    //       console.log(i)
    //     })
    
    //   // inside the div make a label with the text of the year array
    //   form.append('label')
    //     .attr('for', (d, i) => (d))
    //     .text((d, i) => {
    //       const beperkt = "Beperkte parkeerplaatsen"
    //       const valide = "Invaliden parkeerplaatsen"
    //       const Alles = "Alle parkeerplaatsen"
    //       if (d == "disabled") {
    //         return d = beperkt
    //       } else if (d == "charging") {
    //         return d = valide
    //       } else if (d == 'both') {
    //         return d = Alles
    //       }
    //     })
    //     .style('background-color', (d, i) => color(d))
    
    
    
    //   function update(i) {
    
    //     const checkedBoxes = data.filter((row) => i.includes(row.id))
    
    //     updateDots(checkedBoxes);
    //     console.log(checkedBoxes)
    //   }
    
    // })
    
    
    
    // //plotting the route data
    
    // json('https://raw.githubusercontent.com/SimonPlanje/frontend-data/main/geoData_0.json')
    //   .then(data => {
    
    //     v.selectAll('svg').data(data)
    //       .enter()
    //       .append('circle')
    //       .attr('cx', (d) => projection([d.coordinates[1], d.coordinates[0]])[0])
    //       .attr('cy', (d) => projection([d.coordinates[1], d.coordinates[0]])[1])
    //       .attr('r', .7)
    //       .attr('fill', 'lime')
    //       .attr('opacity', .2)
    
    
    //   })


export default CreateVis
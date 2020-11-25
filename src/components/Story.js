import React from 'react';
import { Link } from 'react-router-dom'

const Story = ({numberUpdate}) => {

let difference = function(a,b) {console.log(Math.abs(a - b))}
let moreLess = function(){
  let meerMinder = null;
  if(difference < 1){
    meerMinder = 'meer'
  }else{
    meerMinder = 'minder'
  }
  return meerMinder
}

function scrollDown(){
  window.scroll({top: 1000, behavior: 'smooth' })
}

  return(
  <div className='story'>
  <h2>Je loopt gemiddeld {numberUpdate} keer per maand. </h2>
  <h2>Dat is {difference(numberUpdate, 2)} keer {moreLess} dan de gemiddelde Nederlander per maand </h2>
  <p className="p-story">Met heel Nederland lopen we 441 miljoen wandelingen per jaar. Dit lijkt heel veel maar als we dit per persoon per maand uitrekenen, is dit maar 2 keer per maand per persoon. En door de Corona crisus van dit moment krijgen mensen steeds meer behoefte om een mooie wandeling te maken. Er zijn veel meer mooie wandelingen bereikbaar met de auto dan mensen denken. </p>
  <button onClick={scrollDown} className="linkToVis"> Bekijk parkeerplaatsen in de buurt van wandelingen</button>
  </div>
)}

export default Story

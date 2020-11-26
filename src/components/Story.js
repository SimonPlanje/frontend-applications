import React from 'react'

const Story = ({numberUpdate, meer}) => {

function difference(a,b){return Math.abs(a - b)}

function scrollDown(){
  window.scroll({top: 1000, behavior: 'smooth' })
}

  return(
  <div className='story'>
  <h2>Je wandeld gemiddeld <strong>{numberUpdate} </strong>keer per maand, </h2>
  <h2>dat is <strong>{difference(numberUpdate, 2)} </strong> keer <strong>{meer}</strong> dan de gemiddelde Nederlander per maand </h2>
  <p className="p-story"> Met heel Nederland lopen we 441 miljoen wandelingen per jaar. Dit lijkt heel veel maar als we dit per persoon per maand uitrekenen, is dit maar 2 keer per maand per persoon. Door de coronacrisis van dit moment krijgen mensen steeds meer behoefte om tussen het werken door lekker naar buiten te gaan. Er zijn veel mooie wandelingen bereikbaar met de auto. En wandelen is een van de beste manieren om tijdens de lockdown elkaar alsnog te kunnen ontmoeten in de buitenlucht. Laten we hopen dat de omstandigheden snel weer beter worden, maar tot die tijd is Nederland gelukkig nog groot genoeg voor ons allemaal en zijn er nog zoveel mooie plekken die we kunnen gaan ontdekken. </p>
  <button onClick={scrollDown} className="linkToVis"> Bekijk parkeerplaatsen in de buurt van wandelingen</button>
  </div>
)}

export default Story

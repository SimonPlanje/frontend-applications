import React from 'react'

const WalkCounter = ({numberState, numberUpdate, setMeer}) => {

  const submitHandler = (e) => {
    e.preventDefault()
  }

  const userInputHandler = (e) => {
      if(e.target.value < 2 ){
        numberUpdate(e.target.value)
        setMeer('minder')
      } else if(e.target.value >= 2){
        numberUpdate(e.target.value)
        setMeer('meer')
      }
}

 return(
  <div className='Walkcounter'>
  <h1 >Waar kunnen we in tijden van corona onze energie nog kwijt?</h1>
  <h1 className='hMargin' >Op welke parkeerplaatsen in Nederland kan ik het best parkeren om een mooie wandeling te maken?</h1>
  <h2> Hoeveel wandelingen maak je gemiddeld per maand? </h2>
  <form onSubmit={submitHandler} >
  <input className='numberForm' max="9" min="0" type="number" value={numberState} onChange={userInputHandler} autofocus />
  </form>
  </div>
 )}

export default WalkCounter

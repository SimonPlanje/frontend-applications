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
  <h2> Hoeveel wandelingen maak je gemiddeld per maand? </h2>
  <form onSubmit={submitHandler} >
  <input className='numberForm' max="9" min="0" type="number" value={numberState} onChange={userInputHandler} autofocus />
  </form>
  </div>
 )}

export default WalkCounter

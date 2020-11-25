import React, { useState } from 'react'

const WalkCounter = ({numberState, numberUpdate}) => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  const userInputHandler = (e) => {
    numberUpdate(e.target.value)
  }

 return(
  <div className='Walkcounter'>
  <h2> Hoeveel wandelingen maak je gemiddeld per maand? </h2>
  <form onSubmit={submitHandler} >
  <input className='numberForm' max="9" min="0" placeholder='#' type="number" value={numberState} onChange={userInputHandler} />
  </form>
  </div>
 )}

export default WalkCounter

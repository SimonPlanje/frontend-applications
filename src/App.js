import React, { useState } from 'react'
import './styles/App.css'

import Nav from './components/Nav';
import Story from './components/Story'
import WalkCounter from './components/Input'

function App() {
  //State
  let [numberState, numberUpdate] = useState('')

  return(
      <div className='App'>
        <Nav />
        <WalkCounter numberState={numberState} numberUpdate={numberUpdate}/>
        <Story numberUpdate={numberUpdate} numberUpdate={numberState}  />
      </div>
  )
}

export default App

//source https://www.wandelnet.nl/kwaliteitsmonitor-wandelen-provincies

import React, { useState } from 'react'
import './styles/App.css'
import {BrowserRouter , Switch, Route} from 'react-router-dom';

import Nav from './components/Nav';
import Story from './components/Story'
import WalkCounter from './components/Input'

function App() {

let [numberState, numberUpdate] = useState(null)

  return(
    <BrowserRouter>
      <div className='App'>
        <h1>Hello react</h1>
        <Nav />
        <Route path='/walkCounter' component={WalkCounter}/>
        <Route path='/aanleiding-onderzoek' component={Story}/>
      </div>
    </BrowserRouter>
  )
}

export default App

//source https://www.wandelnet.nl/kwaliteitsmonitor-wandelen-provincies

import React from 'react'
import * as d3 from 'd3';
import './styles/App.css'

import FullVis from './components/main/FullVisualisation'
import Intro from './components/main/Intro'


function App() {


  return(
      <div className='App'>
        <Intro />
        <FullVis />
      </div>
  )
}

export default App

//source https://www.wandelnet.nl/kwaliteitsmonitor-wandelen-provincies

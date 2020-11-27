import React, { useState, useEffect } from 'react'

import Story from '../Story'
import WalkCounter from '../Input'

function Intro(){

    const [meer, setMeer] = useState('meer')
    const [numberState, numberUpdate] = useState(() => {
        const localData = localStorage.getItem('numberState')
        return localData ? localData : '0'
    })

useEffect(() => {
    localStorage.setItem('numberState', (numberState))
}, [numberState])

    return(
        <div>
        <WalkCounter numberState={numberState} numberUpdate={numberUpdate} setMeer={setMeer} />
        <Story numberUpdate={numberUpdate} numberUpdate={numberState}  meer={meer} setMeer={setMeer}/>
        </div>
    )
}


export default Intro
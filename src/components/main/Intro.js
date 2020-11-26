import React, { useState } from 'react'

import Story from '../Story'
import WalkCounter from '../Input'

function Intro(){
    const [meer, setMeer] = useState('meer')
    const [numberState, numberUpdate] = useState('0')


    return(
        <div>
        <WalkCounter numberState={numberState} numberUpdate={numberUpdate} setMeer={setMeer} />
        <Story numberUpdate={numberUpdate} numberUpdate={numberState}  meer={meer} setMeer={setMeer}/>
        </div>
    )
}


export default Intro
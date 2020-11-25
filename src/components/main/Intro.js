import React, { useState } from 'react'

import Story from '../Story'
import WalkCounter from '../Input'

function Intro(){
    const [numberState, numberUpdate] = useState('__')


    return(
        <div>
        <WalkCounter numberState={numberState} numberUpdate={numberUpdate} />
        <Story numberUpdate={numberUpdate} numberUpdate={numberState}  />
        </div>
    )
}

export default Intro
import React from 'react'

const Comp = ({ name, birthday }) => {
  return (
    <div className="namebirth">
      <h2>{name}</h2>
      <h3>{birthday}</h3>
    </div>
  )
}

export default Comp

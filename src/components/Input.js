import React from 'react';
import App from '../App'
import { Link } from 'react-router-dom'

const WalkCounter = () => (
 
  <div className='walkcounter'>
  <h2> Hoeveel loop jij in de week? </h2>
  <input type="number" onChange={e => numberUpdate(e.target.value)}/>
  <Link to='/aanleiding-onderzoek'><input type="submit"/></Link>
  </div>


)

export default WalkCounter

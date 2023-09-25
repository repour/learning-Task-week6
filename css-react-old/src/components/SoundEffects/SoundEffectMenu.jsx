import React from 'react'
import './SoundEffectMenu.css'
const SoundEffectMenu = () => {
  return (
    <>
    <ul className='effect-menu'>
        <li className='selected-effect'>All</li>
        <li>Jumpscare</li>
        <li>Mellow</li>
        <li>Happiness</li>
        <li>Ambience</li>
        <li>Zonk</li>
    </ul>
    </>
  )
}

export default SoundEffectMenu
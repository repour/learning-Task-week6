import React from 'react'
import SoundEffectList from './SoundEffectList'
import SoundEffectMenu from './SoundEffectMenu'
import './SoundEffects.css'

const SoundEffects = () => {
  return (
    <div className='wrapper-sound-effect'>
      <h2>Best sound effects for youtube videos</h2> 
      <SoundEffectMenu />
      <SoundEffectList />
      <a href="#">See all sound effects</a>
    </div>
  )
}

export default SoundEffects
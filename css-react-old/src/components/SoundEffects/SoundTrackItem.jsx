import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './SoundTrackItem.css'

const SoundTrackItem = props => {
    const [favorite, setFavorite] = useState(true)

    function handleFavorite() {
        if (favorite) {
            return setFavorite(false)
        }
        setFavorite(true)
    } 

  return (
    <>
    <ul className='track-wrapper'>
        <li className='track-list1'><img src="../../../public/SoundEffects/play.svg" alt="play-icon" /></li>
        <li className='track-list2'><p>{props.trackName}</p><span>{props.trackLength}</span></li>
        <li className='track-list3'>{props.trackDescribe}</li>
        <li className='track-list4'>{props.trackCategory}</li>
        <li className='track-list5'>
            <button className='fav-but' onClick={handleFavorite}>
                {
                    favorite
                    ?
                    <img src="../../../public/SoundEffects/Heart.svg" alt="favorite" />
                    :
                    <img src="../../../public/SoundEffects/RedHeart.svg" alt="favorite" />
                }
            </button>
        </li>
        <li className='track-list6'><img src="../../../public/SoundEffects/Download.svg" alt="download" /></li>
        <li className='track-list7'>
            <img className='dot' src="../../../public/SoundEffects/Ellipse 4.svg" alt="download" />
            <img className='dot' src="../../../public/SoundEffects/Ellipse 5.svg" alt="download" />
            <img className='dot' src="../../../public/SoundEffects/Ellipse 6.svg" alt="download" />
        </li>
        
    </ul>
    <div className='border-track'></div>
    </>
  )
}

SoundTrackItem.propTypes = {
    trackID:PropTypes.number.isRequired,
    trackName:PropTypes.string.isRequired,
    trackDescribe:PropTypes.string.isRequired,
    trackLength:PropTypes.string.isRequired,
    trackCategory:PropTypes.string.isRequired,
}

export default SoundTrackItem
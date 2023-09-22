import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Stopwatch from './Stopwatch'
import "./SetTimeComponent.css"

const SetTimeComponent = props => {
  const [timer, setTimer] = useState(props.time);

  useEffect(() => {
      const interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);

      return () => clearInterval(interval);
    
  }, []);

  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  function clearSetTime() {
    setTimer(0)
  }

  return (
        <>
        <div>
          {timer > 0
          ?
          (
            <div className='container'>
              {formatTime(timer)}
              <button className='clearTimer' onClick={clearSetTime}>Clear</button>
            </div>

          )
          :
          <Stopwatch />}
        </div>
        </>
     )
}

SetTimeComponent.propTypes = {
  time: PropTypes.number.isRequired,
}

export default SetTimeComponent
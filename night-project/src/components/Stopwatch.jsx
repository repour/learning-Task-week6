import React, { useState, useEffect } from 'react';
import SetTimeComponent from './SetTimeComponent'; 
import "./Stopwatch.css"

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [showSetTimeComponent, setShowSetTimeComponent] = useState(false);



  const handleButtonPress = (value) => {
    if (value === 'Set') {
      setShowSetTimeComponent(true);
    } else if (value === 'Clear') {
      setTime(0);
    } else {
      setTime((prevTime) => prevTime * 10 + parseInt(value));
    }
  };
  function formatTime(seconds) {
    const hours = Math.floor(seconds / 10000);
    const minutes = Math.floor((seconds % 10000) / 100);
    const remainingSeconds = seconds % 100;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  return (
    <div className="stopwatch">
      {showSetTimeComponent ? (
        <SetTimeComponent time={time} key={"setTime"} onClick={handleButtonPress} />
      ) : (
        <>
          <div className="stopwatch-display">{formatTime(time)}</div>
          <div className="button-container">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Set', 'Clear'].map((value) => (
              <button
                key={value}
                className='button-number'
                id={value + "button"}
                onClick={() => handleButtonPress(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}



export default Stopwatch;

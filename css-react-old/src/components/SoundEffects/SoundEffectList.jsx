import React from 'react'
import soundTracks from './tracks'
import SoundTrackItem from './SoundTrackItem'

const SoundEffectList = () => {



    return (
    <>
        <div>
                {
                    soundTracks.map(track => {
                        return (
                            <SoundTrackItem
                            key={track.trackID}
                            trackID={track.trackID}
                            trackName={track.trackName}
                            trackDescribe={track.trackDescribe}
                            trackLength={track.trackLength}
                            trackCategory={track.trackCategory} />
                        )
                    })
                }
        </div>
    </>
  )
}

export default SoundEffectList
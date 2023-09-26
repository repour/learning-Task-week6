import React from 'react'
import feature from './feature'
import FeatureItem from './FeatureItem'
import './Features.css'

const Features = () => {
  return (
    <div className='feature'>
        {
            feature.map(fet => {
                return (
                <FeatureItem
                    key={fet.featureID}
                    featureID={fet.featureID}
                    featurePhoto={fet.featurePhoto}
                    featureHead={fet.featureHead}
                    featureContent={fet.featureContent} />
                )
            })
        }
    </div>
  )
}

export default Features
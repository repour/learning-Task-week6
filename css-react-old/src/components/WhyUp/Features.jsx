import React from 'react'
import feature from './feature'
import FeatureItem from './FeatureItem'

const Features = () => {
  return (
    <div>
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
import React from 'react'
import PropTypes from 'prop-types'
import './FeatureItem.css'
const FeatureItem = props => {

  return (
    <div className='feature-item'>
        <img src={props.featurePhoto} alt="featureLogo" />
        <h1>{props.featureHead}</h1>
        <p>{props.featureContent}</p>
    </div>
  )
}

FeatureItem.propTypes = {
    featureID: PropTypes.number.isRequired,
    featurePhoto: PropTypes.string.isRequired,
    featureHead: PropTypes.string.isRequired,
    featureContent: PropTypes.string.isRequired
}

export default FeatureItem
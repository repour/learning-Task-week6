import React from 'react'
import PropTypes from 'prop-types'
import './OponionItem.css'

const OponionItem = props => {

  return (
    <div className='comment'>
        <img src="./TESTIMONIALS/double-quotes.svg" alt="double-quotes" />
        <p>{props.commentContent}</p>
        <img src={props.commentPhoto} alt="profile-img" />
        <h3>{props.commentName}</h3>
        <span>{props.commentJob}</span>
    </div>
  )
}

OponionItem.propTypes = {
    commentID: PropTypes.number.isRequired,
    commentName: PropTypes.string.isRequired,
    commentPhoto: PropTypes.string.isRequired,
    commentJob: PropTypes.string.isRequired,
    commentContent: PropTypes.string.isRequired,
}

export default OponionItem
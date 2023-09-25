import React from 'react'
import PropTypes from 'prop-types'
import './LogoItem.css'

const LogoItem = (props) => {
        return (
          <div className='logo-item' style={{backgroundImage: `url(${props.categoryPhoto})`}}>
          </div>
        )
      }
      
      LogoItem.propTypes = {
          categoryID: PropTypes.number.isRequired,
          categoryPhoto: PropTypes.string.isRequired,
      }

export default LogoItem
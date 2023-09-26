import React from 'react'
import PropTypes from 'prop-types'

const FooterList = props => {
  return (
    <>
        <h4>{props.list[0]}</h4>
        <p>{props.list[1]}</p>
        <p>{props.list[2]}</p>
        <p>{props.list[3]}</p>
        <p>{props.list[4]}</p>

    </>
  )
}



export default FooterList
import './StroryLine.css'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    flex-direction: column;
    gap: 1rem;
`
const StroryLine = props => {
  return (
    <Div>
        <img src={props.storyPhoto} className={props.storyName} alt={props.storyName} />
        <p>{props.storyName}</p>
    </Div>
  )
}

StroryLine.propTypes = {
    storyID:PropTypes.number.isRequired,
    storyName:PropTypes.string.isRequired,
    storyPhoto:PropTypes.string.isRequired
}

export default StroryLine
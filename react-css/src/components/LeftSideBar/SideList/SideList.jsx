import React from 'react'
import PropTypes from 'prop-types'
import './SideList.css'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1.5rem;
    margin-bottom: 1rem;
`

const SideList = props => {
  return (
    <Div className='side-bar'>
        <img src={props.listPhoto} className={props.listName} alt={props.listName} />
        <span>{props.listName}</span>
    </Div>
  )
}

SideList.propTypes = {
    listID:PropTypes.number.isRequired,
    listName:PropTypes.string.isRequired,
    listPhoto:PropTypes.string.isRequired
}

export default SideList
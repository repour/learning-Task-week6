import React from 'react'
import PropTypes from 'prop-types'
import './ButtonItem.css'
import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    color: #5B5D67;
    border-radius: 10px;
    border: none;
    display: flex;
    margin: 0 30px;
    width: calc(100% - 4rem);
    padding: 16px;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
    cursor: pointer;
`


const ButtonItem = props => {
  return (
    <div>
        {
            (props.buttonName === "Home"
            ?
            <button className={props.buttonName}><img src={props.buttonPhoto} alt="icon" />{props.buttonName}</button>
            :
            <Button className={props.buttonName}><img src={props.buttonPhoto} alt="icon" />{props.buttonName}</Button>
        )}
        
    </div>
  )
}

ButtonItem.propTypes = {
    buttonID: PropTypes.number.isRequired,
    buttonName: PropTypes.string.isRequired,
    buttonPhoto: PropTypes.string.isRequired
}

export default ButtonItem
import React from 'react'
import './HeadBar.css'
import SearchBar from './SearchBar/SearchBar'
import styled from 'styled-components'
import User from './User/User'

const Button = styled.button`
    background: transparent;
    color: #5B5D67;
    border-radius: 10px;
    font-size: 12px;
    font-family: "Inter";
    border: none;
    display: flex;
    padding: 8px 16px;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
    cursor: pointer;
`

const HeadBar = () => {

  return (
    <div className='head-bar'>
      <div className="Buttons">
      <button>Explore</button>
      <Button>Community post</Button>
      <Button>Pages</Button>
      </div>
      <div className='left_head'>
      <SearchBar />
      <User />
      </div>

    </div>
  )
}

export default HeadBar
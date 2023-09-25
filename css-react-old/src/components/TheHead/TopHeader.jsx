import React from 'react'
import MenuList from './MenuList'
import "./TopHeader.css"


const TopHeader = () => {
  return (
    <div className='header-sec'>
        <img src="./TheHead/WavesCo.svg" alt="logo" />
        <div className='left-header'>
          <MenuList />
          <button className='log-but'>Login</button>
        </div>


    </div>
  )
}

export default TopHeader
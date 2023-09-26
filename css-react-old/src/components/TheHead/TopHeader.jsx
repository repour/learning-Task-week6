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
        <div className='left_header_tablet'>
          <img src="./TheHead/menu.svg" alt="burger-menu" />
        </div>


    </div>
  )
}

export default TopHeader
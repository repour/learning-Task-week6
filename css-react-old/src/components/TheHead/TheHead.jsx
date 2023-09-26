import React from 'react'
import TopHeader from './TopHeader'
import SearchBar from './SearchBar'
import "./TheHead.css"



const TheHead = () => {
  return (
    <div className='the-head'>
        <div className='top-header'><TopHeader /></div>  
        <h1>Free download sound effects without copyright</h1>
        <h2>Download free copyright sound effect for your YouTube video and any use.</h2>
        <div><SearchBar /></div>
        <p className='lastP'>
            650.654 Available Sounds. Library Updated Weekly. 
            <a href="#">See popular sounds</a>
        </p>

    </div>
  )
}

export default TheHead
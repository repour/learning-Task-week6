import React from 'react'
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className='search-sec'>
        <input type="text" className='search-box' placeholder='Search sound effects'/>
        <p>Try keyword: happy, funny, natural, horror, jumpscare and more</p>
    </div>
  )
}

export default SearchBar
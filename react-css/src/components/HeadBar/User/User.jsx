import React from 'react'
import './User.css'

const User = () => {

  return (
    <div className='User'>
        <img src="./HeadBar/user-profile.svg" alt="user-profile" />
        <div>
            <h4>Chandan S</h4>
            <p>@uiuxchandan</p>
        </div>
        <img src="./HeadBar/arrow-down.svg" alt="arrow-down" />
    </div>
  )
}

export default User
import React from 'react'
import './ProfileBar.css'
import ProfileOption from './ProfileOption/ProfileOption'

const ProfileBar = () => {


  return (
    <div className='profile-bar' >
      <div className='my-profile'>
        <img src="./ProfileBar/myProfile.svg" alt="myProfile" />
        <span>My Social</span>
      </div>
      <ProfileOption />
      <div className='mobile-sec'>
        <img src="./ProfileBar/myProfile.svg" alt="myProfile" />
        <h3>Stay updated with the Socially mobile app</h3>
        <a href="#">Download Now</a>
      </div>
    </div>
  )
}

export default ProfileBar
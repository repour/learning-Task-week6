import React from 'react'
import './ProfileOption.css'
import buttons from './button'
import ButtonItem from '../ButtonItem/ButtonItem'

const ProfileOption = () => {
  return (
    <div>
        {
          buttons.map(button => {
            return (
              <ButtonItem
                key={button.buttonID}
                buttonID={button.buttonID}
                buttonName={button.buttonName}
                buttonPhoto={button.buttonPhoto} />
            )
          })
        }
    </div>
  )
}

export default ProfileOption
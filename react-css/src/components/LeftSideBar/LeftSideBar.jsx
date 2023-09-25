import React from 'react'
import './LeftSideBar.css'
import contacts from './Contacts'
import suggests from './suggests'
import SideList from './SideList/SideList'

const LeftSideBar = () => {

  return (
    <div className='left-side'>
      <div className='contacts'>
        <h4>Contacts</h4>
        <div className="border"></div>
        {
          contacts.map(contact => {
            return (
              <SideList
                key={contact.contactID}
                listID={contact.contactID}
                listName={contact.contactName}
                listPhoto={contact.contactPhoto}
              />
            )
          }) 
        }
        <a href="#">View all</a>
      </div>

      <div className="suggests-page">
        <h4>Suggested pages</h4>
        <div className="border"></div>
        {
          suggests.map(suggest => {
            return (
              <SideList
                key={suggest.suggestID}
                listID={suggest.suggestID}
                listName={suggest.suggestName}
                listPhoto={suggest.suggestPhoto}
              />
            )
          })
        }
        <a href="#">View all</a>
      </div>
   
    </div>
  )
}

export default LeftSideBar
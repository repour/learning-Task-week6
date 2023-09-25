import React from 'react'
import categories from './images'
import LogoItem from './LogoItem'
import './LogoList.css'


const LogoList = () => {

  return (
    <>
    <div  className='logo-list'>
    {
      categories.map(category => {
        return (
          <LogoItem
            key={category.categoryID}
            categoryID={category.categoryID}
            categoryPhoto={category.categoryPhoto} />
        )
      })
    }
  </div>
  </>
  )
}

export default LogoList
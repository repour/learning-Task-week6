import React from 'react'
import categories from './constants'
import CategoryItem from '../CategoryItem/CategoryItem'
import './CategoryList.css';

const CategoryList = () => {
  return (
    <>
    <h2 className='category-title'>Browse by category</h2>
    <div  className='category-list'>
      {
        categories.map(category => {
          return (
            <CategoryItem
              key={category.categoryID}
              categoryID={category.categoryID}
              categoryName={category.categoryName}
              categoryPhoto={category.categoryPhoto} />
          )
        })
      }
    </div>

    <a className='category-link-to' href="#">See all categories</a>
    </>
  )
}


export default CategoryList
import React from 'react'
import PropTypes from 'prop-types'
import './CategoryItem.css';

const CategoryItem = props => {
  return (
    <div className='category-item' style={{backgroundImage: `url(${props.categoryPhoto})`}}>
        <span className='category-item-text'>{props.categoryName}</span>
    </div>
  )
}

CategoryItem.propTypes = {
    categoryID: PropTypes.number.isRequired,
    categoryName: PropTypes.string.isRequired,
    categoryPhoto: PropTypes.string.isRequired,
}

export default CategoryItem
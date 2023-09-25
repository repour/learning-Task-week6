import './PostItem.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1rem;
`
const PostItem = props => {

  const [cmnt, setCmnt] = useState("")

  const onChangeHandler = evt => setCmnt(evt.target.value)

  return (
    <div>
      <div>
        <Div>
          <img src={props.postPhoto} alt="profile-img" />
          <div>
            <p>{props.postName}</p>
            <span>{props.postTime}</span>
          </div>
        </Div>
        <img src="./PostsSection/02/more.svg" alt="" />
      </div>
      <p></p>
      <div></div>
      <Div>
        <img src='./PostsSection/CreatePost/Profile.svg' alt="profile-img" />
        <input name='comment' className='comment' value={cmnt} placeholder='Write your comment' onChange={onChangeHandler} />
      </Div>
    </div>
  )
}

PostItem.propTypes = {
    postID: PropTypes.number.isRequired,
    postName: PropTypes.string.isRequired,
    postPhoto: PropTypes.string.isRequired,
    postTime: PropTypes.string.isRequired,
    postContent: PropTypes.string.isRequired,
    postLike: PropTypes.string.isRequired,
    postComment: PropTypes.string.isRequired
}

export default PostItem
import './PostItem.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 0.5rem;
`
const PostItem = props => {

  const [cmnt, setCmnt] = useState("")

  const onChangeHandler = evt => setCmnt(evt.target.value)

  return (
    <div className='post-wrapper'>
      <div className='head-post'>
        <Div>
          <img src={props.postPhoto} alt="profile-img" />
          <div>
            <p>{props.postName}</p>
            <span>{props.postTime}</span>
          </div>
        </Div>
        <img src="./PostsSection/02/more.svg" alt="" />
      </div>
      <p className='content'>{props.postContent}</p>
      {
        props.postMedia
          ?
          <img src={props.postMedia} className='media-post' alt="post-media" />
          :
          null
      }

      <div className='post-action'>
        <Div>
          <img src="./PostsSection/02/heart.svg" alt="" />
          <span>{props.postLike}</span>
          <img src="./PostsSection/02/comment.svg" alt="" />
          <span>{props.postComment}</span>
        </Div>
        <div className='share-post'>
          <img src="./PostsSection/02/forward.svg" alt="" />
          <span>Share</span>
        </div>
      </div>
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
  postMedia: PropTypes.string.isRequired,
  postLike: PropTypes.string.isRequired,
  postComment: PropTypes.string.isRequired
}

export default PostItem
import './PostList.css'
import React from 'react'
import PropTypes from 'prop-types'
import PostItem from './postItem/postItem'


const PostList = props => {
  const { posts = [] } = props

  return (
    <div>
      {

        posts.map(post => {
          return (
            <PostItem
              key={post.postID}
              postID={post.postID}
              postName={post.postName}
              postPhoto={post.postPhoto}
              postTime={props.postTime}
              postContent={props.postContent}
              postLike={props.postLike}
              postComment={props.postComment} />
          )
        })
      }
    </div>
  )
}



PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      postID: PropTypes.number.isRequired,
      postName: PropTypes.string.isRequired,
      postPhoto: PropTypes.string.isRequired,
      postTime: PropTypes.string.isRequired,
      postContent: PropTypes.string.isRequired,
      postLike: PropTypes.string.isRequired,
      postComment: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default PostList
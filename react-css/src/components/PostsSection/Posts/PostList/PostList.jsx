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
              postTime={post.postTime}
              postContent={post.postContent}
              postMedia={post.postMedia}
              postLike={post.postLike}
              postComment={post.postComment} />
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
      postMedia: PropTypes.string.isRequired,
      postLike: PropTypes.string.isRequired,
      postComment: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default PostList
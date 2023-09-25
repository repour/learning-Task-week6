import './Posts.css'
import React, { useState } from 'react'
import PostList from './PostList/PostList'
import CreatePost from './CreatePost/CreatePost'
import postsList from './PostList/oldPosts'
const Posts = () => {
  const [posts, setPosts] = useState([...postsList])
  const [nextId, setNextId] = useState(postsList.length + 1)


  const addPost = (content, media) => {

    setPosts(
      [
        {
          postID: nextId,
          postPhoto: './PostsSection/CreatePost/Profile.svg',
          postName: 'Chandan S',
          postTime: 'now',
          postContent: content,
          postMedia: media,
          postLike: '0 Likes',
          postComment: '0 Comments'
        },
        ...posts
      ]
    )
    setNextId(nextId + 1)

  }
  
  
  
  
  
  return (
    <div>
      <CreatePost addPost={addPost}/>
      <PostList posts={posts}/>

    </div>
  )
}

export default Posts
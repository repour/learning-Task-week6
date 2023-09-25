import React from 'react'
import stories from './stories'
import StroryLine from './StroryLine/StroryLine'
import Posts from './Posts/Posts'
import './PostsSection.css'

const PostsSection = () => {
  return (
    <div className='posts-sec'>
      <div className='story-line'>
        {
          stories.map(story =>{
            return(
            <StroryLine 
            key={story.storyID}
            storyID={story.storyID}
            storyName={story.storyName}
            storyPhoto={story.storyPhoto}
            />
            )
          })
        }
      </div>

      <Posts />
    </div>
  )
}

export default PostsSection
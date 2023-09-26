import React from 'react'
import comments from './comments'
import OponionItem from './OponionItem'
import './Oponions.css'
const Oponions = () => {
  return (
    <div className='oponions'>
        {
            comments.map(comment =>{
                return(
                    <OponionItem
                        key={comment.commentID}
                        commentID={comment.commentID}
                        commentName={comment.commentName}
                        commentPhoto={comment.commentPhoto}
                        commentJob={comment.commentJob}
                        commentContent={comment.commentContent} />
                )
            })
        }
 
    </div>
  )
}

export default Oponions
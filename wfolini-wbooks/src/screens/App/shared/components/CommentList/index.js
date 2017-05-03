import React from 'react'
import AddComment from '../AddComment'
import Comment from '../Comment'
import './style.css'

const CommentList = (props) =>
  <div className="commentlist-container">
    <h1 className="commentlist-title">Commentarios</h1>
    <div className="commentlist-comments">
      {props.allowAddComment && <AddComment/>}
      {props.commentlist.map(comment =>
        <Comment key={comment.id} comment={comment.text}/>)}
    </div>
  </div>

export default CommentList

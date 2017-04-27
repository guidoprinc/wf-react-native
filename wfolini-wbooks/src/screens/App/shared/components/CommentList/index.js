import React from 'react'
import { AddComment, Comment } from '../Comment'
import './style.css'

class CommentList extends React.Component {
  render () {
    let commentList = this.props.commentlist;
    return(
      <div className="commentlist-container">
        <h1 className="commentlist-title">Commentarios</h1>
        <div className="commentlist-comments">
          {this.props.allowAddComment && <AddComment/>}
          {commentList.map(comment =>
            <Comment key={comment.id} comment={comment.text}/>)}
        </div>
      </div>
    );
  }
}

export default CommentList;

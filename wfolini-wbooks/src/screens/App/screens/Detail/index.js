import React from 'react'
import { Link } from 'react-router-dom'
import { COMMENT } from '../../../../constants'
import BookDetail from '../../shared/components/BookDetail'
import CommentList from '../../shared/components/CommentList'
import Suggestions from './components/Suggestions'
import './style.css'

class Detail extends React.Component {
  state = {
    commentsList: [
      {
        id: 1,
        text: COMMENT
      },
      {
        id: 2,
        text: COMMENT
      },
      {
        id: 3,
        text: COMMENT
      }
    ]
  };
  render(){
    return (
      <div>
        <Link className='linkback' to={`/dashboard`}>
          {"< Volver"}
        </Link>
        <div className="bookdetail-detail">
          <BookDetail book={this.props.book}/>
          <div className="separator"/>
          <Suggestions/>
          <div className="separator"/>
          <CommentList allowAddComment={true}
            commentlist={this.state.commentsList}/>
        </div >
      </div>
    )
  }
}

export default Detail

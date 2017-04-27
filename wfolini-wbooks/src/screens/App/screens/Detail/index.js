import React from 'react'
import booksJson from '../../data/books.json'
import { COMMENT } from '../../../../constants'
import { BookDetail } from '../../shared/components/Book'
import CommentList from '../../shared/components/CommentList'
import Suggestions from './components/Suggestions'
import './style.css'

class Detail extends React.Component {
  state = {
    bookList: booksJson,
    // Test values
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
      <div className="bookdetail-screen">
        <BookDetail book={this.state.bookList[0]}/>
        <separator className="separator"/>
        <Suggestions/>
        <separator className="separator"/>
        <CommentList allowAddComment={true}
          commentlist={this.state.commentsList}/>
      </div >
    )
  }
}

export default Detail

import React from 'react'
import Book from '../../../../components/Book'
import './style.css';

class BookList extends React.Component{
  render(){
    let bookList = this.props.books;
    return(
      <div className="booklist">
        {bookList.map(book =>
          <Book key={book.id} book={book}/> )}
      </div>
    );
  }
}

export default BookList;

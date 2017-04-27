import React from 'react'
import { Link } from 'react-router-dom'
import { Book } from '../../../../shared/components/Book'
import './style.css';

const BookList = (props) => {
  let bookList = props.books;
  return (
    <div className="books">
      {bookList.map(book =>
        <Link className='link' to={`/book/id=${book.id}`} key={book.id}>
          <Book book={book}/>
        </Link>)
      }
    </div>
  )
}

export default BookList

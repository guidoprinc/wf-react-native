import React from 'react'
import defaultBookSvg from '../../../assets/default_book.svg'
import { BOOKDESCRIPTION } from '../../../../../constants'
import './style.css'

const Book = (props) =>
  <div className="book">
    <image className="booklogo">
      <img src={defaultBookSvg} alt="default-book" />
    </image>
    <h1 className="booktitle">{props.book.title}</h1>
    <p className="bookautor">{props.book.author}</p>
  </div>

const BookDetail = (props) =>
  <div className="book-detail">
    <image className="booklogo-detail">
      <img className="bookimg" src={defaultBookSvg} alt="default-book" />
    </image>
    <div className="bookinformation">
      <booktitle className="booktitle-detail">{props.book.title}</booktitle>
      <autor className="bookautor-detail">{props.book.author}</autor>
      <year className="bookother-detail">{props.book.year}</year>
      <thematic className="bookother-detail">{props.book.genre}</thematic>
      <p className="bookdescription-detail">{BOOKDESCRIPTION}</p>
      <div>
        <button className="actionbutton">Alquilar</button>
      </div>
    </div>
  </div>


class BookIcon extends React.Component {
  render () {
    return(
      <div className="book-icon">
        <image className="booklogo-icon">
          <img className="bookimg" src={defaultBookSvg} alt="default-book" />
        </image>
      </div>
    )
  }
}

export {Book, BookDetail, BookIcon}

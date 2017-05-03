import React from 'react'
import defaultBookSvg from '../../../assets/default_book.svg'
import { BOOKDESCRIPTION } from '../../../../../constants'
import './style.css'

const BookDetail = (props) =>
  <div className="book-detail">
    <image className="booklogo-detail">
      <img className="bookimg" src={defaultBookSvg} alt="default-book" />
    </image>
    <div className="bookinformation">
      <div className="booktitle-detail">{props.book.title}</div>
      <div className="bookautor-detail">{props.book.author}</div>
      <div className="bookother-detail">{props.book.year}</div>
      <div className="bookother-detail">{props.book.genre}</div>
      <p className="bookdescription-detail">{BOOKDESCRIPTION}</p>
      <div>
        <button className="actionbutton">Alquilar</button>
      </div>
    </div>
  </div>

export default BookDetail

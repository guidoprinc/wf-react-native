import React from 'react'
import defaultBookSvg from '../../../assets/default_book.svg'
import './style.css'

const Book = (props) =>
  <div className="book">
    <image className="booklogo">
      <img src={defaultBookSvg} alt="default-book" />
    </image>
    <h1 className="booktitle">{props.book.title}</h1>
    <p className="bookautor">{props.book.author}</p>
  </div>

export default Book

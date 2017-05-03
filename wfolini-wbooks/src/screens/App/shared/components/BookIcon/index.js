import React from 'react'
import defaultBookSvg from '../../../assets/default_book.svg'
import './style.css'

const BookIcon = (props) =>
  <div className="book-icon">
    <image className="booklogo-icon">
      <img className="bookimg" src={defaultBookSvg} alt="default-book" />
    </image>
  </div>

export default BookIcon

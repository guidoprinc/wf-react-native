import React from 'react'
import peronimg from '../../../images/peron.jpg'
import './style.css'

const Comment = (props) =>
  <div className="comment-container">
    <img className="profile-img" alt="profile img" src={peronimg}/>
    <div className="comment-detail">
      <h1 className="comment-title">Walter Folini</h1>
      <h2 className="date">xx/xx/xx</h2>
      <p className="text">{props.comment}</p>
    </div>
  </div>

export default Comment

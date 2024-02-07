import React from 'react'
import './WishListListItem.css'
const WishListListItem = ({bookTitle, username}) => {
  return (
      <div className="wishlistlistitem-container">
      <p className='book-title'>{bookTitle}</p>
      <div className="username-head">
        {username.map(item => <p className='book-username'>{item} </p>)}
      </div>
      </div>
  )
}

export default WishListListItem
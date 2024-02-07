import React from 'react'
import './RentListItem.css'
const RentListItem = ({bookTitle, username}) => {
  return (
    <>
    <div className="rentlistitem-container">
        <p className='book-title'>{bookTitle}</p>
        <p className='book-username'>{username}</p>
    </div>
    </>
  )
}

export default RentListItem
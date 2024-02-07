import {React, useState} from 'react'
import './Rented.css'
import Navbar from '../../Components/Navbar/Navbar'
import Item from '../../Components/Item/Item'

const Rented = ({loggedInUser, setLoggedInUser, removeLoggedInUser, bookDetails, setbookDetails}) => {
  const [searchValue, setsearchValue] = useState('')
  return (
    <>
    <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser} setsearchValue={setsearchValue}/>
    <div className="wishlist-container">
      {
        bookDetails.filter(item => (item.rented == loggedInUser && (searchValue == '' || item.title.toLowerCase().includes(searchValue.toLowerCase())))).map(item =>
        <Item loggedInUser={loggedInUser} item={item} bookDetails={bookDetails} setbookDetails={setbookDetails} btn1={"Remove"} btn1Comp={"Remove"} btn2={"Wishlist"} btn2Comp={"Wishlisted"}/>)
      }
    </div>
    </>
  )
}

export default Rented
import {React, useState} from 'react'
import './Wishlist.css'
import Navbar from '../../Components/Navbar/Navbar'
import Item from '../../Components/Item/Item'
const Wishlist = ({loggedInUser, setLoggedInUser, removeLoggedInUser, bookDetails, setbookDetails}) => {
  const [searchValue, setsearchValue] = useState('')
  return (
    <>
    <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser} setsearchValue={setsearchValue}/>
    <div className="wishlist-container">
      
    {bookDetails.filter(item => item.wishlist.includes(loggedInUser.username) && (searchValue == '' || item.title.toLowerCase().includes(searchValue.toLowerCase()))).map(newitem => <Item loggedInUser={loggedInUser} item={newitem} bookDetails={bookDetails} setbookDetails={setbookDetails} btn1={"Rent"} btn1Comp={"Rented"} btn2={"Wishlist"} btn2Comp={"Remove"}/>)}

    </div>
    </>
  )
}

export default Wishlist
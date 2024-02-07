import {React, useState} from 'react'
import './WishListList.css'
import WishListListItem from '../../Components/WishListListItem/WishListListItem'
import Navbar from '../../Components/Navbar/Navbar'
const WishListList = ({loggedInUser,setLoggedInUser, removeLoggedInUser, bookDetails, setbookDetails}) => {
    const [searchValue, setsearchValue] = useState('')
  return (
    <>
    <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser} setsearchValue={setsearchValue}/>
    <div className="wishlistlist-body-container">
        <div className="wishlistlist-container">
            <WishListListItem bookTitle={"Book Title"} username={["Usernames"]}/>
            {bookDetails.map(item => {
              return item.wishlist.length != 0 ? <WishListListItem bookTitle={item.title} username={item.wishlist}/> : <></>
            })}
        </div>
    </div>
    </>
  )
}

export default WishListList
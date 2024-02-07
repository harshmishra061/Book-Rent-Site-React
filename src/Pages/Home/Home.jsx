import {React, useState} from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Item from '../../Components/Item/Item'
import Wishlist from '../Wishlist/Wishlist'
const Home = ({loggedInUser, setLoggedInUser, removeLoggedInUser, bookDetails, setbookDetails}) => {
  const [searchValue, setsearchValue] = useState('');
  return (
    <>
      <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser} setsearchValue={setsearchValue}/>
      {searchValue}
      <div className="allItems">
        {
          bookDetails.filter(item => ((item.rented === null || item.rented.username == loggedInUser.username || loggedInUser.username === "admin@gmail.com") && (searchValue == '' || item.title.toLowerCase().includes(searchValue.toLowerCase())))).map(item => <Item loggedInUser={loggedInUser} item={item} bookDetails={bookDetails} setbookDetails={setbookDetails} btn1={"Rent"} btn1Comp={"Rented"} btn2={"Wishlist"} btn2Comp={"Wishlisted"}/>)
        }
      </div>
    </>
    
  )
}

export default Home
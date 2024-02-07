import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './Pages/LoginPage/LoginPage'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route, redirect} from 'react-router-dom'
import Wishlist from './Pages/Wishlist/Wishlist'
import Rented from './Pages/Rented/Rented'
import Home from './Pages/Home/Home'
import NewItem from './Pages/NewItem/NewItem.jsx'
import bookDetailsJs from '../src/assets/bookDetails.json'
import RentList from './Pages/RentList/RentList.jsx'
import WishListList from './Pages/WishListList/WishListList.jsx'
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [bookDetails, setbookDetails] = useState(bookDetailsJs);
  const removeLoggedInUser = ()=>{
    setLoggedInUser(null);
  }
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser} bookDetails={bookDetails} setbookDetails={setbookDetails}/>} />
      <Route path="/wishlist" element={<Wishlist loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser} bookDetails={bookDetails} setbookDetails={setbookDetails}/>} />
      <Route path="/rent" element={<Rented loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser} bookDetails={bookDetails} setbookDetails={setbookDetails}/> } />
      <Route path="/home" element={<Home loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser} bookDetails={bookDetails} setbookDetails={setbookDetails}/>} />
      <Route path="/newitem" element={<NewItem loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser} bookDetails={bookDetails} setbookDetails={setbookDetails}/>} />    
      <Route path="/rentlist" element={<RentList loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser} bookDetails={bookDetails} setbookDetails={setbookDetails}/>} />    
      <Route path="/wishlistlist" element={<WishListList loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser} bookDetails={bookDetails} setbookDetails={setbookDetails}/>} />    
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

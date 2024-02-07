import {React, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = ({loggedInUser, setLoggedInUser, removeLoggedInUser, setsearchValue}) => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          {loggedInUser.username !== 'admin@gmail.com' ? (
            <>
            <li className="nav-item">
            <Link to="/rent" className="nav-link">Rented</Link>
            </li>
            <li className="nav-item">
            <Link to="/wishlist" className="nav-link">Wishlisted Books</Link>
          </li>
            </>
          ) : <></>}



          {loggedInUser.username === 'admin@gmail.com' ? (
          <li className="nav-item">
            <Link to="/newitem" className="nav-link">Add New Book</Link>
          </li>) : (<></>)}

          {loggedInUser.username === 'admin@gmail.com' ? (
          <li className="nav-item">
            <Link to="/rentlist" className="nav-link">RentList</Link>
          </li>) : (<></>)}

          {loggedInUser.username === 'admin@gmail.com' ? (
          <li className="nav-item">
            <Link to="/wishlistlist" className="nav-link">Wishlist List</Link>
          </li>) : (<></>)}

        </ul>
        <div className="search-box">
          <input type="text" placeholder="Search..." onChange={(e)=>setsearchValue(e.target.value)}/>
        </div>
        <Link to="/"><button type="button" className="signout-button" onClick={removeLoggedInUser}> Signout </button></Link>
      </div>
    </div>
  )
}

export default Navbar
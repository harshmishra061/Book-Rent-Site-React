import {React, useState} from 'react'
import './Item.css'
const Item = ({loggedInUser, item, bookDetails, setbookDetails, btn1, btn1Comp, btn2, btn2Comp}) => {
    const handleRentClick = () => {
      console.log("handling rent");
      const newbookDetails = bookDetails.map(curritem =>{
        if(curritem === item) {
          return {...item, rented : loggedInUser}
        }
        return curritem;
      });
      setbookDetails(newbookDetails);
    };

   const handleWishlistClick = ()=> {
      const newbookDetails = bookDetails.map(curritem =>{
        if(curritem === item) {
          const newwishlist = curritem.wishlist;
          newwishlist.push(loggedInUser.username);
          return {...curritem, wishlist : newwishlist}
        }
        return curritem;
      });
      setbookDetails(newbookDetails);
      console.log(newbookDetails);
   };
    
    const handleWishlistedClick = () => {
      const newbookDetails = bookDetails.map(curritem =>{
        if(curritem === item) {
          const newwishlist = curritem.wishlist.filter((username) => username != loggedInUser.username);
          return {...curritem, wishlist : newwishlist}
        }
        return curritem;
      });
      setbookDetails(newbookDetails);
      console.log(newbookDetails);
    };

    const handleRemovePermanently = ()=> {
      const newbookDetails = bookDetails.filter((curritem) => curritem !== item);
      setbookDetails(newbookDetails);
    };
    
    const handleRentedClick = ()=> {
      const newbookDetails = bookDetails.map(curritem =>{
        if(curritem === item) {
          return {...item, rented : null}
        }
        return curritem;
      });
      setbookDetails(newbookDetails);
    };

      return (
        <div className="tile-container">
          <div className="tile">
            <h2 className="title">{item.title}</h2>
            <h3 className="subtitle">{item.subtitle}</h3>
            <p className="author">By {item.author}</p>
            <p className="description">{item.description}</p>
            <div className="buttons">
              {loggedInUser.username !== "admin@gmail.com" ? ((!item.rented) ? <button onClick={handleRentClick} className='rent-button'>{btn1}</button> : <button onClick={handleRentedClick} className='rented-button'>{btn1Comp}</button>) : <></>}
              {loggedInUser.username !== "admin@gmail.com" ? ((!item.wishlist.includes(loggedInUser.username)) ? <button onClick={handleWishlistClick} className='wishlist-button'>{btn2}</button> : <button onClick={handleWishlistedClick} className='wishlisted-button'>{btn2Comp}</button>) : <></>}
              {loggedInUser.username === "admin@gmail.com" ? <button onClick={handleRemovePermanently} className='remove-permanently'>Remove Permanently</button> : <></>}
            </div>
          </div>
        </div>
      );
}

export default Item
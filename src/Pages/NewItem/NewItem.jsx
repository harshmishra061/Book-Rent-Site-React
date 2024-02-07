import React, { useState } from 'react'
import './NewItem.css'
import Navbar from '../../Components/Navbar/Navbar';
const NewItem = ({loggedInUser, setLoggedInUser, removeLoggedInUser, bookDetails, setbookDetails}) => {

  const [object, setobject] = useState({
    title : "", 
    subtitle : "",
    author : "",
    description : ""
  });

  const insertIntoBooks = ()=>{
    let id = bookDetails.length + 1;
    setbookDetails([...bookDetails, {id : id, rented : null, wishlist : [], ...object}]);
    console.log(bookDetails);
    console.log(loggedInUser.username);
    alert("Data Saved Successfully");
  }

  return (
    <>
    <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser}/>
    <div className="body-container">
    <div className='newitem-container'>
      <section className='newitem-section'>
        <label className='newtime-label'>Title : </label>
        <input type="text" className='newitem-input' value={object.title} onChange={(e)=>setobject({...object, title : e.target.value})}/>
      </section>
      <section className='newitem-section'>
        <label className='newtime-label'>Subtitle : </label>
        <input type="text" className='newitem-input' value={object.subtitle} onChange={(e)=>setobject({...object, subtitle : e.target.value})}/>
      </section>
      <section className='newitem-section'>
        <label className='newtime-label'>Author : </label>
        <input type="text" className='newitem-input' value={object.author} onChange={(e)=>setobject({...object, author : e.target.value})}/>
      </section>
      <section className='newitem-section'>
        <label className='newtime-label'>Description : </label>
        <textarea value={object.description} onChange={(e)=>setobject({...object, description : e.target.value})}/>
      </section>
      <button className='newitem-submit-button' onClick={insertIntoBooks}> Submit </button>
    </div>
    </div>
    </>
  )
}

export default NewItem
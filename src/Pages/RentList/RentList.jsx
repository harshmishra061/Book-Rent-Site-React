import {React, useState} from 'react'
import './RentList.css'
import RentListItem from '../../Components/RentListItem/RentListItem'
import Navbar from '../../Components/Navbar/Navbar'
const RentList = ({loggedInUser,setLoggedInUser, removeLoggedInUser, bookDetails, setbookDetails}) => {
  const [searchValue, setsearchValue] = useState('');
  return (
    <>
        <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser} setsearchValue={setsearchValue}/>
        {console.log(loggedInUser)}
        <div className="rentlist-body-container">
            <div className="rentlist-container">
                <RentListItem bookTitle={"Book Title"} username={"Username"}/>
                {bookDetails.map(item => item.rented != null ? <RentListItem bookTitle={item.title} username={item.rented.username}/> : <></>)}
            </div>

        </div>
    </>
  )
}

export default RentList
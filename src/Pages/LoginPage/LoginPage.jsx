import React, { useState } from 'react'
import './LoginPage.css'
import Home from '../Home/Home';

const users = [
  { username: 'beth@gmail.com', password: 'beth', id : '1'},
  { username: 'alice@gmail.com', password: 'alice', id : '2'},
  { username: 'admin@gmail.com', password: 'admin', id : '3'},
];
const LoginPage = ({loggedInUser, setLoggedInUser, removeLoggedInUser, bookDetails, setbookDetails}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      setLoggedInUser(user);
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>  
      {loggedInUser ? <Home loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} removeLoggedInUser={removeLoggedInUser} bookDetails={bookDetails} setbookDetails={setbookDetails}/> : (<div className="login-body">
      <div className="container-login">
          <section className="username">
              <label htmlFor="">Username : </label>
              <input type="text" placeholder="Username" value={username} onChange = {(e) => setUsername(e.target.value)}/>
          </section>
          <section className="password">
              <label htmlFor="">Password : </label>
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </section>

          <button className="submit" onClick={handleLogin}>Login</button>
      </div>
    </div>)}
    </div>
  )
}

export default LoginPage
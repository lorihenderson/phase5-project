import React from 'react';
import { Link, useNavigate } from 'react-router-dom' 

function NavBar({currentUser, setCurrentUser}) {

  const navigate = useNavigate();

  function clickLogout() {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(res => {
      if(res.ok) {
        setCurrentUser(false)
        navigate('/signup')
      }
    })
  }

  return (

    <>
      <nav>
        <ul className='navbar'>
          <li>
            <Link to='/'>Socials</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            {/* <Link to="/login">Login</Link> */}
            {currentUser ? null : <Link to="/login">Login</Link> }
          </li>
          <li>
            {/* <Link to="/signup">Signup</Link> */}
            {currentUser ? null : <Link to="/signup">Signup</Link> }
          </li>
          <li>
            {currentUser ? <Link to="/profile">My Profile</Link> : null }
            {/* <Link to="/profile">My Profile</Link> */}
          </li>
          <li>
            {currentUser ? <Link to="/logout" onClick={clickLogout}>Logout</Link> : null }
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar;
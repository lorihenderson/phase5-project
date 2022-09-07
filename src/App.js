import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import Home from './components/Home';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import SignUpForm from './components/SignUpForm';
import UserProfile from './components/UserProfile';
import Card from './components/Card';
import Social from './components/Social';

function App() {

  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetch('/user_authorized')
    .then((res) => res.json())
    .then((user) => setCurrentUser(user))
  }, [])

  return (
    <div className="App">

      <BrowserRouter>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />

      <Routes>

        <Route path="/" element={<Social />} />

        <Route index path="/home" element={<Home currentUser={currentUser} />}  />

        <Route path="/login" element={<LoginForm setCurrentUser={setCurrentUser} />} />

        <Route path="/signup" element={<SignUpForm />}  />

        <Route path="/profile" element={<UserProfile currentUser={currentUser} />} />
        {/* <Card /> */}
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

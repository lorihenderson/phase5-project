import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


function LoginForm({ setCurrentUser }) {

  const navigate = useNavigate();

    const [formData, setFormData] = useState({ 
      username: "", 
      password: "" 
    });

    const { username, password } = formData;

    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setFormData({ ...formData, [name]: value });
    };

    function handleSubmit(e) {   
      e.preventDefault();

      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((user) => {
          setCurrentUser(user)
          navigate("/home")
        });
    }
  
    return (
        <div className="content-container">
          <h2> Welcome back! </h2>

          <form className="form" onSubmit={handleSubmit}>

            <label htmlFor="usernameInput">Username: </label>
            <input type="text" className="form-control" id="usernameInput" placeholder="Enter your username" name="username" value={username} onChange={handleChange} />

            <label htmlFor="passwordInput">Password: </label>
            <input type="password" className="form-control" id="passwordInput" placeholder="Password" name="password" value={password} onChange={handleChange} />

            <button type="submit" className="btn"> Login here! </button>
    
          </form>

        </div>
    );        
  }

export default LoginForm;
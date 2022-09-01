import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    f_name: "",
    l_name: "",
    bio: "",
  });
  const { username, password, f_name, l_name, bio } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then( (res) => {
        if (res.ok) {
          res.json().then( (user) => {
            navigate("/login");
          });
        } else {
          res.json().then((json) => alert(json.errors));
        }
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h2> Welcome to Trivia Shack! </h2>
      <h4> Please sign up if you haven't made an account already. </h4>
      <h4>
        Already have an account? Click <a href={"/login"}> here </a> to log in.
      </h4>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="f_name">First name: </label>
        <input
          type="text"
          name="f_name"
          placeholder="First name"
          value={f_name}
          onChange={handleChange}
        />

        <label htmlFor="l_name">Last name: </label>
        <input
          type="text"
          name="l_name"
          placeholder="Last name"
          value={l_name}
          onChange={handleChange}
        />

        <label htmlFor="bio">Enter Bio: </label>
        <input
          type="text"
          name="bio"
          placeholder=""
          value={bio}
          onChange={handleChange}
        />

        <label htmlFor="usernameInput">Username: </label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={handleChange}
        />

        <label htmlFor="passwordInput">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />

        <button type="submit" className="btn">
          Sign up!
        </button>
      </form>
    </>
  );
}

export default SignUpForm;

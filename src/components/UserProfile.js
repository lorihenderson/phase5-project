import React, { useState, useEffect } from "react";
// import Card from './Card';

function UserProfile({currentUser}) {
  const [userProfile, setUserProfile] = useState("");

  useEffect(() => {
    fetch("/profile")
      .then((res) => res.json())
      .then((data) => setUserProfile(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userProfile }),
    });
  };

  const handleChange = (e) => {
    setUserProfile(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch('/profile', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( { userProfile })
    })
        .then(res => res.json())
        .then((data) => console.log(data))
  }

  return (
    <>
        <h2>Hello, {currentUser.username}!</h2>
        <h3>First name: {currentUser.f_name}</h3>
        <h3>Last name: {currentUser.l_name}</h3>
        <h3>Bio: {currentUser.bio}</h3>
        <h4>{currentUser.fact}</h4>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="bioField"> My bio </label>
        <br />
        <textarea
          text="text"
          className="user-trivia"
          type="text"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit bio</button>
      </form>
      {/* <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="bioField"> Update bio </label>
        <br />
        <textarea
          text="text"
          className="user-trivia"
          type="text"
          onChange={handleUpdate}
        />
        <br />
        <button type="submit">Update bio</button>
      </form> */}
    </>
  );
}

export default UserProfile;

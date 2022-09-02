import React, { useState, useEffect } from "react";
// import Card from './Card';

function UserProfile() {
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

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="bioField"> My bio </label>
        <br />
        <input
          text="text"
          className="user-trivia"
          type="text"
          onChange={handleChange}
        />
        <br />
        <button>Submit bio</button>
      </form>
    </>
  );
}

export default UserProfile;

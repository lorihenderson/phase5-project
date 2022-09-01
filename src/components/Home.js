import React, { useState, useEffect } from "react";

function Home({currentUser}) {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ category_id: "", fact: "" });

  const { category_id, fact } = formData;

  useEffect(() => {
    fetch("/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/posts", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((post) => setFormData(post));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const allCats = categories.map( (category) => (<option>{category.topic}</option> ))

  console.log(categories)
  return (
    <>
     { currentUser ?  <div>Welcome, {currentUser.username}!</div> : null }

      <form className="form" onSubmit={handleSubmit}>
        <select name="category_id" onChange={handleChange} value={category_id}>
          <option defaultValue="Select Category">Select category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.topic}
            </option>
          ))}

          {/* { categories.map( (allCats) => (<option>{allCats[category.topic]}</option>)) } edited? */}
        </select>

        <div className="fact-field">
          <label htmlFor="factField"> Enter trivia fact: </label>
          <input
            type="text"
            className="form-control"
            id="factField"
            placeholder=""
            name="fact"
            value={fact}
            onChange={handleChange}
          />
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Submit trivia fact
          </button>
        </div>
      </form>
    </>
  );
}

export default Home;

import React, { useEffect, useState } from 'react'

function RandomFacts() {
    const [randomFact, setRandomFact] = useState("");

    useEffect(() => { // idk if i need this
        fetch("/posts")
        .then((res) => res.json())
        .then((json) => setRandomFact(json))
    }, [])

    const handleChange = (e) => {
        e.preventDefault();

    }
// i would just be GETting random facts from the seed file so I don't need to use POST
// if I can't randomize facts through seeds.rb, then I can probably do it all on frontend
// I would probably use `/posts/${id}` to get an ID of a random fact

  return (
    <div>
        Click here to randomize a fact.
        <br/>
        <button type="submit" onClick={handleChange}>Randomize Me!</button>
    </div>
  )
}

export default RandomFacts
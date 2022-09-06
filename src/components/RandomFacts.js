import React, { useEffect, useState } from 'react'

function RandomFacts() {
    // const [randomFact, setRandomFact] = useState("");

    // useEffect(() => { // idk if i need this
    //     fetch("/posts")
    //     .then((res) => res.json())
    //     .then((json) => setRandomFact(json))
    // }, [])

    // const handleChange = (e) => {
    //     e.preventDefault();

    // }
// i would just be GETting random facts from the seed file so I don't need to use POST
// if I can't randomize facts through seeds.rb, then I can probably do it all on frontend
// I would probably use `/posts/${id}` to get an ID of a random fact




const [randomFact, setRandomFact] = useState([])

const generateRandomFact = () => {

        const triviaFacts= ["Hephaestus is the Greek god of sculpture.", "John Legend has 10 Grammys.", "Suriname is the smallest sovereign state in South America.", "Katniss Everdeen comes from the Twelfth District in Panem.", "Rhyme and Reason are the adoptive daughters of the King of Wisdom in The Phantom Tollbooth.", "The Code of Hammurabi is the earliest known system of laws.", "Australia was settled by Britain as a prison colony in 1788.", "The thunderbird is a legendary creature  from Native American tradition.", "Soft-serve ice cream involves increasing the amount of air.", "Alexander Fleming discovered penicilin.", "Tiger Woods was 21 when he won the Masters.", "Walt Disney created Oswald the Lucky Rabbit." ]

        const randomFact = Math.floor(Math.random() * triviaFacts.length)
        const item = triviaFacts[randomFact]
        console.log(triviaFacts[randomFact])
        // return item
        
        setRandomFact(item)
    }

    // const handleClick = () => {
    //     setRandomFact()
    // }
    // useEffect(() => {

    // })


  return (
    <div>
        <br/>
        <h3>Click here to randomize a fact.</h3>
        {/* <br/> */}
        <h4>{randomFact}</h4>
        <button type="submit" onClick={generateRandomFact}>Randomize Me!</button>
    </div>
  )
}

export default RandomFacts
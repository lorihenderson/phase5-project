import React, { useState } from 'react'

function RandomFacts() {

    const [randomFact, setRandomFact] = useState([])

    const generateRandomFact = () => {

        const triviaFacts= ["Hephaestus is the Greek god of sculpture.", "John Legend has 10 Grammys.", "Suriname is the smallest sovereign state in South America.", "Katniss Everdeen comes from the Twelfth District in Panem.", "Rhyme and Reason are the adoptive daughters of the King of Wisdom in The Phantom Tollbooth.", "The Code of Hammurabi is the earliest known system of laws.", "Australia was settled by Britain as a prison colony in 1788.", "The thunderbird is a legendary creature  from Native American tradition.", "Soft-serve ice cream involves increasing the amount of air.", "Alexander Fleming discovered penicilin.", "Tiger Woods was 21 when he won the Masters.", "Walt Disney created Oswald the Lucky Rabbit." ]

        const randomFact = Math.floor(Math.random() * triviaFacts.length)
        const item = triviaFacts[randomFact]
        
        setRandomFact(item)
    }

  return (
    <div>
        <br/>
        <h3>Click here to randomize a fact.</h3>
        <h4>{randomFact}</h4>
        <button type="submit" onClick={generateRandomFact}>Randomize Me!</button>
    </div>
  )
}

export default RandomFacts
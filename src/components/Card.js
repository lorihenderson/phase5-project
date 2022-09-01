import React , { useState } from 'react';

function Card() {

    const [f_name, setFName ] = useState("Lori")
    const [l_name, setLName ] = useState("Henderson")
    const [bio, setBio ] = useState("I am a bio")
    
    return (
        <div className="card">
            <div className="upper-container">
                {/* <div className="image-container">
                    <img src="#" alt=""></img>
                </div> */}
            </div>

            <div className="lower-container">
                <h3> {f_name} </h3>
                <h3> {l_name} </h3>
                <h3> {bio} </h3>
            </div>

        </div>
    )
}

export default Card;
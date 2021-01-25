import React from 'react'
import logoPlant from "../img/logoPlant.png"
import ecoLabel from "../img/ecoLabel.png"


export default function NavBar() {
    return (

        <div className="nav">

            <div>
                <img className="navImage" src={ecoLabel}></img>
                <p>Certifier agriculture biologique et éco-resposable</p>
            </div>

            <div className="info">
                <ul>
                    <li>Qui sommes nous?</li>
                    <img className="navImage" src={logoPlant}></img>
                    <li>Comment nous contacter?</li>
                </ul>
            </div>

            <div className="cartImg">
                <ul>
                    <li>Mon panier</li>
                </ul>
            </div>
        </div>
    )
}
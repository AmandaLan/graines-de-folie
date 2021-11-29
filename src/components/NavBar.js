import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MenuItems from './MenuItems';
import logoPlant from "../img/logoPlant.png";
import ecoLabel from "../img/ecoLabel.png";
import "../stylesheets/navBar.scss";

import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {

    const [burger, setBurger] = useState(false);


    return (

        <nav className="nav">

            <div className="navLogo">
                <img className="navImage" src={ecoLabel} alt=""></img>
                <img className="navLogo" src={logoPlant} alt=""></img>
            </div>

            <div className="navItems">
                <ul style={{transform: burger ? "translateX(0px)" : ""}}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a
                                    onClick={()=> setBurger(!burger)}
                                    // className={item.cName}
                                    href={item.url}>
                                        
                                    {item.title}
                                    
                                </a>
                            </li>
                        )
                    })}

                </ul>
                
            </div>

            <div className="burger" onClick={()=> setBurger(!burger)}><FontAwesomeIcon icon={ faBars } /></div>

        </nav>
    )
}
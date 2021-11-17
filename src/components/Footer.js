import React from 'react';
import FooterItems from './FooterItems';
import navBar from "../stylesheets/footer.scss";
import footerBG from "../img/footerBG.jpg"

export default function Footer() {

    return (
        <div className="footer">
            <div className="footerInfos">
                <div className="contact">
                    <ul>
                        <li>
                            <h2>adress@email.com</h2>
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                        <li>
                            Terms & conditions
                        </li>
                    </ul>
                </div>
                <div className="footerItems">
                    <ul>
                        {FooterItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a
                                        className={item.cfooter}
                                        href={item.url}>
                                        <img src={item.network} style={{ width: "5rem", color: "white" }} />
                                    </a>
                                </li>
                            )
                        })}

                    </ul>
                </div>
                <div className="blur"></div>
            </div>
        </div>

    )
}
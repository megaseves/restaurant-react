import React from "react";
import './Menu.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";

export function Menu() {
    return(
        <div className="menu-container">
            <div className="logo-container"><img className={"logo"} onClick={()=> window.location.assign("/")} src={process.env.PUBLIC_URL + '/logo/logo.png'} alt="logo"/></div>
            <div className="menu-list">
                <div><a href="/">HOME</a></div>
                <div><a href="/">ABOUT US</a></div>
                <div><a href="/contact">CONTACT</a></div>
            </div>
            <div className="contacts">
                <div className={"social-icons"}>
                    <div><FontAwesomeIcon onClick={()=> window.open("https://www.facebook.com/")} className={"icon"} icon={faFacebookF} /></div>
                    <div><FontAwesomeIcon onClick={()=> window.open("https://www.instagram.com/")} className={"icon"} icon={faInstagram} /></div>
                    <div><FontAwesomeIcon onClick={()=> window.open("https://goo.gl/maps/KqsYwdgXxWnchwmH9")} className={"icon"} icon={faGoogle} /></div>
                </div>
                <div>
                    <a className={"phone-call"} href="tel:303333333"><div className="phone-number">30 3333 333</div></a>
                </div>
            </div>
        </div>
    )
}
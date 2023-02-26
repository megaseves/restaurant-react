import React from "react";
import './Menu.css';
import './MobileMenu.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";

function menuClick() {
    const menubarIcon = document.querySelector('.menubar-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (!menubarIcon.classList.contains("hide")) {
        menubarIcon.classList.add("hide");
        closeIcon.classList.remove("hide");
    } else {
        menubarIcon.classList.remove("hide");
        closeIcon.classList.add("hide");
    }
}

export function Menu() {
    return(
        <div className="menu-container">
            <div className="logo-container"><img className={"logo"} onClick={()=> window.location.assign("/")} src={process.env.PUBLIC_URL + '/logo/logo.png'} alt="logo"/></div>
            <div className="menu-list">
                <a href="/">HOME</a>
                <a href="/">ABOUT US</a>
                <a href="/contact">CONTACT</a>
            </div>
            <div className="contacts">
                <div className={"social-icons"}>
                    <FontAwesomeIcon onClick={()=> window.open("https://www.facebook.com/")} className={"icon"} icon={faFacebookF} />
                    <FontAwesomeIcon onClick={()=> window.open("https://www.instagram.com/")} className={"icon"} icon={faInstagram} />
                    <FontAwesomeIcon onClick={()=> window.open("https://goo.gl/maps/KqsYwdgXxWnchwmH9")} className={"icon"} icon={faGoogle} />
                </div>
                <a className={"phone-call"} href="tel:303333333">
                    <span className="phone-number">30 3333 333</span>
                </a>
                <span onClick={menuClick} className="menubar">
                    <FontAwesomeIcon icon={faBars} className={"menubar-icon"} />
                    <FontAwesomeIcon icon={faX} className={"close-icon hide"} />
                </span>
            </div>
        </div>
    )
}
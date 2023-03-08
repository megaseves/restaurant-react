import React from "react";
import './Menu.css';
import '../pages/MobileVersion/MobileMenu.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";

export function Menu() {

    function showNavbar() {
        toggleComponents();

        styleChange();

        showMenuBar();
        showIcons();
    }

    function showIcons() {
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
    function showMenuBar() {
        const mobileMenubar = document.querySelector(".mobile-menu-list");

        if (!mobileMenubar.classList.contains("show")) {
            mobileMenubar.classList.add("show");
        } else {
            mobileMenubar.classList.remove("show");
        }
    }

    function toggleComponents() {
        const contactsComp = document.querySelector("#contact");
        const homeComp = document.querySelector(".home-container");
        const foodMenuComp = document.querySelector("#menu");
        const socialIcons = document.querySelector(".social-icons");

        if (!contactsComp.classList.contains("hide")) {
            contactsComp.classList.add("hide");
            homeComp.classList.add("hide");
            foodMenuComp.classList.add("hide");
            socialIcons.classList.add("social-icons-mobile-menu");
        } else {
            contactsComp.classList.remove("hide");
            homeComp.classList.remove("hide");
            foodMenuComp.classList.remove("hide");
            socialIcons.classList.remove("social-icons-mobile-menu");
        }
    }


    function styleChange() {
        const phoneCallDiv = document.querySelector(".phone-call");
        const menuBar = document.querySelector(".menubar");

        if (!phoneCallDiv.classList.contains("phone-call-with-mobile-menu")) {
            phoneCallDiv.classList.add("phone-call-with-mobile-menu");
            menuBar.style.margin = '6.5vw 0 0 53vw';
        } else {
            phoneCallDiv.classList.remove("phone-call-with-mobile-menu");
            menuBar.style.margin = '';
        }
    }


    return(
        <>
        <div className="menu-container">
            <div onClick={() => window.location.assign("/") } className="logo-container"><span className="line"></span><i><p className="logo">FAST<br/><span className="food">FOOD</span></p></i></div>

            <nav className="menu-list">
                <a href="/" id={"active"}>HOME</a>
                <a href="#menu">MENU</a>
                <a href="/">ABOUT US</a>
                <a href="#contact">CONTACT</a>
            </nav>
            <div className="contacts">
                <div className={"social-icons"}>
                    <FontAwesomeIcon onClick={()=> window.open("https://www.facebook.com/")} className={"icon"} icon={faFacebookF} />
                    <FontAwesomeIcon onClick={()=> window.open("https://www.instagram.com/")} className={"icon"} icon={faInstagram} />
                    <FontAwesomeIcon onClick={()=> window.open("https://goo.gl/maps/KqsYwdgXxWnchwmH9")} className={"icon"} icon={faGoogle} />
                </div>
                <a className={"phone-call"} href="tel:303333333">
                    <span className="phone-number">30.3333.333</span>
                </a>
                <span onClick={showNavbar} className="menubar">
                    <FontAwesomeIcon icon={faBars} className={"menubar-icon"} />
                    <FontAwesomeIcon icon={faX} className={"close-icon hide"} />
                </span>
            </div>
        </div>
        <div className={"mobile-menu-list"}>
            <nav className={"mobile-navbar"}>
                <a href="/" id={"active"}>HOME</a>
                <a href="#menu" onClick={showNavbar}>MENU</a>
                <a href="/">ABOUT US</a>
                <a href="#contact" onClick={showNavbar}>CONTACT</a>
            </nav>
        </div>
    </>
    )
}
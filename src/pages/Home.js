import React from 'react';
import './Home.css';
import './MobileHome.css';

export function Home() {
    return(
        <div className="home-container">
            <div className="greeting">
                <img src={process.env.PUBLIC_URL + '/burger.png'} alt="" className="greeting-image"/>
                <p className={"text"}><span className={"big-font"}>ORDER<br className={"line-break"} />  TASTY <br /> <span className={"and-line-top"}></span><i><p className={"and"}>and</p></i><span className={"and-line-bottom"}></span></span><br/>FRESH FOOD <span className={"color-sec"}>ANYTIME!</span></p>
                <p className="reserve-text">Reserve a table by calling <a href="tel:303333333" className={"color-sec bold"}>30 3333 333</a></p>
                <div className="order-and-menu">
                    <div className="order-button">See Menu</div>
                    <p className="menu-button color-sec">See Location</p>
                </div>
            </div>
        </div>
    )
}
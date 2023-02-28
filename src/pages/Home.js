import React from 'react';
import './Home.css';

export function Home() {
    return(
        <div className={"home-container"}>
            <div className="body-container">
                <div className="greeting">
                    <img src={process.env.PUBLIC_URL + '/burger.png'} alt="" className="greeting-image"/>
                    <p className={"text"}>Order Tasty &<br/>Fresh Food<br/><span className={"color-sec"}>anytime!</span></p>
                    <p className="reserve-text">Reserve a table by calling <a href="tel:303333333" className={"color-sec bold"}>30 3333 333</a><br/>or order at home!</p>
                    <div className="order-and-menu">
                        <div className="order-button">Order Now</div>
                        <p className="menu-button color-sec">See Menu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
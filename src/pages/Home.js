import React from 'react';
import './Home.css';
import './MobileHome.css';

export function Home() {
    return(
        <div className="home-container">
            <div className="greeting">
                <img src={process.env.PUBLIC_URL + '/bg1.jpg'} alt="" className="greeting-image"/>
                <p className={"text"}><span className={"big-font"}>ORDER <br className={"line-break"} />TASTY <br /> <span className={"and-line-top"}></span><i className={"and-container"}><p className={"and"}>and</p></i><span className={"and-line-bottom"}></span></span><br/><span className={"bottom-text"}>FRESH FOOD <span className={"color-sec"}>ANYTIME!</span></span></p>
                <p className="reserve-text">Reserve a table by calling <a href="tel:303333333" className={"link bold"}>30 3333 333</a></p>
                <div className="see-menu">
                    <div className="see-menu-button">See Menu</div>
                </div>
            </div>
            <div className="serving">
                <div className="serving-text">
                    <p className="serving-content">Serving Tasty Bites <br/><span className={"since"}>Since 2019</span></p>
                </div>
            </div>
        </div>
    )
}
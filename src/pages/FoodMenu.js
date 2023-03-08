import React from 'react';
import './FoodMenu.css';
import './MobileVersion/MobileFoodMenu.css';

export function FoodMenu() {
    return(
        <div id={"menu"} className={"food-menu-container"}>
            <section className={"burgers-container"}>
                <div className="burger-header">
                    <h3>Burgers</h3>
                </div>
                <div className="burger">
                    <div className="burger-head">
                        <p className="burger-name">Lorem ipsum dolor</p>
                        <p className="burger-price">4.2</p>
                    </div>
                    <p className="burger-details">Ut ornare neque et nisl suscipit pretium. Vivamus tortor neque, lobortis sed risus in, eleifend elementum nibh.</p>
                </div>
                <div className="burger">
                    <div className="burger-head">
                        <p className="burger-name">Lorem ipsum dolor</p>
                        <p className="burger-price">4.5</p>
                    </div>
                    <p className="burger-details">Vivamus tortor neque, lobortis sed risus in, eleifend elementum nibh.</p>
                </div>
                <div className="burger">
                    <div className="burger-head">
                        <p className="burger-name">Lorem ipsum dolor</p>
                        <p className="burger-price">3.9</p>
                    </div>
                    <p className="burger-details">Vivamus tortor neque, lobortis sed risus in, eleifend elementum nibh.</p>
                </div>
                <div className="burger">
                    <div className="burger-head">
                        <p className="burger-name">Lorem ipsum dolor</p>
                        <p className="burger-price">3.4</p>
                    </div>
                    <p className="burger-details">Vivamus tortor neque, lobortis sed risus in, eleifend elementum nibh.</p>
                </div>
                <div className="burger">
                    <div className="burger-head">
                        <p className="burger-name">Lorem ipsum dolor</p>
                        <p className="burger-price">4.5</p>
                    </div>
                    <p className="burger-details">Ut ornare neque et nisl suscipit pretium. Vivamus tortor neque, lobortis sed risus in, eleifend elementum nibh.</p>
                </div>
                <div className="burger">
                    <div className="burger-head">
                        <p className="burger-name">Lorem ipsum dolor</p>
                        <p className="burger-price">4.6</p>
                    </div>
                    <p className="burger-details">Ut ornare neque et nisl suscipit pretium. Vivamus tortor neque, lobortis sed risus in, eleifend elementum nibh.</p>
                </div>
            </section>
            <section className="others">
                <section className={"wrap-container"}>
                <div className="wrap-header">
                    <h3>Wraps</h3>
                </div>
                <div className="wrap">
                    <div className="burger-head">
                        <p className="burger-name">Lorem ipsum dolor</p>
                        <p className="burger-price">2.8</p>
                    </div>
                    <p className="burger-details">Vivamus tortor neque, lobortis sed risus in, eleifend elementum nibh.</p>
                </div>
                <div className="wrap">
                    <div className="burger-head">
                        <p className="burger-name">Lorem ipsum dolor</p>
                        <p className="burger-price">4.1</p>
                    </div>
                    <p className="burger-details">Ut ornare neque et nisl suscipit pretium.</p>
                </div>
                <div className="wrap">
                    <div className="burger-head">
                        <p className="burger-name">Lorem ipsum dolor</p>
                        <p className="burger-price">2.8</p>
                    </div>
                    <p className="burger-details">Vivamus tortor neque, lobortis sed risus in, eleifend elementum nibh.</p>
                </div>
                <div className="wrap">
                    <div className="burger-head">
                        <p className="burger-name">Lorem ipsum dolor</p>
                        <p className="burger-price">1.7</p>
                    </div>
                    <p className="burger-details">Ut ornare neque et nisl suscipit pretium.</p>
                </div>
            </section>
                <section className={"wrap-container"}>
                <div className="wrap-header">
                    <h3>Others</h3>
                </div>
                <div className="wrap">
                    <div className="burger-head">
                        <p className="burger-name">Lorem ipsum dolor</p>
                        <p className="burger-price">2.8</p>
                    </div>
                    <p className="burger-details">Vivamus tortor neque, lobortis sed risus in, eleifend elementum nibh.</p>
                </div>
                <div className="wrap">
                    <div className="burger-head">
                        <p className="burger-name">Lorem ipsum dolor</p>
                        <p className="burger-price">4.1</p>
                    </div>
                    <p className="burger-details">Ut ornare neque et nisl suscipit pretium.</p>
                </div>
            </section>
            </section>
        </div>
    )
}
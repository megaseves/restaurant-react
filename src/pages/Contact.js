import React from 'react';
import './Contact.css'
export function Contact() {
    return(
        <div id={"contact"} className={"contact-container"}>
            <div className="contact-details">
                <h1 className={"detail-header"}>CONTACT</h1>
                <p className={"detail-text"}>
                    101 Morrow St<br/>Jonesboro, LA 71251
                </p>
                <p className="detail-time">
                    <span className="color-sec">Mon-Fri:</span> 12pm - 10pm <br/>
                    <span className="color-sec">Sat-Sun:</span> 12pm - 11pm <br/>
                </p>
                <p className="detail-phone">
                    30.3333.333
                </p>
            </div>

            <div className={"google-map"}>
                <iframe title={"frame"} className={"frame"} src="https://www.google.com/maps/d/embed?mid=1vqi6kmh5rHhuTnjVi58T_YdNCCQ0mms&hl=hu&ehbc=2E312F" width="640" height="480"></iframe>
            </div>
        </div>
    )
}
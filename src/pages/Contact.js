import React from 'react';
import './Contact.css'
export function Contact() {
    return(
        <div className={"contact-container"}>
            <h1>Contact</h1>
            <div className={"google-map"}>
                <iframe title={"googleMap"}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13270.420488663534!2d-112.6329461!3d33.7450257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d4abdcb521afed%3A0xbf970112b5897d91!2sThe%20Giant%20Triangle!5e0!3m2!1shu!2shu!4v1677238828121!5m2!1shu!2shu"
                    width="100%" height="100%" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
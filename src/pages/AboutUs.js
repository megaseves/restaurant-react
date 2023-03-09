import React from 'react';
import './AboutUs.css';
import './MobileVersion/MobileAboutUs.css';

export function AboutUs() {
    return(
        <div className="about-us-container">
            <section className="about-us">
                <section className="about-us-image-section">
                    <img src={process.env.PUBLIC_URL + '/menuAboutUs.png'} alt="" className="about-us-image"/>
                </section>
                <section className="about-us-content">
                    <h1 className={"about-us-header"}>ABOUT US</h1>
                    <p className="about-us-text">Lorem ipsum dolor sit amet, <span className={"highlight"}>consectetur adipiscing elit</span>. Duis eget quam eget tellus vehicula tempor.
                        Curabitur sodales sapien nec dolor cursus mollis. Mauris at turpis finibus, fermentum massa vel, condimentum sem. In sed enim
                        eget nunc aliquet euismod. Pellentesque sit amet mi vehicula, tincidunt ante ac, feugiat nunc. Vestibulum auctor in odio a
                        mattis. Suspendisse aliquam nibh enim. Curabitur auctor orci at lectus auctor, ac laoreet urna vehicula. Pellentesque eu odio
                        non enim ultrices aliquam. Donec egestas finibus porttitor. Nunc malesuada metus non felis fermentum, at elementum arcu
                        venenatis. Mauris et rhoncus enim. Integer molestie neque id massa aliquet porta. Aliquam molestie mi sit amet lobortis porttitor.</p>
                </section>
            </section>
        </div>
    )
}
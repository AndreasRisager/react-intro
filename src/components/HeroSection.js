// HeroSection.js
import React from "react";
import "./HeroSection.scss";

function HeroSection() {
    return (
        <section className="heroSection">
            <img src="https://picsum.photos/1920/600"/>
            <div className="hifi-logo">
                <div className="hifi-box">
                    <span className="hifi-box__name">HI</span>
                    <span className="hifi-box__name">FI</span>
                </div>
                <p className="hifi-logo__name">hificorner.co.uk</p>
            </div>
        </section>
    );
}

export default HeroSection;
// PrimaryNavigation.js
import React from "react";
import { Link } from "@reach/router";
import "./PrimaryNavigation.scss";

function PrimaryNavigation() {
    return (
        <nav className="primaryNavigation">
            <ul className="secondaryMenu">
                <li><Link to="/"><i className="fas fa-map-marker-alt"></i></Link></li>
                <li><Link to="/"><i className="fas fa-phone-alt"></i></Link></li>
                <li><Link to="/"><i className="fas fa-envelope"></i></Link></li>
            </ul>
            <ul className="primaryMenu">
                <li><Link to="/" className="currentPage">HOME</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/brands">BRANDS</Link></li>
                <li><Link to="/blog">BLOG</Link></li>
                <li><Link to="/events">EVENTS</Link></li>
                <li><Link to="/shop">SHOP</Link></li>
                <li><Link to="/contact">CONTACT US</Link></li>
            </ul>
        </nav>
    );
}

export default PrimaryNavigation;
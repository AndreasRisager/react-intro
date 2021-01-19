// PrimaryNavigation.js
import React from "react";
import { Link } from "@reach/router";
import "./PrimaryNavigation.scss";

function PrimaryNavigation() {
<<<<<<< HEAD
	return (
		<nav className="primaryNavigation">
			<ul>
				<li>
					<Link to="/" className="primaryNavigation__link">Home</Link>
				</li>
				<li>
					<Link to="/products" className="primaryNavigation__link">About Us</Link>
				</li>
				<li>
					<Link to="/contact" className="primaryNavigation__link">Brands</Link>
				</li>
				<li>
					<Link to="/pølsehorn" className="primaryNavigation__link">Blog</Link>
				</li>
				<li>
					<Link to="/pølsehorn" className="primaryNavigation__link">Events</Link>
				</li>
				<li>
					<Link to="/shop" className="primaryNavigation__link">Shop</Link>
				</li>
				<li>
					<Link to="/pølsehorn" className="primaryNavigation__link">Contact Us</Link>
				</li>
			</ul>
		</nav>
	);
}

export default PrimaryNavigation;
=======
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
>>>>>>> 9f8053bfcd48908553541d15c874987641eea22e

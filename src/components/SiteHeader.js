// SiteHeader.js
import React from "react";
<<<<<<< HEAD
import Utility from "./Utility";
import "./SiteHeader.scss";
import PrimaryNavigation from "./PrimaryNavigation";
import Brand from "./Brand";

function SiteHeader() {
	return (
		<header className="siteHeader">
			<Utility />
			<PrimaryNavigation />
			<Brand />
		</header>
	);
}

export default SiteHeader;
=======
import Brand from "./Brand";
import PrimaryNavigation from "./PrimaryNavigation";

function SiteHeader() {
    return (
        <header>
            <PrimaryNavigation/>
        </header>
    );
}

export default SiteHeader;
>>>>>>> 9f8053bfcd48908553541d15c874987641eea22e

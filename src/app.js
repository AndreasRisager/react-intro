// app.js
import React from "react";
import { render } from "react-dom";
import SiteHeader from "./components/SiteHeader";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./app.scss";

function App() {
    return (
        <>
        <SiteHeader/>
        <main>
        <Router>
            <Home path="/"/>
            <Contact path="/contact"/>
        </Router>
        </main>
        </>
    );
};

render(<App/>, document.getElementById("root"));
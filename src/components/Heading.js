import React from "react";
import "./Heading.scss";

function Heading(props) {
    console.log(props);
    return <h1 className="xmas--active">{ props.content }</h1>
}
export default Heading;
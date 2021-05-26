import React from "react";

const Header = (props) => {
    return (
    <header>
        <h1 className="header-hidden">{props.title}</h1>
        <img src="./images/title-logo.png" alt="Pattern Arcade logo and text" /> 
        <h2>A collection of backgrounds inspired by video games</h2>   
    </header>
    )
}

export default Header;
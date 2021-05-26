import React from "react";

const Footer = (props) => {

    const date = new Date().getFullYear();

    return (
        <footer>
            <p>
            <span>Built with 🤓 ❤️ by </span>
                <a href="https://www.twitter.com/cameroncodes">Peter Cameron</a> 
            <span> {"\u00A9"} {date}</span>
            </p>
        </footer>

    )
}

export default Footer;
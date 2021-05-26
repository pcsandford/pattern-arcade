import React from "react";

class Pattern extends React.Component {

    render() {

        const {title, tile, imageName} = this.props.details;

        return (
            <div className={`pattern-container pattern-container-${imageName}`}>
                <ul>
                    <li className="pattern-title">{title}</li>
                    <li className="download">
                        <a href={tile} download={imageName}>
                        <img src="./images/download-icon.png" alt="download icon"/>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Pattern;
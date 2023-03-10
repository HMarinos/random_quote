import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Quote(props) {
    return (
        <div className="main">
            <h1 id="text" key={props.content}>
                <i className="quote_icon">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                </i>
                {props.content}
            </h1>
            <p style={{ color: props.color }} id="author">
                -{props.author}
            </p>
        </div>
    );
}

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
            <p id="author">
                <a
                    style={{
                        color: props.color,
                        borderBottom: `2px solid ${props.color}`,
                    }}
                    href={`https://en.wikipedia.org/wiki/${props.author}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Search wikipedia"
                >
                    -{props.author}
                </a>
            </p>
        </div>
    );
}

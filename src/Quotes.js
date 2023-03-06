import React from "react";

export default function Quote(props) {
    return (
        <div className="main">
            <h1 id="text">{props.content}</h1>
            <p id="author">-{props.author}</p>
        </div>
    );
}

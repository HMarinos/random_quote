import React from "react";

export default function Button(props) {
    return (
        <button onClick={props.handleClick} id="new-quote">
            New Quote
        </button>
    );
}

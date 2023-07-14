
import ReactDOM from "react-dom";
import * as ReactBootstrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import Quote from "./Quotes";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';

const App = () => {
    const [quote, setQuote] = React.useState([]);
    const [color, setColor] = React.useState();
    const [loading, setLeading] = React.useState(false);

    const fetchQuote = async () => {
        const response = await fetch("https://api.quotable.io/random");
        const randomQuote = await response.json();
        setQuote(randomQuote);
        setLeading(true);

        const colors = [
            "#edc351",
            "#c46554",
            "#eb7328",
            "#a8d645",
            "#45d67c",
            "#326144",
            "#74cfbb",
            "#91aeb5",
            "#8185de",
            "#ae75d9",
            "#db70a7",
        ];

        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        while (randomColor === color) {
            randomColor = colors[Math.floor(Math.random() * colors.length)];
        }

        setColor(randomColor);
    };

    React.useEffect(() => {
        fetchQuote();
    }, []);

    const handleClick = () => {
        return fetchQuote();
    };

    return (
        <>
            {loading ? (
                <div
                    className="app_container"
                    style={{ backgroundColor: color }}
                >
                    <wrapper id="quote-box">
                        <Quote
                            content={quote.content}
                            author={quote.author}
                            color={color}
                        />
                        <div id="footer">
                            <a
                                href="/"
                                id="tweet-quote"
                                onClick={(event) => event.preventDefault()}
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <button onClick={handleClick} id="new-quote">
                                New Quote
                            </button>
                        </div>
                    </wrapper>
                    <p className="comment">Made by me</p>
                </div>
            ) : (
                <ReactBootstrap.Spinner
                    animation="border"
                    role="status"
                    style={{ width: "3rem", height: "3rem" }}
                />
            )}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

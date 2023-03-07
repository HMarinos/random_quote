import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import Quote from "./Quotes";
import Button from "./Button";

const App = () => {
    const [quote, setQuote] = React.useState([]);
    const [color, setColor] = React.useState("#000000");

    const fetchQuote = async () => {
        const response = await fetch("https://api.quotable.io/random");
        const randomQuote = await response.json();
        setQuote(randomQuote);
        setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    };

    React.useEffect(() => {
        fetchQuote();
    }, []);

    const handleClick = () => {
        return fetchQuote();
    };

    return (
        <div className="container" style={{ backgroundColor: color }}>
            <wrapper id="quote-box">
                <Quote
                    content={quote.content}
                    author={quote.author}
                    color={color}
                />
                <div id="footer">
                    <a href="/" id="tweet-quote">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <Button handleClick={handleClick} />
                </div>
            </wrapper>
            <p className="comment">Made by me</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

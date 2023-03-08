import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import Quote from "./Quotes";
import Button from "./Button";

const App = () => {
    const [quote, setQuote] = React.useState([]);
    const [color, setColor] = React.useState();

    const fetchQuote = async () => {
        const response = await fetch("https://api.quotable.io/random");
        const randomQuote = await response.json();

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

        setQuote(randomQuote);

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

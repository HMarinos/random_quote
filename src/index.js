import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import Quote from "./Quotes";
import Button from "./Button";

const App = () => {
    // const [quote, setQuote] = React.useState([]);
    // const [isLoading, setIsLoading] = React.useState(false);
    // const [err, setErr] = React.useState("");

    // const fetchQuote = async () => {
    //     setIsLoading(false);

    //     try {
    //         const response = await fetch("https://api.quotable.io/random", {
    //             method: "GET",
    //             headers: {
    //                 Accept: "application/json",
    //             },
    //         });

    //         if (!response.ok) {
    //             throw new Error(`Error! status: ${response.status}`);
    //         }

    //         const result = await response.json();

    //         console.log("result is: ", JSON.stringify(result, null, 4));

    //         setQuote(result);
    //     } catch (err) {
    //         setErr(err.message);
    //     } finally {
    //         setIsLoading(true);
    //     }
    // };

    // React.useEffect(() => {
    //     fetchQuote();
    // }, []);

    // const handleClick = async () => {
    //     fetchQuote();
    // };

    const [quote, setQuote] = React.useState([]);

    const fetchQuote = async () => {
        const response = await fetch("https://api.quotable.io/random");
        const randomQuote = await response.json();
        setQuote(randomQuote);
    };

    React.useEffect(() => {
        fetchQuote();
    }, []);

    const handleClick = () => {
        return fetchQuote();
    };

    return (
        <div className="container">
            <wrapper id="quote-box">
                <Quote content={quote.content} author={quote.author} />
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

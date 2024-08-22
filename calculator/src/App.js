import "./App.css";
import React, { useState } from "react";
import Calculator from "./components/Calculator";
import History from "./components/History";

function App() {
    const [history, setHistory] = useState(
        JSON.parse(localStorage.getItem("history")) || []
    );
    const [showHistory, setShowHistory] = useState(true);

    const updateHistory = (value) => {
        const updatedHistory = [...history, value];
        setHistory(updatedHistory);
        localStorage.setItem("history", JSON.stringify(updatedHistory));
    };

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem("history");
    };

    return (
        <div className="App">
            <div
                className="hamburger"
                onClick={() => setShowHistory(!showHistory)}
            >
                ☰
            </div>
            <Calculator updateHistory={updateHistory} />
            {showHistory && (
                <>
                    <History history={history} clearHistory={clearHistory} />
                    <div
                        className="overlay"
                        onClick={() => setShowHistory(!showHistory)}
                    ></div>
                </>
            )}
        </div>
    );
}

export default App;

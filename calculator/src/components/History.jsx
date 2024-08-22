import React from "react";
import "./history.css";

function History({ history, clearHistory }) {
    return (
        <div className="history-panel">
            <h1>History</h1>
            <div className="history-list">
                {history.map((entry, index) => (
                    <div key={index} className="history-item">
                        {entry}
                    </div>
                ))}
            </div>
            {history.length > 0 && (
                <button className="clear-history" onClick={clearHistory}>
                    Clear History
                </button>
            )}
        </div>
    );
}

export default History;

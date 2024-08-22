import React from "react";
import "./calculator.css";

function Calculator({ updateHistory }) {
    const [data, setData] = React.useState("");
    const inputValue = (e) => {
        const newValue = e.target.value;
        const operators = "+-*/";

        const lastChar = data[data.length - 1];
        if (operators.includes(lastChar) && operators.includes(newValue)) {
            setData(data.slice(0, -1) + newValue);
        } else {
            setData(data + newValue);
        }
    };

    const clearEnd = () => {
        const operators = "+-*/";
        let lastOperandIndex = -1;
        for (let i = data.length - 1; i >= 0; i--) {
            if (operators.includes(data[i])) {
                lastOperandIndex = i;
                break;
            }
        }
        if (lastOperandIndex !== -1) {
            setData(data.slice(0, lastOperandIndex + 1));
        }
    };
    const clear = () => {
        setData("");
    };
    const backspace = () => {
        setData(data.slice(0, -1));
    };
    const calculate = () => {
        const operators = data.split(/[\d.]+/).filter((item) => item !== "");
        const numbers = data
            .split(/[^.\d]+/)
            .filter((item) => item !== "")
            .map(Number);
        let result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === "+") {
                result += numbers[i + 1];
            } else if (operators[i] === "-") {
                result -= numbers[i + 1];
            } else if (operators[i] === "*") {
                result *= numbers[i + 1];
            } else if (operators[i] === "/") {
                result /= numbers[i + 1];
            }
        }
        if (isNaN(result)) {
            alert("Invalid expression");
            setData("");
        } else {
            setData(result.toString());
            updateHistory(`${data} = ${result}`);
        }
    };

    return (
        <div className="calculator">
            <div className="container">
                <input placeholder="0" value={data} readOnly />
                <button className="grey-button" onClick={clearEnd}>
                    CE
                </button>
                <button className="grey-button" onClick={clear}>
                    C
                </button>
                <button className="grey-button" onClick={backspace}>
                    &#9003;
                </button>
                <button onClick={inputValue} value="/" className="grey-button">
                    /
                </button>

                <button onClick={inputValue} value="7">
                    7
                </button>
                <button onClick={inputValue} value="8">
                    8
                </button>
                <button onClick={inputValue} value="9">
                    9
                </button>
                <button onClick={inputValue} value="*" className="grey-button">
                    *
                </button>

                <button onClick={inputValue} value="4">
                    4
                </button>
                <button onClick={inputValue} value="5">
                    5
                </button>
                <button onClick={inputValue} value="6">
                    6
                </button>
                <button onClick={inputValue} value="-" className="grey-button">
                    -
                </button>

                <button onClick={inputValue} value="1">
                    1
                </button>
                <button onClick={inputValue} value="2">
                    2
                </button>
                <button onClick={inputValue} value="3">
                    3
                </button>
                <button onClick={inputValue} value="+" className="grey-button">
                    +
                </button>

                <button
                    value=""
                    disabled
                    style={{ visibility: "hidden" }}
                ></button>
                <button onClick={inputValue} value="0">
                    0
                </button>
                <button onClick={inputValue} value="." className="grey-button">
                    .
                </button>
                <button onClick={calculate} className="grey-button">
                    =
                </button>
            </div>
        </div>
    );
}

export default Calculator;

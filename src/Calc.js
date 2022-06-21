import { calContainer, keyboardContainer } from "./styles";
import { Digit, Display } from './components'
import { useState } from "react";
const Calc = () => {
    const [numbers, setNumbers] = useState(["", ""])
    const [operation, setOperation] = useState(null)

    const addDigit = (digit) => {
        if (operation) {
            setNumbers([numbers[0], numbers[1] + digit])
        } else {
            setNumbers([numbers[0] + digit, ""])
        }
    }

    const clearAll = () => {
        setNumbers(["", ""])
        setOperation(null)
    }

    const calculate = () => {
        switch (operation) {
            case "+":
                setNumbers([(numbers[0] * 100 + numbers[1] * 100) / 100, ""])
                break
            case "-":
                setNumbers([(numbers[0] * 100 - numbers[1] * 100) / 100, ""])
                break
            case "*":
                setNumbers([(numbers[0] * numbers[1]), ""])
                break
            case "/":
                setNumbers([
                    (((numbers[0] / numbers[1]) * 100) / 100),
                    ""])
                break
            default:
        }
        setOperation(null)
    }

    return (
        <div style={calContainer}>
            <Display value={(operation ? numbers[1] : numbers[0]) || 0} />
            <div style={keyboardContainer}>
                <Digit value="1" onClick={() => addDigit("1")} />
                <Digit value="2" onClick={() => addDigit("2")} />
                <Digit value="3" onClick={() => addDigit("3")} />
                <Digit value="+" onClick={() => setOperation("+")} />

                <Digit value="4" onClick={() => addDigit("4")} />
                <Digit value="5" onClick={() => addDigit("5")} />
                <Digit value="6" onClick={() => addDigit("6")} />
                <Digit value="-" onClick={() => setOperation("-")} />

                <Digit value="7" onClick={() => addDigit("7")} />
                <Digit value="8" onClick={() => addDigit("8")} />
                <Digit value="9" onClick={() => addDigit("9")} />
                <Digit value="*" onClick={() => setOperation("*")} />

                <Digit value="0" onClick={() => addDigit("0")} />
                <Digit value="." onClick={() => addDigit(".")} />
                <Digit value="Sci" />
                <Digit value="/" onClick={() => setOperation("/")} />

                <Digit value="C" onClick={() => clearAll()} />
                <Digit value="" />
                <Digit value="" />
                <Digit value="=" onClick={() => calculate()} />
            </div>
        </div>
    )
}

export default Calc
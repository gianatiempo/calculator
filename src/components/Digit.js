import { digitStyle } from "../styles";

const Digit = ({ value, onClick }) => {
    return (
        <div style={digitStyle} onClick={onClick}>
            {value}
        </div >
    )

}

export default Digit;
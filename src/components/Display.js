import { displayStyle } from "../styles";

const Digit = ({ value }) => {
    return (
        <div
            style={displayStyle}
            // onClick={this.props.onClick}
            // data-size={this.props.size}
            data-value={value}>
            {value}
        </div>
    )

}

export default Digit;
export const calContainer = {
    width: '300px',
    height: '300px',
    position: 'relative',
    margin: '100px',
    border: '5px solid black',
}

export const keyboardContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: '80%'
}

const ledStyle = {
    background: '#7b9e12',
    display: 'flex',
    border: '1px solid black',
    boxSizing: 'border-box',
    alignItems: 'center',
    fontSize: '36px',
    color: 'rgba(0, 0, 0, 0.5)',
    height: '20%',
}

export const digitStyle = {
    ...ledStyle,
    justifyContent: 'center',
    width: '25%',
    minWidth: '25%'
}

export const displayStyle = {
    ...ledStyle,
    justifyContent: 'flex-end',
}
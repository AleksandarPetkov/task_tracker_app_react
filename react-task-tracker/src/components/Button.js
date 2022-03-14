//Using destructuring props from Header.js <Button color='green' text='Add'/>
const Button = ({ color, text, onClick }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}
        </button>
    )
}

//Setting default props
Button.defaultProps = {
    color: 'steelblue'
}

export default Button;
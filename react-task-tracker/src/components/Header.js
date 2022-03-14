import React from "react";
import Button from "./Button";

// const Header = (props) => {
//     return (
//         <header>props.title</header>
//     )
// }

//Syntax using Destructuring
const Header = ({ title }) => {
    
    const onclickFn = () => {
        console.log('!');
    }

    return (
        <header className='header'>
            {title}
            <Button color='green' text='Add' onClick={onclickFn} />
            {/*
             We can reuse the component with different props!
             <Button color='red' text='Remove'/>
             <Button color='blue' text='Update'/> 
            */}
        </header>
    )
}

//Setting default props
Header.defaultProps = {
    title: 'Task Manager'
}

export default Header;
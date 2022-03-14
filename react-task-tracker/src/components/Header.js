import React from "react";

// const Header = (props) => {
//     return (
//         <header>props.title</header>
//     )
// }

//Syntax using Destructuring
const Header = ({title}) => {
    return (
        <header>{title}</header>
    )
}

//Setting default props
// Header.defaultProps = {
//     title: 'Task Manager'
// }

export default Header;
import React from "react";

function RedesItem (props) {
    return(
    <li className="RedesItem">
        <a className="RedesButton" href={props.href}>
            <p className="TextButton">{props.text}</p> 
        </a>
    </li>
    )
}

export { RedesItem };
import React from "react";

function RedesItem (props) {
    return(
        <li className="RedesItem">
            <a href={props.href}>
                <button className="RedesButton">
                    <div className="iconContainer">
                        <i className="icon">{props.text1}</i>
                    </div>
                    <p className="TextButton">{props.text}</p> 
                </button>
            </a>
        </li>
    )
}

export { RedesItem };
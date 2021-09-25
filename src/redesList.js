import React from "react";

function RedesList (props) {
    return(
        <ul className="RedesList">
            {props.children}
        </ul>
    )
}

export { RedesList };
import React from "react";

function Button ({ text, emoji, clickFunction}) {

    return(
        <button onClick={clickFunction}>
            <h6>{text}{emoji}</h6>
        </button>
    )
}

export default Button;
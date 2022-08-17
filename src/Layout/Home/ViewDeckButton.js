import React from "react";
import { useHistory } from "react-router-dom";

function ViewDeckButton({ deck }) {
    const history = useHistory();
    function handleClick(){
        history.push(`decks/${deck.id}`);
    };
    return (
        <button type="button" className="btn btn-secondary" onClick={handleClick}>
            <span className="oi oi-eye" /> View
        </button>
    );
}

export default ViewDeckButton;
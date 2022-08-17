import React from "react";
import { useHistory } from "react-router-dom";

function CreateDeckButton() {
    const history = useHistory();

    function handleClick() {
        history.push("/decks/new");
    }

    return (
        <button type="button" className="btn btn-secondary"
        onClick={handleClick}>
            <span className="oi oi-plus" /> Create Deck
        </button>
    );
}

export default CreateDeckButton;
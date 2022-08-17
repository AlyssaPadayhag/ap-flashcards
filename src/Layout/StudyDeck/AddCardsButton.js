import React from "react";
import { useHistory } from "react-router-dom";

function AddCardsButton({ deckId }) {
    const history = useHistory();

    function handleClick() {
        history.push(`decks/${deckId}/cards/new`);
    }

    return (
        <button type="button" className="btn btn-primary" onClick={handleClick}>
            <span className="oi oi-plus" /> Add Cards
        </button>
    );
}

export default AddCardsButton;
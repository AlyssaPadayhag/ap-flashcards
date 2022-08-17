import React from "react";
import { useHistory  } from "react-router-dom";

function AddCardDoneButton({ deckId }) {
    const history = useHistory();
    function handleClick() {
        history.push(`/decks/${deckId}`);
    };
    return (
        <button type="button" className="btn btn-secondary" onClick={handleClick}>
            Done
        </button>
    );
}

export default AddCardDoneButton;
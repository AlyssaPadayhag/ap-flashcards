import React from "react";
import { useHistory } from "react-router-dom";

function StudyDeckButton({ deck }) {
    const history = useHistory();
    function handleClick() {
        history.push(`decks/${deck.id}/study`);
    };
    return (
        <button type="button" className="btn btn-primary" onClick={handleClick}>
            <span className="oi oi-book" /> Study
        </button>
    );
}

export default StudyDeckButton;
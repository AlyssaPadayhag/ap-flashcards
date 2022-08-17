import React from "react";
import { deleteDeck } from "../../utils/api/index";

function DeleteDeckButton({ deck }) {
    function handleClick() {
        if (window.confirm("Delete this deck?\nYou Will not be able to recover it.")){
            deleteDeck(deck.id);
            window.location.reload(false);
        }
    };
    return (
        <button type="button" className="btn btn-danger" onClick={handleClick}>
                <span className="oi oi-trash" />
        </button>

    );
}

export default DeleteDeckButton;
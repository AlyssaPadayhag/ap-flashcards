import React from "react";
import { deleteDeck } from "../../utils/api/index";

function DeleteDeckButton({ deck }) {
    function handleClick() {
        let confirm = window.confirm("Delete this deck?\nYou Will not be able to recover it.");
        if(confirm) {
            deleteDeck(deck.id);
        }
    };
    return (
        <button type="button" className="btn btn-danger" onClick={handleClick}>
            <span className="oi oi-trash" />
        </button>

    );
}

export default DeleteDeckButton;
import React from "react";
import { Link } from "react-router-dom";

function AddCardsScreenBreadCrumbNav({ deckId, deck }) {
    return (
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/"><span className="oi oi-home primary" /> Home</Link>
            </li>
            <li className="breadcrumb-item">
                <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Add Card</li>
        </ol>
        </nav>
    );
}

export default AddCardsScreenBreadCrumbNav;
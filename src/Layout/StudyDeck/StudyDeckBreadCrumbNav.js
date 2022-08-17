import React from "react";
import { Link  } from "react-router-dom";

function StudyDeckBreadCrumbNav({ deckId, deck }) {
    return (
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li class="breadcrumb-item">
                <Link to="/"><span className="oi oi-home primary" /> Home</Link>
            </li>
            <li className="breadcrumb-item">
                <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Study</li>
        </ol>
        </nav>
    );

}

export default StudyDeckBreadCrumbNav;
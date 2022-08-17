import React from "react";
import { useHistory } from "react-router-dom";
import DeckScreenDeleteDeckButton from "./DeckScreenDeleteDeckButton";
import DeckCardComponent from "./DeckCardComponent";

// This component displays all of a specific deck's info and the buttons used to interact with the deck
function DeckComponent({ deckName, deckDescription, deckId, cards, url }) {
    const history = useHistory();

  return (
    <div>
      <h2>{deckName}</h2>
      <p>{deckDescription}</p>
      <div className="d-flex mb-4">
        <div className="mr-auto">
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={() => history.push(`/decks/${deckId}/edit`)}
          >
            <span className="oi oi-pencil" /> Edit
          </button>
          <button
            type="button"
            className="btn btn-primary mr-2"
            onClick={() => history.push(`/decks/${deckId}/study`)}
          >
            <span className="oi oi-book" /> Study
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.push(`/decks/${deckId}/cards/new`)}
          >
            <span className="oi oi-plus" /> Add Cards
          </button>
        </div>
        <div>
          <DeckScreenDeleteDeckButton deckId={deckId} />
        </div>
      </div>

      <div>
        <h3>Cards</h3>
        {/* Renders the cards in the deck and the edit card and delete card buttons */}
        <DeckCardComponent cards={cards} deckId={deckId} url={url} />
      </div>
    </div>
  );
}

export default DeckComponent;
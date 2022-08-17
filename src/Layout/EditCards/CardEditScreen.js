import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../utils/api/index";

import CardEditBreadCrumbNav from "./CardEditBreadCrumbNav";
import AddEditCardForm from "../AddEditCardForm";
import CardEditCancelButton from "./CardEditCancelButton";

function CardEditScreen() {
  const [deck, setDeck] = useState({});
  const [preExistingCard, setPreExistingCard] = useState({});
  const [frontCard, setFrontCard] = useState("");
  const [backCard, setBackCard] = useState("");

  const deckId = useParams().deckId;
  const cardId = useParams().cardId;
  const history = useHistory();

  useEffect(() => {
    // function to load the deck from the API
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
    }

    // function to load the card from the API
    async function loadCard() {
      const response = readCard(cardId);
      const cardFromAPI = await response;
      setPreExistingCard(cardFromAPI);
      setFrontCard(cardFromAPI.front);
      setBackCard(cardFromAPI.back);
    }
    loadDeck();
    loadCard();
  }, [deckId, cardId]);

  // handling form changes
  const handleFrontCardChange = (event) => setFrontCard(event.target.value);
  const handleBackCardChange = (event) => setBackCard(event.target.value);

  // Updating the card with the changes to the front and back of the card
  // Clicking submit will also then take the user back to that deck's screen
  const handleEditCardSubmit = (event) => {
    event.preventDefault();
    updateCard({ ...preExistingCard, front: frontCard, back: backCard })
      .then((updatedCard) => history.push(`/decks/${updatedCard.deckId}`));
  };

  return (
    <div>
      <CardEditBreadCrumbNav
        deckName={deck.name}
        deckId={deckId}
        cardId={cardId}
      />
      <h2>Edit Card</h2>
      <form onSubmit={handleEditCardSubmit}>
        <AddEditCardForm
          frontCard={frontCard}
          handleFrontCardChange={handleFrontCardChange}
          backCard={backCard}
          handleBackCardChange={handleBackCardChange}
        />
        <CardEditCancelButton deckId={deckId} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CardEditScreen;
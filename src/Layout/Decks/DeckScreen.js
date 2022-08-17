import React, { useEffect, useState } from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api/index";

import DeckScreenBreadCrumbNav from "./DeckScreenBreadCrumbNav";
import DeckComponent from "./DeckComponent";

function DeckScreen() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);

  const deckId = useParams().deckId;
  const { url } = useRouteMatch();

  // loading the specified deck from the API
  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
      setCards(deckFromAPI.cards);
    }
    loadDeck();
  }, [deckId]);

  // If the deck has been fetched from the API, the breadcrumb nav bar and deck info will display
  if (deck.name) {
    return (
      <div>
        <DeckScreenBreadCrumbNav deck={deck.name} />
        <Route path={url}>
          <DeckComponent
            deckName={deck.name}
            deckDescription={deck.description}
            deckId={deckId}
            cards={cards}
            url={url}
          />
        </Route>
      </div>
    );
  }
  return "Loading...";
}

export default DeckScreen;
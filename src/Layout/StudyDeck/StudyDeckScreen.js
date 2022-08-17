import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index";

import StudyDeckBreadCrumbNav from "./StudyDeckBreadCrumbNav";
import StudyCard from "./StudyCard";

function StudyDeckScreen() {
    // load decks, load cards, set current card
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState({});
    const deckId = useParams().deckId;

    // API: read deck with certain deckId, load cards from deck, set first card
    useEffect(() => {
        async function loadDeck() {
            const deckAPI = await readDeck(deckId);
            setDeck(deckAPI);
            setCards(deckAPI.cards);
            setCurrentCard(deckAPI.cards[0]);
        }
        loadDeck();
    }, [deckId]);

    return (
        <div>
        <StudyDeckBreadCrumbNav deckId={deckId} deck={deck}/>
        <h1>{deck.name}: Study</h1>
        <StudyCard cards={cards} currentCard={currentCard} setCurrentCard={setCurrentCard} deckId={deckId} />
        </div>
    );
}

export default StudyDeckScreen;
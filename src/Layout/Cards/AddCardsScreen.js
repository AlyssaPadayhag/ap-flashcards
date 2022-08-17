import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api/index";

import AddCardForm from "./AddCardForm";
import AddCardDoneButton from "./AddCardDoneButton";
import AddCardsScreenBreadCrumbNav from "./AddCardsScreenBreadCrumbNav";

function AddCardsScreen() {
    // load decks, set front and back card info
    const [deck, setDeck] = useState({});
    const [frontCard, setFrontCard] = useState("");
    const [backCard, setBackCard] = useState("");
    const deckId = useParams().deckId;

    //API: read deck with certain deckId, load cards from deck
    useEffect(() => {
        async function loadDeck() {
            const deckAPI = await readDeck(deckId);
            setDeck(deckAPI);
        }
        loadDeck();
    }, [deckId]);

    const handleFrontCardChange = (event) => setFrontCard(event.target.value);
    const handleBackCardChange = (event) => setBackCard(event.target.value);

    const handleAddCardSave = (event) => {
        event.preventDefault();
        createCard(deckId, { front: frontCard, back: backCard });
        setFrontCard("");
        setBackCard("");
    };


    if(deck.name) {
        return (
            <div>
                <AddCardsScreenBreadCrumbNav deckId={deckId} deck={deck} />
                <h2>{deck.name}: Add Card</h2>
                <form onSubmit={handleAddCardSave}>
                    <AddCardForm
                        frontCard={frontCard}
                        handleFrontCardChange={handleFrontCardChange}
                        backCard={backCard}
                        handleBackCardChange={handleBackCardChange}
                    />
                <AddCardDoneButton deckId={deckId} />
                <button type="submit" className="btn btn-primary">Save</button>    
                </form>
            </div>
        );
    }
    return "Loading...";
}

export default AddCardsScreen;
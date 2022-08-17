import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import AddCardsButton from "./AddCardsButton";
import FlipButton from "./FlipButton";
import NextButton from "./NextButton";

function StudyCard({ cards, currentCard, setCurrentCard, deckId }) {
    const [cardCount, setCardCount] = useState(1);
    const [isFrontOfCard, setIsFrontOfCard] = useState(true);

    const history = useHistory();
    const { url } = useRouteMatch();

    // # of cards and on which card
    const NextCardHandler = () => {
        if (cardCount < cards.length) {
          setIsFrontOfCard((currentSide) => !currentSide);
          setCurrentCard(cards[cardCount]);
          setCardCount((currentCount) => currentCount + 1);
        } else {
          if (
            window.confirm(
              "Restart cards? Click 'cancel' to return to the home page."
            )
          ) {
            setIsFrontOfCard((currentSide) => !currentSide);
            setCurrentCard(cards[0]);
            setCardCount(1);
            history.push(url);
          } else {
            history.push("/");
          }
        }
      };

    if(cardCount > cards.length) {
        return (
            <div>
                <h3>Not enough cards.</h3>
                <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
                <AddCardsButton deckId={deckId} />
            </div>
            
        );
    }

    
    if (isFrontOfCard) {
        return (
          <div className="deck-card card">
            <div className="card-body">
              <h5 className="card-title">
                Card {cardCount} of {cards.length}
              </h5>
              <p className="font-weight-bold font-italic mb-0">Front:</p>
              <p className="card-text">{currentCard.front}</p>
              <FlipButton setIsFrontOfCard={setIsFrontOfCard} />
            </div>
          </div>
        );
      }
      // Renders the back of the card and the "Flip" and "Next" buttons if isFrontOfCard is false
      return (
        <div className="deck-card card">
          <div className="card-body">
            <h5 className="card-title">
              Card {cardCount} of {cards.length}
            </h5>
            <p className="font-weight-bold font-italic mb-0">Back:</p>
            <p className="card-text">{currentCard.back}</p>
            <FlipButton setIsFrontOfCard={setIsFrontOfCard} />
            <NextButton NextCardHandler={NextCardHandler} />
          </div>
        </div>
      );
    }

export default StudyCard;
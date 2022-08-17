import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import HomeScreen from "./Home/HomeScreen";
import AddCardsScreen from "./Cards/AddCardsScreen";
import StudyDeckScreen from "./StudyDeck/StudyDeckScreen";
import DeckScreen from "./Decks/DeckScreen";
import NotFound from "./NotFound";
import NewDeckScreen from "./NewDeck/NewDeckScreen";
import CardEditScreen from "./EditCards/CardEditScreen"; 
import EditDeckScreen from "./EditDeck/EditDeckScreen";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">

      <Switch>

        <Route exact path="/">
          <HomeScreen />
        </Route>

        <Route path="/decks/new">
          <NewDeckScreen />
        </Route>

        <Route path="/decks/:deckId/cards/new">
          <AddCardsScreen />
        </Route>

        <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEditScreen />
        </Route>

        <Route path="/decks/:deckId/edit">
            <EditDeckScreen />
        </Route>

        <Route path="/decks/:deckId/study">
          <StudyDeckScreen />
        </Route>

        <Route path="/decks/:deckId">
          <DeckScreen />
        </Route>

        <Route>
          <NotFound />
        </Route>


      </Switch>

        
      </div>
    </div>
  );
}

export default Layout;

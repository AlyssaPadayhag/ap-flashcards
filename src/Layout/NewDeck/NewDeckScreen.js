import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api/index";

import NewDeckBreadCrumbNav from "./NewDeckBreadCrumbNav";
import NewDeckForm from "./NewDeckForm";

function NewDeckScreen() {
    const [newDeckName, setNewDeckName] = useState("");
    const [newDeckDescription, setNewDeckDescription] = useState("");
    const history = useHistory();

    const handleNewDeckNameChange = (event) => setNewDeckName(event.target.value);
    const handleNewDeckDescription = (event) => setNewDeckDescription(event.target.value);

    const handleNewDeckSubmit = (event) => {
        event.preventDefault();
        createDeck({
            name: newDeckName,
            descripiton: newDeckDescription,
        }).then((newDeck) => history.push(`/decks/${newDeck.id}`));
    };

    return (
        <div>
            <NewDeckBreadCrumbNav />
            <h1>Create Deck</h1>
            <NewDeckForm handleNewDeckSubmit={handleNewDeckSubmit}
            handleNewDeckNameChange={handleNewDeckNameChange}
            handleNewDeckDescription={handleNewDeckDescription}
            newDeckName={newDeckName}
            newDeckDescription={newDeckDescription} />
        </div>
    );
        
}

export default NewDeckScreen;
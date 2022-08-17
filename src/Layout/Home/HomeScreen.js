import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api/index";

import CreateDeckButton from "./CreateDeckButton";
import ViewDeckButton from "./ViewDeckButton";
import StudyDeckButton from "./StudyDeckButton";
import DeleteDeckButton from "./DeleteDeckButton";

function Home() {
    const [decks, setDecks] = useState([]);

    // load decks from API
    useEffect(() => {
        async function loadDecks() {
            const decksAPI = await listDecks();
            setDecks(decksAPI);
        }
        loadDecks();
    }, []);

    return (
        <>
        <div className="mb-2">
            <CreateDeckButton />
        </div>
            

            {decks.map((deck, index) => {
                return (
                    <div className="card mb-1" key={index}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">{deck.name}</h5>
                                <h6 className="card-subtitle text-muted">{deck.cards.length} cards</h6>
                            </div>
                            <p className="card-text">{deck.description}</p>
                            <div className="d-flex">
                                <div className="mr-2">
                                    <ViewDeckButton deck={deck} />
                                </div>
                                <div className="mr-2">
                                    <StudyDeckButton deck={deck} />
                                </div>
                                <div className="ml-auto">
                                    <DeleteDeckButton deck={deck} />
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Home;
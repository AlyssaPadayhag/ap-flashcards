import React from "react";
import NewDeckCancelButton from "./NewDeckCancelButton";

function NewDeckForm({ handleNewDeckSubmit, handleNewDeckNameChange, handleNewDeckDescription, newDeckName, newDeckDescription }) {
    return (
        <div>
            <form onSubmit={handleNewDeckSubmit}>
            <div className="form-group">
                <label htmlFor="newDeckName">Name</label>
                <input
                    id="newDeckName"
                    type="text"
                    name="deckName"
                    className="form-control"
                    placeholder="Deck Name"
                    onChange={handleNewDeckNameChange}
                    value={newDeckName}
                />
            </div>
            <div className="form-group">
                <label htmlFor="newDeckDescription">Back</label>
                <textarea
                    id="newDeckDescription"
                    name="newDeckDescription"
                    className="form-control"
                    placeholder="Brief Description of the deck"
                    rows="3"
                    onChange={handleNewDeckDescription}
                    value={newDeckDescription}
                />
            </div>
            <NewDeckCancelButton />
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
        </div>
    );
}

export default NewDeckForm;
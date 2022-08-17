import React from "react";

function EditCardForm({ frontCard, handleFrontCardChange, backCard, handleBackCardChange }) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="frontCard">Front</label>
                <textarea
                    id="fontCard"
                    name="frontCard"
                    className="form-control"
                    placeholder="Front side of card"
                    rows="3"
                    onChange={handleFrontCardChange}
                    value={frontCard}
                />
            </div>
            <div className="form-group">
                <label htmlFor="backCard">Back</label>
                <textarea
                    id="backCard"
                    name="backCard"
                    className="form-control"
                    placeholder="Back side of card"
                    rows="3"
                    onChange={handleBackCardChange}
                    value={backCard}
                />
            </div>
        </form>
    );
}

export default EditCardForm;
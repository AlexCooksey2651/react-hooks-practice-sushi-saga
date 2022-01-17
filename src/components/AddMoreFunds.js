import React from "react";

function AddMoreFunds({ addMoreMoney }) {
    function handleSubmit(event) {
        event.preventDefault()
        const funds = parseInt(event.target["addMoney"].value)
        addMoreMoney(funds)
        event.target.reset()
    }
    
    return (
        <form className="addFunds" onSubmit={handleSubmit}>
            <label>
                Add Funds Here:
                <br />
                <input 
                id="addMoney"
                name="addMoney"
                type="number"
                placeholder="Enter amount here"
                />
            </label>
            <button type="submit">Add Funds</button>
        </form>
    )
}

export default AddMoreFunds;
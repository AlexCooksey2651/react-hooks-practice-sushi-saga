import React from "react";
import AddMoreFunds from "./AddMoreFunds"

function Table({ plates, moneyRemaining, addMoreMoney }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${moneyRemaining} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
      <br />
      <div className="addFundsForm">
        <AddMoreFunds addMoreMoney={addMoreMoney}/>
      </div>
    </>
  );
}

export default Table;

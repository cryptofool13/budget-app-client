import React from "react";
import { Field } from "redux-form";

const FundsInit = ({ onAdd }) => {
  return (
    <>
      <h3>Start by entering your funds info</h3>
      <fieldset>
        <label htmlFor="name">Name</label>
        <Field
          name="name"
          autoComplete="off"
          component="input"
          placeholder="ex: Checking"
          type="text"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="balance">Balance</label>
        <Field name="balance" component="input" type="number" />
      </fieldset>
      <button className="add-button" onClick={onAdd}>
        Add
      </button>
    </>
  );
};

export default FundsInit;

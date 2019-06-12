import React from "react";
import { Field, reduxForm } from "redux-form";

const ExpenseInit = () => {
  const handleSubmit = () => {};
  return (
    <>
      <h3>Now enter some expenses</h3>
      <fieldset>
        <label htmlFor="label">Label</label>
        <Field
          name="label"
          autoComplete="off"
          component="input"
          placeholder="ex: Rent"
          type="text"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="cost">Cost</label>
        <Field name="cost" component="input" type="number" />
      </fieldset>
    </>
  );
};

export default ExpenseInit;

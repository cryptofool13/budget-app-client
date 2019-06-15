import React from "react";
import { Field, reduxForm } from "redux-form";

import ExpenseInit from "./ExpenseInit.jsx";
import { isEmpty } from "../../utils";

const ExpenseForm = props => {
  const { handleSubmit, newItems, handleAdd, expenses } = props;

  const onSubmit = () => {
    console.log(newItems);
  };
  const onAdd = formProps => {
    let temp = newItems;
    temp.push(formProps);
    handleAdd(temp);
    onSubmit();
  };
  const renderPrompts = () => {
    if (isEmpty(expenses)) {
      return <ExpenseInit />;
    }
    return (
      <>
        <fieldset>
          <label>Label</label>
          <Field
            name="label"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Cost</label>
          <Field name="cost" type="number" component="input" />
        </fieldset>
      </>
    );
  };
  return (
    <form onSubmit={handleSubmit(onAdd)}>
      <h3 className="form-title">Expenses</h3>
      {renderPrompts()}
      <button className="btn add-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default reduxForm({ form: "updateExpenses" })(ExpenseForm);

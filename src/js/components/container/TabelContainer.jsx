import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Accounts from "../presentational/Accounts.jsx";
import Spending from "../presentational/Spending.jsx";
import * as actions from "../../actions";

const TabelContainer = props => {
  const [funds, setFunds] = useState([]);
  useEffect(() => setFunds(fetchfunds()), [funds]);

  const [expenses, setExpenses] = useState([]);
  useEffect(() => setExpenses(fetchExpenses()), [expenses]);

  const fetchfunds = () => {
    props.getTableFunds();
  };

  const fetchExpenses = () => {
    props.getTableExpenses();
  };

  const renderFRows = data => {
    if (props.fundsError) {
      return (
        <tr className="warning-row">
          <td>{props.fundsError}</td>
        </tr>
      );
    }
    if (!data[0]) {
      return (
        <tr>
          <th>loading...</th>
        </tr>
      );
    }

    return data.map(item => (
      <tr className="data-row" key={item._id}>
        <td>{item.name}</td>
        <td>{item.balance}</td>
      </tr>
    ));
  };

  const renderSRows = data => {
    if (props.expenseError)
      return (
        <tr className="warning-row">
          <td>{props.expenseError}</td>
        </tr>
      );

    if (!data[0])
      return (
        <tr>
          <th>loading...</th>
        </tr>
      );

    return data.map(item => (
      <tr className="data-row" key={item._id}>
        <td>{item.label}</td>
        <td>{item.cost}</td>
      </tr>
    ));
  };

  return (
    <section className="tables">
      <Accounts renderRows={renderFRows} accounts={props.funds} />

      <Spending renderRows={renderSRows} expenses={props.expenses} />
      {props.children}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    funds: state.funds.tableData,
    expenses: state.expenses.tableData,
    fundsError: state.funds.errorMessage,
    expenseError: state.expenses.errorMessage
  };
};

export default connect(
  mapStateToProps,
  actions
)(TabelContainer);

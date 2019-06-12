import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import FundsChart from "../presentational/charts/FundsChart.jsx";
import ExpenseChart from "../presentational/charts/ExpenseChart.jsx";

const ChartContainer = props => {
  useEffect(() => {
    props.getChartFunds();
    props.getChartExpenses();
  }, []);

  return (
    <section className="charts">
      <ExpenseChart data={props.pieData} />
      <FundsChart data={props.lineData} />
    </section>
  );
};

const mapStateToProps = state => {
  return {
    lineData: state.funds.chartData,
    pieData: state.expenses.chartData
  };
};

export default connect(
  mapStateToProps,
  actions
)(ChartContainer);

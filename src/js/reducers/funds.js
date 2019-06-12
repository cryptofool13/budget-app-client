import { FUND_DATA_ERROR, FUNDS_CHART, FUNDS_TABLE } from "../actions/types";

const INIT_STATE = {
  tableData: [],
  chartData: [],
  errorMessage: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FUNDS_TABLE:
      return { ...state, tableData: action.payload };
    case FUNDS_CHART:
      return { ...state, chartData: action.payload };
    case FUND_DATA_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

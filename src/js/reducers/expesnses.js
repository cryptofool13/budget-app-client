import {
  EXPENSE_TABLE,
  EXPENSE_CHART,
  EXPENSE_DATA_ERROR
} from "../actions/types";

const INIT_STATE = {
  tableData: [],
  chartData: [],
  errorMessage: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EXPENSE_TABLE:
      return { ...state, tableData: action.payload };
    case EXPENSE_DATA_ERROR:
      return { ...state, errorMessage: action.payload };
    case EXPENSE_CHART:
      return { ...state, chartData: action.payload };
    default:
      return state;
  }
};

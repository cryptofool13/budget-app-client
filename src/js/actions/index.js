//  http://localhost:8001
// https://budgetbackend.herokuapp.com

import axios from 'axios';

import {
  AUTH_USER,
  AUTH_ERROR,
  FUNDS_CHART,
  EXPENSE_TABLE,
  EXPENSE_CHART,
  FUNDS_TABLE,
  FUND_DATA_ERROR,
  EXPENSE_DATA_ERROR,
} from './types';

export const signup = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:8001/api/signup',
      formProps
    );

    dispatch({type: AUTH_USER, payload: response.data.token});
    localStorage.setItem('token', response.data.token);
    cb();
  } catch (e) {
    dispatch({type: AUTH_ERROR, payload: 'Email in use'});
  }
};

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: '',
  };
};

export const signin = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:8001/api/signin',
      formProps
    );

    dispatch({type: AUTH_USER, payload: response.data.token});
    localStorage.setItem('token', response.data.token);
    cb();
  } catch (e) {
    dispatch({type: AUTH_ERROR, payload: 'Invalid login credentials'});
  }
};

export const resetAuthError = () => dispatch => {
  dispatch({type: AUTH_ERROR, payload: ''});
};

export const getTableFunds = () => async dispatch => {
  try {
    let token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:8001/api/funds', {
      headers: {Authorization: token},
    });

    if (response.data.error) {
      return dispatch({type: FUND_DATA_ERROR, payload: response.data.error});
    }
    return dispatch({type: FUNDS_TABLE, payload: response.data});
  } catch (e) {
    return dispatch({
      type: FUND_DATA_ERROR,
      payload: 'something went wrong fetching the data',
    });
    console.log(e);
  }
};

export const getChartFunds = () => async dispatch => {
  try {
    let token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:8001/api/funds/data', {
      headers: {Authorization: token},
    });

    if (response.data.error) {
      return dispatch({type: FUND_DATA_ERROR, payload: response.data.error});
    }
    return dispatch({type: FUNDS_CHART, payload: response.data});
  } catch (e) {
    dispatch({
      type: FUND_DATA_ERROR,
      payload: 'something went wrong fetching the data',
    });
    console.log(e);
  }
};

export const getTableExpenses = () => async dispatch => {
  try {
    let token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:8001/api/spending/ls', {
      headers: {Authorization: token},
    });

    if (response.data.error) {
      return dispatch({
        type: EXPENSE_DATA_ERROR,
        payload: response.data.error,
      });
    }
    return dispatch({type: EXPENSE_TABLE, payload: response.data});
  } catch (e) {
    dispatch({
      type: EXPENSE_DATA_ERROR,
      payload: 'something went wrong fetching the data',
    });
    console.log(e);
  }
};

export const addFunds = formProps => async dispatch => {
  try {
    let token = localStorage.getItem('token');
    let entry = [];
    for (let item in formProps) {
      let acct = {name: item, balance: formProps[item]};
      entry.push(acct);
    }
    const response = axios.post(
      'http://localhost:8001/api/funds',
      {funds: entry},
      {
        headers: {Authorization: token},
      }
    );
  } catch (e) {
    dispatch({
      type: FUND_DATA_ERROR,
      payload: `something went wrong posting to http://localhost:8001/api/funds: ${e}`,
    });
  }
};

export const seedFunds = formProps => async dispatch => {
  try {
    let token = localStorage.getItem('token');

    const response = axios.post(
      'http://localhost:8001/api/funds',
      {funds: formProps},
      {
        headers: {Authorization: token},
      }
    );
  } catch (e) {
    dispatch({
      type: FUND_DATA_ERROR,
      payload: `something went wrong posting to http://localhost:8001/api/funds: ${e}`,
    });
  }
};

export const queueExpenseData = formProps => async dispatch => {
  try {
    let token = localStorage.getItem('token');
    let entry = [];
    for (let item in formProps) {
      entry.push(formProps[item]);
    }
    axios.post(
      'http://localhost:8001/api/spending',
      {expenses: entry},
      {
        headers: {Authorization: token},
      }
    );
  } catch (e) {
    dispatch({
      type: EXPENSE_DATA_ERROR,
      payload: `something went wrong posting to http://localhost:8001/api/spending: ${e}`,
    });
  }
};

// write chart expenses action creator
export const getChartExpenses = () => async dispatch => {
  try {
    let token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:8001/api/spending/set', {
      headers: {Authorization: token},
    });

    if (response.data.error) {
      return dispatch({
        type: EXPENSE_DATA_ERROR,
        payload: response.data.error,
      });
    }
    return dispatch({type: EXPENSE_CHART, payload: response.data});
  } catch (e) {
    dispatch({
      type: FUND_DATA_ERROR,
      payload: 'something went wrong fetching the data',
    });
    console.log(e);
  }
};

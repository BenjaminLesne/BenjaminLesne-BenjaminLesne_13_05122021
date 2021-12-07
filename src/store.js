import { createStore } from "redux";

/**
 * action type definition
 * @typedef {Object} action
 * @property {string} type - this string allows to know what to do with this action.
 * @property {*} [payload]
 */

const initialState = {
  isConnected: false,
  firstName: "Tony",
  lastName: "Couille",
  lightMode: false,
};

/**
 * @function reducer - there are only 4 actions... so using combineReducers, createSlice etc was a bit overkill to me.
 * @param {Object} state - the redux state
 * @param {action} action - an object with at least a type: "actionToGive"
 * @returns {Object} - the new state after an action has been done to it.
 */

function reducer(state = initialState, action) {
  if (action.type === "handleIsConnected") {
    return { ...state, isConnected: !state.isConnected };
  }

  if (action.type === "addPayloadToState") {
    return { ...state, ...action.payload };
  }

  if (action.type === "changeLightMode") {
    return { ...state, lightMode: action.payload };
  }

  if (action.type === "updateUserData") {
    return { ...state, ...action.payload };
  }

  return state;
}

export const store = createStore(reducer);

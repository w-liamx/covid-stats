import {
    VALUE_REQUEST,
    VALUE_SUCCESS,
    VALUE_FAIL,
  } from "../types/actionTypes";
  
  function globalStatsReducer(state = { stats: {} }, action) {
    switch (action.type) {
      case VALUE_REQUEST:
        return { loading: true };
      case VALUE_SUCCESS:
        return { loading: false, stats: action.payload };
      case VALUE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  export { globalStatsReducer };

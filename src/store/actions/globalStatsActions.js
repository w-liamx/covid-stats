import {
    VALUE_REQUEST,
    VALUE_SUCCESS,
    VALUE_FAIL,
  } from "../types/actionTypes";
  import axios from "axios";
  
  const fillStats = () => async (dispatch) => {
    try {
      dispatch({type: VALUE_REQUEST});
      const { data } = await axios.get("https://corona.lmao.ninja/v2/all?yesterday=true");
      dispatch({ type: VALUE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: VALUE_FAIL, payload: error.message });
    }
  };
  
  export {fillStats}
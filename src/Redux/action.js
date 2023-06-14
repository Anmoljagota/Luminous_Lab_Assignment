import {
  USER_DETAILS_LOADING,
  USER_DETAILS_SUCCESS,
  USER_DELETE_LOADING,
  USER_DELETE_SUCCESS,
} from "./actionTypes";

const MainUserDetailsFunction = (data) => (dispatch) => {
  console.log("i am data", data);
  dispatch({ type: USER_DETAILS_LOADING });
  dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
};

//This function is made for Delete the particular user
const Deleteuser = (data) => (dispatch) => {
  console.log("i am data", data);
  dispatch({ type: USER_DELETE_LOADING });
  dispatch({ type: USER_DELETE_SUCCESS, payload: data });
};
export { MainUserDetailsFunction, Deleteuser };

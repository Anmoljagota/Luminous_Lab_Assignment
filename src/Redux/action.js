import {
  USER_DETAILS_LOADING,
  USER_DETAILS_SUCCESS
} from "./actionTypes";

const MainUserDetailsFunction =  (data) => (dispatch) => {
    console.log("i am data",data)
  dispatch({ type: USER_DETAILS_LOADING });
  dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
 
};
export { MainUserDetailsFunction };

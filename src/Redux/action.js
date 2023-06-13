import {
  USER_DETAILS_LOADING,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_ERROR,
} from "./actionTypes";

//if the details of the user are fetching
const userDetailsLoading = () => {
  return {
    type: USER_DETAILS_LOADING,
  };
};
//if the details of the users are sucessfully fetched
const userDetailsSuccess = (payload) => {
  return {
    type: USER_DETAILS_SUCCESS,
    payload,
  };
};

// if there is any error to get users details
const userDetailsError = () => {
  return {
    type: USER_DETAILS_ERROR,
  };
};

const MainUserDetailsFunction = async (dispatch) => (data) => {
  dispatch(userDetailsLoading());
  try {
    dispatch(userDetailsSuccess(data));
  } catch {
    dispatch(userDetailsError());
  }
};
export {MainUserDetailsFunction}
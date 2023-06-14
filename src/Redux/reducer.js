import {
  USER_DETAILS_LOADING,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_ERROR,
  USER_DELETE_LOADING,
  USER_DELETE_SUCCESS,
  USER_DELETE_ERROR,
} from "./actionTypes";
const initila_state = {
  loading: false,
  error: false,
  userdata: [],
};

const reducer = (state = initila_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_DETAILS_LOADING:
      return { ...state, loading: true, error: false };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        userdata: [...state.userdata, payload],
      };
    case USER_DETAILS_ERROR:
      return { ...state, loading: false, error: true };
    case USER_DELETE_LOADING:
      return { ...state, loading: true, error: false };
    case USER_DELETE_SUCCESS:
      return { ...state, loading: false, error: false, userdata: payload };
    case USER_DELETE_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
export { reducer };

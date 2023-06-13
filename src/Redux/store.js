import { reducer } from "./reducer";
import { legacy_createStore, applyMiddleware } from "redux";
const custommiddleware = (store) => (next) => (action) => {
    if (typeof action === "function") {
      return action(store.dispatch);
    }
    return next(action);
  };
const store = legacy_createStore(reducer, applyMiddleware(custommiddleware));
export { store };

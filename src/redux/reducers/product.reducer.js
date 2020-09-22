import * as types from "../types";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const INITIAL_STATE = {
  products: [],
  product: {},
  error: {},
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
      };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case types.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}; 

const persistConfig = {
  key: "products",
  storage,
  whitelist: ["products"],
};


export default persistReducer(persistConfig, productReducer);

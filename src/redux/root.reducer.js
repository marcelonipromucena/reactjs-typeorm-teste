import { combineReducers } from "redux";

import productReducer from "./reducers/product.reducer";

const rootReducer = combineReducers({
  productReducer,
});

export default rootReducer;

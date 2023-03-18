import { combineReducers } from "redux";
// import categoryReducer from "./categoryReducer";
import { charactersListReducer } from "./categoryReducer/charactersReducer";
export const rootReducer = combineReducers({ charactersListReducer });

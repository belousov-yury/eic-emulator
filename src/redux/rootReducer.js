import {combineReducers} from "redux";
import {complexInformationReducer} from "./complexInformationReducer";

export const rootReducer = combineReducers({
  complexInformation: complexInformationReducer
})
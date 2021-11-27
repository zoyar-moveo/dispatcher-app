import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter";
import sourcesReducer from "./sources";
import dataReducer from "./data";
import endPointReducer from "./endPoint";
import filterEverythingReducer from "./filterEverything";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    sources: sourcesReducer,
    data: dataReducer,
    endPoint: endPointReducer,
    filterEverything: filterEverythingReducer,
  },
});

export default store;

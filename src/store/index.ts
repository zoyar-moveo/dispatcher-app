import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter";
import sourcesReducer from "./sources";
import dataReducer from "./data";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    sources: sourcesReducer,
    data: dataReducer,
  },
});

export default store;

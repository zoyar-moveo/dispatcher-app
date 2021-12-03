import { createSlice } from "@reduxjs/toolkit";
import { getSources } from "../services/ApiData";

const initialSourcessState = {
  sources: [],
  // sources: () => getSources(),
};

const sourcesSlice = createSlice({
  name: "sources",
  initialState: initialSourcessState,
  reducers: {
    updateSources(state, action) {
      state.sources = action.payload;
    },
  },
});

export const sourcesActions = sourcesSlice.actions;

export default sourcesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialSourcessState = {
  sources: [],
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

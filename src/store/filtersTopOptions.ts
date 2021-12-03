import { createSlice } from "@reduxjs/toolkit";

// { Country: [filterTopData[0].Country, false] },
// { Category: [filterTopData[1].Category, false] },
// { Sources: [[], false] },

const initialSourcesState = {};

const filtersOptionsSlice = createSlice({
  name: "filtersOptions",
  initialState: initialSourcesState,
  reducers: {
    updateEndPoint(state, action) {
      // state.endPoint = action.payload;
    },
  },
});

export const filtersOptionsActions = filtersOptionsSlice.actions;

export default filtersOptionsSlice.reducer;

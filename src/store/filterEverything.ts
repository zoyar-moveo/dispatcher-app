import { createSlice } from "@reduxjs/toolkit";
interface TFilters {
  filter: {
    Sources: string;
    Language: string;
    Dates: string[];
  };
  searchQ: string;
}
const initialFiltersState: TFilters = {
  filter: {
    Sources: "",
    Language: "",
    Dates: [],
  },
  searchQ: "",
};

const filterEverythingSlice = createSlice({
  name: "filterEverything",
  initialState: initialFiltersState,
  reducers: {
    updateSource(state, action) {
      state.filter.Sources = action.payload;
    },
    updateLanguage(state, action) {
      state.filter.Language = action.payload;
    },
    updateDates(state, action) {
      state.filter.Dates = action.payload;
    },
    updateSearchQ(state, action) {
      state.searchQ = action.payload;
    },
  },
});

export const filterEverythingActions = filterEverythingSlice.actions;

export default filterEverythingSlice.reducer;

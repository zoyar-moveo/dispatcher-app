import { createSlice } from "@reduxjs/toolkit";
interface TFilters {
  filter: {
    Sources: string;
    Language: string;
    Dates: string[];
    SortBy: string;
  };
  searchQ: string;
}
const initialFiltersState: TFilters = {
  filter: {
    Sources: "",
    Language: "",
    Dates: [],
    SortBy: "",
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
    updateSortBy(state, action) {
      state.filter.SortBy = action.payload;
    },
  },
});

export const filterEverythingActions = filterEverythingSlice.actions;

export default filterEverythingSlice.reducer;

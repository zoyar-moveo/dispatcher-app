import { createSlice } from "@reduxjs/toolkit";
interface TFilters {
  filter: {
    Sources: string;
    Country: string;
    Category: string;
  };
  searchQ: string;
}
const initialFiltersState: TFilters = {
  filter: {
    Sources: "",
    Country: "il",
    Category: "",
  },
  searchQ: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFiltersState,
  reducers: {
    updateSource(state, action) {
      state.filter.Sources = action.payload;
    },
    updateCountry(state, action) {
      state.filter.Country = action.payload;
    },
    updateCategory(state, action) {
      state.filter.Category = action.payload;
    },
    updateSearchQ(state, action) {
      state.searchQ = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
interface TFilters {
  filter: {
    Source: string;
    Country: string;
    Category: string;
  };
}
const initialFiltersState: TFilters = {
  filter: {
    Source: "",
    Country: "",
    Category: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFiltersState,
  reducers: {
    updateSource(state, action) {
      state.filter.Source = action.payload;
    },
    updateCountry(state, action) {
      state.filter.Country = action.payload;
    },
    updateCategory(state, action) {
      state.filter.Category = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;

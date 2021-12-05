import { createSlice } from "@reduxjs/toolkit";
import makeGetRequest, { getSources } from "../services/ApiData";

const initialDataState: any = {
  data: [],
  totalResults: null,
  isLoading: true,
  page: 1,
  resStatus: null,
  title: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    updateTotalResults(state, action) {
      state.totalResults = action.payload;
    },
    updateData(state, action) {
      state.data = action.payload;
    },
    updateIsLoading(state, action) {
      state.isLoading = action.payload; //
    },
    addData(state, action) {
      state.data = [...state.data, ...action.payload];
    },
    updatePage(state, action) {
      state.page = action.payload;
    },
    updateResStatus(state, action) {
      state.resStatus = action.payload;
    },
    updateTitle(state, action) {
      state.title = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;

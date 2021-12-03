import { createSlice } from "@reduxjs/toolkit";
import makeGetRequest from "../services/ApiData";
import getSourcesMap from "../utiles/getSourcesMap";

const getInitialData = async () => {
  let res = await makeGetRequest(
    {
      filter: {
        Country: "us",
        Category: "",
        Sources: "",
      },
      searchQ: "",
    },
    "top-headlines",
    1
  );
  return res.status === 200 ? res.data.articles : [];
};

const initialDataState: any = {
  data: [],
  totalResults: null,
  isLoading: true,
  page: 1,
  resStatus: null,
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
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;

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
  page: 1,
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    updateData(state, action) {
      state.data = action.payload;
    },
    updatePage(state, action) {
      state.page = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;

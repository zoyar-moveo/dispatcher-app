import { createSlice } from "@reduxjs/toolkit";
import makeGetRequest from "../services/ApiData";
import getSourcesMap from "../utiles/getSourcesMap";

const getInitialData = async () => {
  let res = await makeGetRequest(
    {
      filter: {
        Country: "il",
        Category: "",
        Sources: "",
      },
      searchQ: "",
    },
    "top-headlines"
  );
  return res.status === 200 ? res.data.articles : [];
};

const initialDataState: any = {
  data: getInitialData(),
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    updateData(state, action) {
      state.data = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;

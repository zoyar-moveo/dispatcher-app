import { createSlice } from "@reduxjs/toolkit";

const initialDataState: any = {
  data: [],
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

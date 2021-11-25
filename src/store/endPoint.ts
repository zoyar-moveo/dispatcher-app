import { createSlice } from "@reduxjs/toolkit";

const initialSourcessState: { endPoint: string } = {
  // endPoint: "Everything",
  endPoint: "top-headlines",
};

const endPointSlice = createSlice({
  name: "endPoint",
  initialState: initialSourcessState,
  reducers: {
    updateEndPoint(state, action) {
      state.endPoint = action.payload;
    },
  },
});

export const endPointActions = endPointSlice.actions;

export default endPointSlice.reducer;

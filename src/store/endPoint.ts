import { createSlice } from "@reduxjs/toolkit";
import { endPointTypes } from "../utiles/endPoint.types";

const initialSourcessState: { endPoint: string } = {
  endPoint: endPointTypes.TOP_HEADLINES,
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

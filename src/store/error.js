import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: { error: false },
  reducers: {
    setError(state, action) {
      debugger;
      state.error = action.payload;
    },
  },
});

export const errorActions = errorSlice.actions;
export default errorSlice.reducer;

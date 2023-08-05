import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export default pageSlice.reducer;
export const { setPage } = pageSlice.actions;

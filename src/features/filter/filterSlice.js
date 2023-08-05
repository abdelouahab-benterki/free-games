import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  platform: "all",
  category: "",
  sortby: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterChange: {
      reducer(state, action) {
        const { name, value } = action.payload;
        state[name] = value;
      },
      prepare(args) {
        return {
          payload: args,
        };
      },
    },
  },
});

export default filterSlice.reducer;
export const { filterChange } = filterSlice.actions;

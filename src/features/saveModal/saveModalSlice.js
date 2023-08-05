import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
};

const saveModalSlice = createSlice({
  name: "saveModal",
  initialState,
  reducers: {
    showModal(state) {
      state.visible = true;
    },
    hideModal(state) {
      state.visible = false;
    },
  },
});

export default saveModalSlice.reducer;
export const { showModal, hideModal } = saveModalSlice.actions;

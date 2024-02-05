import { createSlice } from "@reduxjs/toolkit";

const initialState = { isModalOpen: false, creatModal: true };

export const modalWindowSlice = createSlice({
  name: "modalWindowState",
  initialState,
  reducers: {
    switchModalState: (state, action) => {
      if (state.isModalOpen === false) {
        state.isModalOpen = true;
      } else {
        state.isModalOpen = false;
      }
      if (action.payload !== undefined) {
        state.creatModal = action.payload;
      }
    },
  },
});

export const { switchModalState } = modalWindowSlice.actions;

export default modalWindowSlice.reducer;

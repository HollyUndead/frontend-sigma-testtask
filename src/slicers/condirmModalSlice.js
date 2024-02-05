import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

export const condirmModalSlice = createSlice({
  name: "condirmModal",
  initialState,
  reducers: {
    switchCondirmModalState: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { switchCondirmModalState } = condirmModalSlice.actions;

export default condirmModalSlice.reducer;

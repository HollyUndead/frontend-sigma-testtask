import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchString: "",
  searchField: "firstname",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    setSearchField: (state, action) => {
      state.searchField = action.payload;
    },
  },
});

export const { setSearchString, setSearchField } = searchSlice.actions;

export default searchSlice.reducer;

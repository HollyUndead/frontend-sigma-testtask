import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../redux/thunk";

const initialState = {
  firstname: "",
  lastname: "",
  age: null,
  phonenumber: "",
};

export const userSlice = createSlice({
  name: "userObj",
  initialState,
  reducers: {
    reset: (state, action) => {
      const keys = Object.keys(initialState);
      keys.forEach((el) => {
        state[el] = initialState[el];
      });
    },
    changeValueFromField: (state, action) => {
      state[action.payload.fieldname] = action.payload.field;
    },
    getUserFromArr: (state, action) => {
      const findUser = action.payload.userList.find(
        (el) => el.id === action.payload.id
      );
      Object.keys(findUser).forEach((el) => {
        state[el] = findUser[el];
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      const keysArr = Object.keys(action.payload.message);
      keysArr.forEach((element) => {
        state[element] = action.payload.message[element];
      });
    });
  },
});

export const { changeValueFromField, getUserFromArr, reset } =
  userSlice.actions;

export default userSlice.reducer;

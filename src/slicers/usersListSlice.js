import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, fetchUsers, updateUser } from "../redux/thunk";

const initialState = {
  userlist: [],
  errors: [],
  isLoading: true,
};

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    getUserList: (state, action) => {
      fetchUsers();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userlist = action.payload.message;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.userlist.findIndex(
          (element) => element.id === action.payload.message
        );
        if (index > -1) {
          state.userlist.splice(index, 1);
        }
      })
      .addCase(createUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.status === 200) {
          state.userlist.push(action.payload.data);
        } else {
          state.errors = action.payload.data;
        }
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.userlist.findIndex(
          (element) => element.id === action.payload.id
        );
        if (index > -1) {
          state.userlist.splice(index, 1, action.payload);
        }
      });
  },
});

export const {
  getUserList,
  setUserList,
  deleteUserFromList,
  addUserToList,
  changeUserInList,
} = userListSlice.actions;

export default userListSlice.reducer;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../slicers/userSlice";
import userListSlice from "../slicers/usersListSlice";
import modalwindowSlice from "../slicers/modalwindowSlice";
import searchSlice from "../slicers/searchSlice";
import condirmModalSlice from "../slicers/condirmModalSlice";

const combinedRedusers = combineReducers({
  userlist: userListSlice,
  user: userSlice,
  modalstate: modalwindowSlice,
  search: searchSlice,
  condirmModal: condirmModalSlice,
});

export const store = configureStore({ reducer: combinedRedusers });

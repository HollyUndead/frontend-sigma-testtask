import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

export const fetchUsers = createAsyncThunk("/users", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const createUser = createAsyncThunk(
  "/createUser",
  async (userObj, thunkAPI) => {
    try {
      const response = await axios.post("/createUser", userObj);
      return { data: response.data.message, status: response.status };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "/deletUser",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.delete(`/deletUser/${userId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "/updateUser",
  async (userObj, thunkAPI) => {
    try {
      const response = await axios.put("/updateUser", userObj);
      return response.data.message;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getUser = createAsyncThunk("/userId", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/userId/${id}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

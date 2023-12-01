// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    role: null,
    name: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    getRole: (state, { payload }) => {
      const role = localStorage.getItem("role");

      state.role = role;
    },
    getName: (state, { payload }) => {
      const name = localStorage.getItem("name");
      state.name = name;
    },
    getUserID: (state, { payload }) => {
      const userId = localStorage.getItem("userId");
      state.name = userId;
    },
  },
});

export const { setUser, getName, getRole, getUserID } = authSlice.actions;
export const authReducer = authSlice.reducer;

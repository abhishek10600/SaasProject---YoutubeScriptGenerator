"use client";

import { getUserInfo } from "@/services/AuthService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { getState }) => {
    const token = getState().auth.token;

    const res = await getUserInfo(token);
    return res;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      if (typeof window !== "undefined") {
        localStorage.setItem("token", action.payload);
      }
    },
    logout: (state) => {
      state.token = "";
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
    loadTokenFromStorage: (state) => {
      const token =
        typeof window !== "undefined" && localStorage.getItem("token");
      if (token) {
        state.token = token;
        state.isAuthenticated = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setToken, logout, loadTokenFromStorage } = authSlice.actions;
export default authSlice.reducer;

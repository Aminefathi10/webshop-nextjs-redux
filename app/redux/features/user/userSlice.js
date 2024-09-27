import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignedIn: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    userSignedOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const selectUser = state => state.user;

export const { userSignedIn, userSignedOut } = userSlice.actions;
export default userSlice.reducer;

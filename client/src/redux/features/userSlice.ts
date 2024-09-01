import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserModel } from "../models/user.model";

const initialState: { selectedUser: IUserModel } = {
  selectedUser: localStorage["currentUser"]
    ? JSON.parse(localStorage["currentUser"] || "")
    : {},
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,

  // actions to change the state
  reducers: {
    onLogin: (state, action: PayloadAction<IUserModel>) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { onLogin } = userSlice.actions;
export default userSlice.reducer;

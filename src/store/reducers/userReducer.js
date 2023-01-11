import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    adduser(users, action) {
      users.push(action.payload);
    },
    removeuser(users, action) {
      users.splice(action.payload, 1);
    },
  },
});

export const { adduser, removeuser } = userSlice.actions;
export default userSlice.reducer;

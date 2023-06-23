
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useState } from "react";


const initialState = {
  value: false,
  user:
    Cookies.get("log") === undefined ? false : JSON.parse(Cookies.get("log")),
};
// , id: Cookies.get('au')

const taskslice = createSlice({
  name: "use",
  initialState,
  reducers: {
    eves(state, action) {
      console.log(action);
      state.value = action.payload;
    },
    // mailid(state, action) {
    //   console.log(action);
    //   state.id = action.payload;

    // },
    loginid(state, action) {
      console.log(action);
      state.user = action.payload;

    },
  },
});
// , mailid
export const { eves, loginid } = taskslice.actions;
export default taskslice.reducer;

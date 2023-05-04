import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./todoSlice";

const store = configureStore({
  //for multiple reducers
  reducer: { todos: todoSlice },
  //for single reducers
  // reducer: counterSlice.reducer
});

export default store;

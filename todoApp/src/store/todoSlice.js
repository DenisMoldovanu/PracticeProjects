import { createSlice } from "@reduxjs/toolkit";

const initialTodoState = { todo: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    removeTodo(state, action) {
      state.todo = action.payload;
    },
    addTodo(state, action) {
      state.todo = [...state.todo, action.payload];
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;

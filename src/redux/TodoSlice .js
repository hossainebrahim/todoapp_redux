import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date().getTime().toString(),
        name: action.payload.task,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;

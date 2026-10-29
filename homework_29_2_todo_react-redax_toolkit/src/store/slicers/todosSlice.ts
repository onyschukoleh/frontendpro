import { createSlice, nanoid } from "@reduxjs/toolkit";
import { type Todos } from "../../types";
const todosSlice = createSlice({
  name: "todos",
  initialState: {
    searchTodos: "",
    todos: [] as Todos,
  },
  reducers: {
    searchTodos: (state, action) => {
      state.searchTodos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        priority: action.payload.priority,
        task: action.payload.task,
        deadline: action.payload.deadline,
      });
    },

    removeTodo: (state, action) => {
      // Immer сам під капотом зробить це імутабельно й безпечно
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { searchTodos, addTodo, removeTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;

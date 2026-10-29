import { configureStore } from "@reduxjs/toolkit";

import {
  setTodoPriority,
  setTodoTask,
  setTodoDeadline,
  todoFormReducer,
} from "../store/slicers/todoFormSlice";
import {
  searchTodos,
  addTodo,
  removeTodo,
  todosReducer,
} from "../store/slicers/todosSlice";

// 1. Спочатку створюємо та експортуємо стор
export const store = configureStore({
  reducer: {
    todoForm: todoFormReducer,
    todos: todosReducer,
  },
});

// 2. Тільки після створення стору беремо з нього типи!
export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // корисно для майбутнього

export {
  setTodoPriority,
  setTodoTask,
  setTodoDeadline,
  searchTodos,
  addTodo,
  removeTodo,
};

import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";
// 1. Імпортуємо екшен додавання, щоб підслухати його в extraReducers
import { addTodo } from "./todosSlice";

const todoFormSlice = createSlice({
  name: "todoForm",
  initialState: {
    id: "",
    priority: undefined as number | undefined,
    task: "",
    deadline: "",
  },
  reducers: {
    setTodoPriority: (state, action: PayloadAction<number | undefined>) => {
      state.priority = action.payload;
    },
    setTodoTask: (state, action: PayloadAction<string>) => {
      state.task = action.payload;
    },
    setTodoDeadline: (state, action: PayloadAction<string>) => {
      state.deadline = action.payload;
    },
  },
  // 2. Додаємо extraReducers
  extraReducers: (builder) => {
    builder.addCase(addTodo, (state) => {
      state.id = "";
      state.priority = undefined; // Обнуляємо кількість
      state.task = ""; // Очищуємо текстове поле
      state.deadline = ""; // Скидаємо вибраний день
    });
  },
});

export const { setTodoPriority, setTodoTask, setTodoDeadline } =
  todoFormSlice.actions;
export const todoFormReducer = todoFormSlice.reducer;

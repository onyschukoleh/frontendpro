import { Box, TextField, FormControl, InputLabel, Button } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { type SelectChangeEvent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodoTask,
  setTodoDeadline,
  setTodoPriority,
  type StoreType,
} from "../../store";
import { addTodo } from "../../store";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const todoForm = useSelector((state: StoreType) => state.todoForm);

  const DAYS_OF_WEEK = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
  ];

  // --- Логіка перевірки заповнення полів ---
  const isTaskFilled = todoForm.task.trim().length > 0;
  const isPriorityFilled = todoForm.priority !== undefined;
  const isDeadlineFilled = todoForm.deadline && todoForm.deadline.length > 0;

  // Визначаємо, яке саме поле зараз активне (має підсвічуватися)
  const isTaskNext = !isTaskFilled;
  const isPriorityNext = isTaskFilled && !isPriorityFilled;
  const isDeadlineNext = isTaskFilled && isPriorityFilled && !isDeadlineFilled;

  const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTodoTask(event.target.value));
  };

  const handleChangePriority = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "" || /^[1-3]$/.test(value)) {
      dispatch(setTodoPriority(value !== "" ? Number(value) : undefined));
    }
  };

  const handleChangeDeadline = (event: SelectChangeEvent) => {
    dispatch(setTodoDeadline(event.target.value as string));
  };

  const handleAddTodo = () => {
    if (isTaskFilled && isDeadlineFilled && isPriorityFilled) {
      dispatch(
        addTodo({
          priority: todoForm.priority,
          task: todoForm.task,
          deadline: todoForm.deadline,
        }),
      );
    }
  };

  return (
    <>
      <Box sx={{ textAlign: "left" }}>
        {/* 1. Поле: ЗАВДАННЯ */}
        <TextField
          label="Завдання"
          fullWidth
          margin="dense"
          value={todoForm.task}
          onChange={handleChangeTask}
          // Якщо це наступне поле для заповнення — виділяємо його синім (focused)
          focused={isTaskNext}
        />

        {/* 2. Поле: ПРІОРИТЕТ */}
        <TextField
          label="Пріоритет"
          fullWidth
          margin="dense"
          value={todoForm.priority ?? ""}
          onChange={handleChangePriority}
          // Блокуємо, поки не введено завдання
          disabled={!isTaskFilled}
          // Світиться синім, якщо черга дійшла до нього
          focused={isPriorityNext}
          placeholder="Введіть 1, 2 або 3"
          slotProps={{
            htmlInput: {
              maxLength: 1,
              inputMode: "numeric",
            },
          }}
        />

        {/* 3. Поле: ДЕДЛАЙН */}
        <FormControl
          fullWidth
          margin="dense"
          // Блокуємо весь селект, поки не заповнені попередні 2 поля
          disabled={!isTaskFilled || !isPriorityFilled}
          // Підсвічуємо рамку, якщо черга дійшла до дедлайну
          focused={isDeadlineNext}
        >
          <InputLabel id="deadline-select-label">Дедлайн</InputLabel>
          <Select
            labelId="deadline-select-label"
            id="deadline-select"
            value={todoForm.deadline}
            onChange={handleChangeDeadline}
            label="Дедлайн"
          >
            <MenuItem value="">
              <em>Не обрано</em>
            </MenuItem>
            {DAYS_OF_WEEK.map((deadline) => (
              <MenuItem key={deadline.value} value={deadline.value}>
                {deadline.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ textAlign: "right", mt: 1 }}>
        <Button
          variant="contained"
          sx={{ mt: 1 }}
          startIcon={<AddIcon />}
          onClick={handleAddTodo}
          // Кнопка активна тільки тоді, коли все заповнено ідеально
          disabled={!isTaskFilled || !isPriorityFilled || !isDeadlineFilled}
        >
          Add todo
        </Button>
      </Box>
    </>
  );
};

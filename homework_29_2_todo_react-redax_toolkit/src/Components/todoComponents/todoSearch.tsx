import { TextField } from "@mui/material"; // Додали FormControl та InputLabel
import { useDispatch, useSelector } from "react-redux";
import { searchTodos, type StoreType } from "../../store";

export const TodoSearch = () => {
  const dispatch = useDispatch();
  const todoSearch = useSelector((state: StoreType) => state.todos.searchTodos);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchTodos(event.target.value as string));
  };
  return (
    <TextField
      label="Пошук"
      fullWidth
      margin="dense"
      value={todoSearch}
      onChange={handleChangeSearch}
    />
  );
};

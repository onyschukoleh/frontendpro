import {
  List,
  Card,
  ListItem,
  Paper,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, type StoreType } from "../../store";
export const TodosList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: StoreType) => state.todos.todos);
  const todoSearch = useSelector((state: StoreType) => state.todos.searchTodos);

  const filteredTodos = todos.filter((todo) =>
    todo.task.toLocaleLowerCase().includes(todoSearch.toLocaleLowerCase()),
  );
  const handleRemoveTodo = (id: string | undefined) => {
    if (id) {
      dispatch(removeTodo(id));
    }
  };
  return (
    <>
      <Card
        sx={{ mt: 2, p: 2, textAlign: "right", width: 300, ml: "auto" }}
        elevation={3}
      >
        <Typography>Всього завдань: {todos.length}</Typography>
        <Typography>Знайдено завдань: {filteredTodos.length}</Typography>
      </Card>

      <List>
        {todos.length > 0 ? (
          filteredTodos
            .sort((a, b) => a.priority - b.priority)
            .map((todo, index) => (
              <ListItem
                key={index}
                sx={{ p: 0 }}
                secondaryAction={
                  <IconButton
                    onClick={() => {
                      handleRemoveTodo(todo.id);
                    }}
                    color="error"
                  >
                    <Delete />
                  </IconButton>
                }
              >
                <Paper
                  sx={{ mb: 1, px: 2, py: 1, width: "100%" }}
                  elevation={3}
                >
                  <ListItemText
                    primary={todo.task}
                    secondary={`Пріоритет: ${todo.priority} | Денлайн: ${todo.deadline} `}
                  ></ListItemText>
                </Paper>
              </ListItem>
            ))
        ) : (
          <Typography sx={{ mt: 1 }}>
            Будь ласка, додайте завдання...
          </Typography>
        )}
      </List>
    </>
  );
};

import { Typography } from "@mui/material";
import { Container } from "@mui/material";

import { TodoForm } from "./Components/todoComponents/todoForm";
import { TodoSearch } from "./Components/todoComponents/todoSearch";
import { TodosList } from "./Components/todoComponents/todosList";

function App() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          height: "80hv",
          marginTop: "48hv",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" gutterBottom>
          React+TS MUI Redax+toolkit
        </Typography>
        <Typography variant="h4" gutterBottom>
          Створити завдання
        </Typography>
        <TodoForm />
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Список завдань
        </Typography>
        <TodoSearch />
        <TodosList />
      </Container>
    </>
  );
}

export default App;

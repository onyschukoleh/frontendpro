import { Container, Typography } from "@mui/material";
import { Counter } from "./Components/Counter";

export const App = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
        }}
      >
        React + TypeScript + Redux Toolkit
      </Typography>

      <Counter />
    </Container>
  );
};

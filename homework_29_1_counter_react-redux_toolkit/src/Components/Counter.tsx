import { Box, Button, Typography, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "../store";
import type { RootState, AppDispatch } from "../store";

export const Counter = () => {
  const dispatch = useDispatch<AppDispatch>();

  const counter = useSelector((state: RootState) => state.counter.counter);

  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        textAlign: "center",
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: "primary.main",
        }}
      >
        Redux Counter
      </Typography>

      <Typography
        variant="h1"
        sx={{
          my: 3,
          fontWeight: "bold",
          color: counter >= 0 ? "success.main" : "error.main",
        }}
      >
        {counter}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          onClick={() => dispatch(increment())}
          size="large"
        >
          Plus
        </Button>

        <Button
          variant="contained"
          color="error"
          startIcon={<RemoveIcon />}
          onClick={() => dispatch(decrement())}
          size="large"
        >
          Minus
        </Button>
      </Box>
    </Paper>
  );
};

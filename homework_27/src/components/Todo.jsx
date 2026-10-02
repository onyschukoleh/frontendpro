import { useState } from "react";

export const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <h2 className="text-center mb-4">TODO List</h2>
        <form onSubmit={addTodo} className="d-flex gap-2 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Введіть завдання"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button type="submit" className="btn btn-primary">
            Додати
          </button>
        </form>

        <ul className="list-group">
          {todos.map((todo, index) => (
            <li key={index} className="list-group-item">
              {todo}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTodo(index)}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

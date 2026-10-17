import { useState } from "react";
import { ToDoForm } from "../components/ToDoForm";
export const Home = () => {
  const [todo, setTodo] = useState([]);
  const deleteTodo = (indexToDelete) => {
    setTodo(todo.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <div className="app">
        <h1 className="text-center text-4xl font-extrabold text-blue-900 tracking-tight mt-6 mb-8 uppercase drop-shadow-sm">
          ToDo List
        </h1>{" "}
        <ToDoForm todo={todo} setTodo={setTodo} />
        <ul className="flex flex-col gap-2 border-t pt-4">
          {todo.map((item, index) => (
            <li
              className="flex items-center gap-4 py-2 border-b border-gray-100"
              key={index}
            >
              <div className="w-48 truncate pr-2">
                <p className="text-gray-800">{item.task}</p>
              </div>
              <div className="w-40 text-gray-600">
                <p>{item.date}</p>
              </div>
              <div className="w-24">
                <button
                  className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded hover:bg-green-600 transition-colors w-full"
                  onClick={() => deleteTodo(index)}
                >
                  done
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

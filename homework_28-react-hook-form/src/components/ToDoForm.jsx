import { useForm } from "react-hook-form";

export const ToDoForm = ({ todo, setTodo }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addTodo = (data) => {
    setTodo([...todo, data]);
    reset();
  };

  

  return (
    <div className="p-6 max-w-xl">
      <form
        className="flex items-start gap-4 mb-6"
        onSubmit={handleSubmit(addTodo)}
      >
        <div className="flex flex-col w-48">
          <label className="font-medium mb-1">Task</label>
          <input
            className="border-2 rounded px-2 py-1 focus:border-red-500 outline-none"
            {...register("task", { required: true, minLength: 5 })}
          />
          {errors.task && (
            <span className="text-red-500 text-xs mt-1">Min 5 characters</span>
          )}
        </div>

        <div className="flex flex-col w-40">
          <label className="font-medium mb-1">Date</label>
          <select
            className="border-2 rounded px-2 py-1 focus:border-red-500 outline-none h-[34px]"
            {...register("date", { required: true })}
          >
            <option value=""></option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>{" "}
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          {errors.date && (
            <span className="text-red-500 text-xs mt-1">Required</span>
          )}
        </div>

        <div className="flex flex-col w-24">
          <label className="font-medium mb-1">Action</label>
          <input
            className="border-2 border-blue-500 bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-600 cursor-pointer text-sm font-medium"
            type="submit"
            value="Add"
          />
        </div>
      </form>

    
    </div>
  );
};

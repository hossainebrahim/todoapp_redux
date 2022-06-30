import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice ";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert("Enter a todo before adding !!");
      setValue("");
      return;
    }

    dispatch(
      addTodo({
        task: value,
      })
    );

    setValue("");
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>

      <button className="task-button" onClick={onSubmit}>
        Save
      </button>
    </div>
  );
};

export default AddTodo;

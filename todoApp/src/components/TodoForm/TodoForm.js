import "./TodoForm.scss";
import React, { useState } from "react";

function TodoForm({ handleClick, addTodos, input }) {
  return (
    <div className="TodoForm">
      <label htmlFor="">Write To Do List </label>
      <div className="button-search">
        <input
          type="text"
          value={input}
          onChange={(e) => handleClick(e)}
        ></input>
        <button className="addList" onClick={() => addTodos(input)}>
          Add To List
        </button>
      </div>
    </div>
  );
}

export default TodoForm;

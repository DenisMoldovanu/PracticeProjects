import React, { useState } from "react";
import "./TodoContainer.scss";
import Container from "react-bootstrap/Container";
import TodoForm from "../TodoForm/TodoForm";
import TodoListContainer from "../TodoListContainer/TodoListContainer";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";

function TodoContainer() {
  // const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const addTodos = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    if (todo != "") {
      // setList([...list, newTodo]);
      dispatch(todoActions.addTodo(newTodo));
      setInput("");
    }
  };

  const removeTodos = (id) => {
    const newList = todo.filter((todo) => todo.id !== id);
    dispatch(todoActions.removeTodo(newList));
    // setList(newList);
  };

  const handleClick = (e) => {
    setInput(e.target.value);
  };
  console.log(todo);
  return (
    <Container fluid>
      <div className="container">
        <TodoForm input={input} handleClick={handleClick} addTodos={addTodos} />
        <TodoListContainer removeTodos={removeTodos} list={todo} />
      </div>
    </Container>
  );
}

export default TodoContainer;

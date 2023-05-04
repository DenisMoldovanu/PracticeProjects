import "./TodoListContainer.scss";

function TodoListContainer({ list, removeTodos }) {
  return (
    <div className="todo-list__container">
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {" "}
            {todo.todo}
            <button
              className="todo-list__remove"
              onClick={() => removeTodos(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListContainer;

import { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const addNewTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      detail,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDetail("");
  };

  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "row" }}
        onSubmit={addNewTodo}
      >
        <div>
          제목
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </div>
        <div>
          내용
          <input
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            type="text"
          />
        </div>
        <button>추가하기</button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default TodoForm;

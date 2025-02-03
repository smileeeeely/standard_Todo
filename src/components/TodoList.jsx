/* eslint-disable react/prop-types */

import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const [doneTodos, setDoneTodos] = useState([]);

  /** Todo 삭제 */
  const deleteTodo = (deleteId) => {
    const filterdTodos = todos.filter((todo) => todo.id !== deleteId);
    setTodos(filterdTodos);
  };

  /** Todo Done으로 이동 */
  const moveToDoneTodo = (doneTodoId) => {
    const newDoneTodo = todos.find((todo) => todo.id === doneTodoId);

    deleteTodo(doneTodoId);

    setDoneTodos([...doneTodos, newDoneTodo]);
  };

  /** Done todo 삭제 */
  const deleteDoneTodo = (deleteId) => {
    const filterdTodos = doneTodos.filter((todo) => todo.id !== deleteId);
    setDoneTodos(filterdTodos);
  };

  return (
    <>
      <TodoItem
        todos={todos}
        deleteTodo={deleteTodo}
        moveToDoneTodo={moveToDoneTodo}
        doneTodos={doneTodos}
        deleteDoneTodo={deleteDoneTodo}
        setTodos={setTodos}
      />
    </>
  );
};

export default TodoList;

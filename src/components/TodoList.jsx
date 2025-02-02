/* eslint-disable react/prop-types */

import { useState } from "react";

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

  const deleteDoneTodo = (deleteId) => {
    const filterdTodos = doneTodos.filter((todo) => todo.id !== deleteId);
    setDoneTodos(filterdTodos);
  };
  return (
    <>
      <Working
        todos={todos}
        deleteTodo={deleteTodo}
        moveToDoneTodo={moveToDoneTodo}
      />
      <Done doneTodos={doneTodos} deleteDoneTodo={deleteDoneTodo} setTodos={setTodos} todos={todos} />
    </>
  );
};

export default TodoList;

const Working = ({ todos, deleteTodo, moveToDoneTodo }) => {
  // console.log('todos',todos)
  return (
    <div>
      <h2>Working...</h2>
      {todos.map((todo) => {
        return (
          <div key={todo.id} style={{ border: "1px solid green" }}>
            <div>{todo.title}</div>
            <div>{todo.detail}</div>
            <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
            <button onClick={() => moveToDoneTodo(todo.id)}>완료</button>
          </div>
        );
      })}
    </div>
  );
};

const Done = ({ doneTodos, deleteDoneTodo, setTodos, todos }) => {
  return (
    <div>
      <h2>Done..!</h2>
      {doneTodos.map((todo) => {
        return (
          <div key={todo.id} style={{ border: "1px solid green" }}>
            <div>{todo.title}</div>
            <div>{todo.detail}</div>
            <button onClick={() => deleteDoneTodo(todo.id)}>삭제하기</button>
            <button onClick={() => setTodos([...todos, todo], deleteDoneTodo(todo.id)) }>취소</button>
          </div>
        );
      })}
    </div>
  );
};

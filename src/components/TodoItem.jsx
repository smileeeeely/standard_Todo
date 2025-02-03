/* eslint-disable react/prop-types */
const TodoItem = ({
  todos,
  deleteTodo,
  moveToDoneTodo,
  doneTodos,
  deleteDoneTodo,
  setTodos,
}) => {
  return (
    <>
      <div>TodoItem</div>
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

      <h2>Done..!</h2>
      {doneTodos.map((todo) => {
        return (
          <div key={todo.id} style={{ border: "1px solid green" }}>
            <div>{todo.title}</div>
            <div>{todo.detail}</div>
            <button onClick={() => deleteDoneTodo(todo.id)}>삭제하기</button>
            <button
              onClick={() =>
                setTodos([...todos, todo], deleteDoneTodo(todo.id))
              }
            >
              취소
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TodoItem;

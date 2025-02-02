import React from "react";

const TodoList = () => {
  return (
    <>
      <Working />
      <Done />
    </>
  );
};

export default TodoList;

const Working = () => {
  return (
    <div>
      <h2>Working...</h2>
    </div>
  );
};

const Done = () => {
    return (
        <div>
            <h2>Done..!</h2>
        </div>
    )
}

import React from "react";

const TodoForm = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        제목
        <input />
      </div>
      <div>
        내용
        <input />
      </div>
      <button>추가하기</button>
    </div>
  );
};

export default TodoForm;

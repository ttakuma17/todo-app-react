import React from "react";
export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div class="input-area">
      <input
        type="text"
        placeholder="Enter your todo"
        size="30"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

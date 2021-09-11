import React from "react";
export const CompleteTodo = (props) => {
  const { completeTodos, onClickBackTodo, onClickDelete } = props;
  return (
    <div class="complete-area">
      <p class="title">・Complete Todo List</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div class="list-row">
                <p>{todo}</p>
                <button
                  onClick={() => {
                    onClickBackTodo(index, "completelist");
                  }}
                >
                  Back Todo
                </button>
                <button
                  onClick={() => {
                    onClickDelete(index, "completelist");
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

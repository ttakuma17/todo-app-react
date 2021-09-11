import React from "react";
export const PendingTodo = (props) => {
  const { pendingTodos, onClickWorking, onClickBackTodo } = props;
  return (
    <div class="pending-area">
      <p class="title">・Pending Todo List</p>
      <ul>
        {pendingTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div class="list-row">
                <p>{todo}</p>
                <button
                  onClick={() => {
                    onClickBackTodo(index, "pendinglist");
                  }}
                >
                  Back Todo
                </button>
                <button
                  onClick={() => {
                    onClickWorking(index, "pendinglist");
                  }}
                >
                  Working
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

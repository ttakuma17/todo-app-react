import React from "react";
export const WorkingTodo = (props) => {
  const { workingTodos, onClickPending, onClickDone } = props;
  return (
    <div class="working-area">
      <p class="title">・Working Todo</p>
      <ul>
        {workingTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div class="list-row">
                <p>{todo}</p>
                <button
                  onClick={() => {
                    onClickPending(index, "workinglist");
                  }}
                >
                  Pending
                </button>
                <button
                  onClick={() => {
                    onClickDone(index);
                  }}
                >
                  Done
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

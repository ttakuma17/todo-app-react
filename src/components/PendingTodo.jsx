import React from "react";
import classes from "./CssModule.scss";
export const PendingTodo = (props) => {
  const { pendingTodos, onClickWorking, onClickBackTodo } = props;
  return (
    <div className={classes.listArea}>
      <p className={classes.title}>・Pending Todo List</p>
      <ul>
        {pendingTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className={classes.listRow}>
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

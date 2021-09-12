import React from "react";
import classes from "./CssModule.scss";
export const CompleteTodo = (props) => {
  const { completeTodos, onClickBackTodo, onClickDelete } = props;
  return (
    <div className={classes.listArea}>
      <p className={classes.title}>・Complete Todo List</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className={classes.listRow}>
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

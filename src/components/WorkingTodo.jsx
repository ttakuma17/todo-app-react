import React from "react";
import classes from "./CssModule.scss";
export const WorkingTodo = (props) => {
  const { workingTodos, onClickPending, onClickDone } = props;
  return (
    <div className={classes.listArea}>
      <p className={classes.title}>・Working Todo</p>
      <ul>
        {workingTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className={classes.listRow}>
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

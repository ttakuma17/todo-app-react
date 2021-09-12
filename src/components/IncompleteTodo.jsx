import React from "react";
import classes from "./CssModule.scss";
export const IncompleteTodo = (props) => {
  const {
    incompleteTodos,
    onClickWorking,
    onClickPending,
    onClickDelete
  } = props;
  return (
    <div className={classes.listArea}>
      <p className={classes.title}>・Todo List</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className={classes.listRow}>
                <p>{todo}</p>
                <button
                  onClick={() => {
                    onClickWorking(index, "incompletelist");
                  }}
                >
                  Working
                </button>
                <button
                  onClick={() => {
                    onClickPending(index, "incompletelist");
                  }}
                >
                  Pending
                </button>
                <button
                  onClick={() => {
                    onClickDelete(index, "incompletelist");
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

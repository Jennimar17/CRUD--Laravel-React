import React, { useContext } from "react";
import Task from "./Task";
import TodoContext from "../../Contexts/TaskContext";
import "./TaskTable.css";
import Nav from "../Navbar/NavBar";

export default function TaskTable(props) {
  const { allTodos, currentPageInfo } = useContext(TodoContext);

  return (
    <div className="table__container">
      <Nav />
      <table className="table">
        <thead className="table__head">
          <tr>
            <th>Task</th>
            <th>Name</th>
            <th>Start</th>
            <th>End</th>
            <th>Completed</th>
            <th width="15%">Edit/Remove</th>
          </tr>
        </thead>
        <tbody>
          {allTodos.length > 0 ? (
            allTodos.map((todo, index) => {
              return (
                <Task
                  key={index + 1}
                  todo={todo}
                  // sl={((currentPageInfo-1)*10) + (index+1)}
                  sl={currentPageInfo.from + index}
                />
              );
            })
          ) : (
            <tr>
              <td className="text-center" colSpan={6}>
                No Data!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

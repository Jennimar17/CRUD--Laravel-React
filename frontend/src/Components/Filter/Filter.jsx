import React, { useContext } from "react";
import TodoContext from "../../Contexts/TaskContext";
import "./Filter.css";
import { FaFilter } from "react-icons/fa";

function Filter() {
  const { queries, setQueries } = useContext(TodoContext);

  const handleFilterOnChange = (e) => {
    const filter = e.target.value;
    setQueries({ ...queries, filter });
  };

  return (
    <div className="filter__container">
      <FaFilter className="icon" />
      <select
        className="select"
        id="sort"
        onChange={handleFilterOnChange}
        defaultValue={queries.filter}
      >
        
        <option>Filter</option>
        <option value="id.desc">Newest</option>
        <option value="id.asc">Oldest</option>
        <option value="is_completed.asc">Not Completed</option>
      </select>
    </div>
  );
}

export default Filter;

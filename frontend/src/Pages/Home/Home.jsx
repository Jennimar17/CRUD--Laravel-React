import React, { useContext, useEffect } from "react";
import Loading from "../../Components/Loading/Loading";
import TaskTable from "../../Components/Table/TaskTable";
import TodoContext from "../../Contexts/TaskContext";
import Pagination from "../../Components/Pagination/Pagination";
import "./Home.css";

function Home() {
  const { getAllTodos, isLoading, queries } = useContext(TodoContext);

  useEffect(() => {
    getAllTodos().catch((err) => {
      console.log(err.message);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="home__container">
      <div className="row mt-5 mb-5">
        <div className="col-md-12 col-lg-3 mb-2 offset-lg-9"></div>
        <div className="col-12 mx-auto mt-2 overflow-x-auto">
          <TaskTable />
        </div>
        <Pagination className='pagination__container' />
      </div>
    </div>
  );
}

export default Home;

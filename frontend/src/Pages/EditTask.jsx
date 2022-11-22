import React, { useContext, useEffect, useState } from "react";
import TaskContext from "../Contexts/TaskContext";
import Loading from "../Components/Loading/Loading";
import { useParams, useNavigate } from "react-router-dom";

function EditTask() {
  const { getTodoById, isLoading, setIsLoading, updateTodo, showToastAlert } =
    useContext(TaskContext);

  const [editId, setEditId] = useState(undefined);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [isCompleted, setIsCompleted] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTodoById(params.id)
      .then((data) => {
        setEditId(data.id);
        setTitle(data.title);
        setStart(data.start);
        setEnd(data.end);
        setIsCompleted(data.is_completed);
      })
      .catch((err) => {
        setIsLoading(false);
        navigate("/not-found");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const handleTitleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStartOnChange = (e) => {
    setStart(e.target.value);
  };

  const handleEndOnChange = (e) => {
    setEnd(e.target.value);
  };

  const handleIsCompletedOnChange = (e) => {
    setIsCompleted(e.target.checked ? 1 : 0);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: editId,
      title: title.trim(),
      start: start,
      end: end,
      is_completed: isCompleted,
    };

    updateTodo(todo)
      .then((response) => {
        showToastAlert(response.data, "success");
        navigate("/");
      })
      .catch((err) => {
        const alert = err.response.data;
        setIsLoading(false);
        showToastAlert(alert, "error");
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 mx-auto mt-2">
          <div className="card card__container">
            <div className="header">
              <h5 className="card-title">Edit todo</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleOnSubmit}>
                <div className="form-group mb-2">
                  <label className="mb-2" htmlFor="title">
                    Title
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleTitleOnChange}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="mb-2" htmlFor="start">
                    Start
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="start"
                    value={start}
                    onChange={handleStartOnChange}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="mb-2" htmlFor="end">
                    End
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="end"
                    value={end}
                    onChange={handleEndOnChange}
                  />
                </div>

                <div className="form-group form-check mb-2 mt-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="is_completed"
                    value={isCompleted}
                    onChange={handleIsCompletedOnChange}
                    checked={isCompleted ? true : false}
                  />
                  <label className="form-check-label" htmlFor="is_completed">
                    {isCompleted ? "Completed" : "Not Completed"}
                  </label>
                </div>

                <div className="form-group mt-4">
                  <button className="btn btn__submit" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTask;

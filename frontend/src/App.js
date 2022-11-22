import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskContextProvider } from "./Contexts/TaskContext";
import Home from "./Pages/Home/Home";
import EditTask from './Pages/EditTask';
import AddTask from './Pages/AddTask';
import NotFound404 from './Pages/NotFound404';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {

  return (
    <div className="app">
      <TaskContextProvider>
        <Router>
          <ToastContainer theme='dark' />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/todos/add" element={<AddTask />} />
              <Route path="/todos/edit/:id" element={<EditTask />} />
              <Route path="/*" element={<NotFound404 />} />
              <Route path="/not-found" element={<NotFound404 />} />
            </Routes>
          </main>
        </Router>
      </TaskContextProvider>
    </div>
  );
}

export default App;

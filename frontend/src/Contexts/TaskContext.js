import axios from "axios";
import { useState, createContext } from "react";
import { toast } from 'react-toastify';

const TaskContext = createContext();

const BASE_URL = process.env.REACT_APP_BASE_URL;
const AXIOS = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

export const TaskContextProvider = (props)=>{

    const [allTodos, setAllTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pages, setPages] = useState([]);
    const [currentPageInfo, setcurrentPageInfo] = useState({pageNo: 1, from: 1});
    const [queries, setQueries] = useState({page: 1})

    const getAllTodos = async ()=>{
        setIsLoading(true);
        const qString = new URLSearchParams(queries).toString();

        const response  = await AXIOS.get(`/all?${qString}`)
        const last_page = response.data.last_page;
        const current_page = response.data.current_page;
        const links     = response.data.links;
        const data      = response.data.data;
        const from      = response.data.from;
        setAllTodos(data);
        setPages(last_page <=1 ? [] : links);
        setcurrentPageInfo({pageNo: current_page, from})
        setIsLoading(false);
        return data;
    }

    const getTodoById = async (id)=>{
        setIsLoading(true);
        const response = await AXIOS.get(`/${id}`)
        const data = response.data;
        setIsLoading(false);
        return data;
    }

    const addTodo = async (todo)=>{
        setIsLoading(true);
        const response = await AXIOS.post('/create', todo)
        return response;
    }

    const updateTodo = async (todo) => {
        setIsLoading(true);
        const response = await AXIOS.put('/update', todo)
        return response;
    }

    const deleteTodo = async (id) => {
        setIsLoading(true)
        const response = await AXIOS.delete(`/delete/${id}`)
        return response
    }

    const showToastAlert = (alert, type) => {
        alert = typeof alert === 'string' ? alert : 
        Object.entries(alert).map((data)=> data[1][0])

        if(alert instanceof Array){
            alert.forEach((singleAlert) => toast(singleAlert, {type: type}))
        }
        else{
            toast(alert, {type: type})
        }
    }

    const dismissAlert = () => {
        toast.dismiss()
    }

    return (<TaskContext.Provider value={{
        allTodos,
        isLoading,
        pages,
        queries,
        currentPageInfo,
        alert,
        getAllTodos,
        getTodoById,
        addTodo,
        updateTodo,
        deleteTodo,
        setIsLoading,
        showToastAlert,
        dismissAlert,
        setQueries,
    }}>
        {props.children}
    </TaskContext.Provider>)
} 

export default TaskContext
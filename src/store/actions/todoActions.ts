import { Dispatch } from "@reduxjs/toolkit";
import { instance } from "../../axios/axios";
import { isLoading, setError, setTodosData, todoItems } from "../slices/todoSlice";

interface ITodos {
    data: todoItems[]
};


export const getTodos = () => async (dispatch:Dispatch) => {
    try {
        dispatch(isLoading());
        const data:ITodos = await instance.get('asdasdas');
        console.log(data.data);
        
        dispatch(setTodosData(data.data));
        
    } catch (e:any) {
        dispatch(setError(e.message));
    }
}; 
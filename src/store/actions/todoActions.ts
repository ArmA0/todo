import { Dispatch } from "@reduxjs/toolkit";
import { instance } from "../../axios/axios";
import { isLoading, setError, setTodosData, todoItems } from "../slices/todoSlice";

export const getTodos = () => async (dispatch:Dispatch) => {
    try {
        dispatch(isLoading())
        const data:todoItems[] = await instance.get('asd')
        console.log(data);
        
        dispatch(setTodosData(data))
        
    } catch (error) {
        console.log(error, '==========');
        
    }
}
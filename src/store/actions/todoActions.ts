import { Dispatch } from "@reduxjs/toolkit";
import { instance } from "../../axios/axios";
import { todoItems } from "../../models";
import { isLoading, setError, setTodosData } from "../slices/todoSlice";

interface ITodos {
    data: todoItems[]
};


export const getTodos = () => async (dispatch:Dispatch) => {
    try {
        dispatch(isLoading());
        const data:ITodos = await instance.get('');
        
        dispatch(setTodosData(data.data));
        
    } catch (e:any) {
        dispatch(setError(e.message));
    }
}; 
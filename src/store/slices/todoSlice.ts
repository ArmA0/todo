import { ActionCreator, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISlice {
    todos: todoItems[],
    loading: boolean,
    error: boolean,
    errorMessage: string
}

export interface todoItems{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const initialState: ISlice = {
    todos: [],
    loading: false,
    error: false,
    errorMessage: ''
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        isLoading: state => {
            state.loading = true
        },
        setTodosData: (state, action: PayloadAction<todoItems[]>) => {
            state.todos = action.payload
            state.loading = false
        },
        setError: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = true
            state.errorMessage = action.payload
        },
        clearError: state => {
            state.error = false
            state.errorMessage = ''
        }
    }
})
export default todoSlice.reducer
export const {isLoading, setTodosData, setError, clearError} = todoSlice.actions
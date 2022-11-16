import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

const reducers = combineReducers({
    todos: todoSlice
})

export const store = configureStore({
    reducer: reducers
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
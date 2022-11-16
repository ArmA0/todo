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
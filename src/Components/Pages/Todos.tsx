import { useAppSelector } from "../../app/hooks"
import Todo from "./Todo"
// import { todosSelector } from "../../assets/selectors"

const Todos = () => {
    const todosSelector = useAppSelector(state => state.todos)
    const todos = todosSelector.todos
    
    
    return (
        <div>
            {todosSelector.loading && "Loading..."}
            {todosSelector.error && todosSelector.errorMessage}
            {todos.map(todo => <Todo todos={todo} /> )}
            
        </div>
    )
}

export default Todos
import { todoItems } from "../../models"

interface todoProps {
    todos: todoItems
}

const Todo = ({todos}: todoProps[]) => {

    console.log(todos);
    
    return (
        <>
        </>
    )
}

export default Todo     
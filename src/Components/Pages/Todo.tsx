import { todoItems } from "../../models"

interface todoProps {
    todo: todoItems
}

const Todo = ({todo}: todoProps[]) => {

    console.log(todo);
    
    return (
        <>
            {todo}
        </>
    )
}

export default Todo     
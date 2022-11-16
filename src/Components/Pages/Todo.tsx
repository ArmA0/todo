import { todoItems } from "../../models"
import c from "./todo.module.css"
import { useState } from "react"

interface todoProps {
    todo: todoItems
}
const checkURL = 'https://i.pinimg.com/originals/56/34/84/5634840e01ff0834dafde61abbc9d6e3.png'
const crossURL = 'https://icon2.cleanpng.com/20180618/sqg/kisspng-check-mark-computer-icons-clip-art-5b27bdcd192df8.3326716415293311491032.jpg'




const Todo = ({todo}: todoProps) => {
    const [completed, setCompleted] = useState(todo.completed)

    const handleCompleted = () => {
        setCompleted(prev => !prev)
        console.log('clicked');
        
    }
    
    return (
        <div className={c.wrap}>
                <div className={completed ? c.taskCompleted : ''}>{todo.title}</div>
                {completed ? 
                <div className={c.completed} onClick={handleCompleted} >
                    <img src={crossURL} alt="Delete"/>
                </div>
                :
                <div className={c.completed} onClick={handleCompleted} >
                    <img src={checkURL} alt="Checked" />
                </div>
            }
        </div>
    )
}

export default Todo     
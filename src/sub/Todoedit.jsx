import { useState } from 'react'
import "../css/todo.css"

function TodoEdit() {
    const [add, setAdd] = useState("")
    const [todo, setTodo] = useState([])
    const [editIndex, setEditIndex] = useState(-1)

    function handleButton() {
        if (add.trim() !== "") {

            if (editIndex === -1) {
                setTodo([...todo, add])
            } else {
                const updatedtodo = [...todo]
                updatedtodo[editIndex] = add
                setTodo(updatedtodo)
                setEditIndex(-1)
            }
            setAdd("")
        }

    }
    console.log(todo);

    function handleDelete(index) {
        const newArray = [...todo]
        newArray.splice(index, 1)
        setTodo(newArray)
    }

    function handleEdit(index) {
        setAdd(todo[index])
        setEditIndex(index)
    }
    console.log(editIndex);
    return (
        <div className='Container'>
            <h1>Add Your Task Here...</h1>

            <div className='input-todo'>
                <input type='text' value={add} onChange={evt => setAdd(evt.target.value)} />
                <button onClick={handleButton}>
                    {
                        editIndex === -1 ? "Add" : "Edit"
                    }
                </button>
            </div>

            <div className='show-todo'>
                {todo.length > 0 ? (<table>
                    {
                        todo.map((task, index) =>
                            <tr>
                                <td>{task}</td>
                                <td> <button onClick={() => handleDelete(index)}>Delete</button>
                                    <button onClick={() => handleEdit(index)}>Edit</button></td>

                            </tr>
                        )
                    }
                </table>)
                    : <p style={{color:"white"}}>No Task added yet!</p>}
            </div>
        </div>
    )

}
export default TodoEdit
import {useState} from "react"

function Deletearray(){
    const[add,setAdd] = useState("")
    const [todo,setTodo] = useState([])

    function handleButton(){
        setTodo([...todo, add])
    }
    console.log(todo);

    function handleDelete(index){
        const newArray=[...todo]
        newArray.splice(index,1)
        setTodo(newArray)
    }
    return(
        <div>
            <input type="text" onChange={e => setAdd(e.target.value)}/>
            <button onClick={handleButton}>Add</button>
            <ul>
                {
                    todo.map((task,index)=>
                    <div>
                        <li>{task}</li>
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                    </div>
                    )
                }
            </ul>
        </div>
    )
}
export default Deletearray
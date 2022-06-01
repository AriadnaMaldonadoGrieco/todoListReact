import {useState} from 'react';
import Todo from './todo';

export  default function TodoApp(){
    
    const [title, setTitle] = useState("Enter Title");
    const[todos, setTodos] = useState([]);

    function handleChange(e) {
       const value = e.target.value;

       setTitle(value);
    }

    function vanishValue(e) {
 
        setTitle("");
     }

    function handleSubmit(e) {
        e.preventDefault();
        
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        const temp = [...todos];
        temp.push(newTodo);

        setTodos(temp);

        setTitle("");
    }

    function handleupdate(id, value){
        const temp = [...todos];
        const item = temp.find(item => item.id ===id);
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id){
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);
    }

    return <div className="todoContainer">
        <form onSubmit={handleSubmit} className="todoCreateForm">
            <input onClick={vanishValue} onChange={handleChange} className="todoInput" value= {title} />
            <input onClick={handleSubmit} type="submit" value="ADD" className="buttonCreate" />
        </form>

        <div className="todosContainer">
            {
                todos.map((item) => (
                    <Todo key={item.id} item= {item} onUpdate={handleupdate} onDelete={handleDelete} />
                ))
                }
        </div>
    </div>;
}
import { useState } from "react";
import { MdEdit} from 'react-icons/md';
import { MdDelete} from 'react-icons/md';
import { MdSave} from 'react-icons/md';

export default function Todo({ item, onUpdate, onDelete }){

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){

        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClickUpdate(){
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }
        return (
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="text" className="todoInputUpdate" onChange={handleChange} value={newValue} />
                <button className="button" onClick={handleClickUpdate}><MdSave /></button>
            </form>
        );
    }

    function TodoElement(){
        return <div className="TodoInfo">
        {item.title}
        <div className="buttoncontainer">
        <button onClick={() => setIsEdit(true)}><MdEdit /></button>
        <button onClick={(e) =>onDelete(item.id)}><MdDelete /></button>
        </div>
        
       </div>
    }

    return (
        <div className="todo">
            {isEdit? <FormEdit /> : <TodoElement />}
        </div>
    );   
}
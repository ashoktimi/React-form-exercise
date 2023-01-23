import React, {useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from "uuid";

const TodoList =() =>{
    const INITIAL_STATE = [
        {id: uuid(), task:'Learn React'},
        {id: uuid(), task:'Do some Practice'},
        {id: uuid(), task:'Take Shower'},
        {id: uuid(), task:'Watch Movie'}    
    ]
    const [items, setItems] = useState(INITIAL_STATE);
    const addItem = (newItem) => {
      setItems(items => [...items, { ...newItem, id: uuid() }])
    }
    return(
        <div>
            <NewTodoForm addItem={addItem}/>
            {items.map(
                ({id, task}) => <Todo key={id} task={task}/>
            )}            
        </div>
    )
}

export default TodoList;
import React, {useState} from 'react';

const NewTodoForm =({addItem}) =>{
    const INITIAL_STATE = {task:''}
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        addItem(formData);
        setFormData(INITIAL_STATE);
    }
    const handleChange = (evt) =>{
        const { name, value }= evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task:</label>
            <input
              type="text"
              id="task"
              name="task"
              value={formData.task}
              onChange={handleChange}
            />
            <button>Add Task</button>
        </form>
    )
}

export default NewTodoForm;
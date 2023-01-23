import React, {useState} from 'react';

const Todo =({task}) =>{
    const [hideButton, setHideButton] = useState(false);
    return(
        <div>
            {hideButton ? null : (
            <ul>
                <li>
                    {task} <button  onClick={() => setHideButton(true)}>X</button>
                </li>
            </ul>
            )}
        </div>
    )
}

export default Todo;

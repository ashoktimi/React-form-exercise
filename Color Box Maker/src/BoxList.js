import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from "uuid";

const BoxList = () =>{
    const INITIAL_STATE = [
        {id: uuid(), color:'purple', width:'50px', height:'50px'},
        {id: uuid(), color:'green', width:'50px', height:'50px'}
    ]
    const [items, setItems] = useState(INITIAL_STATE);
    const addItem = (newItem) => {
      setItems(items => [...items, { ...newItem, id: uuid() }])
    }
    return(
        <div className='BoxList'>
            <NewBoxForm addItem={addItem}/>
            {items.map(
                ({id, color, width, height}) => 
                    <Box 
                        id={id}
                        key={id} 
                        color={color} 
                        width={width} 
                        height={height}
                    />
            )}
        </div>
    )
}

export default BoxList;
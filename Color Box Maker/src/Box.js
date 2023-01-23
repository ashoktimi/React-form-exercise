import React, {useState} from 'react';
import './Box.css';

const Box = ({color, width, height}) =>{
    const [hideButton, setHideButton] = useState(false);
    return(
        <div className='Box'>
          {hideButton ? null : (
            <div>
                <div className='Box-box'
                    style={{
                        backgroundColor:color,
                        width:width,
                        height:height
                    }}                    
                >
                </div>
                <button className='Box-btn'
                    onClick={() => setHideButton(true)}
                >
                    X
                </button>
            </div>
          )}            
        </div>
    )
}

export default Box;

{/* <div className='Box-box'
style={{
    backgroundColor:color,
    width:width,
    height:height
}}
>                      
</div>
<button className='Box-btn'
onClick={() => console.log(id)}
>
X
</button>  */}
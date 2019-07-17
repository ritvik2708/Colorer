import React from 'react';
import './Image.css';
const IMAGE=({URL,Border})=>{
    return(
        <div className='ma lm' style={{border:`solid ${Border}`}}>
            <img alt="" style={{width:"270px",height:"auto"}} src={URL}/>
        </div>
    );
}
export default IMAGE;
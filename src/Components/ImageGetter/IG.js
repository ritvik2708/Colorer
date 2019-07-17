import React from 'react';
import './IG.css';
const IG=({onInpCh,onSubmit})=>{
    return(
        <div className='lm submit'>
            <div>
                Enter source of the image
            </div>
            <div>
                <input onChange={onInpCh} className='marg' type='text' placeholder='URL'/>
            </div>
            <button onClick={onSubmit} className='marg grow'> 
                IMAGE 
            </button>
        </div>
    );
}

export default IG;
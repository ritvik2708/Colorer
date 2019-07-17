import React from 'react';
import './head.css';
const Head=(props)=>{
    return (
        <div className='letter' style={{color:`${props.col}`}}>
            {props.val}
        </div>
    );
}
export default Head;
import React from 'react';
import './Palette.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Palette=({value,key})=>{
    return(
        <div className='Palette'>
            <div style={{
                backgroundColor:value,
                height:'50%',
                margin: '2px',
                border:"2px solid white",
                borderRadius:'5px'
            }}>
            </div>
            <CopyToClipboard text={value}>
                <button>HASH</button>
            </CopyToClipboard>
        </div>
    );
}
export default Palette;
import React from 'react';
import { SadFaceIcon } from '../../assets/icons';

const Error = ({ error, component }) => {
    console.log(`Got error from ${component} with: ${error}`);
    return (
        <div className='errorComponent'>
            Something Went Wrong <SadFaceIcon style={{color: "red"}}/>!
        </div>
    )
}


export default Error

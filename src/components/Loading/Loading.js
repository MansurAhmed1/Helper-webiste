import React from 'react';
import loading from '../../image/loading.gif'
const Loading = () => {
    return (
        <div style={{height:"80vh"}} className='d-flex bg-white justify-content-center align-items-center'>
           <img src={loading} alt="" className='w-25' />
        </div>
    );
};

export default Loading;
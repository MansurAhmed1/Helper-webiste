import React from 'react';
import './CheckOut.css'

const ChekOut = () => {
    return (
        <div>
           <h3 className='fw-bold pt-4 pb-2'>Photos from Lessons</h3>
           <p>Here are a few of my classes
 You can see the picture</p>
           <div  className='all-image'>
           <div><img className='w-100' src="https://img.freepik.com/free-photo/serious-male-teacher-standing-blackboard-with-graph-equation-looking-camera_23-2148201005.jpg?w=996" alt="" /></div>
           <div><img className='w-100' src="https://img.freepik.com/free-photo/senior-male-professor-explaining-writing-green-chalkboard_23-2148200956.jpg?w=996" alt="" /></div>
           <div><img className='w-100' src="https://img.freepik.com/free-photo/senior-teacher-sitting-desk-classroom_23-2148201069.jpg?w=996" alt="" /></div>
           <div><img className='w-100' src="https://img.freepik.com/free-photo/faceless-lecturer-chalking-formula-blackboard_23-2148200998.jpg?w=360" alt="" /></div>
           
           <div><img className='w-100'  src="https://img.freepik.com/free-photo/crop-hand-man-chalking-graph-blackboard_23-2148201000.jpg?w=996" alt="" /></div>
           <div><img className='w-100'   src="https://img.freepik.com/free-photo/crop-hand-chalking-blackboard_23-2148200997.jpg?size=626&ext=jpg" alt="" /></div>
           
           </div>
        
        </div>

    );
};

export default ChekOut;
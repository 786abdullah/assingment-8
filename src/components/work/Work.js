import React from 'react';
import './Work.css'
const Work = (props) => {
    const {work, handleAddToProfile}=props;
    const {workname, picture,about,item, worktime, spendtime}=work;

    return (
       <div className='work-container'>
         <div >
            <img src={picture} alt="" />
        </div>
        <div className="work-details">
        <h3 className='workname'> {workname} </h3> 
            <p> {about}</p>
            <h5>suggest:- { item}</h5>
            <h5>time:  {worktime}</h5>
            <h5>time limit: {spendtime}</h5>
        </div>
        <button onClick={() => handleAddToProfile(spendtime)} className='btn-work'>
                <h5>add to list</h5>
            </button>
       </div>
    );
};

export default Work ;
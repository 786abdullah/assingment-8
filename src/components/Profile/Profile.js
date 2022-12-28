import React, { useState } from 'react';
import './Profile.css'
import myimg from '../../profileimg/yea.jpg'
const Profile = ({exarsise}) => {
    const [brack,setBrack]=useState(0)    
    // const [finished,setFinished]= useState([])
    
    const handalAddBrack = (brack) =>{
         setBrack(brack)
    }
    // const handalAddFinished= (finished) => {
    //       setFinished(finished)
    // }

    return (
        <div className='profile-main-container'>
            <div className="profile-container">
                <img className='my-img' src={myimg} alt="" />
                <h2>abdullah</h2>
           </div>
         <div className="my-info">
           <p>wait <br/>50 kg</p>
           <p>height<br/> 5`4</p>
           <p>age<br/> 27 </p>
         </div>
         <div className="">
         <h3> add brack </h3>
         <button onClick={()=> handalAddBrack(10)} className='brack-time'>10 min</button>
         <button onClick={()=> handalAddBrack(20)} className='brack-time'>20 min</button>
         <button onClick={()=> handalAddBrack(30)} className='brack-time'>30 min</button>
         <button onClick={()=> handalAddBrack(40)} className='brack-time'>40 min</button>
         </div>
         <div className="">
            <h3>work summery</h3>
            <h4> total work time: {exarsise} min </h4>
            <h4>brack time: {brack} min</h4>
         </div>
         <button  className='btn-finis'>finished</button>
         </div>
         
        
    );
};

export default Profile;
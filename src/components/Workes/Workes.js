import React from 'react';
import {useState, useEffect } from 'react';
import Profile from '../Profile/Profile';
import Work from '../work/Work';
import './Workes.css';

function Workes() {
    let i=0;
    const [workes, setWorkes] = useState([]);
    const [exarsise, setExarsise] = useState(0)

    useEffect(() => {
        fetch('workes.json')
            .then(res => res.json())
            .then(data => setWorkes(data));
    }, []);
 
   
    
     
    const handleAddToProfile = (time) =>{
        setExarsise(exarsise+time)
       
    }
   
    return (
        <div className="works-main-container">
            <div className='works-container'>
                {workes.map(work => <Work
                    work={work}
                    handleAddToProfile={handleAddToProfile}
                    
                    key={i++}
                >
                </Work>)}
            </div>
             <div className="profile-container">
            
                    <Profile
                    exarsise={exarsise}
                    ></Profile>
                 
            </div>
        </div>
        
    );
}

export default Workes;
import React from 'react';
import QZone1 from "../../../assets/assets/qZone1.png"
import QZone2 from "../../../assets/assets/qZone2.png"
import QZone3 from "../../../assets/assets/qZone3.png"
const QZone = () => {
    return (
        <div>
            <img className='w-full h-56 object-contain' src={QZone1} alt="" />
            <img className='w-full h-56 object-contain' src={QZone2} alt="" />
            <img className='w-full h-56 object-contain' src={QZone3} alt="" />
        </div>
    );
};

export default QZone;
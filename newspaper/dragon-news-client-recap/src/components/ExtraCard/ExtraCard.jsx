import React from 'react';
import imageOne from "../../assets/assets/1.png"
import imageTwo from "../../assets/assets/2.png"
import imageThree from "../../assets/assets/3.png"
import {FaCalendar} from "react-icons/fa"
import moment from 'moment/moment';
const ExtraCard = () => {
    return (
        <>
           <div className='border p-3 rounded-md mb-5'>
            <figure>
                <img className="w-full h-32" src={imageOne} alt="" />
            </figure>
                <h2 className='text-xl font-semibold text-black'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className='flex items-center gap-5 mt-3'>
            <p className='text-lg font-semibold'>
                Sports
            </p>
            <p className='flex items-center gap-2'><FaCalendar></FaCalendar> <span>{moment().format("MMM D, Y")}</span></p>
            </div>
            </div>          
           <div className='border p-3 rounded-md mb-5'>
            <figure>
                <img className="w-full h" src={imageTwo} alt="" />
            </figure>
                <h2 className='text-xl font-semibold text-black'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className='flex items-center gap-5 mt-3'>
            <p className='text-lg font-semibold'>
                Sports
            </p>
            <p className='flex items-center gap-2'><FaCalendar></FaCalendar> <span>{moment().format("MMM D, Y")}</span></p>
            </div>
            </div>          
           <div className='border p-3 rounded-md mb-5'>
            <figure>
                <img className="w-full h" src={imageThree} alt="" />
            </figure>
                <h2 className='text-xl font-semibold text-black'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className='flex items-center gap-5 mt-3'>
            <p className='text-lg font-semibold'>
                Sports
            </p>
            <p className='flex items-center gap-2'><FaCalendar></FaCalendar> <span>{moment().format("MMM D, Y")}</span></p>
            </div>
            </div>          
        </>
    );
};

export default ExtraCard;
import React from 'react';
import Header from '../components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import RightSide from '../components/Shared/RightSide/RightSide';
import LeftSide from '../components/Shared/LeftSide/LeftSide';
import Navbar from '../components/Shared/Navbar/Navbar';
import Marqee from '../components/Shared/Marqee/Marqee';

const Main = () => {
    return (
        <div className='max-w-full w-10/12 mx-auto'>
            <Header></Header>
            <Marqee></Marqee>
            <Navbar></Navbar>

            <main className='grid grid-cols-4 gap-3'>
                <div>
                <LeftSide></LeftSide>
                </div>
                <div className='col-span-2'>
                    <Outlet></Outlet>
                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </main>
        </div>
    );
};

export default Main;
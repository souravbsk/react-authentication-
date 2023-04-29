import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Category from '../../Pages/Category/Category';
import ExtraCard from '../../ExtraCard/ExtraCard';

const LeftSide = () => {
    const [categories,setCategories] = useState([]);
    useEffect(() => {
        fetch('https://dragon-website-server-recap-souravbsk.vercel.app/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className='text-xl font-semibold mb-4'>All Category</h2>
            {
                categories.map(category => <Category key={category.id} category={category}></Category>)
            }
            <div>
                <ExtraCard></ExtraCard>
            </div>
        </div>
    );
};

export default LeftSide;
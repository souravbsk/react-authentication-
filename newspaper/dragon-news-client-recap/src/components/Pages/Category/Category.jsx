import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {id,name} = category;
    return (
        <div className='mb-4'>
            <Link to={`/news/${id}`} className='text-lg py-3 text-gray-500 font-semibold'>{name}</Link>
        </div>
    );
};

export default Category;
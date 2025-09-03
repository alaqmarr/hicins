import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Blog1 from '../Components/Blog/Blog1';

const page = () => {
    return (
        <div className='blog-page'>
            <BreadCumb Title="Blog"></BreadCumb>
            <Blog1></Blog1>
        </div>
    );
};

export default page;
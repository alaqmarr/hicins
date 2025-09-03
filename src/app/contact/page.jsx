import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Contact from '../Components/Contact/Contact';

const page = () => {
    return (
        <div className='contact-page'>
            <BreadCumb Title="Contact Us"></BreadCumb>
            <Contact></Contact>
        </div>
    );
};

export default page;
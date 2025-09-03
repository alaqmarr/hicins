import React from 'react';
import BreadCumb from '../../app/Components/Common/BreadCumb';
import Project1 from '../../app/Components/Project/Project1';

const page = () => {
    return (
        <div className='project-page'>
            <BreadCumb Title="Project"></BreadCumb>
            <Project1></Project1>
        </div>
    );
};

export default page;
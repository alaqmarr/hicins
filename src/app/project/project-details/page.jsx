import BreadCumb from '@/app/Components/Common/BreadCumb';
import ProjectDetails from '@/app/Components/ProjectDetails/ProjectDetails';
import React from 'react';

const page = () => {
    return (
        <div className='project-detail'>
            <BreadCumb Title="Project Details"></BreadCumb>
            <ProjectDetails></ProjectDetails>
        </div>
    );
};

export default page;
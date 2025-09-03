import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Team1 from '../Components/Team/Team1';

const page = () => {
    return (
        <div className='team-page'>
            <BreadCumb Title="Team"></BreadCumb>
            <Team1></Team1>
        </div>
    );
};

export default page;
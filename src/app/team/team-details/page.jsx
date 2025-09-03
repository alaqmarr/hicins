import BreadCumb from '@/app/Components/Common/BreadCumb';
import TeamDetails from '@/app/Components/TeamDetails/TeamDetails';
import React from 'react';

const page = () => {
    return (
        <div className='team-detail-page'>
            <BreadCumb Title="Team Details"></BreadCumb>
            <TeamDetails></TeamDetails>
        </div>
    );
};

export default page;
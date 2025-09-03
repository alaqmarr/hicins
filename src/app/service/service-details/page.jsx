import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetails from '@/app/Components/ServiceDetails/ServiceDetails';
import React from 'react';

const page = () => {
    return (
        <div className='service-deatils-page'>
            <BreadCumb Title="Service Details"></BreadCumb>
            <ServiceDetails></ServiceDetails>
        </div>
    );
};

export default page;
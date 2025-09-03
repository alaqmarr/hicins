import React from 'react';
import BreadCumb from '../../app/Components/Common/BreadCumb';
import Services2 from '../../app/Components/Services/Services2';
import Cta from '../../app/Components/Services/Cta';
import Pricing from '../../app/Components/Home/Pricing';

const page = () => {
    return (
        <div className='service-page'>
            <BreadCumb Title="Services"></BreadCumb>
            <Services2></Services2>
            <Cta></Cta>
            <Pricing></Pricing>
        </div>
    );
};

export default page;
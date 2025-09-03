import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Services2 from '../Components/Services/Services2';
import Cta from '../Components/Services/Cta';
import Pricing from '../Components/Home/Pricing';

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
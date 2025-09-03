import React from 'react';
import About2 from '../Components/About/About2';
import BreadCumb from '../Components/Common/BreadCumb';
import Testimonial from '../Components/Home/Testimonial';
import Faq from '../Components/Home/Faq';
import Process from '../Components/Home/Process';

const page = () => {
    return (
        <div className='about-page'>
            <BreadCumb Title="About Us"></BreadCumb>
            <About2 
               Img="/assets/img/pneumatics.jpg"
                TitleUp="About us"
                Title="Hardware and Instruments Centre"
                Content="Welcome to HIC. We deal in a variety of products which include:"
                FeatureList={[
                    "Instruments",
                    "Pneumatics",
                    "Hydraulics"
                ]}
                Experience="15+"
                BioImg="/assets/img/avatar_1.png"                
                BioName=""                
                BioContent=""               
            ></About2>
            {/* <Testimonial></Testimonial> */}
            <Faq></Faq>
            <Process></Process>
        </div>
    );
};

export default page;
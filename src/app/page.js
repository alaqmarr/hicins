import React from 'react';
import HomeSlider2 from '@/app/Components/Home2/HomeSlider2';
import About2 from '@/app/Components/About/About2';
import Services2 from '@/app/Components/Home2/Services2';
import Choose2 from '@/app/Components/Home2/Choose2';
import Cta from '@/app/Components/Services/Cta';
import Contact2 from '@/app/Components/Home2/Contact2';
import Team from '@/app/Components/Home2/Team';
import Project2 from '@/app/Components/Home2/Project2';
import Testimonial3 from '@/app/Components/Home2/Testimonial3';
import Blog2 from '@/app/Components/Home2/Blog2';

const page = async () => {
    const productsEndpoint = await fetch('https://mystore.alaqmar.dev/api/hic/products', { cache: 'no-store' })
  const products = await productsEndpoint.json();
  const categoriesEndpoint = await fetch('https://mystore.alaqmar.dev/api/hic/categories', { cache: 'no-store' })
  const categories = await categoriesEndpoint.json();
    return (
        <div className='home-page2'>
            <HomeSlider2></HomeSlider2>
            <Blog2 products={products} categories={categories} />
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
            {/* <Services2></Services2> */}
            {/* <Choose2></Choose2> */}
            <Cta></Cta>
            {/* <Team></Team> */}
            <Contact2></Contact2>
            {/* <Project2></Project2> */}
            {/* <Testimonial3></Testimonial3> */}
        </div>
    );
};

export default page;
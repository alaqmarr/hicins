"use client"
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';

const Blog2 = ({ products, categories, categoryId }) => {
    if(products.length === 0) {
        if(categoryId){
            return (<div>No products found for this category</div>)
        }
        return (<div>No products found</div>)
    }
    return (
        <section>
            <div className="cs_height_115 cs_height_lg_70"></div>
            <div className="container">
                <div className="cs_section_heading cs_style_1 text-center">
                <SectionTitle
                    Title="Explore Our Products"
                    SubTitle="Products"                       
                >
                </SectionTitle>
                </div>
                <div className="cs_height_45 cs_height_lg_45"></div>
                <div className="row cs_gap_y_30">
                {products.map((item, i) => (
                <div key={i} className="col-lg-4">
                    <div className="cs_post cs_style_3">
                    <div className="cs_post_thumb_out">
                        <div className="cs_post_thumb_wrap">
                        <Link href="/blog/blog-details" className="cs_post_thumb">
                            <Image src={item.images[0].url} alt="img" width={359} height={235}   />
                        </Link>
                        </div>
                    </div>
                    <div className="cs_post_info">
                        <h2 className="cs_fs_24 cs_semibold cs_mb_15">
                        <Link href="/blog/blog-details">{item.name}</Link>
                        </h2>
                        <p className="cs_mb_21">{item.description}</p>
                        <hr/>
                        <Link href={`/products/${item.id}`} className="cs_text_btn cs_fs_16 text-uppercase cs_heading_color cs_bold">
                        Enquire
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28125 1.21875L13.7812 6.46875C13.9271 6.61458 14 6.79167 14 7C14 7.20833 13.9271 7.38542 13.7812 7.53125L8.28125 12.7812C7.90625 13.0729 7.55208 13.0729 7.21875 12.7812C6.92708 12.4062 6.92708 12.0521 7.21875 11.7188L11.375 7.75H0.75C0.291667 7.70833 0.0416667 7.45833 0 7C0.0416667 6.54167 0.291667 6.29167 0.75 6.25H11.375L7.21875 2.28125C6.92708 1.94792 6.92708 1.59375 7.21875 1.21875C7.55208 0.927083 7.90625 0.927083 8.28125 1.21875Z" fill="currentColor"></path>
                        </svg>                    
                        </Link>
                    </div>
                    </div>
                </div>
                ))}
                </div>
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
            </section>
    );
};

export default Blog2;
import BreadCumb from '../../../Components/Common/BreadCumb';
import BlogDetails from '../../../Components/BlogDetails/BlogDetails';
const page = () => {
    return (
        <div className='blog-detail'>
            <BreadCumb Title="Products Details"></BreadCumb>
            <BlogDetails product={product}></BlogDetails>
        </div>
    );
};

export default page;
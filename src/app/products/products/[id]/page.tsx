import BreadCumb from '../../../Components/Common/BreadCumb';
import BlogDetails from '../../../Components/BlogDetails/BlogDetails';
const page = () => {
    return (
        <div className='blog-detail'>
            <BreadCumb Title="Blog Details"></BreadCumb>
            <BlogDetails></BlogDetails>
        </div>
    );
};

export default page;
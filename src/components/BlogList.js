import BlogItem from "./BlogItem"
import '../css/BlogList.css';

const BlogList = ({ blogs, content}) => {
    return(
        <div className='blogList-wrap'>
            {blogs.map((blog) => (
                <BlogItem blog={blog} content={content} />
            ))}
        </div>
    )
}
export default BlogList
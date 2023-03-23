import BlogItem from "./BlogItem"

const BlogList = ({ blogs, content}) => {
    return(
        <div className=''>
            {blogs.map((blog) => (
                <BlogItem blog={blog} content={content} />
            ))}
        </div>
    )
}
export default BlogList
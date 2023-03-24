import { Link } from "react-router-dom"
import Chip from "./Chip"

const BlogItem = ({blog, content}) => {
    return(
        <div className='blogItem-wrap' key={blog.title}>
        <img className='blogItem-cover' src={blog.featured_image} alt='cover' />
        <Chip label={blog.tags[0].name} />
        <h3>{blog.title}</h3>
        <p className='blogItem-desc'>{blog.summary}</p>
        <footer>
          <div className='blogItem-author'>
            <img src={blog.author.profile_image} alt='avatar' />
            <div>
              <h6>{blog.author.first_name+" "+blog.author.last_name}</h6>
              <p>{blog.created_at}</p>
            </div>
          </div>
          <Link className='blogItem-link' to={`/blog/${blog.title}`} onClick={()=>{content(blog)}}>
            ➝
          </Link>
        </footer>
      </div>
    )
}
export default BlogItem
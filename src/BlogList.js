import { Link } from "react-router-dom";
const BlogList = (props) => {
      const blogs=props.blogs;
      const title=props.title;
      return ( 
            <div className="bloglist">
                  <h1>{title}</h1>
                  {blogs.map((blog) => (
                        <div className="blog-preview" key={blog.id}>
                              <Link to={`/blogs/${blog.id}`}>
                                    <h2>{blog.title}</h2>
                              </Link>
                              <p>Written by {blog.author}</p>
                              {/* <button onClick={()=>handleBlog(blog.id)}>DELETE</button> */}
                        </div>

                  ))}
            </div>
       );
}
 
export default BlogList;
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import "./Create.css"
const BlogDetails = () => {
      const history=useHistory();
      const {id}=useParams();
      const { blogs:blog, err } = useFetch("http://localhost:3000/blogs/"+id);
      const handleClick=()=>{
            fetch("http://localhost:3000/blogs/"+blog.id,{
                  method:'DELETE'
            }).then(()=>{
                  alert("Deleted successfully");
                  history.push("/");
            })
      }
      return ( 
            <div className="blog-details">
                  <h2>Blog Details</h2>
                  {
                        blog && (
                              <article>
                                    <h3>{blog.title}</h3>
                                    <b>{blog.author}</b>
                                    <p>{blog.body}</p>
                                    <button onClick={handleClick}>DELETE</button>
                              </article>
                        )
                  }

            </div>
       );
}
 
export default BlogDetails;
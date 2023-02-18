import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Create.css";
const Create = () => {
      const [title,setTitle]=useState("hello");
      const [body,setBody]=useState("bOdy of the blog");
      const [author,setAuthor]=useState("Mario");
      const history=useHistory();



      const handleSubmit=(e)=>{
            e.preventDefault();
            const blog={title,author,body};
            fetch('http://localhost:3000/blogs',{
                  method:'POST',
                  headers:{'Content-Type':'application/json'},
                  body:JSON.stringify(blog)
            })
            .then(()=>{
                  alert("New Blog added");
                  history.push("/");
            })
      }

      return ( 
            <div className="create">
                  <h2>ADD A NEW BLOG</h2>
                  <form onSubmit={handleSubmit}>
                        <label for="">Blog Title:</label>
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required />
                        <label for="">Blog body</label>
                        <textarea rows="10" cols="30" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                        <label for="">Author:</label>
                        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                              <option value="mario">Mario</option>
                              <option value="Kumar">Kumar</option>
                        </select>
                        <button >Add Blog</button>
                  </form>
            </div>
      );
}
 
export default Create;
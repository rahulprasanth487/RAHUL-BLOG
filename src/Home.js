import "./Home.css";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home =()=>
{
      // const [name,setName]=useState("Ram");
      // const handleClick=()=>
      // {
      //       setName("Rahul");
      // }


      //displaying the output
      
      const { blogs, err } = useFetch("/blogs");

      // const handleBlog=(id)=>    
      // {
      //       const newblog=blogs.filter((blog)=>(blog.id !== id));
      //       setBlogs(newblog);
      //    
      // }

      return(
            <div>
                 {/* <p>Home Page</p> 
                 <p style={{
                        fontSize:20,
                        color:"green"
                 }}>Name of the person is {name}</p>
                 <button onClick={handleClick}>Click</button>
                 <button onClick={()=>handleClick2("Rahul")}>Click me again</button> */}
                  {err && <div>{err}</div>}
                 {blogs && <BlogList blogs={blogs} title="ALL BLOGS"/>}
            </div>
      );
}
export default Home;

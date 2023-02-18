import {useState,useEffect} from 'react';

const useFetch = (url) => {
      //const abortCon=new AbortController();
      const [blogs,setBlogs]=useState(null);
      const [err,setErr]=useState(false);

      useEffect(()=>{
            fetch(url)
            .then(res=>{
                  if(!res.ok)
                  {
                        throw Error("Error in fetching the data");
                  }
                  return res.json();
            })
            .then(data=>{
                  setBlogs(data);
                  setErr(null);
            })
            .catch((err)=>{
                  if(err.name==='AbortError')
                  {
                        console.log("Fetch aborted");
                  }
                  else{
                        setErr(err.message);
                  }
            })
            //return ()=>abortCon.abort();
      },[url]);

      return {blogs,err};
}
 
export default useFetch;
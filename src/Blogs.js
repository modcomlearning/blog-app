
import { useState } from "react";
const Blogs = () => {
    //Hook
    const [blogs, setBlogs] =  useState([{ id: 1, title: "NTV", desc: "Some data" },
        { id: 2, title: "NTV", desc: "Some data2" },
        { id: 3, title: "K24", desc: "Some data on k24" },
        { id: 4, title: "CITIZEN", desc: "Some data ON cITIZEN" }])
    

    return ( 
        <div className="list">
            <h2>Latest Blogs</h2>
            <div className="preview">
                {blogs.map((blog) => (
                    <div className="blogs" key={blog.id}>
                        <h4>{blog.title}</h4>
                        <p>{blog.desc}</p>
                        <hr />
                        <br />
                    </div>
                ))}
            </div>
         </div>
     );
}
 
export default Blogs;
         




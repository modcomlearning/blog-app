import { useState } from "react";
import Blogs from "./Blogs";
import Labs from "./Labs";


import styled from 'styled-components'
const Home = () => {
    //Hooks - used to a new state of a variable
    //Hooks make a code reactive, it can update UI on runtime
    const [name, setName] = useState("Christian");
    const [age, setAge] = useState(56);
    const [paid, setPaid] = useState(true);
    console.log("Paid"+paid)
    const update = () => {
        setName("Ken")
        setAge(45)
        setPaid(false)
    }


    let message = "This is a message to Demo Props"
    //Styles - internal
    const Modcom = styled.h1`
          color:orange;
          background-color:black;
          padding:20px;
    `;

    const Button = styled.button`
          color:orange;
          background-color:black;
          font-family:arial;
          padding:5px;
    `;
  //Do paragraph
    
    return ( 
        <div className="home">
            {/* below is a styled component */}
            <Modcom>MediLab Admin</Modcom>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur laboriosam recusandae laudantium quas odio asperiores cupiditate nulla, sunt consectetur natus voluptatum laborum debitis qui, quod temporibus quibusdam nihil dicta.</p>
            <Button>Get Started</Button>
            <br /><br />


            <h1>Get New Experience</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae voluptatem in nihil corrupti, doloribus aut perferendis! Distinctio consequuntur veniam hic ducimus! Quos sapiente numquam adipisci ea doloremque veritatis! Vel?</p>
            <h2> His name is {name}  and {age} Yrs</h2>
            <h2> Payment Status  {paid}</h2>
            <button onClick={update}>Update</button>

            <div className="more">
                <h2>Lets Start!!</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate adipisci dicta hic earum perspiciatis, culpa alias architecto vitae vel ipsa eaque pariatur et eum facere velit inventore ab at illo.</p>
            </div>
        </div>
     );
}
export default Home;

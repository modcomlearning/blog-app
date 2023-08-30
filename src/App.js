import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import Blogs from './Blogs';
function App() {
  //Arrow Function
  const handleClick = () => {
    console.log("Hello");
  }

  const handleClick2 = (name) => {
      console.log("Member name is "+name)
  }
  //Hooks
  let money = 200
  const handleClick3 = () => {
    money = 500
    console.log("money "+money)
  }

  let age = 80
  let name = "Bob"
  //States(Hooks), Functions, Props, Lists, useEffec
     return (
    <div className="App">
       <Navbar/>
         <h1>My Blog</h1>
         <h1>The money was {money} KES</h1>
          <button onClick={handleClick3}>Click Me3</button>


         <button onClick={handleClick}>Click Me</button>
         <button onClick={() => {
             handleClick2("John")           
         }}>Click Me2</button>
        

      {/* <h2>the name was {name} and was { age } Yrs</h2>      */}
      <p>This is a nice Blog</p>
         <Home />
         <Blogs/>
    </div>
  );
}
//Create a Component called Cars.js

export default App;

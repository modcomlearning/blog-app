import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import Blogs from './Blogs';
import Labs from './Labs';
import Conference from './Conference';
// to be used in routing
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import About from './About';
import GlobalStyle from './styles/Global';
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
    <Router>       
      <div className="App">
        <GlobalStyle/>
      <Navbar />
        <div className="content">
          {/* this is reffering from Navbar JS */}
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blogs' element={<Blogs />} ></Route>
            <Route path='/labs' element={<Labs />}></Route>
            <Route path='/conferences' element={<Conference />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </div>
         {/* <h1>My Blog</h1>
         <h1>The money was {money} KES</h1>
          <button onClick={handleClick3}>Click Me3</button>
         <button onClick={handleClick}>Click Me</button>
         <button onClick={() => {
             handleClick2("John")           
         }}>Click Me2</button>
      <p>This is a nice Blog</p> */}
    </div>
    </Router>
  );
}
//Create a Component called Cars.js

export default App;

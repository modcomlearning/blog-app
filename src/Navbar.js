import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <div className="links">
            <div className="navbar">
                <Link to="/">Home</Link>  /
                <Link to="/blogs">My Blogs</Link> /
                <Link to="/new">New Blog</Link>  /
                <Link to="/signup">Sign Up</Link>
                <Link to="/labs">Available Labs</Link>
                <Link to="/conferences">Conferences</Link>
                <Link to="/about">About</Link>
            
             </div>
        </div>
     );
}
 
export default Navbar;

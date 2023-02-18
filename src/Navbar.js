import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar =()=>
{
      return (
            <nav className="navbar">
                  <h1 style={{
                        color:"red",
                        fontSize:30
                  }}>RAHUL BLOG</h1>
                  <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/Create">New Blog</Link>
                  </div>
            </nav>
      );
}
export default Navbar;
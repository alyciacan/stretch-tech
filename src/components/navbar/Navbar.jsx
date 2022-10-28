import './Navbar.css';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Router>
                <Link to='/' >
                    <img src='' alt="Art Party logo"/>
                </Link>
                <NavLink to="/gallery" className="link">my gallery</NavLink>
            </Router>
        </nav>
    )
}

export default Navbar;
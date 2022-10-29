import './Navbar.css';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import logo from './artparty-logo.png';

const Navbar = () => {
    return (
        <Router>
            <nav className="navbar">
                <Link to='/' className="navbar-link">
                    <img src={ logo } alt="Art Party logo" className="logo-img"/>
                </Link>
                <NavLink to="/gallery" className="navbar-link">my gallery</NavLink>
            </nav>
        </Router>
    )
}

export default Navbar;
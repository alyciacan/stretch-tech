import './Navbar.css';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import logo from './artparty-logo.png';

const Navbar = () => {
    return (
        <Router>
            <nav className="navbar">
                <Link to='/' className="logo-link">
                    <img src={ logo } alt="Art Party logo"/>
                </Link>
                <NavLink to="/gallery" className="link">my gallery</NavLink>
            </nav>
        </Router>
    )
}

export default Navbar;
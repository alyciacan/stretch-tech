import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from './artparty-logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="navbar-link" to='/' >
                <img src={ logo } alt="Art Party logo" className="logo-img"/>
            </Link>
            <NavLink to="/mygallery" className="my-gallery-link">My gallery</NavLink>
        </nav>
    )
};

export default Navbar;
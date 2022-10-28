import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/' >
                <img src='' alt="Art Party logo"/>
            </Link>
            <NavLink />
            <hr />
        </nav>
    )
}

export default Navbar;
import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
					<nav className="nav">
							<NavLink to="/" className="nav-link">HOME</NavLink>
							<NavLink to="/about" className="nav-link">ABOUT</NavLink>
					</nav>
	)
}

export default Nav;
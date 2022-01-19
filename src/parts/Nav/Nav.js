import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
					<nav className="nav">
							<NavLink to="/" className="nav-link">HOME</NavLink>
							<NavLink to="/favorites" className="nav-link">FAVORITES</NavLink>
							<NavLink to="/subscriptions" className="nav-link">SUBSCRIPTIONS</NavLink>
					</nav>
	)
}

export default Nav;
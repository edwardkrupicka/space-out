import './Nav.scss';
import { NavLink, Link } from 'react-router-dom';
import planet from '../../assets/images/planet.svg';


const Nav = () => {
	return (
					<nav className="nav">
						<div className="header-link-container">
							<Link to="/" className="header-link">
								<h1 className='space-out' >
									space-out
									<svg className='circle' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
										<circle className='circle' cx="50" cy="50" r="50"/>
									</svg >
									<img className='planet'src={planet}/></h1></Link>
						</div>
						<div className="nav-link-container">
							<NavLink to="/" className="nav-link">HOME</NavLink>
							<NavLink to="/favorites" className="nav-link">FAVORITES</NavLink>
							<NavLink to="/subscriptions" className="nav-link">SUBSCRIPTIONS</NavLink>
						</div>
					</nav>
	)
}

export default Nav;
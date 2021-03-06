import './Subscriptions.scss';
import Grid from '../../components/Grid/Grid';
import { Routes, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Subscriptions = ({ data, subscriptions, handleSubClick, handleFavClick }) => {

let dataArr = []
for (const property in data) {
	for (const nestedProp in data[property]) {
		if(subscriptions[data[property][nestedProp].newsSite])
			dataArr.push((data[property][nestedProp]))
	}
}

let subscriptionsArr = []
for (const property in subscriptions) {
		subscriptionsArr.push(subscriptions[property])
}

let filtered = (site) => { return dataArr.filter(obj => obj.newsSite === site) }

const keys = Object.keys(subscriptions)

const routeComponents = subscriptionsArr.map((element) => { return <Route exact path={`/${element.split(" ").join("")}`} key={element} element={ <Grid styleOverrideClass={'subscriptions'} data={filtered(element)} handleSubClick={handleSubClick} handleFavClick={handleFavClick} subscriptions={subscriptions}/> } />});

	return (
		<section className='subscription-container'>
			<NavLink className='sub-header' to='/subscriptions'><h1>Subscribtions</h1></NavLink>
			<ul className='subscribed'>
				{keys.map((element, index) => (
					<NavLink to={`/subscriptions/${element.split(" ").join("")}`} className="sub-link" key={index} >
						{element}
					</NavLink>
				))}
			</ul> 
		<Routes>
			<Route path='/' element={ <Grid styleOverrideClass={'subscriptions'} data={dataArr} handleSubClick={handleSubClick} handleFavClick={handleFavClick} subscriptions={subscriptions}/> } />
			{routeComponents}
		</Routes>
		</section>
	)
}

export default Subscriptions;

Subscriptions.propTypes = {
  data: PropTypes.object,
  handleSubClick: PropTypes.func,
  handleFavClick: PropTypes.func,
  subscriptions: PropTypes.object
};
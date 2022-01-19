import './Subscriptions.scss';
import Grid from '../../assets/components/Grid/Grid';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

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

console.log(filtered('Spaceflight Now'))

console.log('Spaceflight Now'.split(" ").join(""))

const location = useLocation().pathname;
const keys = Object.keys(subscriptions)
const routeComponents = subscriptionsArr.map((element) => { return <Route exact path={`/${element.split(" ").join("")}`} key={element} element={ <Grid styleOverrideClass={'subscriptions'} data={filtered(element)} handleSubClick={handleSubClick} handleFavClick={handleFavClick} subscriptions={subscriptions}/> } />});

console.log(routeComponents)

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
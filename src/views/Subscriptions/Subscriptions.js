import './Subscriptions.scss';
import Grid from '../../components/Grid/Grid';
import React, { useEffect, useState } from 'react';

const Subscriptions = ({ data, subscriptions, handleSubClick, handleFavClick }) => {
// let newObj = Object.entries(data.articles)

// const filteredData = newObj.filter(([key, value]) => value.newsSite === 'NASA')

// console.log(filteredData)
// console.log(Object.fromEntries(filteredData))

let dataArr = []
for (const property in data) {
	for (const nestedProp in data[property]) {
		if(subscriptions[data[property][nestedProp].newsSite])
			dataArr.push((data[property][nestedProp]))
	}
}

console.log(dataArr)

	return (
		<section className='home'>
			<Grid styleOverrideClass={'subscriptions'} data={dataArr} handleSubClick={handleSubClick} handleFavClick={handleFavClick} />
		</section>
	)
}

export default Subscriptions;
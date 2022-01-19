import './Home.scss';
import Grid from '../../components/Grid/Grid';
import React, { useEffect, useState } from 'react';

const Home = ({ data, handleSubClick, handleFavClick, subscriptions }) => {
	let dataArr = []
  for (const property in data) {
    for (const nestedProp in data[property]) {
      dataArr.push((data[property][nestedProp]))
    }
  }

	return (
		<section className='home-container'>
			<Grid styleOverrideClass={'home'} data={ dataArr } handleSubClick={handleSubClick} handleFavClick={handleFavClick} subscriptions={subscriptions} />
		</section>
	)
}

export default Home;
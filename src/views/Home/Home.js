import './Home.scss';
import Grid from '../../components/Grid/Grid';
import React, { useEffect, useState } from 'react';

const Home = ({ data, handleSubClick, handleFavClick }) => {
	let dataArr = []
  for (const property in data) {
    console.log(data)
    for (const nestedProp in data[property]) {
      dataArr.push((data[property][nestedProp]))
    }
  }

	return (
		<section className='home'>
			<div>Hello</div>
			<Grid styleOverrideClass={'home'} data={ dataArr } handleSubClick={handleSubClick} handleFavClick={handleFavClick} />
		</section>
	)
}

export default Home;
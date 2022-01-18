import './Home.scss';
import Grid from '../../components/Grid/Grid';
import React, { useEffect, useState } from 'react';

const Home = ({ data, favorites, setData, setFavorites }) => {

	return (
		<section className='home'>
			<Grid data={ data } favorites={favorites} setData={setData} setFavorites={setFavorites} styleOverrideClass={'home'}/>
		</section>
	)
}

export default Home;
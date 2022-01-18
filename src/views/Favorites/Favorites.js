import './Favorites.scss';
import Grid from '../../components/Grid/Grid';
import React, { useEffect, useState } from 'react';

const Favorites = ({ favorites, setData, setFavorites }) => {

	return (
		<section className='home'>
			<Grid data={favorites} favorites={favorites} setData={setData} setFavorites={setFavorites} styleOverrideClass={'favorites'}/>
		</section>
	)
}

export default Favorites;
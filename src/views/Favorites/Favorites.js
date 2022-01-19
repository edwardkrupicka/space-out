import './Favorites.scss';
import Grid from '../../components/Grid/Grid';
import React, { useEffect, useState } from 'react';

const Favorites = ({ favorites, handleSubClick, handleFavClick }) => {

	let dataArr = []
  for (const property in favorites) {
    console.log(favorites)
    for (const nestedProp in favorites[property]) {
      dataArr.push((favorites[property][nestedProp]))
    }
  }

	return (
		<section className='favorites'>
			<Grid styleOverrideClass={'favorites'} data={dataArr} handleFavClick={handleFavClick} handleSubClick={handleSubClick} />
		</section>
	)
}

export default Favorites;
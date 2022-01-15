import './Home.scss';
import React, { useEffect, useState } from 'react';

const Home = ({ data }) => {

	// const articles = data.articles.map(element => element.id)

	data.articles.forEach(element => {
		console.log('article', element)
	})

	data.blogs.forEach(element => {
		console.log('blog', element)
	})

	data.reports.forEach(element => {
		console.log('report', element)
	})

	return (
		<section className='home'>
			{/* <p>{articles}</p> */}
		</section>
	)
}

export default Home;
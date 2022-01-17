import './Card.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ element, styleOverrideClass }) => {

  return (
    <article className={!styleOverrideClass ? 'card' : `card ${styleOverrideClass}`} key={element.id} >
      <img className='card-img' src={element.imageUrl} alt={element.title} id={element.id}/>
			<button onClick={() => window.open(element.url)}>Link</button>
			<button>Favorite</button>
			<h1 className='card-title' >{element.title}</h1>
    </article>
  )
}

export default Card;
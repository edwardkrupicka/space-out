import './Card.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ element, styleOverrideClass, handleSubClick, handleFavClick }) => {
  const [cardState, setCardState] = useState(element)

  return (
    <article className={`card ${styleOverrideClass}`} key={cardState.id} >
      <img className='card-img' src={element.imageUrl} alt={cardState.title} id={cardState.id}/>
			<button onClick={() => window.open(element.url)}>Link</button>
			<button className={cardState.favorited ? 'favorited active' : 'favorited inactive'} onClick={() => handleFavClick( cardState )} >Favorite</button>
			<button className={cardState.subscribed ? 'subscribed active' : 'subscribed inactive'} onClick={() => handleSubClick( cardState )} >Subscribed</button>
			<h1 className='card-title' >{cardState.title}</h1>
    </article>
  )
}

export default Card;
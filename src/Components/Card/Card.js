import './Card.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data, setData, favorites, setFavorites, element, styleOverrideClass }) => {
  const [cardState, setCardState] = useState(element)

  const handleClick = () => {
    let stateElement = data[element.type][element.id]
    cardState.favorited = !cardState.favorited
    setData(data => {
      return {...data, ...stateElement = cardState}
    })
    if(cardState.favorited) {
      Object.assign(favorites[cardState.type], { [cardState.id]: cardState })
    } else {
      delete favorites[cardState.type][cardState.id]
    }
  }


  return (
    <article className={`card ${styleOverrideClass}`} key={cardState.id} >
      <img className='card-img' src={element.imageUrl} alt={cardState.title} id={cardState.id}/>
			<button onClick={() => window.open(element.url)}>Link</button>
			<button className={cardState.favorited ? 'favorited active' : 'favorited inactive'} onClick={() => handleClick()} >Favorite</button>
			<h1 className='card-title' >{cardState.title}</h1>
    </article>
  )
}

export default Card;
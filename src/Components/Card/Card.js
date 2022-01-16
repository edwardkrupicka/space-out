import './Card.scss';
import React, { useState } from 'react';

const Card = ({ element, styleOverrideClass }) => {
  // const [newData, setNewData] = useState( element );

  // const handleClick = () => {
  //   handleFavoritesClick(newData)
  //   newData.favorited = !newData.favorited
  //   console.log(newData.favorited)
  // }

  return (
    <article className={!styleOverrideClass ? 'card' : `card ${styleOverrideClass}`} key={element.id} >
      <img className='card-img' src={element.imageUrl} alt={element.title} id={element.id}/>
			<h1 className='card-title' >{element.title}</h1>
    </article>
  )
}

export default Card;
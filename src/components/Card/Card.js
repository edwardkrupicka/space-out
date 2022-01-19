import './Card.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({ element, styleOverrideClass, handleSubClick, handleFavClick, subscriptions }) => {
  const [cardState, setCardState] = useState(element)

  return (
    <div className={`card ${element.id}`} style={{ backgroundImage: `url(${element.imageUrl})` }} >
          <article className={`content ${styleOverrideClass}`} key={cardState.id} >
              <h2 className='newsSite' >{cardState.newsSite}</h2>
              <h2 className='title' >{cardState.title}</h2>
              <p className='summary'>{cardState.summary}</p>
              <button className='btn' onClick={() => window.open(element.url)}>link to {cardState.type.substring(0, cardState.type.length - 1)}</button>
              <p className='published'>{cardState.published}</p>
              <div className='btn-container'>
                <button className={cardState.favorited ? 'btn active' : 'btn inactive'} onClick={() => handleFavClick( cardState )} >{cardState.favorited ? 'unfavorite' : 'favorite'}</button>
                <button className={subscriptions[cardState.newsSite] ? 'btn active' : 'btn inactive'} onClick={() => handleSubClick( cardState )} >{subscriptions[cardState.newsSite] ? `unsubscribe from ${cardState.newsSite}` : `subscribe to ${cardState.newsSite}`}</button>
              </div>
          </article>
        </div>
  )
}

export default Card;

Card.propTypes = {
  data: PropTypes.array,
  element: PropTypes.object,
  styleOverrideClass: PropTypes.string,
  handleSubClick: PropTypes.func,
  handleFavClick: PropTypes.func,
  subscriptions: PropTypes.object
};
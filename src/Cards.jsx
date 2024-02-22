// Cards.js
import React from 'react';
import './Project.css';

const Cards = ({ title, img, onClick }) => {
  return (
    <div className='card'>
      <img src={img} alt='project' onClick={onClick} />
      <h2 className='card-title'>{title}</h2>
    </div>
  );
};

export default Cards;

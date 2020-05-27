import React from 'react'
import './card.css'

const Card = props => {
  const {
    image,
    title,
    text
  } = {...props}
  return (
    <div className="card m-3 card-shadow"  role="button">
      <img src={image} className="card-img-top" alt={`${title} avatar`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  )
}

export default Card
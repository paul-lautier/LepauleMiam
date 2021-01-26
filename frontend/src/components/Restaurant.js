import React from 'react'
import Rating from './Rating'


export default function Restaurant(props) {
    const { restaurant } = props
    return (
<div key={restaurant._id_r} className="card">
      <a href={`/product/${restaurant._id_r}`}>
        <img className="medium" src={restaurant.logo} alt={restaurant.name} />
      </a>
      <div className="card-body">
        <a href={`/restaurant/${restaurant._id}`}>
          <h2>{restaurant.name}</h2>
        </a>
       <Rating rating={restaurant.rating_r} numReviews={restaurant.numReviews_r}></Rating>
      </div>
    </div>
    )
}

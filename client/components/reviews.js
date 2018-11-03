import React from 'react';

const Reviews = (props) => (
  <div className="reviews">
    {props.message.map(restaurant => (
      <div key={restaurant.id}>
        <span> {restaurant.name}</span>
      </div>)
    )}
  </div>
);



export default Reviews;
import React from 'react';
import User from './user.js';

const Users = ({ reviews }) => {
  const filtered = reviews.filter(restaurant => restaurant.searched === true);
  return (
      <div className="allUsers">
        {filtered.map(restaurant => ( <User restaurant={restaurant} />
         ))}
      </div>
  );
};

export default Users;


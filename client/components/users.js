import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.div`
  padding-left: 20px;
  flex-direction: column;
  span {
  font-size: 13px;
  font-weight: bold;
  }
  p {
    flex-direction: row;
  }
  
`;


const Users = ({ reviews }) => {
  const filtered = reviews.filter(restaurant => restaurant.searched === true);
  console.log(filtered);
  return (
    <Wrapper>
      <div className="restaurant_reviews">
        {filtered.map(restaurant => (
          <div>
            <img src={restaurant.review.user_avatar}/>
            <div>{restaurant.review.user_name}</div>
            <div><span>{restaurant.review.location}</span></div>
            <div>
              Reviews:
              {restaurant.review.number_reviews}
            </div>
            <div>
              Photos:
              {restaurant.review.number_photos}
            </div>
            <p>
              Score:
              {restaurant.review.score}
            </p>
            <div>{moment(restaurant.review.date).format('L')}</div>
            <p>{restaurant.review.review_comment}</p>
            <img src={restaurant.review.picture_food} width="100px" height="100px" />
          </div>))}
      </div>
    </Wrapper>
  );
};


export default Users;

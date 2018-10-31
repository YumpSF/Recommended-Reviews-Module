import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.div`
  padding-left: 20px;
  span {
    font-size: 13px;
    font-weight: bold;
    display: inline-grid;
  }
`;


const Users = (props) => (
  <Wrapper>
    <div className="reviews">
      {props.reviews.map(user => (
        <div key={user.id}>
          <div> {user.user_name}</div>
          <span> {user.location}</span>
          <div>Reviews: {user.number_reviews}</div>
          <div>Photos: {user.number_photos}</div>
          <p>Score: {user.score}</p>
          <div>{moment(user.date).format("L")}</div>
          <p>{user.review_comment}</p>
        </div>)
      )}
    </div>
  </Wrapper>
);


export default Users;
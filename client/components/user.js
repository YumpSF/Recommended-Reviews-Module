import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  p {
    flex-direction: row;
    text-align: left;
  }
  .restaurant_reviews {
    border-top: 1px solid #e6e6e6;
    padding-top: 10px;
  }
  
  .users_info {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e6e6e6;
  }
  .users_columns {
    img {
      height: 50px;
      width: 50px;
      padding-top: 15px;
    }
    .user_bio {
      display: flex;
      .user_bio_flex {
        display: flex;
        padding-left: 10px;
        padding-top: 15px;
      }
      .user_info_text {
        font-size: 10px;
        .user_info_name {
          font-size: 14px;
          font-weight: bold;
          color: #0073bb;
        }
        .user_info_location {
          font-weight: bold;
        }
        .user_info_reviews {
          img {
            height: 9px;
            width: 9px;
            padding: 0;
          }
          padding-left: 2px;
          color: #666;
        }
        .user_info_photos {
          img {
            height: 8px;
            width: 8px;
            padding: 0;  
          }
          padding-left: 2px;
          color: #666;  
        }
      }
    }
    width: 25%;
  }
  .users_reviews {
    padding-left: 18px;
    padding-top: 17px;
    padding-bottom: 17px;
    width: 500px;
    .food_picture {
      height: 300px;
      width: 300px;
    }
  }
  .date {
    font-weight: normal;
    color: #666;
    padding-left: 5px;
  }
`;

const User = ({ restaurant }) => (
  <Wrapper>
  <div className="restaurant_reviews">
    <div className="users_info">
      <div className="users_columns">
        <div className="user_bio">
          <img src={restaurant.review.user_avatar}/>
          <div className="user_bio_flex">
            <div className="user_info_text">
              <div className="user_info_name">{restaurant.review.user_name}</div>
              <div className="user_info_location">{restaurant.review.location}</div>
              <div className="user_info_reviews">
                <img src="https://s3-us-west-1.amazonaws.com/hrfrontendcapstone/review_star.png"/> {restaurant.review.number_reviews} reviews</div>
              <div className="user_info_photos">
                <img src="https://s3-us-west-1.amazonaws.com/hrfrontendcapstone/camera.png"/> {restaurant.review.number_photos} photos</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="users_reviews">
          <div>
            <img src={restaurant.review.score}/> <span className="date">{moment(restaurant.review.date).format('L')}</span>
          </div>
          <p className="users_comment">{restaurant.review.review_comment}</p>
          <p><img className="food_picture" src={restaurant.review.picture_food}/></p>
        </div>
      </div>
    </div>
  </div>
  </Wrapper>);

export default User;
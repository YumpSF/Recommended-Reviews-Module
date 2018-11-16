import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Users from './users';
import Search from './search';

const Wrapper = styled.div`
  h2 {
  font-size: 21px;
  color: #333333;
    span {
      padding-left: 20px;
      font-size: 21px;
      font-weight: bold;
      color: #d32323;
    }
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };

    this.fetchReviews = this.fetchReviews.bind(this);
  };

  componentDidMount() {
    const id = window.location.pathname.slice(1);
    this.fetchReviews(id);
  }

  fetchReviews(id) {
    $.ajax(`http://localhost:3000/api/${id}`, {
      success: (reviews) => {
        const wrappedReviews = reviews.map(restaurant => {
          return {
            review: restaurant,
            searched: true,
          };
        });
        this.setState({
          reviews: wrappedReviews,
        });
      }
    });
  }

  filterReviews = (query) => {
    const { reviews } = this.state;
    const updated = reviews.map(restaurant => {
      if (restaurant.review.review_comment.toLowerCase().includes(query.toLowerCase())) {
        return Object.assign({}, restaurant, {
          searched: true,
        });
      } else {
        return Object.assign({}, restaurant, {
          searched: false,
        });
      }
    });
    this.setState({
      reviews: updated,
    });
  };


  render() {
    const {reviews} = this.state;
    // if reviews.length is equal to 0 render restaurant name
    if (reviews.length) {
      return (
        <Wrapper>
          <h2><span>Recommended Reviews</span> for {this.state.reviews[0].review.name}</h2>
          <Search reviews={reviews} onChange={this.filterReviews}/>
          <Users reviews={this.state.reviews}/>
        </Wrapper>
      );
    } else {
      // if reviews.length is not equal to 0 render div element
      return (
        <div>
          Please wait...
        </div>
      );
    }
  }
}


export default App;
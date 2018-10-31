import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Users from './users.js';

const Wrapper = styled.div`
  h2 {
  font-size: 21px;
    span {
      font-size: 21px;
      font-weight: bold;
      color: #d32323;
    }
  }
`;



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      reviews: [],
    };

    this.fetchReviews = this.fetchReviews.bind(this);
  };

  componentDidMount() {
    const id = window.location.pathname.slice(1);
    this.fetchReviews(id);
  }

  fetchReviews(id) {
    $.ajax(`/api/${id}`, {
      success: (reviews) => {
        this.setState({reviews})
      }
    })
  }

  render() {
    //if reviews.length is equal to 0 render restaurant name
    if (this.state.reviews.length) {
      return (
        <Wrapper>
          <h2><span>Recommended Reviews</span> for {this.state.reviews[0].name}</h2>
          <Users reviews={this.state.reviews}/>
        </Wrapper>
      )
    } else {
      //if reviews.length is not equal to 0 render div element
      return (
        <div>
          Please wait...
        </div>
      )
    }
  }
}


export default App;
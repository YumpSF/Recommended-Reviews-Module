import React from 'react';
import $ from 'jquery';
import Users from './users.js';

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
        <div>
          <h2>Recommended Reviews for {this.state.reviews[0].name}</h2>
          <Users reviews={this.state.reviews}/>
        </div>
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
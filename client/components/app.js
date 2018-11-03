import React from 'react';
import $ from 'jquery';
// import Reviews from './reviews.js';

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
    console.log(this.state);
    return (
      <div>
        <h1>Reviews</h1>
      </div>
    )
  }
}


export default App;
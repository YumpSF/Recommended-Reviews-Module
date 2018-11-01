import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-left: 20px;
`;


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value
    });
    this.props.onChange(event.target.value)
  };


  render() {
    return (
      <Wrapper>
        <input value={this.state.query}
          placeholder="Search within the reviews "
          onChange={this.handleInputChange}
          />
      </Wrapper>
    )
  }

}


export default Search;
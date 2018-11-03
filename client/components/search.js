import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-left: 20px;
    padding-bottom: 20px;
    
    input {
      display: block;
      box-sizing: border-box;
      background: #fff;
      border: 1px solid #999;
      border-radius: 3px;
      font-size: 12px;
      line-height: 1em;
      height: 29.49px;
      width: 261px;
    }
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
        <input id="search" type="text" value={this.state.query}
          placeholder="Search within the reviews "
          onChange={this.handleInputChange}
          />
      </Wrapper>
    )
  }

}


export default Search;
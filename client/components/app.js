import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      message: 'Test'
    }
  };

  render() {
    return (
      <div>
        <h1>Rec</h1>

        <h2>{this.state.message}</h2>
      </div>
    )
  }
}


export default App;
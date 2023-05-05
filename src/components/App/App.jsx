import React from 'react';
import './App.css' ;
import Header  from './../Header/Header';

class App extends React.Component {
  state = {
    headerText: 'Hello, world',
  };

  render() {
    return (
      <div>
        <Header />
        <h3>{this.state.headerText}</h3>
        <button
          onClick={() => {
            this.setState({
              headerText: 'Did the magic happen ?',
            });
          }}
        >
          Magic happens here!
        </button>
      </div>
    );
  }
}

export default App ;

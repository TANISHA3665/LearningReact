import React from 'react';
import './App.css';
import Header from './../Header/Header';
import SearchBox from '../SearchBox/SearchBox';

class App extends React.Component {
  state = {
    headerText: 'NameBrewer',
    headerExpanded: true,
  };

  handleInputChange = (inputText) => {
    this.setState({ headerExpanded: !inputText });
  };

  render() {
    return (
      <div>
        <Header
          headTitle={this.state.headerText}
          headerExpanded={this.state.headerExpanded}
        />
        <SearchBox onInputChange={this.handleInputChange} />
      </div>
    );
  }
}

export default App;

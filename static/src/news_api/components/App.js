import React, { Component } from 'react';

import Search from '../containers/search';
import News from './news_render'
import Header from './header'


import LoadingBar from 'react-redux-loading-bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <Header />
            <br />
            <Search />
            < News  />
        </div>
      </div>
    );
  }
}

export default App;

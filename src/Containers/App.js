import React, { Component } from 'react';
import PageWrapper from '../Components/PageWrapper';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Pages
import Home from '../Components/Pages/Home';
import Main from '../Components/Pages/Main'
import About from '../Components/Pages/About'


class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route exact={true} path='/' component={Home} />
          <Route path='/post' component={Main} />
          <Route path='/about' component={About} />

        </PageWrapper>
      </Router>
    );
  }
}

export default App;

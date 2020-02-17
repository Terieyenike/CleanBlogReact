import React from 'react';
import Header from '../Common/Header';
import Main from './Main';
import image  from '../assets/img/home-bg.jpg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header
          heading='Code Everyday'
          subheading='Programming can change your life'
          image = {image}
        />
        <Main />
      </div>
    );
  }
}

export default Home;

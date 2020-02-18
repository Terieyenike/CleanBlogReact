import React from 'react';
import {Link } from 'react-router-dom'

class PostHeader extends React.Component {
  render() {
    return (
      <header className="masthead" style={{ backgroundImage: `url(${this.props.image})` }}>
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-heading">
            <h1>{this.props.heading}</h1>
            <h2 className="subheading">{this.props.subheader}</h2>
            <span className="meta">Posted by {' '}
              <Link to="#">{this.props.link}</Link>{' '}
              on February 17, 2020</span>
          </div>
        </div>
      </div>
    </div>
  </header>
    );
  }
}

export default PostHeader;

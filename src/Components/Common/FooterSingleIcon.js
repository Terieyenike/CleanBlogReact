import React from 'react';
import { Link } from 'react-router-dom';

class FooterSingleIcon extends React.Component {
  render() {
    return (
      <li className='list-inline-item'>
        <Link to='#'>
          <span className='fa-stack fa-lg'>
            <i className='fas fa-circle fa-stack-2x'></i>
            <i className={`fab ${this.props.icon} fa-stack-1x fa-inverse`}></i>
          </span>
        </Link>
      </li>
    );
  }
}

export default FooterSingleIcon;

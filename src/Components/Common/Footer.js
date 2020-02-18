import React from 'react';
import FooterSingleIcon from './FooterSingleIcon'

const icons = [
  {
    icon: 'fa-twitter'
  },
  {
    icon: 'fa-facebook-f'
  },
  {
    icon: 'fa-github'
  },
];

class Header extends React.Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-10 mx-auto'>
              <ul className='list-inline text-center'>
                {icons.map((iconss, index) => {
                  return <FooterSingleIcon {...iconss} key={index} />;
                })}
              </ul>
              <p className='copyright text-muted'>
                Copyright &copy; Daily Code 2020
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Header;

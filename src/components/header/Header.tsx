import React, { useState } from 'react';

import logo from '../../assets/cinema-logo.svg';
import './HeaderStyles.scss';

const HEADER_LIST = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: 'Now Playing',
    type: 'now_playing'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    name: 'Top Rated',
    type: 'top_rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
];

const Header: React.FC = () => {
  const [navClass, setNavClass] = useState<boolean>(false);
  const [menuClass, setMenuClass] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuClass(!menuClass);
    setNavClass(!navClass);

    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar">
          <div className="header-navbar">
            <div className="header-image">
              <img src={logo} alt="logo"></img>
            </div>
            <div className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`} id="header-mobile-menu" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
              {HEADER_LIST.map((header) => (
                <li key={header.id} className="header-nav-item">
                  <span className="header-list-name">
                    <i className={header.iconClass} />
                  </span>
                  &nbsp;
                  <span className="header-list-name">{header.name}</span>
                </li>
              ))}
              <input type="text" className="search-input" placeholder="Search for a movie" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

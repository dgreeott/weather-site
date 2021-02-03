import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

export const MenuItems = [
  {
      title: 'Home',
      url: '/',
      cName: 'nav-links'
  },
  {
      title: 'Search',
      url: '/search',
      cName: 'nav-links'
  },
  {
    title: 'About',
    url: '/about',
    cName: 'nav-links'
  },
  {
      title: 'Contact',
      url: '/contact',
      cName: 'nav-links'
  },
  
]


class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  

  render() {
    return (
        <nav className="navbarItems sticky-top">
            
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </nav>
    );
  }
}

export default Navbar;

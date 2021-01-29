import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

export const MenuItems = [
  {
      title: 'HOME',
      url: '/',
      cName: 'nav-links'
  },
  {
      title: 'PROJECTS',
      url: '/projects',
      cName: 'nav-links'
  },
  {
    title: 'ABOUT',
    url: '/about',
    cName: 'nav-links'
  },
  {
      title: 'CONTACT',
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
            <a className="icons-navbar" href="mailto:drake.greeott@gmail.com" target="__blank"><i class="fas fa-envelope"></i></a>
            <a className="icons-navbar" href="https://www.linkedin.com/in/drakegreeott/" target="__blank"><i class="fab fa-linkedin"></i></a>
            <a className="icons-navbar" href="https://github.com/dgreeott" target="__blank"><i class="fab fa-github"></i></a>
            
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

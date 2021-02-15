import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const MenuItems = [
  {
    title: "Today",
    url: "/",
    cName: "nav-links m-5",
  },
  {
    title: "Hourly",
    url: "/hourly",
    cName: "nav-links m-5",
  },
  {
    title: "7-Day",
    url: "/7day",
    cName: "nav-links m-5",
  },
];

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
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

import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand" href="https://appdividend.com/">AppDividend</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
               <li className="nav-item">
               <a className="nav-link" href="https://appdividend.com/">Blog</a>
               </li>
            </ul>
         </div>
      </nav>
    );
  }
}

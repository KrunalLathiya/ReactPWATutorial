import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <div className="card">
         <div className="card-body">
         <h5 className="card-title">React PWA Example</h5>
         <p className="card-text">A Progressive Web App (PWA) is a web app that uses advanced web capabilities to provide an app-like experience to users. Unlike traditional applications, Progressive web apps are a hybrid of regular web pages (or websites) and a mobile application.</p>
         <a href="https://appdividend.com" className="btn btn-primary">Go somewhere</a>
         </div>
      </div>
    )
   }
}
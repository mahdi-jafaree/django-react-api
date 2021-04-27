import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Footer from './components/footer';

ReactDOM.render(
  <Router>
    <Header />
    <React.StrictMode>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </React.StrictMode>
    <Footer />
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

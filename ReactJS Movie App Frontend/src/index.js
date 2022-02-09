import React from 'react';
import ReactDOM from 'react-dom';
// import Header from './common/header/Header';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './screens/home/Home';
import registerServiceWorker from './registerServiceWorker';
import BookShow from './screens/bookshow/BookShow'
import Confirmation from './screens/confirmation/Confirmation'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './screens/details/Details';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Header /> */}
    {/* <Home /> */}

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
          {/* <li>
            <Link to="/bookshow">BookShow</Link>
          </li>
          <li>
            <Link to="/confirmation">Confirmation</Link>
          </li> */}
        </ul>

        {/* <hr /> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          {/* <Route path="/bookshow">
          <BookShow />
          </Route>
          <Route path="/confirmation">
          <Confirmation />
          </Route> */}
        </Switch>
      </div>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

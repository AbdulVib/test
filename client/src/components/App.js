import React, { useReducer } from "react";

import 'babel-polyfill';

import styles from './App.css'
//route
import { BrowserRouter, Route, Link } from 'react-router-dom'

import ContextProvider from './store/context/contextProvider'

//pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Service from './pages/Service'


const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/about",
    main: () => <About />
  },
  {
    path: "/service",
    main: () => <Service />
  }
];



const App = (props) => {

  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <div style={{ display: "flex" }}>
            <div
              style={{
                padding: "10px",
                width: "200px",
                background: "orange"
              }}
            >
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
              </ul>
            </div>

            <div style={{ flex: 1, padding: "10px" }}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </div>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
};

export default App; 

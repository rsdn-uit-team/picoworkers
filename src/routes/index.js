import Layout from 'layouts/Layout';
import Demo from 'pages/Demo';
import Login from 'pages/Login/Login';
import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Router>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <React.Suspense>
              <Demo />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <React.Suspense>
              <Login />
            </React.Suspense>
          }
        ></Route>
      </Route>
    </Router>
  </BrowserRouter>
);

export default Routes;

import DemoLayout from 'layouts/DemoLayout';
import Signup from 'pages/auth/signup/SignUp.jsx';
import Demo from 'pages/Demo';
import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Router>
      <Route path="/" element={<DemoLayout />}>
        <Route
          path="/"
          element={
            <React.Suspense>
              <Demo />
            </React.Suspense>
          }
        ></Route>
      </Route>
      <Route path="sign-up" element={<Signup />}></Route>
    </Router>
  </BrowserRouter>
);

export default Routes;

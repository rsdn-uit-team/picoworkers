import Default from 'layouts/Default';
import Login from 'pages/Login/Login';
import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Router>
      <Route path="/" element={<Default />}>
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

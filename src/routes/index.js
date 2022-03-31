import DemoLayout from 'layouts/DemoLayout';
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
    </Router>
  </BrowserRouter>
);

export default Routes;

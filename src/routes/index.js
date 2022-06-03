import React from 'react';
import {
  BrowserRouter,
  Routes as Router,
  Route,
  Navigate,
} from 'react-router-dom';
import Default from 'layouts/Default';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import Job from 'pages/DashBoard/Job';
import { AuthProvider } from 'contexts/AuthContext';
import { Loading } from 'components/Loading/Loading';

const Routes = () => (
  <BrowserRouter>
    <Loading></Loading>
    <AuthProvider>
      <Router>
        <Route path="/" element={<Default />}>
          <Route index element={<Navigate to="login"></Navigate>}></Route>
          <Route
            path="login"
            element={
              <React.Suspense>
                <Login />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="signup"
            element={
              <React.Suspense>
                <Signup />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="jobs"
            element={
              <React.Suspense>
                <Job />
              </React.Suspense>
            }
          ></Route>
        </Route>
      </Router>
    </AuthProvider>
  </BrowserRouter>
);

export default Routes;

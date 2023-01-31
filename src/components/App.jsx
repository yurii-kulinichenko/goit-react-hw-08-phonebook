import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { Layout } from './Layout';
import { Contacts } from './Pages/Contacts';
import { WelcomePage } from './Pages/HomePage';
import { Login } from './Pages/LoginPage';
import { Register } from './Pages/RegisterPage';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import * as React from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            {!isLoggedIn && <Route index element={<WelcomePage />} />}
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
            <Route
              index
              path="/register"
              element={
                <RestrictedRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={Login} redirectTo="/contacts" />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(innerProps) => {
        if (localStorage.getItem('token')) {
          return <Component {...innerProps} />;
        } else {
          // return <Redirect to = '/404' />;
          console.log('error');
        }
      }}
    />
  );
};

export default PrivateRoute;


import React from 'react';
import { Route } from 'react-router-dom'

function PublicRoute({
  component: Component,
  ...rest
}: any) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />
      }}
    />
  );
}

export default PublicRoute
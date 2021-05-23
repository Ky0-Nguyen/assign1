import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PublicRoute from 'src/navigation/PublicRoutes'
import ProgressBar from './ProgressBar'
import routes from 'src/navigation/routes'
import CustomLoadable from 'src/navigation/CustomLoadable'

function RoutesComponent() {
  const isInitialMount = useRef(true);
  const loading = false
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      ProgressBar.start();
      return;
    }

    if (!loading) {
      ProgressBar.done();
    }
  }, [loading]);

  if (loading) {
    return <div />;
  }

  return (
    <Switch>
      {routes.publicRoutes.map((route) => (
        <PublicRoute
          key={route.path}
          exact
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}
    </Switch>
  );
}

export default RoutesComponent;
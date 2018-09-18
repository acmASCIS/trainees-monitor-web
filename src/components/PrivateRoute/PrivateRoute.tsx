import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

interface IPrivateRouteProps {
  component: any;
  auth: any;
  exact?: boolean;
  path?: string;
}

const PrivateRoute = ({ component: Component, auth, ...rest }: IPrivateRouteProps) => (
  <Route
    {...rest}
    render={props => (auth.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);

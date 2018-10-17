import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Sidebar from '../../components/Sidebar/Sidebar';
import './Dashboard.css';
import Profile from '../Profile/Profile';
import Dashboard from './Dashboard';
import Following from '../Following/Following';
import Page404 from '../Page404/Page404';

interface IDashboardProps {
  auth: any;
}

class DashboardWrapper extends React.Component<IDashboardProps, {}> {
  public render() {
    return (
      <React.Fragment>
        <Sidebar />
        <div className="wrapper height-100 p-4">
          <Switch>
            <Route exact={true} path="/dashboard" component={Dashboard} />
            <Route exact={true} path="/following" component={Following} />
            <Route exact={true} path="/404" component={Page404} />
            <Route
              exact={true}
              path="/:handle"
              render={props => <Profile key={props.match.params.handle} {...props} />}
            />
            <Route exact={true} path="*" component={Page404} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(DashboardWrapper);

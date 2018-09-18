import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Sidebar from '../../components/Sidebar/Sidebar';
import './Dashboard.css';
import Profile from '../Profile/Profile';
import Dashboard from './Dashboard';

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
            <Route exact={true} path="/:handle" component={Profile} />
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

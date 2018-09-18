import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import Login from '../Login/Login';
import Register from '../Register/Register';
import DashboardWrapper from '../Dashboard/DashboardWrapper';
import checkAuthToken from '../../lib/checkAuthToken';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

// Check for Token
checkAuthToken();

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="container-fluid">
              <Route exact={true} path="/login" component={Login} />
              <Route exact={true} path="/register" component={Register} />
            </div>
            <Switch>
              <PrivateRoute component={DashboardWrapper} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

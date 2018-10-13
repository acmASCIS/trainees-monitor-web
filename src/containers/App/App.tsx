import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import Login from '../Login/Login';
import Register from '../Register/Register';
import DashboardWrapper from '../Dashboard/DashboardWrapper';
import checkAuthToken from '../../lib/checkAuthToken';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import '../../lib/axiosConfig';
import AdminPanel from '../AdminPanel/AdminPanel';

// Check for Token
checkAuthToken();

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact={true} path="/login" component={Login} />
              <Route exact={true} path="/register" component={Register} />
              <Redirect exact={true} from="/" to="/dashboard" />
              <PrivateRoute path="/admin" component={AdminPanel} />
              <PrivateRoute path="/" component={DashboardWrapper} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

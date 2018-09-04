import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Register/Register';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="container-fluid">
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;

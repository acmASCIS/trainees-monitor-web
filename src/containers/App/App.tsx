import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Login/Login';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="container-fluid">
          <Route exact={true} path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;

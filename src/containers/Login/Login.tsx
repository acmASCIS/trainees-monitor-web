import * as React from 'react';
import { Link } from 'react-router-dom';
import { History } from 'history';

import TextFieldGroup from '../../components/TextFieldGroup/TextFieldGroup';
import { login } from '../../services/AccountsService';

interface ILoginProps {
  history: History;
}

interface ILoginState {
  email: string;
  password: string;
  error: string;
}

export default class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  public onSubmit = (event: any) => {
    event.preventDefault();

    const { email, password } = this.state;
    login({ email, password }).then(error => {
      if (error) {
        console.log(error);
        this.setState({ error: error.message });
      } else {
        this.props.history.push('/');
      }
    });
  };

  public onChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value
    } as ILoginState);
  };

  public render() {
    return (
      <div className="row  height-100 justify-content-center align-items-center">
        <div className="col-lg-4 d-flex">
          <div className="flex-fill py-4">
            <h1 className="h2 text-center mb-4">Login</h1>
            {this.state.error && (
              <div className="alert alert-danger alert-dismissible mb-4 fade show" role="alert">
                {this.state.error}
              </div>
            )}
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                label="Email:"
                name="email"
                placeholder="Email Address"
                type="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <TextFieldGroup
                label="Password:"
                name="password"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <button type="submit" className="btn btn-primary btn-block btn-lg">
                Log in
              </button>
            </form>
            <div className="text-center text-small mt-3">
              <span>Don't have an account? </span>
              <Link to="/register">Sign up here</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

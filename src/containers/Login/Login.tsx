import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import { connect } from 'react-redux';

import TextFieldGroup from '../../components/TextFieldGroup/TextFieldGroup';
import { loginUser } from '../../actions/authActions';
import { ILoginRequest } from '../../services/AccountsService';
import { clearErrors } from '../../actions/errorActions';

interface ILoginProps extends RouteComponentProps<any> {
  loginUser: (payload: ILoginRequest, history: History, onFinish: () => void) => void;
  clearErrors: () => void;
  errors: any;
  auth: any;
}

interface ILoginState {
  email: string;
  password: string;
  isLoading: boolean;
}

class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false
    };
  }

  public componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  public onSubmit = async (event: any) => {
    event.preventDefault();

    await this.setState({ isLoading: true });
    const { email, password } = this.state;
    await this.props.loginUser({ email, password }, this.props.history, () =>
      this.setState({ isLoading: false })
    );
  };

  public onChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value
    } as ILoginState);
  };

  public resetError = () => {
    this.props.clearErrors();
  };

  public render() {
    const { errors } = this.props;
    return (
      <div className="container-fluid">
        <div className="row  height-100 justify-content-center align-items-center">
          <div className="col-lg-4 col-md-7 d-flex">
            <div className="flex-fill py-4">
              <h1 className="h2 text-center mb-4">Login</h1>
              {errors.message && (
                <div className="alert alert-danger alert-dismissible mb-4 fade show" role="alert">
                  {errors.message}
                  <button type="button" className="close" onClick={this.props.clearErrors}>
                    <span aria-hidden="true">&times;</span>
                  </button>
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
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                  disabled={this.state.isLoading}
                >
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
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser, clearErrors }
)(withRouter(Login));

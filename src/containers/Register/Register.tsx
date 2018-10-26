import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { History } from 'history';

import TextFieldGroup from '../../components/TextFieldGroup/TextFieldGroup';
import SelectFieldGroup from '../../components/SelectFieldGroup/SelectFieldGroup';
import { Role } from '../../lib/User';
import { IRegisterRequest } from '../../services/AccountsService';
import { registerUser } from '../../actions/authActions';

interface IRegisterProps extends RouteComponentProps<{}> {
  registerUser: (payload: IRegisterRequest, history: History, onFinish: () => void) => void;
  errors: any;
  auth: any;
}

interface IRegisterState {
  handle: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  codeforcesHandle: string;
  isLoading: boolean;
}

class Register extends React.Component<IRegisterProps, IRegisterState> {
  constructor(props: IRegisterProps) {
    super(props);
    this.state = {
      handle: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'Trainee',
      codeforcesHandle: '',
      isLoading: false
    };
  }

  public componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  public onSubmit = (event: any) => {
    event.preventDefault();

    this.setState({ isLoading: true });
    const { handle, name, email, password, confirmPassword, role, codeforcesHandle } = this.state;
    this.props.registerUser(
      {
        handle,
        name,
        email,
        password,
        confirmPassword,
        role: Role[role],
        codeforcesHandle
      },
      this.props.history,
      () => this.setState({ isLoading: false })
    );
  };

  public onChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value
    } as IRegisterState);
  };

  public render() {
    const {
      handle,
      name,
      email,
      password,
      confirmPassword,
      role,
      codeforcesHandle,
      isLoading
    } = this.state;
    let { errors } = this.props;
    errors = errors.body ? errors.body : {};
    return (
      <div className="container-fluid">
        <div className="row  height-100 justify-content-center align-items-center">
          <div className="col-lg-4 col-md-7 d-flex">
            <div className="flex-fill py-4">
              <h1 className="h2 text-center mb-4">Register</h1>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  label="Handle:"
                  name="handle"
                  placeholder="Handle"
                  type="text"
                  value={handle}
                  onChange={this.onChange}
                  info="Your username used in the profile url."
                  error={errors.handle}
                />
                <TextFieldGroup
                  label="Name:"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                  value={name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  label="Email:"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  label="Password:"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  label="Confirm Password:"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={this.onChange}
                  error={errors.confirmPassword}
                />
                <SelectFieldGroup
                  label="Role:"
                  name="role"
                  value={role}
                  placeholder="Role"
                  options={['Trainee', 'Mentor']}
                  onChange={this.onChange}
                  error={errors.role}
                />
                <TextFieldGroup
                  label="Codeforces Handle:"
                  name="codeforcesHandle"
                  placeholder="Codeforces Handle"
                  type="text"
                  value={codeforcesHandle}
                  onChange={this.onChange}
                  error={errors.codeforcesHandle}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                  disabled={isLoading}
                >
                  Create account
                </button>
              </form>
              <div className="text-center text-small mt-3">
                <span>Already have an account? </span>
                <Link to="/login">Login here</Link>
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
  { registerUser }
)(withRouter(Register));

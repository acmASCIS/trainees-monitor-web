import * as React from 'react';
import { Link } from 'react-router-dom';
import { History } from 'history';
import message from 'antd/lib/message';

import TextFieldGroup from '../../components/TextFieldGroup/TextFieldGroup';
import SelectFieldGroup from '../../components/SelectFieldGroup/SelectFieldGroup';
import { Role } from '../../lib/User';
import { register } from '../../services/AccountsService';

interface IRegisterProps {
  history: History;
}

interface IRegisterState {
  handle: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  codeforcesHandle: string;
  errors: any;
}

export default class Register extends React.Component<IRegisterProps, IRegisterState> {
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
      errors: {}
    };
  }

  public onSubmit = (event: any) => {
    event.preventDefault();

    const { handle, name, email, password, confirmPassword, role, codeforcesHandle } = this.state;
    register({
      handle,
      name,
      email,
      password,
      confirmPassword,
      role: Role[role],
      codeforcesHandle
    }).then(errors => {
      if (errors) {
        this.setState({ errors: errors.body });
      } else {
        message.success('The account is successfully created.');
        this.props.history.push('/login');
      }
    });
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
      errors
    } = this.state;
    return (
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
              <button type="submit" className="btn btn-primary btn-block btn-lg">
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
    );
  }
}

import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../assets/logo.png';
import './Sidebar.css';
import { logoutUser } from '../../actions/authActions';

interface ISidebarProps {
  logoutUser: () => void;
  auth: any;
}

const Sidebar = (props: ISidebarProps) => {
  return (
    <div className="side-menu height-100 bg-primary">
      <Link to="" className="logo text-center my-2">
        <img src={logo} height="40" />
      </Link>
      <ul className="side-nav navbar-nav">
        <li className="side-nav-item">
          <Link to="dashboard" className="side-nav-link">
            <i className="dripicons dripicons-meter" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="side-nav-item">
          <Link to="following" className="side-nav-link">
            <i className="dripicons dripicons-graph-line" />
            <span>Following</span>
          </Link>
        </li>
        <li className="side-nav-item">
          <Link to={`/${props.auth.user.handle}`} className="side-nav-link">
            <i className="dripicons dripicons-user" />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
      <button type="button" className="btn btn-outline-light m-5" onClick={props.logoutUser}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Sidebar);

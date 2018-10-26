import * as React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from 'src/actions/authActions';

interface IAdminNavbarProps {
  logoutUser: any;
}

const AdminNavbar = ({ logoutUser: logout }: IAdminNavbarProps) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link className="navbar-brand" to="/admin">
      Admin Panel
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav flex-grow-1">
        <a className="nav-item nav-link active" href="#users-confirmation">
          User Confirmation
        </a>
        <a className="nav-item nav-link active" href="#cf-contests">
          Codeforces Contests
        </a>
        <Link className="nav-item nav-link active" to="/dashboard">
          Dashboard
        </Link>
      </div>
      <button className="btn btn-outline-light" onClick={logout}>
        Logout
      </button>
    </div>
  </nav>
);

export default connect(
  null,
  { logoutUser }
)(AdminNavbar);

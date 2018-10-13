import * as React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => (
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
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#users-confirmation">
          User Confirmation
        </a>
        <a className="nav-item nav-link" href="#cf-contests">
          Codeforces Contests
        </a>
      </div>
    </div>
  </nav>
);

export default AdminNavbar;

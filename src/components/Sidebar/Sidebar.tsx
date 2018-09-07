import * as React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="side-menu height-100 bg-primary">
      <Link to="" className="logo text-center my-2">
        <img src={logo} height="40" />
      </Link>
      <ul className="side-nav navbar-nav">
        <li className="side-nav-item">
          <Link to="" className="side-nav-link active">
            <i className="dripicons dripicons-meter" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="side-nav-item">
          <Link to="" className="side-nav-link">
            <i className="dripicons dripicons-graph-line" />
            <span>Analysis</span>
          </Link>
        </li>
        <li className="side-nav-item">
          <Link to="" className="side-nav-link">
            <i className="dripicons dripicons-user" />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import * as React from 'react';
import { Role } from '../../lib/User';
import { connect } from 'react-redux';

interface IProfileHeaderProps {
  name: string;
  role: number;
  handle: string;
  auth: any;
}

const ProfileHeader = ({ name, role, handle, auth }: IProfileHeaderProps) => (
  <div className="page-header pt-4 d-flex flex-column align-items-baseline">
    <div className="d-flex align-items-center" style={{ width: '100%' }}>
      <h1 className="mb-0 flex-grow-1">{name}</h1>
      {handle !== auth.user.handle && <button className="btn btn-primary">Follow</button>}
    </div>
    <span className="badge badge-pill badge-dark">{Role[role]}</span>
  </div>
);

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(ProfileHeader);

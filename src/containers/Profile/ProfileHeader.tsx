import * as React from 'react';
import { Role } from '../../lib/User';
import { connect } from 'react-redux';
import FollowButton from '../../components/FollowButton/FollowButton';

interface IProfileHeaderProps {
  name: string;
  role: number;
  handle: string;
  auth: any;
  isFollowed: boolean;
  changeFollowState: (newState: boolean) => void;
}

const ProfileHeader = ({
  name,
  role,
  handle,
  auth,
  changeFollowState,
  isFollowed
}: IProfileHeaderProps) => (
  <div className="page-header pt-4 d-flex flex-column align-items-baseline">
    <div className="d-flex align-items-center" style={{ width: '100%' }}>
      <h1 className="mb-0 flex-grow-1">{name}</h1>
      {handle !== auth.user.handle && (
        <FollowButton
          isFollowed={isFollowed}
          handle={handle}
          changeFollowState={changeFollowState}
        />
      )}
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

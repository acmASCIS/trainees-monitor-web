import * as React from 'react';
import { Link } from 'react-router-dom';
import { Role } from '../../lib/User';
import FollowButton from '../FollowButton/FollowButton';

interface IUserCardProps {
  user: {
    handle: string;
    name: string;
    email: string;
    onlineJudgesHandles: {
      codeforces: string;
    };
    role: number;
    isFollowed: boolean;
  };
  changeFollowState: (newState: boolean, index: number) => void;
  index: number;
  myHandle: string;
}

const UserCard = ({ user, changeFollowState, index, myHandle }: IUserCardProps) => (
  <div className="card">
    <div className="card-body">
      <div className="page-header d-flex flex-column align-items-baseline">
        <div className="d-flex align-items-center" style={{ width: '100%' }}>
          <Link to={`/${user.handle}`} className="flex-grow-1">
            <h5 className="card-title mb-0">{user.name}</h5>
          </Link>
          {myHandle !== user.handle && (
            <FollowButton
              isFollowed={user.isFollowed}
              handle={user.handle}
              changeFollowState={newState => changeFollowState(newState, index)}
            />
          )}
        </div>
        <span className="badge badge-pill badge-dark">{Role[user.role]}</span>
      </div>
      <hr />
      <p className="card-text">Email: {user.email}</p>
      <p className="card-text">Codeforces Handle: {user.onlineJudgesHandles.codeforces}</p>
    </div>
  </div>
);

export default UserCard;

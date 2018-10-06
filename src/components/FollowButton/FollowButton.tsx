import * as React from 'react';
import { unfollowProfile, followProfile } from '../../services/ProfilesService';
import './FollowButton.css';

interface IFollowButtonProps {
  isFollowed: boolean;
  handle: string;
  changeFollowState: (newState: boolean) => void;
}

const FollowButton = ({ isFollowed, handle, changeFollowState }: IFollowButtonProps) => {
  let className = 'btn follow-btn';
  isFollowed ? (className += ' btn-danger') : (className += ' btn-primary');

  async function followAction() {
    switch (isFollowed) {
      case true:
        await unfollowProfile(handle);
        break;
      case false:
        await followProfile(handle);
    }
    changeFollowState(!isFollowed);
  }

  return (
    <button className={className} onClick={followAction}>
      {isFollowed ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;

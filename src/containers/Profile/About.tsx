import * as React from 'react';
import { secondsToDuration } from '../../lib/secondsToDuration';

interface IAboutProps {
  user: {
    handle: string;
    name: string;
    email: string;
    role: number;
    onlineJudgesHandles: {
      codeforces: string;
    };
    rank: string;
    rating: number;
    lastOnlineTimeSeconds: number;
  };
}

// TODO: Refactor About to automatically render given data
const About = ({ user }: IAboutProps) => (
  <React.Fragment>
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">Contact</h5>
        <p className="card-text">Email: {user.email}</p>
      </div>
    </div>
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Codeforces</h5>
        <p className="card-text">Handle: {user.onlineJudgesHandles.codeforces}</p>
        <p className="card-text">Rank: {user.rank}</p>
        <p className="card-text">Rating: {user.rating}</p>
        <p className="card-text">
          Last Online: {secondsToDuration(user.lastOnlineTimeSeconds)} hours ago
        </p>
      </div>
    </div>
  </React.Fragment>
);

export default About;

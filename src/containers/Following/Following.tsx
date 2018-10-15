import * as React from 'react';
import { connect } from 'react-redux';

import LoadableComponent from '../../components/LoadableComponent/LoadableComponent';
import { getFollowing } from '../../services/ProfilesService';
import UserCard from '../../components/UserCard/UserCard';

interface IFollowingProps {
  auth: any;
}

interface IFollowingState {
  following: any[];
  isLoading: boolean;
}

class Following extends React.Component<IFollowingProps, IFollowingState> {
  constructor(props: IFollowingProps) {
    super(props);
    this.state = {
      following: [],
      isLoading: true
    };
  }

  public async componentWillMount() {
    const following = await getFollowing();
    this.setState({ following, isLoading: false });
  }

  public changeFollowState = (newState: boolean, index: number) => {
    const { following } = this.state;
    following[index].isFollowed = newState;
    this.setState({ following });
  };

  public render() {
    const { following, isLoading } = this.state;
    return (
      <LoadableComponent isLoading={isLoading}>
        <div className="container">
          <h4>Following</h4>
          {following.length === 0 ? (
            <p>You haven't followed anyone yet.</p>
          ) : (
            <div className="card-columns">
              {following.map((user, index) => (
                <UserCard
                  user={user}
                  key={index}
                  index={index}
                  changeFollowState={this.changeFollowState}
                  myHandle={this.props.auth.user.handle}
                />
              ))}
            </div>
          )}
        </div>
      </LoadableComponent>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Following);

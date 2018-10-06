import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { getProfile } from '../../services/ProfilesService';
import Tabs from '../../components/Tabs/Tabs';
import TabSection from '../../components/Tabs/TabSection';
import About from './About';
import ProfileHeader from './ProfileHeader';
import './Profile.css';
import LoadableComponent from '../../components/LoadableComponent/LoadableComponent';
import Analysis from './Analysis/Analysis';

interface IProfileProps extends RouteComponentProps<{ handle: string }> {
  setLoading: (loadingState: boolean) => void;
}

interface IProfileState {
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
    isFollowed: boolean;
  };
  isLoading: boolean;
}

class Profile extends React.Component<IProfileProps, IProfileState> {
  constructor(props: IProfileProps) {
    super(props);
    this.state = {
      user: {
        handle: '',
        name: '',
        email: '',
        role: 0,
        onlineJudgesHandles: {
          codeforces: ''
        },
        rank: '',
        rating: 0,
        lastOnlineTimeSeconds: 0,
        isFollowed: false
      },
      isLoading: true
    };
  }

  public async componentWillMount() {
    const { handle } = this.props.match.params;
    try {
      const user = await getProfile(handle);
      console.log(user);
      this.setState({ user, isLoading: false });
    } catch (error) {
      // TODO: redirect to 404
      console.log(error);
    }
  }

  public changeFollowState = (newFollowState: boolean) => {
    console.log(newFollowState);
    const user = this.state.user;
    user.isFollowed = newFollowState;
    this.setState({ user });
  };

  public render() {
    const { name, role, handle, isFollowed } = this.state.user;
    return (
      <LoadableComponent isLoading={this.state.isLoading}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <ProfileHeader
                name={name}
                role={role}
                handle={handle}
                isFollowed={isFollowed}
                changeFollowState={this.changeFollowState}
              />
              <Tabs>
                <TabSection label="About">
                  <About user={this.state.user} />
                </TabSection>
                <TabSection label="Analysis">
                  <Analysis handle={this.state.user.handle} />
                </TabSection>
              </Tabs>
            </div>
          </div>
        </div>
      </LoadableComponent>
    );
  }
}

export default Profile;

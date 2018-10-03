import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { getProfile } from '../../services/ProfilesService';
import Tabs from '../../components/Tabs/Tabs';
import TabSection from '../../components/Tabs/TabSection';
import About from './About';
import ProfileHeader from './ProfileHeader';
import './Profile.css';

interface IProfileProps extends RouteComponentProps<{ handle: string }> {}

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
  };
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
        lastOnlineTimeSeconds: 0
      }
    };
  }

  public async componentWillMount() {
    const { handle } = this.props.match.params;
    try {
      const user = await getProfile(handle);
      this.setState({ user });
    } catch (error) {
      // TODO: redirect to 404
      console.log(error);
    }
  }

  public render() {
    const { name, role, handle } = this.state.user;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11">
            <ProfileHeader name={name} role={role} handle={handle} />
            <Tabs>
              <TabSection label="About">
                <About user={this.state.user} />
              </TabSection>
              <TabSection label="Analysis">Hello Analysis</TabSection>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

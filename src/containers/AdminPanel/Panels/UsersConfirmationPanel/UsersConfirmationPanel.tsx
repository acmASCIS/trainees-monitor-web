import * as React from 'react';
import Popconfirm from 'antd/lib/popconfirm';

import { getUnconfirmedUsers, confirmUser } from 'src/services/AccountsService';
import LoadableComponent from 'src/components/LoadableComponent/LoadableComponent';

interface IUsersConfirmationPanelProps {
  label: string;
}

interface IUsersConfirmationPanelState {
  users: any[];
  isLoading: boolean;
}

class UsersConfirmationPanel extends React.Component<
  IUsersConfirmationPanelProps,
  IUsersConfirmationPanelState
> {
  constructor(props: IUsersConfirmationPanelProps) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  public async componentWillMount() {
    const users = await getUnconfirmedUsers();
    this.setState({ users, isLoading: false });
  }

  public confirmUser = async (handle: string) => {
    const result = await confirmUser(handle);
    if (result.success) {
      this.setState(prevState => ({
        users: prevState.users.filter(user => user.handle !== handle)
      }));
    }
  };

  public render() {
    const { users } = this.state;
    return (
      <div className="container d-flex flex-column py-3">
        <h5 className="m-0">Unconfirmed Users</h5>
        <LoadableComponent isLoading={this.state.isLoading}>
          <ul className="list-group  align-self-stretch my-3">
            {users.length === 0 ? (
              <p>There are no users waiting for confirmation</p>
            ) : (
              users.map(user => (
                <Popconfirm
                  key={user.handle}
                  title="Are you sure confirm this user?"
                  onConfirm={() => this.confirmUser(user.handle)}
                  okText="Yes"
                  cancelText="No"
                >
                  <button type="button" className="list-group-item list-group-item-action">
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Handle: {user.handle}</p>
                    <p>Codeforces Handle: {user.onlineJudgesHandles.codeforces}</p>
                  </button>
                </Popconfirm>
              ))
            )}
          </ul>
        </LoadableComponent>
      </div>
    );
  }
}

export default UsersConfirmationPanel;

import * as React from 'react';
import { connect } from 'react-redux';
import { Role } from 'src/lib/User';
import { RouteComponentProps } from 'react-router-dom';
import CFContestsPanel from './Panels/CFContestsPanel/CFContestsPanel';
import UsersConfirmationPanel from './Panels/UsersConfirmationPanel/UsersConfirmationPanel';
import AdminNavbar from './AdminNavbar/AdminNavbar';

interface IAdminPanelProps extends RouteComponentProps<any> {
  auth: any;
}

class AdminPanel extends React.Component<IAdminPanelProps, {}> {
  public componentWillMount() {
    if (this.props.auth.user.role < Role.Admin) {
      this.props.history.push('/404');
    }
  }

  public render() {
    const panels = (
      <React.Fragment>
        <UsersConfirmationPanel label="users-confirmation" />
        <CFContestsPanel label="cf-contests" />
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <AdminNavbar />
        <div className="container-fluid">
          {panels.props.children.filter(
            (panel: any, index: number) =>
              '#' + panel.props.label === this.props.location.hash ||
              (this.props.location.hash === '' && index === 0)
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminPanel);

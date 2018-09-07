import * as React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { connect } from 'react-redux';

interface IDashboardProps {
  auth: any;
}

class Dashboard extends React.Component<IDashboardProps, {}> {
  public render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <div className="height-100 p-4" style={{ marginLeft: '250px', backgroundColor: '#f3f3f3' }}>
          <h3>Hello {this.props.auth.user.name}</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);

import * as React from 'react';
import { connect } from 'react-redux';

import SearchButton from './SearchButton/SearchButton';
import LoadableComponent from '../../components/LoadableComponent/LoadableComponent';
import UserCard from '../../components/UserCard/UserCard';
import { searchUsers } from '../../services/SearchService';

interface IDashboardProps {
  auth: any;
}

interface IDashboardState {
  isLoadingSearch: boolean;
  searchResult: any[];
}

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: IDashboardProps) {
    super(props);
    this.state = {
      isLoadingSearch: false,
      searchResult: []
    };
  }

  public submitSearch = async (searchQuery: string) => {
    this.setState({ isLoadingSearch: true });
    const searchResult = await searchUsers(searchQuery);
    this.setState({ searchResult, isLoadingSearch: false });
  };

  public changeFollowState = (newState: boolean, index: number) => {
    const { searchResult } = this.state;
    searchResult[index].isFollowed = newState;
    this.setState({ searchResult });
  };

  public render() {
    const { isLoadingSearch, searchResult } = this.state;
    return (
      <div className="container">
        <h4>Dashboard</h4>
        <SearchButton submitSearch={this.submitSearch} />
        <LoadableComponent isLoading={isLoadingSearch}>
          <div className="search-results py-3">
            {searchResult.length === 0 ? (
              <p className="text-muted">Search for Users</p>
            ) : (
              <div className="card-columns">
                {searchResult.map((user, index) => (
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
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);

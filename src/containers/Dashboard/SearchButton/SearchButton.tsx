import * as React from 'react';

interface ISearchBarProps {
  submitSearch: (searchQuery: string) => void;
}

interface ISearchBarState {
  searchQuery: string;
}

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
      searchQuery: ''
    };
  }

  public searchQueryChanged = (event: any) => {
    this.setState({ searchQuery: event.target.value });
  };

  public submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.submitSearch(this.state.searchQuery);
  };

  public render() {
    const { searchQuery } = this.state;
    return (
      <form onSubmit={this.submitSearch}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={this.searchQueryChanged}
          />
          <span className="mdi mdi-magnify" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;

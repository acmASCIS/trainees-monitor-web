import * as React from 'react';
import Tab from './Tab';

interface ITabsProps {
  children: any[];
}

interface ITabsState {
  activeTab: string;
}

class Tabs extends React.Component<ITabsProps, ITabsState> {
  constructor(props: ITabsProps) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  public render() {
    return (
      <React.Fragment>
        <ul className="nav nav-tabs nav-fill mt-3">
          {this.props.children.map(child => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={this.state.activeTab}
                key={label}
                label={label}
                onClick={this.onClickTabItem}
              />
            );
          })}
        </ul>
        {this.props.children.map(child => {
          if (child.props.label !== this.state.activeTab) {
            return undefined;
          }
          return child.props.children;
        })}
      </React.Fragment>
    );
  }

  private onClickTabItem = (tab: string) => {
    this.setState({ activeTab: tab });
  };
}

export default Tabs;

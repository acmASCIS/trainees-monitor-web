import * as React from 'react';

interface ITabProps {
  label: string;
  activeTab: string;
  onClick: (label: string) => void;
}

class Tab extends React.Component<ITabProps, {}> {
  public render() {
    let className = 'nav-link';
    if (this.props.activeTab === this.props.label) {
      className += ' active';
    }

    return (
      <li className="nav-item" onClick={this.onClick}>
        <a className={className}>{this.props.label}</a>
      </li>
    );
  }

  private onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };
}

export default Tab;

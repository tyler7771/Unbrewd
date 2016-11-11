import React from 'react';

class SidebarStats extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchProfile({
      id: this.props.currentUser.id,
      type: "user"
    });
  }

  render () {
    if (this.props.stats) {
      return (
        <div className="sidebar-stats">
          <div className="sidebar-user">
            <a href={`/#/user/${this.props.currentUser.id}`}>
              <img className="sidebar-image"
                src={this.props.currentUser.picture_url} />
            </a>
            <h1 className="sidebar-username">
              {this.props.currentUser.username}
            </h1>
          </div>

          <div className="sidebar-user-stats">
            <div className="user-stat">
              <p className="stat-title">TOTAL</p>
              <p className="stat-number">{this.props.stats.all || 0}</p>
            </div>
            <div className="user-stat">
              <p className="stat-title">UNIQUE</p>
              <p className="stat-number">{this.props.stats.unique || 0}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default SidebarStats;

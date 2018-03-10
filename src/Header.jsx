import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="py-5 text-center">
        <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
        <h2>{this.props.headerdata.title }</h2>
          <p className="lead">{this.props.headerdata.desc }</p>
      </div>
      );
  }
}
export default Header;

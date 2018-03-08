import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="py-5 text-center">
        <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
        <h2>Bootstrap</h2>
          <p className="lead">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      );
  }
}
export default Header;


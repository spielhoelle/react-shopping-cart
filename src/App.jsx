import React from 'react';
import CheckoutForm from './CheckoutForm.jsx';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerdata: {
          "title": "Hello from Blabla",
          "desc": "Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
        }
    }
  }
  render() {
    return (
      <div>
        <Header headerdata={this.state.headerdata}/>
        <CheckoutForm/>
      </div>
    );
  }
}
export default App;

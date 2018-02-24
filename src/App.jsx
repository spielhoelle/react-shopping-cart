import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 
      [
        {
          "id":1,
          "name":"JavaScript: The Definitive Guide, 6th Edition",
          "release": "September 2010",
          "price":"2.99"
        },
        {
          "id":2,
          "name":"Ruby on Rails: Up and Running",
          "release": "March 2007",
          "price":"30.99"
        },
        {
          "id":3,
          "name":"MongoDB: The Definitive Guide",
          "release": "Januar 2019",
          "price":"99.99"
        }
      ]
    }
  };
  render() {
    return (
      <div>
      {this.state.data.map((person, i) => <Product key = {i} data = {person} />)}
    </div>
    );
  }
}
class Product extends React.Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{this.props.data.name}</h6>
          <small className="text-muted">Release: { this.props.data.release }</small>
        </div>
        <span className="text-muted">{ this.props.data.price }$</span>
      </li>
    );
  }
}
export default App;

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
          "amount": 1,
          "price":"2.99"
        },
        {
          "id":2,
          "name":"Ruby on Rails: Up and Running",
          "release": "March 2007",
          "amount": 1,
          "price":"30.99"
        },
        {
          "id":3,
          "name":"MongoDB: The Definitive Guide",
          "release": "Januar 2019",
          "amount": 1,
          "price":"99.99"
        },
                {
          "id":4,
          "name":"Linux Cookbook",
          "release": "Februar 2009",
          "amount": 1,
          "price":"24.99"
        },

      ]
    }

    this.handleItem = this.handleItem.bind(this);

  };
  handleItem(item){
    console.log(item.target)
    //this.setState({ posts })
  }
  render() {
    return (
      <div>
      {this.state.data.map((person, i) => <Product handleItem={this.handleItem} key = {i} data = {person} />)}
    </div>
    );
  }
}
class Product extends React.Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <button className="btn btn-sm btn-light" onClick = {this.props.handleItem}>+</button>
        <button className="btn btn-sm btn-light" onClick = {this.props.handleItem}>-</button>

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

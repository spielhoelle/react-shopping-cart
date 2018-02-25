import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = JSON.parse( localStorage.getItem('react-cart') ) || {
      data: 
      [
        {
          "id":0,
          "name":"JavaScript: The Definitive Guide, 6th Edition",
          "release": "September 2010",
          "amount": 1,
          "price":"2.99"
        },
        {
          "id":1,
          "name":"Ruby on Rails: Up and Running",
          "release": "March 2007",
          "amount": 1,
          "price":"30.99"
        },
        {
          "id":2,
          "name":"MongoDB: The Definitive Guide",
          "release": "Januar 2019",
          "amount": 1,
          "price":"99.99"
        },
                {
          "id":3,
          "name":"Linux Cookbook",
          "release": "Februar 2009",
          "amount": 1,
          "price":"24.99"
        },

      ],
      total: 0
    }

    this.updateItem = this.updateItem.bind(this);

  }
  updateItem(item, index) {

    if ( index )
      this.state.data[item.props.data.id].amount++
    else if (this.state.data[item.props.data.id].amount > 0)
      this.state.data[item.props.data.id].amount--

    //this.state.data.map((person, i) => )
    this.state.total = this.state.data.map((item, index, array)=> item.price * item.amount).reduce((a, b) => a + b, 0);
    this.setState(this.state)
    localStorage.setItem('react-cart', JSON.stringify(this.state));

  }
  render() {
    return (
      <div>
        {this.state.data.map((person, i) => <Product updateItem={this.updateItem} key = {i} data = {person} />)}
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          Total: <span className="font-weight-bold">{this.state.total.toFixed(2)} $ </span>
        </li>
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
          <div className="d-flex flex-column">
            <span className="text-muted d-flex justify-content-center align-items-baseline">
              <button className="btn btn-sm btn-light" onClick = {(e) => this.props.updateItem(this, false)}>-</button>
              <button className="btn btn-sm btn-light" onClick = {(e) => this.props.updateItem(this, true)}>+</button>

            </span>
            <span className={ "badge "+ ( this.props.data.amount > 0 ? "badge-primary" : ""  )}>{ this.props.data.amount }</span>
            <span className="text-right">{ this.props.data.price }$</span>

          </div>
        </li>
    );
  }
}
export default App;

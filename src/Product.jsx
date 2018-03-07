import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false }
    this.likeItem = this.likeItem.bind(this);
  }
  likeItem(item) {
    this.state.liked = !this.state.liked
    this.setState(this.state)
  }
  render() {
    return (

        <li className="list-group-item d-flex justify-content-between lh-condensed">

          <div>
            <h6 className="my-0">{this.props.data.name}</h6>
            <small className="text-muted">Release: { this.props.data.release }</small>
            <button className={ "btn btn-sm " + ( this.state.liked ? "btn-danger" : "btn-outline-danger"  ) } onClick = {(e) => this.likeItem(this)}>-</button>
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
export default Product;

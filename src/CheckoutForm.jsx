
import React from 'react';
import Product from './Product.jsx';

class CheckoutForm extends React.Component {
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

    this.state.total = this.state.data.map((item, index, array)=> item.price * item.amount).reduce((a, b) => a + b, 0);
    this.setState(this.state)
    localStorage.setItem('react-cart', JSON.stringify(this.state));

  }
  render() {
    return (
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              {this.state.data.map((person, i) => <Product updateItem={this.updateItem} key = {i} data = {person} />)}
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                Total: <span className="font-weight-bold">{this.state.total.toFixed(2)} $ </span>
              </li>

            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code"/>
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate="">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="username">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
                  <div className="w-100 invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select className="custom-select d-block w-100" id="country" required="">
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select className="custom-select d-block w-100" id="state" required="">
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                  <div className="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              </div>
              <hr className="mb-4"/>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="same-address"/>
                <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="save-info"/>
                <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
              </div>
              <hr className="mb-4"/>

              <h4 className="mb-3">Payment</h4>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked="" required=""/>
                  <label className="custom-control-label" htmlFor="credit">Credit card</label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required=""/>
                  <label className="custom-control-label" htmlFor="debit">Debit card</label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required=""/>
                  <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name on card</label>
                  <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Credit card number</label>
                  <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">CVV</label>
                  <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""/>
                  <div className="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <hr className="mb-4"/>
              <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
            </form>
          </div>
        </div>
    );
  }
}
export default CheckoutForm;

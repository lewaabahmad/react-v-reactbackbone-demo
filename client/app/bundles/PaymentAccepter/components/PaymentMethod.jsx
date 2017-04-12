import React from 'react';

export default class PaymentMethod extends React.Component {

  goBack() {
    this.props.pageHandler( "amount" )
  }

  submitPayment() {
    this.props.pageHandler( "thankyou" )
  }

  render() {
    return (
      <div id="payment-page" className="contained">
        <span className="glyphicon glyphicon-remove" onClick={ this.goBack.bind(this) }></span>
        <div>
          <div>  
            <label>Card Number:</label>
          </div>
          <div>
            <input type="" name="" />
          </div>
        </div>
        <div>
          <div>  
            <label>Exp:</label>
          </div>
          <div>
            <input type="" name="" />
          </div>
        </div>
        <div>
          <div>  
            <label>CVC</label>
          </div>
          <div>
            <input type="" name="" />
          </div>
        </div>
        <button className="btn btn-primary" onClick={ this.submitPayment.bind(this) }>Make Payment</button>
      </div>
    );
  }
}
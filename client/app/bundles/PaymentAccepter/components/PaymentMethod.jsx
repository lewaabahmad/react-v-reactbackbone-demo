import React from 'react';

export default class PaymentMethod extends React.Component {

  goBack() {
    this.props.pageHandler( "amount" )
  }

  postDonation() {
    console.log( "liT!" )
  }

  submitPayment() {
    this.postDonation;
    this.props.pageHandler( "thankyou" );
  }

  render() {
    return (
      <div id="payment-page" className="contained">
        <span className="glyphicon glyphicon-remove" onClick={ this.goBack.bind(this) }></span>
        <div>
          <h3>${ this.props.donation }</h3>
          <div>
            <label>Card Number:</label>
          </div>
          <div>
            <input type="" name="" value="4242 4242 4242 4242"/>
          </div>
        </div>
        <div>
          <div>  
            <label>Exp:</label>
          </div>
          <div>
            <input type="" name="" value="4242"/>
          </div>
        </div>
        <div>
          <div>  
            <label>CVC</label>
          </div>
          <div>
            <input type="" name="" value="4242"/>
          </div>
        </div>
        <button className="btn btn-primary" onClick={ this.submitPayment.bind(this) }>Make Payment</button>
      </div>
    );
  }
}
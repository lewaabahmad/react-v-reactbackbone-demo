import React from 'react';

export default class Amount extends React.Component {

  goToPaymentPage() {
    this.props.pageHandler( "payment" )
  }

  selectAmount( event ) {
    this.props.setDonationAmount( event.target.dataset.amount )
  }

  render() {
    return (
      <div id="amount-selection-page" className="contained">
        <h1>Select an amount:</h1>
        <div>
          <button className="btn" onClick={ this.selectAmount.bind(this) } data-amount="25">$25</button>
          <button className="btn" onClick={ this.selectAmount.bind(this) } data-amount="50">$50</button>
          <button className="btn" onClick={ this.selectAmount.bind(this) } data-amount="100">$100</button>
          <button className="btn" onClick={ this.selectAmount.bind(this) } data-amount="250">$250</button>
        </div>
        <br/>
        <div>
          <label>Other amount:</label>
          <input type="number"/>
        </div>
        <button className="btn btn-primary" onClick={ this.goToPaymentPage.bind(this) }>Continue</button>
      </div>
    );
  }
}

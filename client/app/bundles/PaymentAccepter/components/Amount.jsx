import React from 'react';

export default class Amount extends React.Component {

  goToPaymentPage() {
    this.props.pageHandler( "payment" )
  }

  render() {
    return (
      <div id="amount-selection-page" className="contained">
        <h1>Select an amount:</h1>
        <div>
          <button className="btn">25$</button>
          <button className="btn">50$</button>
          <button className="btn">100$</button>
          <button className="btn">250$</button>
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

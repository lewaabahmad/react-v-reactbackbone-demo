import React from 'react';

export default class ThankYou extends React.Component {

  startOver() {
    this.props.pageHandler( "amount" )
  }

  render() {
    return (
      <div id="thank-you-page" className="contained">
        <span className="glyphicon glyphicon-remove" onClick={ this.startOver.bind(this) }></span>
        <p>
          Thank You!!!
        </p>
        <img src="http://bit.ly/2nEVtrB"/>
      </div>
    );
  }
}
import React, { PropTypes } from 'react';

import Amount from './Amount'
import PaymentMethod from './PaymentMethod'
import ThankYou from './ThankYou'

export default class Root extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props, _railsContext) {
    super(props);
    this.state = { page: "amount" };
  }

  pageManager() {
    switch( this.state.page ) {
      case "amount":
        return <Amount pageHandler={ this.updatePageState.bind(this) } />;
        break;
      case "payment":
        return <PaymentMethod pageHandler={ this.updatePageState.bind(this) } />;
        break;
      case "thankyou":
        return <ThankYou  pageHandler={ this.updatePageState.bind(this) } />;
        break;
      default: 
        return;
    }
  }

  updatePageState( newPage ) {
    this.setState({ page: newPage })
  }

  render() {
    return (
      <div>
        <div>
          { this.pageManager() }
        </div>
      </div>
    );
  }
}

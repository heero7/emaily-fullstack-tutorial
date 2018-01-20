import React, { Component } from 'react';

// Bring in the StripeCheckout
import StripeCheckout from 'react-stripe-checkout';
/**
 * Stripe Checkout wrapper
 */
class Payments extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <StripeCheckout
                name="Emaily"
                description="$5 for 5 credits!"
                amount={500}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn" >Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default Payments;
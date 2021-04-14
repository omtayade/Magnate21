import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import logo from '../../assets/cart.svg'
const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price *100;
    const publishableKey ='pk_test_51Ig5ciSIlgYtI3z5viPi71ldoY0DuhDc8qs2B6BcKxdD4DYfwvexfqLSEQBds8PbCONGylXvd5Q8jqjY5Ggxd77300TenI1wAc';

  const  onToken = token =>{
        console.log(token);
         alert('Payment Successful!')
    }
    return(
        <StripeCheckout 
        
        label='Pay Now'
        name='Apni dukaan Ltd.'
        billingAddress
        shippingAddress
        image={logo}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};
export default StripeCheckoutButton 
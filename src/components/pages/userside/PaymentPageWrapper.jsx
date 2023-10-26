import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentPage from './PaymentPage';

const stripePromise = loadStripe('your_stripe_publishable_key');

const PaymentPageWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentPage />
    </Elements>
  );
};

export default PaymentPageWrapper;

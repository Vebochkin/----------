document.addEventListener('DOMContentLoaded', async function () {
    const stripe = Stripe('your_stripe_publishable_key');
    const elements = stripe.elements();
  
    const style = {
      base: {
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        '::placeholder': {
          color: '#666',
        },
      },
    };
  
    const card = elements.create('card', { style });
    card.mount('#card-element');
  
    const form = document.getElementById('payment-form');
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
  
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.error(error);
      } else {
        console.log(paymentMethod);
      }
    });
  });
  
  
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

  const cardElement = elements.create('card', { style });
  cardElement.mount('#card-element');

  const form = document.getElementById('payment-form');
  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
    } else {
      console.log(token);

      // Отправка информации о платеже на сервер
      // Здесь вы можете обработать платеж и предоставить доступ к премиум функциям
    }
  });
});

const stripe = Stripe('your_stripe_publishable_key');

window.onload = function () {
  // Проверяем, была ли оплата успешной
  const urlParams = new URLSearchParams(window.location.search);
  const success = urlParams.get('success');

  if (success) {
    alert('Payment successful!');
  }
};

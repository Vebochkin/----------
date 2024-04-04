const stripe = Stripe('your_stripe_publishable_key');

function calculateSleep() {
  // Реализация расчета сна
  // Вывод результата на страницу
}

function goPremium() {
  stripe.redirectToCheckout({
    items: [{sku: 'sku_XXX', quantity: 1}],
    successUrl: 'https://yourdomain.com/success',
    cancelUrl: 'https://yourdomain.com/cancel',
  });
}

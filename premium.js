document.addEventListener('DOMContentLoaded', async function () {
  const form = document.getElementById('payment-form');
  const clientToken = await fetch('YOUR_BRAINTREE_CLIENT_TOKEN_ENDPOINT')
    .then(response => response.json())
    .then(data => data.clientToken);

  braintree.dropin.create({
    authorization: clientToken,
    container: '#dropin-container'
  }, function (createErr, instance) {
    if (createErr) {
      console.error(createErr);
      return;
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      instance.requestPaymentMethod(function (err, payload) {
        if (err) {
          console.error(err);
        } else {
          console.log(payload);

          // Отправка информации о платеже на сервер
          // Здесь вы можете обработать платеж и предоставить доступ к премиум функциям
        }
      });
    });
  });
});

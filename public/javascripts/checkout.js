var stripe = Stripe('pk_test_7frcV4H48U0ldwUDEnrOihJS');
var elements = stripe.elements();

var card = elements.create('card', { hidePostalCode: true });
card.mount('#card-element');

card.addEventListener('change', function(event) {
  var errorElement = document.getElementById('card-errors');
  if (event.error) {
    errorElement.textContent = event.error.message;
  } else {
    errorElement.textContent = '';
  }
});

var form = document.getElementById('checkout-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var button = form.querySelector('button');
  button.setAttribute('disabled', 'true');

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
      button.removeAttribute('disabled');
    } else {
      stripeTokenHandler(result.token);
    }
  });
});

function stripeTokenHandler(token) {
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  form.submit();
}

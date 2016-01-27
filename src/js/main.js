// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  Stripe.setPublishableKey('pk_test_2n6HOH3q1Hod9NkFXdTKihY8');
});

$('.order').on('click', function() {
  var cardInfo = {
    number: $('.card-number').val(),
    cvc: $('.card-cvc').val(),
    exp_month: $('.card-expiry-month').val().split('/')[0],
    exp_year: $('.card-expiry-year').val().split('/')[1]
  };

Stripe.card.createToken(cardInfo, stripeResponseHandler);



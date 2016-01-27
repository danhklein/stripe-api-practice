// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  Stripe.setPublishableKey('pk_test_2n6HOH3q1Hod9NkFXdTKihY8');
});

$('.order').on('click', function() {
  var cardInfo = {
    number: $('.card-number').val(),
    cvc: $('.card-cvc').val(),
    exp_month: $('.card-expiry').val().split('/')[0],
    exp_year: $('.card-expiry').val().split('/')[1]
  };

Stripe.card.createToken(cardInfo, stripeResponseHandler);
});

function stripeResponseHandler(status, response) {
  if (response.error) {
    console.log(response.error.message);
  } else {
    console.log(response.id);
  }
}

$('.card-number').on('blur', function() {
  var $cardNum = $('.card-number');
  var val = $cardNum.val();
  if (!Stripe.card.validateCardNumber(val) ) {
    $cardNum.css('background-color', 'red');
  } else {
    $cardNum.css('background-color', 'green');
  }


});

// These will all return true, indicating a potentially valid card
// number. (Letters, spaces, and other punctuation are ignored.)

// Stripe.card.validateCardNumber('4242424242424242')
// Stripe.card.validateCardNumber('4242-42424242-4242')
// Stripe.card.validateCardNumber('4242 4242 4242 4242')

// These invalid card numbers will all return false.

// Stripe.card.validateCardNumber('4242-1111-1111-1111')
// Stripe.card.validateCardNumber('12345678')
// Stripe.card.validateCardNumber('mistake')
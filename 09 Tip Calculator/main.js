function calculate() {
  let amount = $('#amount').val();
  let percentage = $('#percentage').val();
  let tip = amount * (percentage / 100);
  let total = Number(amount) + tip;

  $('#tip').val(tip.toFixed(2));
  $('#total').val(total.toFixed(2));

  return false;
}

$('#calculator').submit(calculate);

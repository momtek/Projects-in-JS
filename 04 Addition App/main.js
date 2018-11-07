let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
document.getElementById('num-1').innerHTML = num1;
document.getElementById('num-2').innerHTML = num2;

let answer = num1 + num2;

let checkAnswer = document.querySelector('input[type=text]');

let value = checkAnswer.value;
let btn = document.querySelector('input[type=button][value=check]');

btn.onclick = () => {
  value = checkAnswer.value;
  if (value == answer) {
    alert('You are correct');
  } else {
    alert('You are incorrect, the answer was ' + answer);
  }
  document.querySelector('input[type=text]').value = '';
  document.getElementById('num-1').innerHTML = '';
  document.getElementById('num-2').innerHTML = '';

  num1 = Math.floor(Math.random() * 10 + 1);
  num2 = Math.floor(Math.random() * 10 + 1);

  document.getElementById('num-1').innerHTML = num1;
  document.getElementById('num-2').innerHTML = num2;

  answer = num1 + num2;
};

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2');
let radius = canvas.height / 2;
context.translate(radius, radius);
radius = radius * 0.9;

function drawClock() {
  context.arc(0, 0, radius, 0, 2 * Math.PI);
  context.fillStyle = 'White';
  context.fill();
}

drawClock();

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  let grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = '#fff';
  ctx.fill();
  grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, '#fff');
  grad.addColorStop(1, '#333');

  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  let ang;
  let num;
  ctx.font = radius * 0.15 + 'px sans-serif';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  for (num = 1; num < 13; num++) {
    ang = (num * Math.PI) / 6;

    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  let now = new Date();
  let hour = now.getHours();
  let hourminute = now.getMinutes();
  let second = now.getSeconds();
  //hour
  hour = hour % 12;
  hour =
    (hour * Math.PI) / 6 +
    ((minute * Math.PI) / 6) * 60 +
    (second * Math.PI) / (360 * 60);
  drawHand(ctx, hour, radius * 0.5, radius * 0.07);
  //minutes
  minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
  drawHand(ctx, minute, radius * 0.8, radius * 0.07);
  //second
  second = (second * Math.PI) / 30;
  drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

drawClock();

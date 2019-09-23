import * as func from "./func";

export let ctx, canvas;

export function initialize() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
}

export function drawMain() {
  if (canvas.getContext) {
    ctx.clearRect(0, 0, 500, 500);
    const img = new Image();
    img.src = "./src/mg/back.png";
    img.onload = function() {
      ctx.drawImage(img, 0, 0, 500, 556);
      drawWheel();
    };
  }
}
let outsideRadius = 200;
let textRadius = 140;
let insideRadius = 2;
const shift = 250;

export function drawWheel() {
  if (canvas.getContext) {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;

    ctx.font = "bold 20px Helvetica, Arial";

    for (let i = 0; i < func.Team.get(); i++) {
      drawArc(i);
    }
    drawArrow();
  }
}

function drawArc(i) {
	const arc = 2 * Math.PI / func.Team.get();
  let angle = func.startangle.get() + i * arc;
  ctx.fillStyle = func.colors[i];

  ctx.beginPath();
  ctx.arc(shift, shift, outsideRadius, angle, angle + arc - 0.02, false);
  ctx.arc(shift, shift, insideRadius, angle + arc - 0.02, angle, true);
  ctx.stroke();
  ctx.fill();

  ctx.save();
  ctx.fillStyle = "white";
  ctx.translate(
    shift + Math.cos(angle + arc / 2) * textRadius,
    shift + Math.sin(angle + arc / 2) * textRadius
  );
  ctx.rotate(angle + arc / 2 + Math.PI / 2);
  let text = i + 1;
  ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
  ctx.restore();
}

function drawArrow() {
  //Arrow
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(shift + (outsideRadius + 35), shift - 10);
  ctx.lineTo(shift + (outsideRadius + 35), shift + 10);
  ctx.lineTo(shift + (outsideRadius - 5), shift + 10);
  ctx.lineTo(shift + (outsideRadius - 0), shift + 20);
  ctx.lineTo(shift + (outsideRadius - 30), shift + 0);
  ctx.lineTo(shift + (outsideRadius - 0), shift - 20);
  ctx.lineTo(shift + (outsideRadius - 5), shift - 10);
  ctx.lineTo(shift + (outsideRadius + 35), shift - 10);
  ctx.fill();
}

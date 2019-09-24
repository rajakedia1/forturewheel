import * as func from "./func";

export let ctx, canvas;

export function initialize() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
}

let outsideRadius = 200;
let textRadius = 130;
let insideRadius = 0;
const shift = 250;

export function drawMain() {
  if (canvas.getContext) {
    ctx.clearRect(0, 0, 500, func.canvasHeight);
    const img = new Image();
    img.src = "./src/mg/back.png";

    img.onload = function() {
      // ctx.fill();
      ctx.drawImage(img, 0, 0, 500, 556);
      
      drawWheel();
      
      
    };
    const img2 = new Image();
    img2.src = "./src/mg/ref.png";
    img2.onload = function() {
      ctx.drawImage(img2, 0, 556, 500, 700);
    };
  }
}

export function drawWheel() {
  if (canvas.getContext) {

    ctx.font = "bold 30px Helvetica, Arial";

    ctx.fillStyle = "white";
    for (let i = 0; i < func.Team.get(); i++) {
      drawArc(i);
    }
    drawArrow();
  }
}

function drawArc(i) {
  const nums = func.TeamId.get();
  const arc = (2 * Math.PI) / func.Team.get();
  let angle = func.startangle.get() + i * arc;
  ctx.fillStyle = func.colors[i];

  ctx.beginPath();
  let ma = angle + arc;
  ctx.arc(shift, shift, outsideRadius, angle, ma, false);
  ctx.arc(shift, shift, insideRadius, ma, angle, true);
  // ctx.stroke();
  ctx.fill();

  ctx.save();
  ctx.fillStyle = "white";
  ctx.translate(
    shift + Math.cos(angle + arc / 2) * textRadius,
    shift + Math.sin(angle + arc / 2) * textRadius
  );
  ctx.rotate(angle + arc / 2 + Math.PI / 2);
  let text = nums[i];
  ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
  ctx.restore();
}

function drawArrow() {
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

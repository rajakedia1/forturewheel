import * as func from "./func";

export let ctx, canvas;

// Initialize Canvas
export function initialize() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  
  backgroundWheelImage.src = "./src/mg/back.png";
  ReflectionImage.src = "./src/mg/ref.png";
  ArrowImage.src = "./src/mg/arrow.png";
}

// Spin Wheel Config
const outsideRadius = 200;
const textRadius = 130;
const insideRadius = 0;
const shift = 250;

// Image Used in canvas
const ArrowImage = new Image();
const backgroundWheelImage = new Image();
const ReflectionImage = new Image();

let backgroundWheelImageLoaded = false;
let ReflectionImageLoaded = false;
let ArrowImageLoaded = false;

// This function draws the Spin Wheel and ensures all the image are loaded only once.
export function drawMain() {
  if (canvas.getContext) {
    ctx.clearRect(0, 0, func.canvasWidth, func.canvasHeight);
    backgroundWheelImage.onload = function() {
      ctx.drawImage(backgroundWheelImage, 0, 0, 500, 556);
      drawWheel();
      backgroundWheelImageLoaded = true;
    };
    ReflectionImage.onload = function() {
      ctx.drawImage(ReflectionImage, 0, 556, 500, 700);
      ReflectionImageLoaded = true;
    };
    ArrowImage.onload = function() {
      ctx.drawImage(ArrowImage, 420, 224, 90, 54);
      ArrowImageLoaded = true;
    };
    ReflectionImageLoaded && ctx.drawImage(ReflectionImage, 0, 556, 500, 700);
    backgroundWheelImageLoaded &&
      ctx.drawImage(backgroundWheelImage, 0, 0, 500, 556);
    backgroundWheelImageLoaded && drawWheel();
  }
}

// To draw main spinning wheel which consist of arrow and arcs.
export function drawWheel() {
  if (canvas.getContext) {
    ctx.font = "bold 30px Helvetica, Arial";
    ctx.fillStyle = "white";
    for (let idx = 0; idx < func.Team.get(); idx++) {
      drawArc(idx);
    }
    drawArrow();
  }
}

// It draws individual arcs
function drawArc(i) {
  const nums = func.TeamId.get();
  const arc = (2 * Math.PI) / func.Team.get();
  let angle = func.startangle.get() + i * arc;
  ctx.fillStyle = func.colors[i];

  ctx.beginPath();
  let nextangle = angle + arc;
  ctx.arc(shift, shift, outsideRadius, angle, nextangle, false);
  ctx.arc(shift, shift, insideRadius, nextangle, angle, true);
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
  ArrowImageLoaded && ctx.drawImage(ArrowImage, 420, 224, 90, 54);
}

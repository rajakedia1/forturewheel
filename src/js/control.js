import * as func from "./func";
import { drawWheel, ctx } from "./canvas";

var afterSpin = null;

var currentTime = 0;
var TotalTime = 0;
var spinAngleStart = 0;


function rotateWheel() {
	currentTime += 30;
	
  if (currentTime >= TotalTime) {
    stopWheel();
    return;
  }
  var spinAngle =
		spinAngleStart - easeInOut(currentTime, 0, spinAngleStart, TotalTime);
		
	func.startangle.set(func.startangle.get() + (spinAngle * Math.PI) / 180);
	// console.log(currentTime, spinAngleStart, spinAngle, func.startangle.get(), func.startangle.get() / Math.PI *180);
  drawWheel();
  afterSpin = setTimeout(rotateWheel , 30);
}

function stopWheel() {
  clearTimeout(afterSpin);
	var degrees = (func.startangle.get() * 180) / Math.PI ;
	// console.log(spinAngleStart, func.startangle.get(), func.startangle.get() / Math.PI *180);
	var mainArc = 2 * Math.PI / func.Team.get();
  var mainArcd = (mainArc * 180) / Math.PI;
  var index = Math.floor((360 - (degrees % 360)) / mainArcd);
	ctx.save();
	ctx.fillStyle = "white";
  ctx.font = "bold 120px Helvetica, Arial";
	var text = func.TeamId.get()[index];
	func.CurrentTeam.set(text);
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 40);
  ctx.restore();
}

function easeInOut(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

export function startspin() {
  spinAngleStart = Math.random() * 10 + 10;
  currentTime = 0;
  TotalTime = 4000;
  rotateWheel();
}
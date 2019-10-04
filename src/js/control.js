/*  So, Basically to control the spin, we start the wheel with
with an initial spin angle and generate a series with angle getting less
according to easeInOut method. This makes the difference in angle starting
from min to max to min giving an elastic spin in wheel.
*/

import * as func from "./func";
import { drawWheel, ctx } from "./canvas";

let afterSpin = null;

let currentTime = 0;
let TotalTime = 3500;
let spinAngleStart = 0;

// Basic Rotating function to render wheel with initalangle i.e. spinAngleStart.
function rotateWheel() {
  currentTime += 30;
  // Stops wheel after given seconds i.e. TotalTime.
  if (currentTime >= TotalTime) {
    stopWheel();
    return;
  }
  //  calculating spinAngle based on initial angle - easeInOut method for difference to make wheel looks elastic
  const spinAngle = spinAngleStart - easeInOut(currentTime, 0, spinAngleStart, TotalTime);
  func.startangle.set(func.startangle.get() + (spinAngle * Math.PI) / 180);
  drawWheel();
  //  using RAF to control the spin
  afterSpin = requestAnimationFrame(rotateWheel);
}

// StopWheel function to render TeamId which is selected after wheel stops.
function stopWheel() {
  cancelAnimationFrame(afterSpin);
  func.spinstate.set(false);
  const degrees = (func.startangle.get() * 180) / Math.PI;

  // The index depends on the total rotation of the (wheel % 360) * Number of teams.
  const index = Math.floor(func.Team.get() * (1 - ((degrees % 360) / 360)));
  let text = func.TeamId.get()[index];
  func.CurrentTeam.set(text);
  ctx.save();
  ctx.fillStyle = "white";
  ctx.font = "bold 120px Helvetica, Arial";
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 40);
  ctx.restore();
}

// Basic easeInOut function from 
// http://www.gizma.com/easing/

function easeInOut(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

// Initiates Spinning
export function startspin() {
  func.spinstate.set(true);
  spinAngleStart = Math.random() * 10 + 10;
  currentTime = 0;
  rotateWheel();
}
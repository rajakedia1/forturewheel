import * as func from "./js/func";
import { startspin } from "./js/control";
import { drawMain, initialize } from "./js/canvas";
import { teamNumber } from "./js/form";

export const reload = function() {
  let nums = func.TeamId.get();
  // nums.inde
  if (nums.length < 1) return;
  nums.splice(nums.indexOf(func.CurrentTeam.get()), 1);
  func.Team.set(func.Team.get() - 1);
  main();
};

const startAnimation = function(inp) {
  if (!inp || !inp.value) return;
  document.querySelector("#form .content").classList.add("hide");
  setTimeout(() => {
    document.querySelector("#form .wrapper").style.transition = "400ms";
    document.querySelector("#form .wrapper").classList.add("fullwrapper");
    setTimeout(() => {
      teamNumber(inp);
    }, 400);
  }, 400);
};

export const main = function() {
  document.getElementById("form").innerHTML = null;
  const button = func.create("input", ["inpbutton"]);
  button.value = "Spin";
  button.type = "button";
  button.onclick = startspin;

  const reloadbutton = func.create("input", ["inpbutton"]);
  reloadbutton.value = "Go Again";
  reloadbutton.type = "button";
  reloadbutton.onclick = reload;

  const title = func.create("div", ["title"], "Spin the Wheel");

  const canvas = func.create("canvas");
  canvas.width = 500;
  canvas.height = func.canvasHeight;
  canvas.id = "canvas";

  const canvaswrapper = func.create("div", ["canvaswrapper"]);
  func.append(canvaswrapper, [canvas]);

  const buttonset = func.create("div", ["buttons"]);
  func.append(buttonset, [title, button, reloadbutton]);

  const el = document.getElementById("app");
  const wrapper = func.create("div", ["wrapper"]);
  func.append(wrapper, [canvaswrapper, buttonset]);

  const app = func.create("div", ["app"]);
  func.append(app, [wrapper]);
  func.append(el, [app]);
  initialize();

  drawMain();
};

const form = (function() {
  const inp = document.getElementById("teamInput");
  // var x = { value: 3 };
  // document.getElementById("teamSubmit").onclick = teamNumber(x);
  document.getElementById("teamSubmit").onclick = () => startAnimation(inp);
})();

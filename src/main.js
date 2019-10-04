import * as func from "./js/func";
import { startspin } from "./js/control";
import { drawMain, initialize } from "./js/canvas";
import { teamNumber } from "./js/form";


//  It just reload the Game when the Game finishes.

document.querySelector("#modal #teamSubmit").addEventListener("click", () => {
  document.location.reload();
});

//  Reload is used to Rerender the wheel after the spin wheel selects a number
//  So, we keep all the Teams shown stored in func.TeamId
//  func.TeamId gives list of Teams that are not selected yet.

export const reload = function() {
  // So, we wont allow user to reload the wheel until the wheel is spining.
  // So, We store spin in spinstate which tells if wheel is spinning or not.
  if (func.spinstate.get()) return;

  // Once, we reload function, we dont want user to again click on reload so here also we can keep 
  //  spinstate as true.
  func.spinstate.set(true);

  //  TeamId gives list of unselected Teams.
  let nums = func.TeamId.get();
  if (nums.length === 1) {
    document.getElementById("modal").style.display = "block";
    setTimeout(() => {
      document.getElementById("modal").classList.add("show");
    }, 0);
  }
  if (nums.length <= 1) return;
  nums.splice(nums.indexOf(func.CurrentTeam.get()), 1);
  func.Team.set(func.Team.get() - 1);
  main();
};

//  It Animates transition Between Initial Team Select Form and Main Game Page.
//  Although whole page is just a SPA.

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

//  Main renders The main Wheel component and buttons used in Main Page.

export const main = function() {
  // Setting form as null
  document.getElementById("form").innerHTML = null;

  // Creating Buttons [Spin, Go Again]
  const button = func.create("input", ["inpbutton"]);
  button.value = "Spin";
  button.type = "button";
  button.onclick = startspin;

  const reloadbutton = func.create("input", ["inpbutton"]);
  reloadbutton.value = "Go Again";
  reloadbutton.type = "button";
  reloadbutton.onclick = reload;
  reloadbutton.style.backgroundColor = "red";

  // Creating Title Text
  const title = func.create("div", ["title"], "Spin the Wheel");

  // Creating Canvas
  const canvas = func.create("canvas");
  canvas.width = func.canvasWidth;
  canvas.height = func.canvasHeight;
  canvas.id = "canvas";

  const canvaswrapper = func.create("div", ["canvaswrapper"]);
  func.append(canvaswrapper, [canvas]);

  // Creating buttonsets
  const buttonset = func.create("div", ["buttons"]);
  func.append(buttonset, [title, button, reloadbutton]);

  // Main App component
  const el = document.getElementById("app");
  const wrapper = func.create("div", ["wrapper"]);

  // Adding Canvas and Buttonset in App wrapper
  func.append(wrapper, [canvaswrapper, buttonset]);

  //  Clearing App when it rerenders the main function
  const app = func.create("div", ["app"]);
  func.append(app, [wrapper]);

  if (el.children.length > 0) {
    el.removeChild(el.children[0]);
  }

  // render main app
  func.append(el, [app]);

  // Initialize and draw Canvas
  initialize();
  drawMain();
};

// It handles the Initial Form component
const form = (function() {
  const input = document.querySelector("#form #teamInput");
  
  // Mocks
  // var x = { value: 7 };
  // document.getElementById("teamSubmit").onclick = teamNumber(x);

  document.querySelector("#form #teamSubmit").onclick = () => startAnimation(input);
})();

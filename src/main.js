import * as func from "./js/func";
import { startspin } from "./js/control";
import { drawMain, initialize } from "./js/canvas";
import { teamNumber } from "./js/form";

export const main = function() {
  document.getElementById("form").innerHTML = null;
  const button = func.create("input", ['inpbutton']);
  button.value = "spin";
  button.type = "button";
  button.onclick = startspin;

  const canvas = func.create("canvas");
  canvas.width = 500;
  canvas.height = 556;
  canvas.id = "canvas";

	const el = document.getElementById("app");
	const wrapper = func.create("div", ['wrapper']);
	func.append(wrapper, [canvas, button]);
	func.append(el, [wrapper]);
  initialize();

  drawMain();
};

const form = (function() {
  const inp = document.getElementById("teamInput");
  document.getElementById("teamSubmit").onclick = () => teamNumber(inp);
})();

export function create(ele, cl, val) {
  const a = document.createElement(ele);
  if (cl) cl.map(i => a.classList.add(i));
  if (val) cl.innerHTML = val;
  return a;
}

export function append(p, cl) {
  cl.map(i => p.appendChild(i));
}

export const colors = [
  "#B8D430",
  "#3AB745",
  "#029990",
  "#3501CB",
  "#2E2C75",
  "#673A7E",
  "#CC0071",
  "#F80120",
  "#F35B20",
  "#FB9A00",
  "#FFCC00",
  "#FEF200"
];

export const totalTeam = 12;

export let Teams = 8;

export let arc = 2 * Math.PI / Teams;
export let spinTimeout = null;

export let spinArcStart = 10;
export let spinTime = 0;
export let spinTimeTotal = 0;



function settergetter() {
	var value = 0;
	function get() {
		return value;
	}
	function set(v) {
		value = v;
	}
	return {
		get: get,
		set: set
	}
}

export const Team = new settergetter();

export const startangle = new settergetter();
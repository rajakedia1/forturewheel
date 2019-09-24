export function create(ele, cl, val) {
  const a = document.createElement(ele);
  if (cl) cl.map(i => a.classList.add(i));
  if (val) a.innerHTML = val;
  return a;
}

export function append(p, cl) {
  cl.map(i => p.appendChild(i));
}

export const colors2 = [
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

export const colors = [
  '#ec7324',
  '#be1f31',
  '#1da4db',
  '#4bb050',
  '#2e302f',
  '#91338b',
  '#695ea3',
  '#ec7324',
  '#be1f31',
  '#1da4db',
  '#4bb050',
  '#2e302f',
  '#91338b',
  '#695ea3'
];

export const totalTeam = 12;

export let Teams = 8;

export let arc = 2 * Math.PI / Teams;
export let spinTimeout = null;

export let spinArcStart = 10;
export let spinTime = 0;
export let spinTimeTotal = 0;
export const canvasHeight = 700;


function settergetter(inp) {
	var value = inp ? inp : 0;
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

export const TeamId = new settergetter();

export const CurrentTeam = new settergetter();

export const startangle = new settergetter();
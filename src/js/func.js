// It Creates a New DOM element with type elem, class as classlist, and value as val
export function create(elem, classlist, val) {
  const el = document.createElement(elem);
  if (classlist) classlist.map(cl => el.classList.add(cl));
  if (val) el.innerHTML = val;
  return el;
}

//  It appends Child Nodes into a Parent element,
export function append(parent, childNodeList) {
  childNodeList.map(childnode => parent.appendChild(childnode));
}

// List of Colors in the Wheel.
// Add more or Play with it if you want :p.

export const colors = [
  '#ec7324',
  '#be1f31',
  '#1da4db',
  '#4bb050',
  '#2e302f',
  '#91338b',
  '#695ea3',
  "#2E2C75",
  "#673A7E",
  "#CC0071",
  "#F80120",
  "#F35B20",
  "#FB9A00",
  "#FFCC00",
  "#FEF200"
];

// export const totalTeam = 12;

// export let Teams = 8;

// export let arc = 2 * Math.PI / Teams;
export let spinTimeout = null;

export let spinArcStart = 10;
export let spinTime = 0;
export let spinTimeTotal = 0;

export const canvasWidth = 600;
export const canvasHeight = 700;

//  A basic SetterGetter function
function settergetter(inp) {
	let value = inp ? inp : 0;
	function get() {
		return value;
	}
	function set(val) {
		value = val;
	}
	return {
		get: get,
		set: set
	}
}

// It stores if wheel can be reloaded or not.
// It can be understood as if Wheel is rotating or it already has been reloaded with new team,
//  then the user should not be able to reload again. At that time, it will give true.
export const spinstate = new settergetter(true);

//  Team stores the total number of teams in current game.
export const Team = new settergetter();

// TeamId Stores the active Team Id that are playing the Game.
export const TeamId = new settergetter();

// CurrentTeam stores the currentTeam that is selected when wheel stops running.
export const CurrentTeam = new settergetter();

//  It Stores the start angle of the wheel
export const startangle = new settergetter();